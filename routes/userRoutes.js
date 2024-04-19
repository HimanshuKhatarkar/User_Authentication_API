import express from 'express'
const  router = express.Router();
import UserController from '../controller/userController.js';

// Route level middleware


// public route
router.post('/register', UserController.userRegistration)



// protected route


export default router;