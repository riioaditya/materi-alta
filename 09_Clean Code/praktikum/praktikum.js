/* SOAL 1 */

/* class user{
    var id;
    var username;
    var password;
}

class userservice{
    user[] users = [];
    user[] getallusers(){
        return users;
    }
}

user getuserbyid(userid){
    return users.filter(userid);
} */

/* terdapat 5 kekurangan, yakni penulisan class (2 kekurangan), dan penamaan variable yang tersambung sehingga sulit untuk dibaca (3 kekurangan).
penamaan class seharusnya diawali dengan huruf besar, contoh : class User, class UserService.
penamaan getallusers juga sebaiknya ditulis getAllUsers, getuserbyid dan userid sebaiknya ditulis getUserId dan userId. 
Alasannya karena, bila ditulis kecil semua, akan kesulitan dalam pembacaan. Serta penamaan class diawali dengan huruf besar, agar menegaskan */

/* SOAL 1 */


/* SOAL 2 */

class Kendaraan{
    kecepatanPerJam = 0;
}

class Mobil extends Kendaraan{

    tambahKecepatan(kecepatanSaatIni){
        this.kecepatanPerJam += kecepatanSaatIni;
    }
    
    berjalan(kecepatanSaatIni){
        tambahKecepatan(10);
    }

    melambat(kecepatanSaatIni){
        kecepatanSaatIni -= this.kecepatanPerJam;
    }
    
}

function main(){
    mobilCepat = new Mobil(10);
    mobilCepat.berjalan();

    mobilMelamban = new Mobil(10);
    mobilMelamban.melambat();
}

/* SOAL 2 */