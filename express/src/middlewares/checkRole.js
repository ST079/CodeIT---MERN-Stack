const checkRole = (...roles) => {
  return (req, res, next) => {
    const hasRole = req.user.roles.some((role) => {
      return roles.includes(role);
    });

    if (hasRole) {
      return next();
    }

    res.status(403).json({ message: "Access Denied." });
  };
};

export default checkRole;