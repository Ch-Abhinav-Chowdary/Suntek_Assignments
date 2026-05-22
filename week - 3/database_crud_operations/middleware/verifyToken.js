import jwt from 'jsonwebtoken';

export const  verifyToken = (req, res, next)=>{
    //token verification logic

    //1. Get token from req
    let signedToken = req.cookies.token;

    if(!signedToken) return res.status(401).json({ message: "Access denied. No token provided" });
    //2. Verify the token

    try {
        let decodedToken = jwt.verify(signedToken, 'secretkey');
        if(!decodedToken) return res.status(400).json({ message: "Invalid token" });
    } catch(err) {
        return res.status(400).json({ message: "Token Expired" });
    }

    //3. if token is valid, pass the request to next handler
    next();
}