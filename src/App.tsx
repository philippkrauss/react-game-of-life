import React, {useState} from 'react';
import './App.css';

const width = 10
const height = 10
const initField: Array<Array<boolean>> = []

for (let currentRow = 0; currentRow < height; currentRow++) {
    const row = []
    for (let currentCol = 0; currentCol < width; currentCol++) {
        row.push(Math.random() > 0.5)
    }
    initField.push(row)
}

function App() {
    let count = 0
    const [field, setField] = useState(initField)
    const renderedField = field.map((row) => {
        const renderedRow = row.map((cell) => {
            return <td>{cell?'X':'_'}</td>
        })
        return <tr>{renderedRow}</tr>
    })
    function handleTick() {
        const deepCopy = JSON.parse(JSON.stringify(field))
        deepCopy[0][0] = false
        setField(deepCopy)
    }
    return (
        <div className="App">
            <h1>GOL</h1>
            <table>{renderedField}</table>
            <button onClick={handleTick}>Tick</button>
        </div>
    );
}

export default App;
