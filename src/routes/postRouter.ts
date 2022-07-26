import { Router } from "express";
import postController from "../controller/postController"


const router = Router()
// router is code that runs our routes. 

router.post('/postData',postController.postJob)//postController is a file name
router.get('/getData',postController.getJob)//giving path to router by matching this path we can perform operations
router.get('/getData/:id',postController.getDataId)
router.put('/updateData/:id',postController.updateJob)
router.delete('/deleteData/:id',postController.deleteJob)


export default router

