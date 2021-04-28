import React from "react"
import auth from "../Auth/auth";

const premiumArticles = (props) => {
    return (
      <div>
          <h1>Premium Articles</h1>
          <ul>
              <li>Premium</li>
          </ul>
          <button onClick={() =>{
              auth.logOut(() => {
                  props.history.push();
              })
          }} > Log Out</button>
      </div>
    );
}

export default premiumArticles;
