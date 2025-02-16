const express = require('express');

const userController = require('./../controllers/userController');
const authController = require('./../controllers/authController');

const userRouter = express.Router();

userRouter.post('/signup', authController.signup);
userRouter.post('/login', authController.login);

userRouter.post('/forgotPassword', authController.forgotPassword);
userRouter.patch('/resetPassword/:token', authController.resetPassword);

userRouter
  .route('/')
  .get(userController.getAllUsers)
  .post(userController.createUser);

userRouter.route('/user-stats').get(userController.getUSerStats);

userRouter.patch(
  '/updatePassword',
  authController.protect,
  authController.updatePassword,
);

userRouter.patch('/updateMe', authController.protect, userController.updateMe);

userRouter
  .route('/:id')
  .get(userController.getUser)
  // .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = userRouter;
