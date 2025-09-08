import jwt from "jsonwebtoken";

const userAuth = async (req, res, next) => {
  const token =
    req.cookies.token || req.headers.authorization?.split(" ")[1]; // ✅ token header se bhi lo

  if (!token) {
    return res
      .status(401)
      .json({ success: false, message: "Unauthorized user" });
  }

  try {
    const tokendecode = jwt.verify(token, process.env.SECRET_KEY);

    if (tokendecode.id) {
      req.user = { id: tokendecode.id }; // ✅ yahan req.user set karo
      next();
    } else {
      return res
        .status(401)
        .json({ success: false, message: "Invalid token payload" });
    }
  } catch (err) {
    res
      .status(401)
      .json({ success: false, message: "Token invalid: " + err.message });
  }
};

export default userAuth;
