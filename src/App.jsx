import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Add from './components/Add';
import Delete from './components/Delete';
import { v4 as uuid} from 'uuid';
import toolLogo from './assets/appLogo.png';

const App = () => {
  const [tools, setTools] = useState([]);
  const [ newToolAdded, setToolAdded ] = useState(0);

  useEffect(() => {
    axios.get('http://localhost:3030/tools')
      .then((res) => {
        setTools(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [newToolAdded]);

  return (
    <div>
      <div className="flex justify-center">
        <img src={toolLogo} alt="tool logo" className="w-1/8" />
        <h1 className="text-4xl font-bold self-center ml-2">Tool Inventory</h1>
      </div>
      <Add setTools={setTools} tools={tools} setToolAdded={setToolAdded} newToolAdded={newToolAdded} />
      {!tools.length ? (
        <div className="flex justify-center">
          <h1 className="text-2xl font-bold self-center mt-6">
            No Tools Added!
          </h1>
        </div>
      ) : (
        <div className="flex flex-wrap justify-center my-6">
          {tools.map((tool) => (
            <div
              key={uuid()}
              className="flex flex-col justify-center w-3/4 my-6 bg-white mx-4 shadow-md rounded-xl md:w-1/3 lg:w-1/5"
            >
              <div className="w-full bg-cyan-700 rounded-t-xl p-1">
                <Delete setTools={setTools} tools={tools} id={tool.id} newToolAdded={newToolAdded} setToolAdded={setToolAdded} />
              </div>
              <div className="p-2">
                <h1 className="text-2xl font-bold">Type: {tool.name}</h1>
                <h2 className="text-xl font-semibold">Brand: {tool.brand}</h2>
                <h3 className="text-lg font-medium">
                  SN: {tool.serial_number}
                </h3>
                <h3 className="text-lg font-medium">
                  Model: {tool.model_number}
                </h3>
              </div>
            </div>
          ))}
        </div>
      )} 
    </div>
  );
};

export default App
