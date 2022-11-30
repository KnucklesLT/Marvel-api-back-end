import axios from "axios";
import md5 from 'md5'

const ts = new Date().getTime()
const stringToHash = ts + process.env.PRIVATE_KEY + process.env.PUBLIC_KEY 
const hash = md5(stringToHash)

const index = async (req,res) => {
  try {
    axios.get(`http://gateway.marvel.com/v1/public/characters?limit=100&apikey=${process.env.PUBLIC_KEY}&ts=${ts}&hash=${hash}`,
    {
        headers: {
            'Accept-Encoding': 'application/json',
        }
    })
    .then( response => {
      console.log(response.data.data.results);
      res.json(response.data.data.results)
    })
  } catch (error) {
    console.log(error)
  }
}

export {
  index
}