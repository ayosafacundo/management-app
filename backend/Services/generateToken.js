import jwt from 'jsonwebtoken'

/* generate token that expires in 72 hours
 * @params id
*/
function generateToken(id) {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '72h' })
}

export default generateToken