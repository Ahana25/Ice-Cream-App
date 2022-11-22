import { Button, Card, CardActions, CardContent, Typography } from '@material-ui/core'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { deleteTweet, getTweet } from '../Services/Api';
import { makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';

let useStyles= makeStyles({
    head:{
        backgroundColor:"lightblue" 
    },
    card:
    {
        margin:"50px",
        width:"350px",
        height:"200px",
        display:"inline-flex"
    },
    tweet:{
        margin:"20px"
    },
    btn:
    {
        margin:"7px"
    }
})
function AllTweets() {
    
    let classes= useStyles();

let [tweet,setTweet]= useState([]);
    let getTweetData=async()=>
    {
let res= await getTweet();
setTweet(res.data)

    }
    let deleteTweetData=async(id)=>
    {
      await deleteTweet(id);
      getTweetData();
    }
    useEffect(()=>
    {
        getTweetData();
    },[])
    return (
        <div>
        <Typography variant="h4">All Tweets</Typography>
{tweet.map((list)=>
{
    return( <Card className={classes.card}>
      <CardContent>
        <Typography variant="h5" component="div" className={classes.head}>
         {list.subject}
        </Typography>
        <Typography color="secondary" gutterBottom  variant="h6">
         {list.head}
        </Typography>
        <Typography color="text.secondary">
         {list.hash}
        </Typography>
        <Typography variant="body2" className={classes.tweet}>
          {list.tweet}
          <br />
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained" color="primary" className={classes.btn} onClick={()=>deleteTweetData(list.id)}><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg></Button>
        <Button size="small" variant="contained" color="primary" className={classes.btn} component={Link} to={`/edit/${list.id}`}><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg></Button>
      </CardActions>
    </Card>)
   
})}
        </div>
    )
}

export default AllTweets
