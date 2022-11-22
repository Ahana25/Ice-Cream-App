import axios from 'axios'


let url1="http://127.0.0.1:3003/users"
let url2="http://127.0.0.1:3003/tweets"


let postData=async(val)=>
{
   return await axios.post(url1,val)
}

let postTweet=async(tweet)=>
{
   return await axios.post(url2,tweet)
}

let getTweet=async()=>
{
    return await axios.get(url2)
}

let getIdTweet=async(id)=>
{
   return await axios.get(`${url2}/${id}`)
}

let putTweet=async(id,tweet)=>
{
  return await axios.put(`${url2}/${id}`,tweet)
}
let deleteTweet=async(id)=>
{
  return await axios.delete(`${url2}/${id}`)
}
export {postData,postTweet,getTweet,getIdTweet,putTweet,deleteTweet}