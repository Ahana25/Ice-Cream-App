import { Button, FormControl, FormGroup, Input, InputLabel } from '@material-ui/core'
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react'
import { useHistory, useParams } from 'react-router'
import { getIdTweet, putTweet } from '../Services/Api';

function EditTweet() {
    let history= useHistory();
    let {id}= useParams();
let [tweet,setTweet]= useState({
    head:"",
    subject:"",
    tweet:"",
    hash:""
})
let putEditTweet=async()=>
{ 
   await putTweet(id,tweet)
}
let putEditTweetData=()=>
{
    putEditTweet();
    history.push('/all')
}
    let getIdEditTweet=async()=>
    {
       let res= await getIdTweet(id);
       setTweet(res.data)
    }

    let updateVal=(event)=>
    {
        setTweet({...tweet,[event.target.name]:event.target.value})
    }

    useEffect(()=>
    {
       getIdEditTweet();
    },[])
    return (
        <div>
 <FormGroup>
          <FormControl>
  <InputLabel htmlFor="my-head">Enter Tweet Head</InputLabel>
  <Input id="name" name="head" value={tweet.head} onChange={updateVal} />
</FormControl>
<FormControl>
  <InputLabel htmlFor="my-subject">Subject</InputLabel>
  <Input id="user" name="subject" value={tweet.subject} onChange={updateVal} />
</FormControl>
 <FormControl>
  <InputLabel htmlFor="my-tweet">Tweet</InputLabel>
  <Input id="mail" name="tweet" value={tweet.tweet} onChange={updateVal}/>
</FormControl>
<FormControl>
  <InputLabel htmlFor="my-hash">Hashtags</InputLabel>
  <Input id="phone" name="hash" value={tweet.hash} onChange={updateVal}/>
</FormControl>
<Button variant="contained" color="secondary" onClick={putEditTweetData}>Tweet!!</Button>
</FormGroup>
        </div>
    )
}

export default EditTweet
