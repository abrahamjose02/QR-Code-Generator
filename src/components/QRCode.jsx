import React, { useContext } from 'react'
import { InputContext } from '../App';
import {SaveAs} from 'file-saver'

const QRCode = () => {
  const{response,error,loading} = useContext(InputContext);
  const downloadImage = () =>{
    SaveAs(response,'qrCode.png')
  }
  return (
    <div className='bg-gray-100 rounded-r-md flex flex-col items-center justify-center'>
      {response ?  (
          <div>
          <img className='w-48' src={response} alt="qrCode" />
          <button onClick={downloadImage} className='bg-blue-400 text-white mt-2 px-4 py-1 w-full'>Download</button>
         </div>
      ):(
        <div className='text-gray-500'>Your QRCode will showing here...</div>
      )}
    </div>
  )
}

export default QRCode
