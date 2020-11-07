import React from 'react';
import SimpleCounter from './components/SimpleCounter';
import TaskList from './components/TaskList';
import './App.css';
import TaskListSummary from './components/TaskListSummary';
import { Container, Row, Col} from 'react-bootstrap';
import Calculator from './components/Calculator'
import'bootstrap/dist/css/bootstrap.min.css';

function App() {
    
    return ( <><div className="App">
        <Container>
            <Row>
                <Col sm={4} >                
                        <TaskListSummary />
                </Col>
                <Col sm={8} >
                        <TaskList />
                </Col>
            </Row>
            <Row>
                <Col sm={4} >                
                    <Calculator  a = {0} b={0} />
                </Col>
                <Col sm={8} >                
                   
                </Col>
            </Row>
        </Container>
    </div>
  </>  );
}

export default App;