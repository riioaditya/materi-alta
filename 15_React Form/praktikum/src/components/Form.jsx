import React, { useState, useRef, useEffect, useCallback } from "react";

const Form = () => {
  const baseData = {
    nama: "",
    email: "",
    phone: "",
    background: "",
    program: "",
    harapan: "",
  };

  const baseError = {
    nama: "",
    email: "",
    phone: "",
    background : "",
    program : ""
  };

  const suratKesungguhan = useRef(null);
  const [data, setData] = useState(baseData);
  const [errorMassage, setErrorMassage] = useState(baseError);

  const nameRegex = /^[a-zA-Z_]+( [a-zA-Z_]+)*$/gm;
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const phoneRegex = /^[\d]{9,14}$/;

  
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
    if ([e.target.name] == "nama") {
      console.log([e.target.name])
      if (nameRegex.test(e.target.value)) {
        setErrorMassage("");
        console.log([e.target.name] + " sudah terisi")
      } else {
        setErrorMassage({ nama: "nama lengkap harus berupa huruf" });
      }
    }

    if (e.target.name == "email") {
      //console.log(e.target.name);
     // console.log(emailRegex);
      if (emailRegex.test(e.target.value)) {
        console.log([e.target.name])
        setErrorMassage("");
        console.log([e.target.name] + " sudah terisi")

      } else {
        console.log(emailRegex.test(e.target.value));
        setErrorMassage({ email: "email harus terisi lengkap" });
      }
    }

    if ([e.target.name] == "phone") {
      /* console.log("test");
      console.log(phoneRegex.test(e.target.value)); */
      if (phoneRegex.test(e.target.value)) {
        setErrorMassage("");
        console.log([e.target.name] + " sudah terisi")

      }
      else {
        setErrorMassage({ phone: "no.hp tidak sesuai, harus berupa angka" });
      }
    }
  };

  const handleBackground = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })

    if(e.target.name == "background"){
      console.log(e.target.name + " sudah terisi");
    }
    else{
      console.log(e.target.name +" belum terisi")
    }
  }

  const handleProgram = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })

    if(e.target.name == "program"){
      console.log(e.target.name + " sudah terisi");
    }else{
      console.log(e.target.name + " belum terisi");
    }
  }

  const handleUploadFile = () => {
    if(suratKesungguhan !== null){
      alert("berhasil upload file");
      console.log(suratKesungguhan);
      console.log(!!suratKesungguhan)
    }else{
      alert("belum upload file");
    }
  }

  const handleSubmit = useCallback((e) => {
    /* e.preventDefault(); */
    if (
      errorMassage.nama == "" &&
      errorMassage.email !== "" &&
      errorMassage.phone !== "" &&
      errorMassage.background !== "" &&
      errorMassage.program !== "" &&
      !!suratKesungguhan !== null
      
    ) {
      alert("Terdapat data yang tidak sesuai");
    }else {
      alert(`Data peserta "${data.nama}" diterima !`);
    }
  });

  const handleReset = () => {
    setData(baseData);
    alert("berhasil reset data, silahkan inputkan data kembali");
  };

  // errorMassage.phone
  // errorMassage["phone"]
  useEffect(() => {
    console.log(errorMassage);
  }, [errorMassage]);

  return (
    <div className="bg-pacific-blue-500 my-4 h-full rounded-3xl">
      <div className="flex justify-center">
        <div className="bg-lochmara2-500 w-1/2 mt-2 rounded-full">
          <h2 className="sm:text-xs md:text-sm font-bold lg:flex justify-center text-lg py-3">
            Pendaftaran Peserta Coding Bootcamp
          </h2>
        </div>
      </div>

      {/* FORM */}
      <div className="pl-7">
        <form onSubmit={handleSubmit}>
          {/* nama */}
          <label>
            Nama Lengkap <span className="text-red-orange-900">*</span> :
            <br />
            <input
              required
              className="my-2 pl-2 rounded-3xl h-7 sm:w-11/12 md:w-11/12 lg:w-11/12"
              type="text"
              name="nama"
              value={data.nama}
              onChange={handleChange}
            />
            <br />
            <br />
          </label>

          {/* email */}
          <label>
            Email <span className="text-red-orange-900">*</span> :
            <br />
            <input
              required
              className="my-2 pl-2 rounded-3xl h-7  sm:w-11/12 md:w-11/12 lg:w-11/12"
              type="text"
              size={94}
              name="email"
              value={data.email}
              onChange={handleChange}
            />
            <br />
          </label>
          {/* phone number */}
          <div className="flex flex-col gap-y-2">
            <label>
              No.HP <span className="text-red-orange-900">*</span> :
            </label>
            <div className="flex flex-col">
              <input
                required
                className="my-2 pl-2 rounded-3xl h-7  sm:w-1/4 md:w-1/4 lg:w-1/4"
                maxLength={12}
                type="text"
                name="phone"
                value={data.phone}
                onChange={handleChange}
              />
            </div>
          </div>
          <br />
          {/* background */}
          <label>
            Latar Belakang <span className="text-red-orange-900">*</span> :
            <br />
            <input
              required
              className="my-2"
              type="radio"
              name="background"
              value="IT"
              onChange={handleBackground}
            />
            <span className="pl-2">IT</span>
            <input
              className="my-2 ml-5"
              type="radio"
              name="background"
              value="NonIT"
              onChange={handleBackground}
            />
            <span className="pl-2">Non-IT</span>
            <br />
          </label>

          {/* program class */}
          <label>
            Kelas Coding yang Dipilih{" "}
            <span className="text-red-orange-900">*</span> :
            <br />
            <select
              className="my-2 rounded-3xl h-7 "
              name="program"
              id="program"
              value={data.program}
              onChange={handleProgram}
            >
              <option value="">-- Pilih Salah Satu Program --</option>
              <option value="Coding Backend with Golang">
                Coding Backend with Golang
              </option>
              <option value="Coding Frontend with ReactJS">
                Coding Frontend with ReactJS
              </option>
              <option value="Fullstack Developer">Fullstack Developer</option>
            </select>
            <br />
          </label>

          {/* file */}
          <label>
            Foto Surat Kesungguhan{" "}
            <span className="text-red-orange-900">*</span> :
            <br />
            <input className="my-2" type="file" ref={suratKesungguhan} onChange={handleUploadFile}/>
            <br />
          </label>

          {/* harapan */}
          <label>
            Harapan Untuk Coding Bootcamp ini :
            <br />
            <textarea
              className="sm:w-11/12 md:w-11/12 my-2 pl-2 rounded-2xl"
              name="harapan"
              id="harapan"
              cols="90"
              rows="5"
            >

            </textarea>
            <br />
          </label>
          <span className="flex pb-3">{errorMassage.nama}</span>
          {!!errorMassage.email && <span className="flex pb-3">{errorMassage.email}</span>}
          {!!errorMassage.phone && <span className="flex pb-3">{errorMassage.phone}</span>}
          

          {/* button */}
          <button
            type="submit"
            className="bg-malachite-500 px-5 py-1 mr-3 rounded-3xl"
          >
            Submit
          </button>
          <button
            type="reset"
            className="bg-vermilion-500 px-5 py-1 rounded-3xl"
            onClick={handleReset}
          >
            Reset
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
