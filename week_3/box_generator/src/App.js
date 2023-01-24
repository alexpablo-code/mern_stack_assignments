import {useState} from 'react';
import BoxGenerator from "./components/BoxGenerator";


function App() {
  const [boxList, setBoxList] = useState([
    {color: 'blue'}
  ])

  const addBox = (box) => {
    setBoxList([...boxList, box])
  }

  return (
    <div className="App">
      <h1>Box Generator</h1>
      <BoxGenerator boxList={boxList} addBox = {addBox}/>
    </div>
  );
}

export default App;
