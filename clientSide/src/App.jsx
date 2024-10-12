import {useEffect, useState } from "react";
import "./App.css";
import {io} from "socket.io-client";
// import Button from '@mui/material/Button';
import { TextField, Button } from "@mui/material";
function App() {

  const [text,setText] = useState("");
  const socket = io();
  const sendMessage =(e)=>{
   alert("sending message ")
   e.preventDefault();
   console.log(text)
  }

  return (
    <>
     <div className="messageBox">   
      </div>    
      <form className="message" onSubmit={sendMessage}>
        <TextField
          onChange={e=>setText(e.target.value)}
          value={text}
          type="text"
          autoComplete="off"
          label="Message"
          id="Text"
          required
          className="textmessages"
        />
        <Button className="button" type="submit" variant="outlined">send</Button>
      </form>
    </>
  );
}

export default App;
