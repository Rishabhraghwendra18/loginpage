import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './App.css';

function App() {
  return (
    <div className='main-div'>
       <div className='div'>

       <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <h1>Sign In</h1>
      <div>
        <TextField
          required
          id="outlined-required"
          label="Mail-id"
          defaultValue="Hello World"
          />
        
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
          />
         </div>
      </Box>
      
    </div>
  
    
   
       

    </div>      
  );
}

export default App;
