import { Router } from "express";
import { addFollower, getAllUsers, getFollowers, loginUser, registerUser } from "../controllers/userController";


const user_router = Router();

user_router.post('/register', registerUser)
user_router.post('/login', loginUser)
user_router.get('/all', getAllUsers)
user_router.post('/follow', addFollower)
user_router.get('/:user_id/followers', getFollowers);

export default user_router;