import { Button, FormControl, FormGroup, Input, InputLabel, Typography } from '@material-ui/core'
import React from 'react'
import { useState } from 'react'
import { useHistory } from 'react-router'
import { postData } from '../Services/Api';

function Register() {
    let history= useHistory();
    let [val,setVal]= useState({
        name:"",
        user:"",
        mail:"",
        phone:""
    })
let updateVal=(event)=>
{
setVal({...val,[event.target.name]:event.target.value})
}


let postNewUserData=async()=>
{
   await postData(val);
}
let postUserData=()=>
{
    postNewUserData();
    history.push('/')
}

    return (
        <div>
        <Typography variant="h4">Register Here</Typography>
        <FormGroup>
          <FormControl>
  <InputLabel htmlFor="my-name">Full Name</InputLabel>
  <Input id="name" name="name" value={val.name} onChange={updateVal} />
</FormControl>
<FormControl>
  <InputLabel htmlFor="my-user">Username</InputLabel>
  <Input id="user" name="user" value={val.user} onChange={updateVal} />
</FormControl>
 <FormControl>
  <InputLabel htmlFor="my-mail">Email address</InputLabel>
  <Input id="mail" name="mail" value={val.mail} onChange={updateVal}/>
</FormControl>
<FormControl>
  <InputLabel htmlFor="my-phone">Phone</InputLabel>
  <Input id="phone" name="phone" value={val.phone} onChange={updateVal}/>
</FormControl>
 <FormControl>
  <InputLabel htmlFor="my-pass">Password</InputLabel>
  <Input id="pass" name="pass" type="password"/>
</FormControl>
<Button variant="contained" color="secondary" onClick={postUserData}>Register Here</Button>
</FormGroup>
 </div>
    )
}

export default Register
