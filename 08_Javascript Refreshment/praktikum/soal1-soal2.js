var a = 5;
let b = "kampus merdeka";
let nama = "Budi";
let terdaftar = false;
let terdaftar_arr = [a,b,nama,terdaftar];

function perkenalan(){
    let asal = "indonesia";
    return console.log("perkenalkan nama saya "+nama+", nomor urut "+a+", sekarang sedang mengikuti "+b+". Berasal dari "+asal+".");
}
/* jawaban soal d */

/* jawaban soal b */
terdaftar = !terdaftar;
if (terdaftar){
     console.log(nama+" terdaftar sebagai kegiatan kampus merdeka");
}
/* jawaban soal b */

/* jawaban soal a */
let array = terdaftar_arr[2];
console.log('array = '+array);
/* jawaban soal a */

a = b;
nama = b;
console.log("a adalah "+a);
console.log("b adalah "+b);

/* jawaban soal c */
perkenalan();
/* jawaban soal c */

/* jawaban soal d */



/* soal 2 */
        /* a */ // karena menggunakan operator === tidak mengubah nilai boolean yang terdapat pada variable terdaftar. sehingga, untuk mengubahnya perlu mengubah nilai booleannya. seperti berikan tanda !(not) pada variable, seperti !terdaftar. sebelumnya diketahui bahwa variable terdaftar memiliki nilai boolean false, maka bila (not)terdaftar atau tidak false (maka true), akan melakukan command console.log. dapat dibuktikan dengan bila console.log variable terdaftar==true, tetap akan memiliki boolean false. akan tetapi bila terdaftar = !terdaftar dan console.log variable terdaftar, akan menghasilkan boolean true.
        /* b */ // dikarenakan menggunakan tipe data const, yang mana nilai variable tersebut tidak dapat diubah-ubah. maka perlu mengganti tipe datanya seperti menggunakan let.
        /* c */ // tetap tidak dapat dieksekusi, dikarenakan variable asal merupakan variable local, atau terdapat di dalam suatu function.
/* soal 2 */