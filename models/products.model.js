import db from "./db.config.js";

const Product = {
  // get all
  getAll: (callback) => {
    db.query("SELECT * FROM products", callback);
  },

  // get by id
  getById: (id, callback) => {
    db.query("SELECT * FROM products WHERE id = ?", [id], callback);
  },

  // create
  create: (data, callback) => {
    db.query(
      "INSERT INTO products (nama, deskripsi, harga, foto) VALUES (?, ?, ?, ?)",
      [data.nama, data.deskripsi, data.harga, data.foto],
      callback
    );
  },

  // update
  update: (id, data, callback) => {
    db.query(
      "UPDATE products SET nama=?, deskripsi=?, harga=?, foto=? WHERE id=?",
      [data.nama, data.deskripsi, data.harga, data.foto, id],
      callback
    );
  },

  // delete
  delete: (id, callback) => {
    db.query("DELETE FROM products WHERE id=?", [id], callback);
  }
};

export default Product;
