const jwt = require("jsonwebtoken");

const authMiddleware = (roles = []) => (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) return res.status(401).json({ msg: "Access Denied" });

  try {
    const decoded = jwt.verify(token.replace("Bearer ", ""), process.env.JWT_SECRET);
    
    // Check role
    if (!roles.includes(decoded.role)) {
      return res.status(403).json({ msg: "Unauthorized" });
    }

    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ msg: "Invalid Token" });
  }
};

module.exports = authMiddleware;
