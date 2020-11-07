import React, { ChangeEvent, useState } from 'react';
import { useRecoilState } from 'recoil';
import { ITask, taskListState } from '../data/TaskList.recoil';
import {  Button } from 'react-bootstrap';


function TaskList(){

    const [ taskList, setTaskList ] = useRecoilState(taskListState);
    const [ newTaskDescription, setNewTaskDescription ] = useState<string>("");
    

    function onClickAdd(){
        
        const tasks:ITask[] = newTaskDescription.split("\n").filter(d=>!!d).map(( description:string ) => ({ done: false, description }));
        
        // const task:ITask = { done: false, description: newTaskDescription };
        setTaskList([ ...taskList, ...tasks ]);
        setNewTaskDescription("");
    }

    function onChangeNewTaskDescription( event:ChangeEvent<HTMLTextAreaElement> ){
        setNewTaskDescription(event.target.value);
    }

    function onCheckTaskHandler( index:number ){
        
        return function( event:ChangeEvent<HTMLInputElement> ){
            
            const newTask = { ...taskList[index] };
            const newList = [ ...taskList ];

            newTask.done = event.target.checked;
            newList[index] = newTask;
            
            setTaskList( newList );
        }

    }

    function onDeleteTaskHandler( index:number ){
        return function(){
            setTaskList(taskList.filter((task, i) => i !== index));
        }
    }

    function onUpdateDescriptionHandler( index:number ){
        return function( event:ChangeEvent<HTMLInputElement> ){
            const newTask = { ...taskList[index] };
            const newList = [ ...taskList ];

            newTask.description = event.target.value;
            newList[index] = newTask;
            
            setTaskList( newList );
        }
    }

    return (

        <div className="task-list-container">
            <div className="form-group shadow-textarea">
            <label className="">Create To Do List Item</label>
                <textarea className ="form-group shadow-textarea" value={newTaskDescription} style={{ width: '100%', height:"150px" }} onChange={onChangeNewTaskDescription} />
                <Button variant="primary" onClick={onClickAdd}>Add to Task List</Button>
            </div>

            <h1>To Do List</h1>
            <div className="custom-control custom-checkbox">
                
                { taskList.map(( task, index ) => <div key={index} style={{ textAlign: 'left' }}>
                    <input type="checkbox" onChange={onCheckTaskHandler(index)}/>
                    <input type="textbox"  value={task.description} onChange={onUpdateDescriptionHandler(index)}/>
                    <button  onClick={onDeleteTaskHandler(index)}>Delete Item</button>
                </div> )}
            </div>

            <div>
 
</div>
        </div>
    );


}

export default TaskList;