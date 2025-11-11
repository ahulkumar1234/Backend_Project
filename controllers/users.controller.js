const express = require('express');
const user = require('../models/users.model');
const bcrypt = require('bcryptjs');
const generateToken = require('../utils/generateToken')

const getAllUser = async (req, res) => {
    try {
        let getUsers = [];
        getUsers = await user.find();
        return res
            .status(200)
            .json({
                success: true,
                message: "all users",
                data: getUsers,
            });

    } catch (error) {
        console.log(error.message)
        return res.status(500).json({
            success: false,
            message: "failed to fetch all users"
        })
    }
}

const createNewUser = async (req, res) => {
    try {
        console.log(req.body);
        const { name, email, password } = req.body;

        // empty field check
        if (!name || !email || !password) {
            return res.status(400).json({
                success: false,
                message: "all fields to be field",
            });
        }

        // check already exist user
        const findExistingUser = await user.findOne({ email });
        console.log(findExistingUser);
        if (findExistingUser) {
            return res.status(409).json({
                success: false,
                message: "User already exists",
            });
        }

        // hashing password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // create new user => DB operation
        const newUser = await user.create({
            name: name,
            email: email,
            password: hashedPassword,
        })

        //generateToken code
        const accessToken = generateToken(newUser._id);

        res.cookie('accessToken', accessToken, {
            httpOnly: true, // this doesnot allow JS to acces cookies
            maxAge: 1000 * 60 * 60 * 24, // in miliseconds
            secure: false, //true if using HTTPS
        });


        return res.status(201).json({
            success: true,
            message: "User Created succesfully",
            user: newUser
        })

    } catch (error) {
        console.log(error.message)
        return res.status(500)
            .json({
                success: false,
                message: "failed to create user"
            });
    }
}

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400)
                .json({
                    success: false,
                    message: "all fields are required",
                })
        }
        const findExistingUser = await user.findOne({ email });
        console.log(findExistingUser);
        if (!findExistingUser) {
            return res.status(404).json({
                success: false,
                message: "User with email not found",
            });
        }
        const verifyPassword = await bcrypt.compare(password, findExistingUser.password);
        if (!verifyPassword) {
            return res.status(400).json({
                success: false,
                message: "wrong password",
            });
        }

        //generateToken code
        const accessToken = generateToken(findExistingUser._id);

        res.cookie('accessToken', accessToken, {
            httpOnly: true, // this doesnot allow JS to acces cookies
            maxAge: 1000 * 60 * 60 * 24, // in miliseconds
            secure: false, //true if using HTTPS
        });

        return res.status(200).json({
            success: true,
            message: "Login Succesfully",
            data: findExistingUser,
        })

    } catch (error) {
        console.log(error.message)
        return res.status(500)
            .json({
                success: false,
                message: "failed to login user"
            });
    }
}

const updateUser = async (req, res) => {

    const { id } = req.USER;

    const findUser = await user.findById(id);

    if (!findUser) {
        res.status(404).json({
            success: false,
            message: "user not found"
        })
    }

}
const deleteUser = async (req, res) => {

    try {
        const { id } = req.USER;

        const findUser = await user.findById(id);

        if (!findUser) {
            res.status(404).json({
                success: false,
                message: "user not found",
            })
        }

        res.clearCookie('accessToken', {
            httpOnly: true,
            maxAge: 1000 * 60 * 60 * 24,
            secure: false,
        });

        await user.deleteOne({ _id: id });
        res.status(200).json({
            success: true,
            message: "user deleted succesfully",
        })
    } catch (error) {

        console.log(error.message)
    }

}


module.exports = { getAllUser, createNewUser, loginUser, updateUser, deleteUser };

// if we exports multiple things then we write like this
// module.exports = {getAllUser,createNewUser};


