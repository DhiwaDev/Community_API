const Role = require("../models/role");

// Create a new role
exports.createRole = async (req, res) => {
  const { name } = req.body;

  if (!name || name.length < 2) {
    return res.status(400).json({ error: "Name is required and should be at least 2 characters." });
  }

  try {
    const role = await Role.create({ name });
    return res.status(201).json(role);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// Get all roles
exports.getAllRoles = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const offset = (page - 1) * limit;

    const { count: total, rows: roles } = await Role.findAndCountAll({
      offset,
      limit,
    });

    const pages = Math.ceil(total / limit); // calculate the total number of pages

    return res.status(200).json({
      meta: {
        total,
        pages,
        page,
      },
      data: roles,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
