import React from 'react'
import { IconButton } from '@material-ui/core';
import Button from '@material-ui/core/Button'
import SendIcon from '@material-ui/icons/Send';
import DeleteIcon from '@material-ui/icons/Delete';
import Delete from '@material-ui/icons/Delete';
function Buttons() {
  return (
    <div>
      <h1>Buttons</h1>
      <Button variant="contained" color="primary">Hello</Button>
      <Button variant="outlined" color="secondary">Hello</Button>
      <Button variant="text" >Hello</Button>

      <h1>Color & EventListener</h1>
      <Button variant="contained" color="primary" style={{
        marginRight: "8px",
        backgroundColor: "lightgreen"
      }}>Hello</Button>
      <Button variant="outlined" color="secondary" onClick={() => {
        alert("click my ass, awwwww!!!!!");
      }}>Hello</Button>
      <Button variant="text" >Hello</Button>

      <h1>Icons inside buttons</h1>
      <Button variant="contained" startIcon={<SendIcon></SendIcon>} color="primary">Send</Button>
      <Button variant="contained" endIcon={<DeleteIcon></DeleteIcon>} color="primary">Delete</Button>

      <h1>Size</h1>
      <Button variant="contained" startIcon={<SendIcon></SendIcon>} color="primary" style={{ marginRight: "8px" }} size="small">Send</Button>
      <Button variant="contained" endIcon={<DeleteIcon></DeleteIcon>} color="primary" size="large">Delete</Button>

      <h1>Icons</h1>
      <IconButton>
        <SendIcon></SendIcon>
      </IconButton>
      <IconButton>
        <DeleteIcon></DeleteIcon>
      </IconButton>

    </div>
  )
}

export default Buttons