import  React  from 'react';
import ItemList from "./components/ListOFItem/itemList"
import FrontPage from "./components/ListOFItem/frontPage"
import SingleIitem from "./components/rewiews/singleItem"
import SignIn from "./components/loggin/loginForm"
import Profile from "./components/profile/singleProfile"
import MyProfile from "./components/profile/myProfile"
import NavBar from "./components/nav/navBar"
import Burger from "./components/nav/burger"
import Footer from "./components/nav/footer"
import BucketNwishList from "./components/wishListNbucket/Lists"
import BuyItem from "./components/wishListNbucket/buyItem"



import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";



function App(){
    
    
    
return(
    <div className='container'>
            <Router>
              <Burger></Burger>  
               <NavBar></NavBar>
                  <main>
                
                    <Switch>
                       
                            
                        <Route path='/products' exact component={ItemList}></Route>
                        
                        <Route path='/' exact component={FrontPage}></Route>
                        <Route path='/single' exact component={SingleIitem}></Route>
                        <Route path='/login' exact component={SignIn}></Route>
                        <Route path='/bucket' exact component={BucketNwishList}></Route>
                        <Route path='/myprofile' exact component={MyProfile}></Route>
                        <Route path='/product/:id' exact component={SingleIitem}></Route>
                        <Route path='/buyitem' exact component={BuyItem}></Route>
                         <Route path='/users/:id' exact component={Profile}></Route>




                    </Switch>
                </main>        
              <Footer></Footer>
            </Router>
            
    </div>
    )
    
}
        
  
  
export default App