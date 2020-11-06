import React from 'react';
import SimpleCounter from './components/SimpleCounter';
import './App.css';

function App() {
    
    return (
        <div className="App">
            <SimpleCounter startingNumber={1} />
            <SimpleCounter startingNumber={10} />
        </div>
    );
}

export default App;
