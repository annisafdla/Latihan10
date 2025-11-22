import User from '../models/user.model.js';

export const getAllUsers = (req, res) => {
  User.getAll((err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

export const getUserById = (req, res) => {
  const { id } = req.params;

  User.getById(id, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (results.length === 0) return res.status(404).json({ message: 'User tidak ditemukan' });

    res.json(results[0]);
  });
};

export const createUser = (req, res) => {
  const data = req.body;

  User.create(data, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });

    res.status(201).json({ id: result.insertId, ...data });
  });
};

export const updateUser = (req, res) => {
  const { id } = req.params;
  const data = req.body;

  User.update(id, data, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (result.affectedRows === 0) return res.status(404).json({ message: 'User tidak ditemukan' });

    res.json({ message: 'User berhasil diupdate' });
  });
};

export const deleteUser = (req, res) => {
  const { id } = req.params;

  User.delete(id, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (result.affectedRows === 0) return res.status(404).json({ message: 'User tidak ditemukan' });

    res.json({ message: 'User berhasil dihapus' });
  });
};
