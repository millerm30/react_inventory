import { TiDelete } from 'react-icons/ti';
import axios from 'axios';

export default function Delete(props) {
  const { id, setTools, tools } = props;

  const deleteTool = () => {
    axios.delete(`http://localhost:3030/tools/${id}`)
      .then(res => {
        setTools(tools.filter(tool => tool.id !== id));
        props.setToolAdded(props.newToolAdded - 1);
      })
      .catch(err => {
        console.log(err);
      });
  };
  
  return (
    <>
      <TiDelete onClick={deleteTool} className='text-white cursor-pointer text-2xl ml-auto mr-0'/>
    </>
  )
};