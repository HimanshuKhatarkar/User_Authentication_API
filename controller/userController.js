import dotenv from 'dotenv';
dotenv.config()
import userModel from '../models/user.js'



class userController{
    static userRegistration = async(req, res) => {
        const{name, email, password, password_confirmation, tc} = req.body
        const user = await userModel.findOne({email:email})
        if(user){
            res.send({"status":"failed", "message": "E-mail already exists"})

        }else{
            if(name && email && password && password_confirmation && tc){
                if(password === password_confirmation){
                    try {
                        const doc = new userModel({
                            name:name,
                            email:email,
                            password:password,
                            tc:tc
                        })

                        await doc.save()
                        

                    } catch (error) {
                        console.log(error)
                        res.status(500).send({"status":"failed", "message": "Unable to register"})
                    }
                }else{
                    res.send({"status":"failed", "message": "password and confirm password doesn't match"})
                }


            }else{
                res.send({"status":"failed", "message": "All fields are required"})
 
            }
        }
    }
   
}


export default userController ;