import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
function App() {
  const [WindowSize,setWindowSize]=useState({
    width:window.innerWidth,
    height:window.innerHeight
  });

  useEffect(()=>{
    let handleResize=()=>{
      setWindowSize({
        width:window.innerWidth,
        height:window.innerHeight
      })
    }
    window.addEventListener('resize',handleResize);
    return()=>{

      window.removeEventListener('resize',handleResize)
    }
  },[WindowSize])
  return(
    <div className='App'>
      <h1>Window Size</h1>
      <p>Width:{WindowSize.width}</p>
      <p>Height:{WindowSize.height}</p>
    </div>
  )
}

export default App;
