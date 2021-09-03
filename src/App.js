/*import logo from './logo.svg';*/
import React from "react";
import './App.css';
import Clients from "./components/Clients";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="container p-4">
      <div className="row">
        <Clients />
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
