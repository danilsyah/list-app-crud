# list-app-crud

CRUD application examples (Create, Read, Update, Delete) use nodejs and express framework and use a MySQL database.

# Configuration Step NodeJS and Express Framework

1. open terminal / cmd in your PC
2. arahkan ke path directory project, dalam contoh kasus ini, nama folder project : list-app-crud.

- E:\Cloud Mega\bootcamp-progate\4_NodeJS\list-app-crud (master)

3. jalankan perintah berikut untuk membuat file package.json :

- npm init --yes

4. install paket npm, untuk menginstal express dan ejs.

- npm install express ejs

5. untuk menjalankan server (ketika ada perubahan coding maka server harus di restart secara manual, dan itu sangat merepotkan) :

- node app.js (restart manual)

6. membuat agar server restart otomatis setelah mengupdate file/coding

- jalankan : npm install nodemon
- buka file <b>package.json</b>
- cari kolom bernama <b>scripts</b> kemudian ganti isi nya dengan :
  - (windows) : "start": ".\\node_modules\\.bin\\nodemon app.js"
  - (macOS) : "start": "./node_modules/.bin/nodemon app.js"

7. Jalankan perintah berikut dan periksa apakah kamu bisa memulai server menggunakan nodemon.

- npm run start
