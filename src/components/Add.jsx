import { Box, Button, TextField } from '@mui/material'
import React from 'react'

const Add = () => {
    
    
  return (
    
     <Box
    component="form"
    sx={{
      '& .MuiTextField-root': { m: 2, width: '30ch' },
    }}
    noValidate
    autoComplete="off"
  >
    <h1>Welcome to Product Details Page</h1>
    <div>
      <TextField
        
        id="outlined-required"
         label="Product name"
    
      />
     </div>
     <div>
      <TextField
       
        id="outlined-disabled"
        label="Description"
       
       
      />
      </div>
      <div>
      <TextField
        id="outlined-password-input"
        label="Price"

        type="password"
        autoComplete="current-password"
       
       
      />
      </div>
      <div>
      <TextField
        id="outlined-read-only-input"
        label="Category"

      />
      </div>
      <div>
        <Button variant='contained'>Add</Button> 
    
      </div>
      </Box>
  )
}
export default Add;