import {useState} from 'react';
import BoxGenerator from "./components/BoxGenerator";


function App() {
  const [boxList, setBoxList] = useState([
    {color: 'blue'}
  ])

  // const addBox = (box) => {
  //   setBoxList([...boxList, box])
  // }
  // ^^ we do not need to make another function to set the state, we can directly pass it as a prop

  return (
    <div className="App">
      <h1>Box Generator</h1>
      <BoxGenerator boxList={boxList} setBoxList={setBoxList}/>
    </div>
  );
}

export default App;
