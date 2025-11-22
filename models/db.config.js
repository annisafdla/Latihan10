import mysql from 'mysql2';

// Konfigurasi koneksi database
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', // sesuaikan password MySQL kamu
  database: 'dbpraktikum8'
});

// Tes koneksi
db.connect(err => {
  if (err) {
    console.error('Koneksi database gagal:', err);
  } else {
    console.log('Terhubung ke database MySQL');
  }
});

export default db;
