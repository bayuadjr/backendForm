import mongoose from "mongoose";

const connection = () => {
    mongoose.connect('mongodb://localhost:27017', {
        dbName: 'FormLaporan'
    })

    const conn = mongoose.connection
    conn.on('error', console.error.bind(console, 'Connection Error :'))
    conn.once('open', () => {
        console.log('Connected To MongoDB')
    })
}

export default connection

const sql = require('mssql');

// Konfigurasi koneksi ke database
const config = {
    user: 'user_name',
    password: 'password',
    server: 'server_name',
    database: 'database_name'
};

// Buat koneksi ke database
sql.connect(config, function(err) {
    if (err) console.log(err);

    // Jalankan query
    let request = new sql.Request();
    request.query('SELECT * FROM tabel_nama', function(err, data) {
        if (err) console.log(err);
        console.log(data);

        // Tutup koneksi ke database
        sql.close();
    });
});
