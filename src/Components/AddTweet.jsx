import { Button, FormControl, FormGroup, Input, InputLabel } from '@material-ui/core'
import React from 'react'
import { useState } from 'react'
import { useHistory } from 'react-router'
import { postTweet } from '../Services/Api';

function AddTweet() {
    let history= useHistory();

    let [tweet,setTweet]= useState(
        {
            head:"",
            subject:"",
            tweet:"",
            hash:""
        }
    )

    let updateVal=(event)=>
    {
        setTweet({...tweet,[event.target.name]:event.target.value})
    }

    let postNewTweetData=async()=>
    {
      await postTweet(tweet)
    }

    let postTweetData=()=>
    {
        postNewTweetData();
        alert("Tweet posted successfully")
        history.push('/all')

    }
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
<Button variant="contained" color="secondary" onClick={postTweetData}>Tweet!!</Button>
</FormGroup>
        </div>
    )
}

export default AddTweet
