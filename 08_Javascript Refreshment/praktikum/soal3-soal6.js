/* soal 3 */

const foo = ['Budi','Sita','Ayu'];

const a = foo[0];
const b = foo[1];
const c = foo[2];

console.log("a = ["+a+"]");
console.log("b = ["+b+"]");
console.log("c = ["+c+"]");
/* soal 3 */


/* soal 4 */

let bdays = ['10-17','05-19','20-19'];
console.log("sebelum diubah :");
console.log(bdays);
bdays[0]='10/17';
bdays.splice(1,1,'05/19');
bdays[2]='20/19';
console.log("sesudah diubah :");
console.log(bdays);

/* soal 4 */


/* soal 5 */
console.log('soal 5');
let value=[1,2,3,4,5,6];
let doubleAngka = value.map(x=>x*2);
console.log(doubleAngka);

/* soal 5 */

/* soal 6 */
console.log('soal 6');
let arr = [1.5,2.56,5.1,12.33];
let pembulatanKeAtas = arr.map(z=>Math.round(z));
console.log(pembulatanKeAtas);

/* soal 6 */