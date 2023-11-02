import React, {useEffect, useState} from 'react';
import classes from './Main.module.css'
import {createGlobalStyle} from "styled-components";

function App() {
    const [currentTheme,setCurrentTheme] = useState<'dark' | 'default'>('dark')
    let GlobalStyles = createGlobalStyle`
      body{
        background: linear-gradient(#CCFF00, #FFA800, #D200FF, #6100FF);
      }
    `
    useEffect(()=>{
        if(currentTheme === 'default'){
            GlobalStyles = createGlobalStyle`
              body{
                background: linear-gradient(#CCFF00, #FFA800, #D200FF, #6100FF);
              }
            `
        }
        if(currentTheme === 'dark'){
            GlobalStyles = createGlobalStyle`
              body{
                background: linear-gradient(#CCFF00, #FFA800, #D200FF, #6100FF);
              }
            `
        }
    },[currentTheme])
  return (
    <div className="App">
        <GlobalStyles/>
    </div>
  );
}

export default App;
