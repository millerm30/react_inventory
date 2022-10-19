import { useForm } from "react-hook-form";
import axios from "axios";

export default function Add(props) {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    addTool(data);
    reset();
  };

   const addTool = (data) => {
    const newTool = {
      name: data.name,
      brand: data.brand,
      serial_number: data.serial_number,
      model_number: data.model_number,
    };
     axios
       .post("http://localhost:3030/tools", newTool)
       .then((res) => {
         console.log(res);
         props.setTools([...props.tools, newTool]);
         props.setToolAdded(props.newToolAdded + 1);
       })
       .catch((error) => {
         console.log(error);
       });
   };

  return (
    <div>
      <h1 className='text-2xl text-center'>Add Tool</h1>
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col w-3/4 bg-white p-4 rounded-xl border-2 shadow-md ml-auto mr-auto mt-6 md:w-1/2 lg:w-1/3'>
        <label htmlFor="name">Tool Type:</label>
        <input type="text" name="name" {...register('name')} className='border-2 rounded p-2 mb-2' placeholder="Please enter tool type..." required />
        <label htmlFor="brand">Tool Brand:</label>
        <input type="text" name="brand" {...register('brand')} className='border-2 rounded p-2 mb-2' placeholder="Please enter tool brand..." required />
        <label htmlFor="serial_number">Serial Number:</label>
        <input type="text" name="serial_number" {...register('serial_number')} className='border-2 rounded p-2 mb-2' placeholder="Please enter serial number..." required />
        <label htmlFor="model_number">Model Number:</label>
        <input type="text" name="model_number" {...register('model_number')} className='border-2 rounded p-2 mb-2' placeholder="Please enter model number..." required />
        <input type="submit" className='bg-cyan-700 w-1/3 py-2 rounded-lg mt-4 text-white font-bold cursor-pointer hover:bg-cyan-600' />
      </form>
    </div>
  );
};