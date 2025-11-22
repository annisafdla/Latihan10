import Product from "../models/products.model.js";

// GET ALL
export const getAllProducts = (req, res) => {
  Product.getAll((err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json(result);
  });
};

// GET BY ID
export const getProductById = (req, res) => {
  Product.getById(req.params.id, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json(result);
  });
};

// CREATE
export const createProduct = (req, res) => {
  Product.create(req.body, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({
      message: "Produk berhasil ditambahkan",
      id: result.insertId
    });
  });
};

// UPDATE
export const updateProduct = (req, res) => {
  Product.update(req.params.id, req.body, (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: "Produk berhasil diupdate" });
  });
};

// DELETE
export const deleteProduct = (req, res) => {
  Product.delete(req.params.id, (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: "Produk berhasil dihapus" });
  });
};
