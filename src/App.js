import { useState } from 'react';

import './App.css';

import AddQuest from './AddQuest';
import QuestList from './QuestList';

function App() {
  // Mocking quests
  const [quests, setQuests] = useState([
    {done:false, title:"Tomar banho"},
    {done:false, title:"Tomar atitude"},
    {done:false, title:"Tomar água"},
  ]);

  function pushQuest(QuestTitle){
    const questList = quests.slice();
    questList.push({title: QuestTitle, done: false});
    setQuests(questList);
  }

  return (
    <div data-theme='dark'
      className="App h-screen w-screen flex justify items-center">
      <div className='card w-[80%] h-[70%] shadow-sm'>
        <h1 className='text-5xl font-work font-bold w-full text-center'>Tasks to do</h1>
        <AddQuest appendQuest={pushQuest}/>
        <QuestList list={quests}/>
        <input
        type='reset' value="clear"
        className='btn btn-success'
        />
      </div>
    </div>
  );
}

export default App;
