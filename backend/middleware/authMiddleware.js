import jwt from "jsonwebtoken";

const userAuth = async (req, res, next) => {
  try {
    let token = null;

    // 1️⃣ Check for token in Authorization header
    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer ")) {
      token = req.headers.authorization.split(" ")[1];
    }

    // 2️⃣ Fallback to cookies (optional)
    if (!token && req.cookies?.token) {
      token = req.cookies.token;
    }

    if (!token) {
      return res.status(401).json({ success: false, message: "Unauthorized: No token provided" });
    }

    // 3️⃣ Verify token
    const decoded = jwt.verify(token, process.env.SECRET_KEY);

    // 4️⃣ Attach user info to request
    req.user = { userId: decoded.id };

    next();
  } catch (err) {
    console.error("Auth error:", err.message);
    res.status(401).json({ success: false, message: "Unauthorized: " + err.message });
  }
};

export default userAuth;
