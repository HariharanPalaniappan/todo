import { useState } from 'react';
import './App.css';
import Button from './components/button';
import Input from './components/input';
import TaskCard from './components/taskCard';


function App() {
const [task,setTask] = useState("");
const [prevEdit,setPrevEdit] = useState("");
const [edit,setEdit] = useState();
const [taskList,setTaskList] = useState([]);
const updateTask = (e)=>{
  setTask(e);
}
const allTask = (e)=>{
  let tasks =[...taskList,e];
  setTaskList(tasks);
}
const addFunction = (e) => {
  if(taskList.indexOf(task) !== -1){
    alert("the task already exist");
    setTask("");
  }
  else if(task !== undefined) {
    allTask(task);
    setTask("");
  } else {
      alert("Must Enter Task");
  }
}
const updateFunction = (value)=> {
  taskList[taskList.indexOf(prevEdit)] = edit;
  setTaskList(taskList);
  setEdit(undefined);
}
const updatedTaskList = (list)=> {
  setTaskList(list);
}
const editFunction = (value)=> {
  setEdit(value);
  setPrevEdit(value);
}
const editTask =(e)=>{
  setEdit(e);
}
const inputEvent = {
  change : updateTask,
  edit : editTask
}
  return (
    <div className="app">{edit !== undefined ? <div className="input-container"><Input event={inputEvent.edit} value={edit}/><Button event={updateFunction} name="Update"/></div>: <div className="input-container"><Input event={inputEvent.change} value={task}/><Button event={addFunction} name="Add"/></div>}
      <TaskCard taskList={taskList} function={{delete : updatedTaskList,edit : editFunction}}/>
    </div>
  );
}

export default App;
