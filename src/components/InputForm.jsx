import React, { useContext } from "react";
import InputField from "./InputField";
import InputColor from "./InputColor";
import { InputContext } from "../App";

const InputForm = () => {
    const{getQRCode} = useContext(InputContext)
    const handleSubmit = () => getQRCode();
  return (
    <div className="col-span-2 p-6 grid gap-4">
      <InputField />
      <InputColor />
      <button onClick={handleSubmit} className="bg-blue-400 max-w-sm ml-auto px-4 py-2 rounded-sm mt-4 text-white hover:bg-blue-500 disabled:bg-gray-300">
        Generate QR Code
      </button>
    </div>
  );
};

export default InputForm;
