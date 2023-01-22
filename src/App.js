//import logo from './logo.svg';
//import './App.css';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Content from "./components/Content";
import React, {useEffect,useState} from "react";


function App() {
  const [value, setValue]=useState({});
 useEffect(()=>{
  const url=`https://mocki.io/v1/ee762599-31ae-4a3d-a6c7-d596525945e1`;

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const value= await response.json();
      setValue(value);
    } catch (error) {
      console.log("error", error);
    }
  };

  fetchData();
 },   []);
  return (
    <div>
      <Navbar/>
      <Header/>
      <Content value={value} />
    </div>
  );
}

export default App;
