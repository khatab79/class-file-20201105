import React from 'react';
import { Card,  } from 'react-bootstrap';
import { useRecoilValue } from 'recoil';
import { completedTaskListState, remainingTaskListState, taskListState } from '../data/TaskList.recoil';

function TaskListSummary(){

    const taskList = useRecoilValue(taskListState);
    const completedTaskList = useRecoilValue(completedTaskListState);
    const remainingTaskList = useRecoilValue(remainingTaskListState);
    
    return (
        <div>
            <Card className="text-center">
                <Card.Header className="text-left">Remaining Tasks:</Card.Header>
                <Card.Body>
                    <Card.Text>
                    <div className="text-left">
                        
                        <ul>
                            { remainingTaskList.map( task => <li>{task.description}</li>)}
                        </ul>
                    </div>
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted">{completedTaskList.length} / {taskList.length} Complete</Card.Footer>
            </Card>           
        </div>



    );

    

}

export default TaskListSummary;