import Express from "express";
import userCtrl from "../controllers/userCtrl.js";

const router = Express.Router();

router.get('/get', userCtrl.getUser); //truyền query vào thì chỉ cần truyền ở req k cần đưa vào router

router.get('/details/:id', userCtrl.detailsUser);

router.get('/results', userCtrl.searchUser);

router.post('/create', userCtrl.createUser);

router.put('/update/:id', userCtrl.updateUser);

router.delete('/delete/:id', userCtrl.deleteUser);

router.post('/signin', userCtrl.signinUser);

router.post('/signup', userCtrl.signupUser);

router.post('/updateavatar', userCtrl.updateAvatar);

export default router