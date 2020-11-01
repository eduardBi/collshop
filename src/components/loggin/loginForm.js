import  React ,{useState , useEffect} from 'react';
import {useDispatch} from 'react-redux'
import {Link,useHistory } from "react-router-dom";
import {useSelector} from 'react-redux'


function LogIn(){
    
let history =useHistory();
let loginName=useSelector(item=>item.isLogged.userName);
let [isLogged,setLogged]=useState(false);
    
    
useEffect(()=>{
 if(isLogged===true){
     
        history.push('/products');
    }else{
     
 }
 
        
    })
    
let dis=useDispatch();
    
    const [info,setInfo]=useState([])
    //обрабатываю поля ввода 
    
    function signIn(e){
        let input1=document.querySelector('input[name="age"]')
        let input2=document.querySelector('input[name="userName"]')
        if(input1.value && input2.value){
            //проверка заполнены ли важные инпуты
        dis({type:'signIn',payload:info})
        setLogged(true);
            console.log(history)
        }else{
         
        }
        
       
        
    }
    
    
    function signOut(){
        
            dis({type:'signOut',payload:{
             name:'jack',
            }})
            dis({type:'clear',payload:{
             name:'jack',
            }})
            dis({type:'clearProducts',payload:{
             name:'jack',
            }})
            //возвращаю все массивы к первоначальному значению после выхода из аккаунта
    }
        
    
    function changeHandler(e){
        setInfo({...info,[e.target.name]:e.target.value,id:11,img:3})
        
    }
    
    
    
return(
    
    <div>
     
        {!isLogged && !loginName? 
    //условие авторизован ли пользыватель  
            <form  
                  action="" 
                  className="login-form-wrapper" 
                 >
    <p className="list-product-title">зарегистрируйтесь для доступа к услугам сайта  </p>
                
                <label htmlFor="name">ваше имя</label>
                <input 
                    onChange={changeHandler} 
                    type="text" 
                    name="userName"
                    placeholder='введите ваше имя'
                    id="name"
                />
                <label htmlFor="age">ваш возраст</label>
                <input 
                    onChange={changeHandler} 
                    type="number" 
                    name="age"
                    placeholder='введите ваш возраст'
                    id="age"
                />
                
                <label htmlFor="desc">пару слов о себе</label>
                
                <input  
                    onChange={changeHandler} 
                    type="text"     
                    name="description"
                    placeholder='напишите о себе'
                    id="desc"
                />
                
          
                   <Link className="btn"
                        onClick={signIn} 
                       to='/login'
                       >signIn
                  </Link>
          
            </form>
           

        :
    
       <button className="btn"
           onClick={signOut}
           >signOut
       </button>
     }
     
    </div>
     )
    
}
        
  
  
export default LogIn