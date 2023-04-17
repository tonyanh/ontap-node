import User from "../models/user"
import { signUpSchema, signInSchema } from "../validations/auth"
import bcryptjs from "bcryptjs"
import jwt  from "jsonwebtoken"
export const signUp = async(req, res) => {
    try {
        const { email , password} = req.body
        const { error } = signUpSchema.validate(req.body)
        if(error) {
            return res.status(400).json({
                message: error.details[0].message,
                datas: []
            })
        }
        const checkEmail = await User.findOne({ email });
        if(checkEmail) {
            return res.status(400).json({
                message: "Email da ton tai!"
            })
        }
        const hashedPassword = await bcryptjs.hash(password, 10);
        
        const user = await User.create({
            ...req.body,
            password: hashedPassword,
        });
        user.password = undefined
        return res.status(200).json({
            message: "Dang ky thanh cong",
            datas: user
        })
    } catch (error) {
        return res.status(500).json({
            message: "Loi server"
        })
    }
}

export const signIn = async(req, res) => {
    try {
        const { email , password} = req.body
        const { error } = signInSchema.validate(req.body)
        if(error) {
            return res.status(400).json({
                message: error.details[0].message,
                datas: []
            })
        }
        const checkEmail = await User.findOne({ email });
        if(!checkEmail) {
            return res.status(400).json({
                message: "Email khong dung!"
            })
        }

        const checkPassword = await bcryptjs.compare(password, checkEmail.password)
        if(!checkPassword) {
            return res.status(400).json({
                message: "Mat khau khong dung!"
            })
        }

        const token = jwt.sign({id: checkEmail._id}, "svfpoly", {expiresIn: "1d"})

        checkEmail.password = undefined
        return res.status(200).json({
            message: "Dang nhap thanh cong",
            datas: checkEmail,
            accessToken: token,
        })
    } catch (error) {
        return res.status(500).json({
            message: "Loi server"
        })
    }
}