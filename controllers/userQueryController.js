const User = require('../models/userModel');

exports.getUsers = async (req, res) => {
    try {
        const users = await User.find().sort({ createdAt: -1 }); // Ordenar por fecha de creación
        res.json(users);
    } catch (error) {
        res.status(400).json({ message: 'Error al obtener usuarios', error });
    }
};

exports.getUserById = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findById(id);
        if (!user) return res.status(404).json({ message: 'Usuario no encontrado' });
        res.json(user);
    } catch (error) {
        res.status(400).json({ message: 'Error al obtener usuario', error });
    }
};