import md5 from 'md5'

export const ts = new Date().getTime()
export const key = process.env.PUBLIC_KEY
const stringToHash = ts + process.env.PRIVATE_KEY + key
export const hash = md5(stringToHash)