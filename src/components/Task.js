import "../App.css";
import {FaTimes} from 'react-icons/fa'
const Task = ({ task }) => {
  return (
    <div className="task">
      <h3> {task.text} <FaTimes style={{color:'red',paddingLeft:'90%',marginTop:'-100px'}}/></h3>
      <p className="hd2"> {task.day}</p>
    </div>
  );
};

export default Task;
