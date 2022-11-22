import { Button, FormControl, FormGroup, Input, InputLabel, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import { useHistory } from 'react-router';



let useStyles= makeStyles(
    {
        head:
        {
            textAlign:"center",
            color:"blue",
            fontFamily:"cursive",
            margin:"20px",
            padding:"10px"
        }
    }
)
function Login() {
    let history= useHistory();

  let moveHome=()=>
  {
      alert("Successfully logged in")
      history.push('/home')
  }

  let classes= useStyles();
    return (
        <div>
        <Typography variant="h4" className={classes.head}>Login Here</Typography>
        <FormGroup>
          <FormControl>
  <InputLabel htmlFor="my-mail">Email address</InputLabel>
  <Input id="mail" />
</FormControl>
<FormControl>
  <InputLabel htmlFor="my-pass">Password</InputLabel>
  <Input id="password" type="password" />
</FormControl>
<Typography>
    <Button variant="contained" color="secondary" onClick={moveHome}>Login here</Button>
</Typography>
</FormGroup>
        </div>
    )
}

export default Login
