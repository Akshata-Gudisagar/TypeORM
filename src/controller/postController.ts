import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { jobDetail } from "../entity/JobDetail";
class postController {//created class file
    static postJob = async (req: Request, res: Response) => {
        const newPost = {
            job_title:req.body.job_title,
            job_discription:req.body.job_discription,
            job_category_id:req.body.job_category_id,
            company_id:req.body.company_id,
            job_type:req.body. job_type,
            job_salary:req.body.job_salary,
            job_location:req.body. job_location,
            job_posting_date:req.body.job_posting_date,
            last_application_date:req.body. last_application_date,
            no_of_vacancy:req.body.no_of_vacancy,
            job_status:req.body.job_status

        };
        console.log(newPost)
        //getRepository=used to get its own built-in repository
        const post = getRepository(jobDetail).create(newPost)//taking post and creating newpost
        const result = await getRepository(jobDetail).save(post)//we are taking data and saving in post
        return res.json(result)
    }
//GET METHOD
    static getJob = async (req:Request,res:Response) =>{
        const result = await getRepository(jobDetail).find()
        return res.json(result)
    }
    //used to get data by particular id
    static getDataId = async (req:Request,res:Response) =>{
        const id = {where: {id: parseInt(req.params.id, 10)}}
        //id is converted to integer by paseint and returning the result
        const result = await getRepository(jobDetail).findOne(id);//finding particular id my matching id
        return res.json(result)
    }
    static updateJob = async (req:Request,res:Response) =>{
        const id = {where: {id: parseInt(req.params.id, 10)}}//10=used to convert to no
        const postData = await getRepository(jobDetail).findOne(id)
        if(postData){
            getRepository(jobDetail).merge(postData,req.body)//used to match the postdata and req.body data
            const result = await getRepository(jobDetail).save(postData);
            return res.json(result)
        }
    }
    static deleteJob = async (req:Request,res:Response) =>{
        const result = await getRepository(jobDetail).delete(req.params.id);
        return res.json(result)
    }
}

export default postController//without exporting we cant access JobController class