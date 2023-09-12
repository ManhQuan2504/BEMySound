import Express from "express";
import songCtrl from "../controllers/songCtrl.js";

const router = Express.Router();

router.get('/getall', songCtrl.getAllSong)

router.get('/detail', songCtrl.detailsSong)

router.post('/create', songCtrl.createSong)

router.put('/update/:id', songCtrl.updateSong)

router.delete('/delete/:id', songCtrl.deleteSong)

router.post('/signin', songCtrl.signinSong)

router.post('/signup', songCtrl.signupSong)

export default router