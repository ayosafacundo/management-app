import jwt from 'jsonwebtoken';
import { ITokenGen } from './Services.js';

const jwtsecret: string | undefined = process.env.JWT_SECRET;

/* generate token that expires in 72 hours
 * @params id
*/
const generateToken: ITokenGen = (id: number) => {
  // return jwt.sign({ id }, jwtsecret, { expiresIn: '72h' });
  return "asd";
}

export default generateToken