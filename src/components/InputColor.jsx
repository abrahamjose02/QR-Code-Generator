import React, { useContext, useEffect, useState } from 'react'
import ChromePicker from 'react-color'
import { InputContext } from '../App'

const InputColor = () => {
    const[color,setColor] = useState("#8e6b63")
    const[displayColorPicket,setDisplayColorPicker] = useState(false)

    //usecontext

    const{inputvalue,setInputValue} = useContext(InputContext)

    useEffect(()=>{
        setInputValue({...inputvalue,color:color})
    },[color])

    const handleChange = color => setColor(color.hex);
  return (
    <div>
      <label className='font-semibold text-md'>Color</label>   
      <div className='flex items-center gap-2'>
        <div onClick={()=>setDisplayColorPicker(!displayColorPicket)} style={{background:color}} className='w-10 h-8 cursor-pointer border-4'></div>
        <span>{color}</span>
      </div>
      {
        displayColorPicket && (
            <div className='absolute mt-2'>
                 <ChromePicker color={color} onChange={handleChange}/>
            </div>
           
        )
      }
    </div>
  )
}

export default InputColor
