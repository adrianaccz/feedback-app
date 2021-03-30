
const { find, create, update, deleteU, findById } = require('../helpers/crud');
const UserModel = require('../models/User')

exports.getUsers = async (req, res) => {
    try {
        const users = await find(UserModel);                         // find que esta creado en el crud  
        res.json(users); 
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.createUser = async (req, res) => {
    try {
        const user = await create(UserModel, req.body);     // {data es la informacion del body}("/url",  objeto)
        res.status(201).json(user);  
    } catch (error) {
        res.status(400).send(error);
    }                                          
};

exports.getUsersById = async (req, res) => {
    try {
        const { id } = req.params                                   // en el parametro params se encuentra el id
        const user = await findById(UserModel, id);       
        res.json(user); 
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.updateUser = async (req, res) => {
    try {
        const { id } = req.params
        const user = await update(UserModel, req.body, id);     
        res.status(200).json(user);  
    } catch (error) {
        res.status(400).send(error); 
    }                                          
};

exports.deleteUser = async (req, res) => {
    try {
        const { id } = req.params                                   // en el parametro params se encuentra el id
        const deletedUser = await deleteU(UserModel, id);       
        res.send(deletedUser); 
    } catch (error) {
        res.status(400).send(error);
    }
};