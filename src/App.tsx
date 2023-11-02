import React, {useState} from 'react';
import {DarkThemeStyle, LightThemeStyle} from "./global";
import './Main.css'
import Header from "./components/Header";
import Timetable from "./components/Timetable/Timetable";

function App() {
    const [currentTheme,setCurrentTheme] = useState<'dark' | 'default'>('dark')

    const [currentGroupId, setCurrentGroupId] = useState<number | null>(null)

  return (
    <div className="App">
        {currentTheme === 'dark' ? <DarkThemeStyle/> : <LightThemeStyle/>}
        <Header onChangeGroup={(id)=>setCurrentGroupId(id)} />
        <Timetable currentGroupId={currentGroupId}/>
    </div>
  );
}

export default App;
