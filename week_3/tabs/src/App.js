import {useState} from 'react';
import './App.css';
import Tabs from './components/Tabs';

function App() {
  const [tabList, setTabList] = useState([
    {tabName:"Tab1", tabContent:"content 1 is showing here."},
    {tabName:"Tab2", tabContent:"content 2 is showing here."},
    {tabName:"Tab3", tabContent:"content  3 is showing here."}
  ])



  return (
    <div className="App">
      <Tabs tabList={tabList} setTabList={setTabList}/>
    </div>
  );
}

export default App;
