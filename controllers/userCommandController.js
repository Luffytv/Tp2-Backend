const User = require('../models/userModel');

exports.createUser = async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).json({ message: 'Usuario creado', user });
    } catch (error) {
        res.status(400).json({ message: 'Error al crear usuario', error });
    }
};

exports.updateUser = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findByIdAndUpdate(id, req.body, { new: true });
        if (!user) return res.status(404).json({ message: 'Usuario no encontrado' });
        res.json({ message: 'Usuario actualizado', user });
    } catch (error) {
        res.status(400).json({ message: 'Error al actualizar usuario', error });
    }
};

exports.deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findByIdAndDelete(id);
        if (!user) return res.status(404).json({ message: 'Usuario no encontrado' });
        res.json({ message: 'Usuario eliminado', user });
    } catch (error) {
        res.status(400).json({ message: 'Error al eliminar usuario', error });
    }
};