import { useEffect, useState } from 'react';
import Button from '../components/button';
const TaskCard = (props) => {
    const [taskList,setTaskList] = useState([]);
    useEffect(()=>{
        if(props.taskList){
            setTaskList(props.taskList);
        }
    },[props.taskList])
    const deleteTask = (value)=>{
        let updatedList = props.taskList.filter((ele)=>ele !== value.target.parentElement.id)
        setTaskList(updatedList)
        props.function.delete(updatedList);
    }
    const editTask = (value)=>{
        props.function.edit(value.target.parentElement.id);
    }
    return(
        <div className="task-list">
            {taskList && taskList.map((e)=>{
                return (
                <div key={e} id={e}>
                    <span>{e}</span>
                    <Button event={deleteTask} name="delete"/>
                    <Button event={editTask} name="Edit"/>
                    </div>);
            })}
        </div>
    );
}
export default TaskCard;