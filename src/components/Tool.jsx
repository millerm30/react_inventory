import React from 'react';
import Delete from './Delete';

const Tool = ({setTools, tools, tool, newToolAdded, setToolAdded}) => {
  return (
    <div
      className="flex flex-col justify-center w-3/4 my-6 bg-white mx-4 shadow-md rounded-xl md:w-1/3 lg:w-1/5"
    >
      <div className="w-full bg-cyan-700 rounded-t-xl p-1">
        <Delete
          setTools={setTools}
          tools={tools}
          id={tool.id}
          newToolAdded={newToolAdded}
          setToolAdded={setToolAdded}
        />
      </div>
      <div className="p-2">
        <h1 className="text-2xl font-bold">Type: {tool.name}</h1>
        <h2 className="text-xl font-semibold">Brand: {tool.brand}</h2>
        <h3 className="text-lg font-medium">SN: {tool.serial_number}</h3>
        <h3 className="text-lg font-medium">Model: {tool.model_number}</h3>
      </div>
    </div>
  );
}

export default Tool