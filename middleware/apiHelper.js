import md5 from 'md5'

export const ts = new Date().getTime()
const stringToHash = ts + process.env.PRIVATE_KEY + process.env.PUBLIC_KEY 
export const hash = md5(stringToHash)