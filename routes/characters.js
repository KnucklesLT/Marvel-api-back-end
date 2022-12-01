import { Router } from 'express'
import * as charactersCtrl from '../controllers/characters.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.get('/', charactersCtrl.index)

export { router }