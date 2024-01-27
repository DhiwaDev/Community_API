const Member = require("../models/member");

// Add a new member to a community
exports.addMember = async (req, res) => {
const { community, user, role } = req.body;

  // Check if the authenticated user is a Community Admin
  const requester = await Member.findOne({ where: { user: req.user.id, community } });
  if (!requester || requester.role !== 'admin') {
    return res.status(403).json({ error: 'NOT_ALLOWED_ACCESS' });
  }

  // Add the new member to the community with the specified role
  const newMember = await Member.create({ community, user, role });

  res.status(201).json({ status: true, content: { data: newMember } });
};

// Remove a member from a community
exports.removeMember = async (req, res) => {
 const { id } = req.params;

  // Check if the authenticated user is a Community Admin or a Community Moderator
  const requester = await Member.findOne({ where: { user: req.user.id, community: id } });
  if (!requester || (requester.role !== 'admin' && requester.role !== 'moderator')) {
    return res.status(403).json({ error: 'NOT_ALLOWED_ACCESS' });
  }

  // Remove the member from the community
  const removedMember = await Member.destroy({ where: { id } });

  if (!removedMember) {
    return res.status(404).json({ error: 'Member not found' });
  }

  res.status(200).json({ status: true, message: 'Member removed successfully' });
};
