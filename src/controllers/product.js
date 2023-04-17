import Product from "../models/product"
import productSchema from "../validations/product"

export const get = async(req, res) => {
    try {
        const products = await Product.find();
        if(products.length === 0) {
            return res.status(400).json({
                message: "Khong tim thay san pham"
            })
        }
        return res.status(200).json({
            message: "Tim san pham thanh cong",
            datas: products
        })
    } catch (error) {
        return res.status(500).json({
            message: "Loi server"
        })
    }
}

export const getDetail = async(req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if(!product) {
            return res.status(400).json({
                message: "Khong tim thay san pham"
            })
        }
        return res.status(200).json({
            message: "Tim san pham thanh cong",
            datas: product
        })
    } catch (error) {
        return res.status(500).json({
            message: "Loi server"
        })
    }
}

export const create = async(req, res) => {
    try {
        const { error } = productSchema.validate(req.body)
        if(error) {
            return res.status(400).json({
                message: error.details[0].message,
                datas: []
            })
        }
        const product = await Product.create(req.body);
        if(!product) {
            return res.status(400).json({
                message: "Them san pham khong thanh cong"
            })
        }
        return res.status(200).json({
            message: "Them san pham thanh cong",
            datas: product
        })
    } catch (error) {
        return res.status(500).json({
            message: "Loi server"
        })
    }
}

export const update = async(req, res) => {
    try {
        const { error } = productSchema.validate(req.body)
        if(error) {
            return res.status(400).json({
                message: error.details[0].message,
                datas: []
            })
        }
        const product = await Product.findByIdAndUpdate(req.params.id, req.body);
        if(!product) {
            return res.status(400).json({
                message: "Update san pham khong thanh cong"
            })
        }
        return res.status(200).json({
            message: "Update san pham thanh cong",
            datas: product
        })
    } catch (error) {
        return res.status(500).json({
            message: "Loi server"
        })
    }
}

export const remove = async(req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        if(!product) {
            return res.status(400).json({
                message: "Delete san pham khong thanh cong"
            })
        }
        return res.status(200).json({
            message: "Delete san pham thanh cong",
            datas: product
        })
    } catch (error) {
        return res.status(500).json({
            message: "Loi server"
        })
    }
}