import axios from "axios";
import { ts, key, hash } from "../middleware/apiHelper.js";

const index = async (req,res) => {
  try {
    axios.get(`http://gateway.marvel.com/v1/public/characters?limit=100&apikey=${key}&ts=${ts}&hash=${hash}`,
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