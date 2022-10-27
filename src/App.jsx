import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Add from './components/Add';
import { v4 as uuid} from 'uuid';
import Tool from './components/Tool';
import Header from './components/Header';

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
      <Header />
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
            <Tool
              key={uuid()}
              setTools={setTools}
              tools={tools}
              tool={tool}
              newToolAdded={newToolAdded}
              setToolAdded={setToolAdded}
            />
          ))}
        </div>
      )} 
    </div>
  );
};

export default App
