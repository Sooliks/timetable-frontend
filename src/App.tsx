import React, {useState} from 'react';
import {DarkThemeStyle, LightThemeStyle} from "./global";
import './Main.css'
import Header from "./components/Header";
import Timetable from "./components/Timetable/Timetable";
import {useConfigContext} from "./context/ThemeContextProvider";

function App() {
    const [currentGroupId, setCurrentGroupId] = useState<number | null>(null)
    const configContext = useConfigContext();

    return (
        <div className="App">
            <Header onChangeGroup={(id)=>setCurrentGroupId(id)} />
            <Timetable currentGroupId={currentGroupId}/>
            {configContext.config.currentTheme === 'dark' ? <DarkThemeStyle/> : <LightThemeStyle/>}
        </div>
    );
}

export default App;
