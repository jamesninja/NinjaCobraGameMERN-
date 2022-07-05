
// import { Outlet, Link } from 'react-router-dom';
// import React ,{ Fragment,useState,useEffect } from "react";
// import React ,{ Fragment,useEffect } from "react";
import React ,{ Fragment} from "react";
// import axios from 'axios';
import "./App.css";
import NavBar from './components/NavBar';
import Search from "./components/Search";
import Upload from './components/Upload';

function App(){
  return(
    
    <Fragment className ='App-Fra'>
     <NavBar/>
     <Search/>
     <Upload/>
    </Fragment>
  )
}
export default App;
