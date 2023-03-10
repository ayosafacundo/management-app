/** 
 *  Generate an Email from 2 sections separated by a dot.
 *  @param firstsection first section of the email
 *  @param lastsection last section of the email
 * 
 */
const generateEmail = ({ firstsection, lastsection }) => {
    return `${firstsection}.${lastsection}@claymoreuniversity.com`
}

export default { generateEmail };