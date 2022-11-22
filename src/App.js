import {Route,Switch} from 'react-router-dom'
import Login from './Components/Login'
import Register from './Components/Register'
import Home from './Components/Home'
import About from './Components/About'
import AllTweets from './Components/AllTweets'
import AddTweet from './Components/AddTweet'
import EditTweet from './Components/EditTweet'
import Logout from './Components/Logout'
import Error from './Components/Error'



function App() {
  return (
    <div className="App">
<Switch>
 <Route exact path='/' component={Login}/>
 <Route exact path='/register' component={Register}/>
 <Route exact path='/home' component={Home}/>
 <Route exact path='/about' component={About}/>
 <Route exact path='/all' component={AllTweets}/>
 <Route exact path='/add' component={AddTweet}/>
 <Route exact path='/edit/:id' component={EditTweet}/>
 <Route exact path='/logout' component={Logout}/>
 <Route  component={Error}/>
</Switch>
    </div>
  );
}

export default App;
