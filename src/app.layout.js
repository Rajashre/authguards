import React from "react";
import auth from './auth';


export const Applayout = (props) => { 
    return(

    
    <div><h1>App Layout</h1>
    <button onClick = {()=>{
        auth.logout(() =>{
            props.histroy.push("/")

        });

    }}
    >
    Logout</button>
    </div>
    );
};