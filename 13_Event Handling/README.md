# Event Handling
## RESUME
Dalam materi ini kita mempelajari :
 1. State,
 2. Stateful & Stateless Component,
 3. Event Handling.

 ### State
 State  adalah data private. sebuah component. Data ini hanya tersedia untuk component tersebut dan tidak bisa diakses dari component lain.
 Terdapat 4 point pada State, yakni :

 1. Data yang bisa dimodifikasi menggunakan setState 
 2. Setiap terjadi modifikasi akan terjadi render ulang 
 3. Bersifat Asynchronous
 4. Dipakai dalam class

### Stateful & Stateless Component
Terdapat perbedaan antara komponen stateful dan komponen stateless, yakni :
  * Stateless Component <br />
    * Tidak tahu tentang aplikasi<br />
    * Tidak melakukan data fetching (pengambilan data)<br />
    * Tujuan utamanya adalah visualisasi<br />
    * Dapat digunakan kembali<br />
    * Hanya berkomunikasi dengan induk langsungnya<br />
<br />
 
 * Stateful Component <br />
    * Mengerti tentang aplikasi <br />
    * Melakukan data fetching (pengambilan data) <br />
    * Berinteraksi dengan aplikasi <br />
    * Tidak dapat digunakan kembali <br />
    * Meneruskan status dan data ke anak-anaknya <br />



### Event
 Handling Event  adalah suatu metode untuk menangani sebuah event / aksi yang diberikan pengguna kepada suatu komponen.<br/><br/>
 Event adalah suatu peristiwa yang dipicu oleh pengguna pada suatu komponen, misalnya tombol ditekan.<br/>
 Terdapat beberapa contoh list Event, yakni :
 1. Clipboard Events  (Promise terpenuhi)
 2. Form Events  (onChange, onSubmit)
 3. Mouse Events  (onClick, onDoubleClick, onMouseOver)
 4. Generic Events  (onError, onLoad)

## Task
### Membuat To Do List dengan kriteria yang terdapat pada soal