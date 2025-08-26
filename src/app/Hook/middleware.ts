import { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';

export const validateAdminJWT = (handler: Function) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const token = req.headers.authorization?.split(' ')[1]; 
      if (!token) {
        return res.status(401).json({ message: 'Unauthorized. Token missing.' });
      }

      // Verify the token
      const decoded = jwt.verify(token, process.env.JWT_SECRET!) as {
        id: string;
        role: string;
      };

      // Check if the user is an admin
      if (decoded.role !== 'admin') {
        return res.status(403).json({ message: 'Access denied. Admins only.' });
      }

      // Proceed to the next handler
      return handler(req, res);
    } catch (error) {
      return res.status(403).json({ message: 'Invalid or expired token.' });
    }
  };
};
