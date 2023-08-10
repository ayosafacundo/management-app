import jwt from 'jsonwebtoken';
import { ITokenGen } from './Services';

const jwtsecret: string | undefined = process.env.JWT_SECRET;

/* generate token that expires in 72 hours
 * @params id
*/
const generateToken: ITokenGen = (id: number) => {
  return jwt.sign({ id }, jwtsecret, { expiresIn: '72h' });
}

export default generateToken