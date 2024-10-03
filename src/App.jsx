import React, { createContext, useState } from "react"
import InputForm from "./components/InputForm"
import QRCode from "./components/QRCode"
import axios from "axios";


//Create Context

export const InputContext = createContext();

function App() {
  const[inputValue,setInputValue] = useState({
    url:'',
    color:''
  });

  const[response,setResponse] = useState('');
  const[error,setError] = useState('');
  const[loading,setLoading] = useState('');

  const config = {
    headers:{Authorization : 'Bearer 4d180b90-8146-11ef-a769-6f4abe9bdef0'     }
  }

  const bodyParametes = {
    "colorDark": inputValue.color,
    "qrCategory": "url",
    "text": inputValue.url
  }

  const getQRCode = async() =>{
    try {
      setLoading(true);
      const res = await axios.post('https://qrtiger.com/api/qr/static',
        bodyParametes,
        config
      )
      setResponse(res.data.url);
    } catch (e) {
      setError(e)
    }finally{
    setLoading(false)
    }
  }

  const value = {
    inputValue,
    setInputValue,
    getQRCode,
    response,
    loading,
    error
  }

  return (


    <div class="area ">
    <ul class="circles h-screen pt-36 px-3">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <div className="container mx-auto max-w-4xl bg-white rounded-md shadow">
        <div className="md:grid md:grid-cols-3">
          <InputContext.Provider value={value}>
          <InputForm/>
          <QRCode/>
          </InputContext.Provider>  
        </div>
       </div>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
  
  )
}



export default App
