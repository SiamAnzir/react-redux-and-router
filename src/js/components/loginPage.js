import React, {useState} from 'react';
import auth from "../Auth/auth";
import {Redirect} from "react-router-dom";

localStorage.setItem("name", "siam");
localStorage.setItem("password", "12345");

const LoginPage = (props) => {

    return(
      <div>
          <h3>You must log in to view Premium Articles</h3>
          <form onSubmit={() =>{
              auth.logIn(() => { props.history.push("/premiumArticles");
              });
          }}>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" value={localStorage.getItem("name")} />
              <label htmlFor="password">Password</label>
              <input type="number" value={localStorage.getItem("password")}/>
              <button type="submit">Login</button>
          </form>
      </div>
    );
}


export default LoginPage;

/**
 * const initialForm = {name:"",password:""};
 const [user,setUser] = useState(initialForm);
 const handleInputChange = (event) => {
        const {name,value} = event.target;
        setUser({...user , [name]:value});
    }
 return(
 <div>
 <h3>You must log in to view Premium Articles {user.name}</h3>
 <form onSubmit={() =>{
              if(user.name === localStorage.getItem("name")){
                  auth.logIn(() => { props.history.push("/premiumArticles");
                  });
              } else{
                    return (
                        <Redirect to={{
                            pathname: "/login",
                            state:{
                                from: props.location
                            }
                        }}/>
                    );
              }
          }}>
 <label htmlFor="name">Name</label>
 <input type="text" id="name" placeholder="type Your Name" onChange={handleInputChange}/>
 <label htmlFor="password">Password</label>
 <input type="number" placeholder="type Your Password" onChange={handleInputChange}/>
 <button type="submit">Login</button>
 </form>
 </div>
 ); **/