const { Community } = require("../models");
const { User } = require("../models");
const jwt = require("jsonwebtoken");
const slugify = require("slugify");


// Create a community
exports.createCommunity = async (req, res) => {
  try {
    // Get token from the headers
    const token = req.headers.authorization.split(' ')[1];

    // Verify the token
    const decoded = jwt.verify(token, 'your-secret-key');

    // Get user details
    const user = await User.findOne({ where: { id: decoded.id } });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Get the name from the request body
    const { name } = req.body;

    // Validate the name
    if (!name || name.length < 2) {
      return res.status(400).json({ error: "Name is required and should be at least 2 characters." });
    }

    // Create a slug from the name
    const slug = slugify(name, { lower: true });

    // Create the community
    const community = await Community.create({ name, slug, owner: user.id });

    return res.status(201).json(community);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// Get all communities
exports.getAllCommunities = async (req, res) => {
  try {
    const limit = 10; // number of records per page
    const page = req.query.page || 1; // page number
    const offset = (page - 1) * limit;

    const communities = await Community.findAndCountAll({
      limit,
      offset,
      include: [
        {
          model: User,
          as: "Owner",
          attributes: ["id", "name"], // only get the id and name of the owner
        },
      ],
    });

    const totalPages = Math.ceil(communities.count / limit);

    const response = {
      status: true,
      content: {
        meta: {
          total: communities.count,
          pages: totalPages,
          page: parseInt(page),
        },
        data: communities.rows,
      },
    };

    res.json(response);
  } catch (error) {
    res.status(500).json({ status: false, error: error.message });
  }
};


