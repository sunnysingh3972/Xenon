import express from 'express'
const router = express.Router();
import userController from '../controllers/userController.js';
import checkUserAuth from '../middlewares/auth-middleware.js';

// Route level middleware - to protect unauthorized access
router.use('/changepassword', checkUserAuth)
router.use('/loggeduser', checkUserAuth)

// Public routes
router.post('/register', userController.userRegistration)
router.post('/login', userController.userLogin)
router.post('/message', userController.userMessage)

router.post('/send-reset-password-email', userController.sendUserPasswordResetEmail)

//Private routes
router.post('/changepassword', userController.changeUserPassword)
router.get('/loggeduser', userController.loggedUser)


export default router;