import React, { Component } from 'react';
import './App.css';
import AceEditor from "react-ace";
import 'brace/mode/javascript'
import 'brace/theme/monokai'


function App() {
  return (
    <div> 
      <AceEditor
      mode="javascript"
      theme="monokai"
     />
    </div>
  );
}

export default App;
