const jwtsecret = process.env.JWT_SECRET;
/* generate token that expires in 72 hours
 * @params id
*/
const generateToken = (id) => {
    // return jwt.sign({ id }, jwtsecret, { expiresIn: '72h' });
    return "asd";
};
export default generateToken;
