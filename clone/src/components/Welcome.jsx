
import React from "react";
import WelcomeImage from '../components/IndeedHome.webp';
import {Box} from '@mui/material';

const Welcome = () => (
     <div style={{textAlign : "center" , marginTop : 40}}>
      <Box sx = {{
         background  :'linear-gradient(to right, #e2e5eeff, #dfdfecff) ',
         py : 'none',
         display : 'flex',
         justifyContent : "center",
         alignItems : 'center',
      }}>
        <img src={WelcomeImage} alt = "IndeedHome" style={{width : '60%' , maxWidth : 500}}/>
        </Box>
      
        <h2>Welcome to Indeed!</h2>
        <p style={{fontSize : 20}}>Create an account or sign in to see your personalised job recommendations.</p>
        <button 
         style={{
            marginTop:3,
            backgroundColor:'#2557a7',
            padding : '10px 20px',
            borderRadius : 5 ,
            cursor : 'pointer',
            color : 'white',
            border : 'none',
            width : 160,
            height : 40,
            fontSize : 17, 
         }}
        > 𝐆𝐞𝐭 𝐒𝐭𝐚𝐫𝐭𝐞𝐝<span style={{fontsize: '10', marginLeft : 10,}} >→</span>  </button>
        
     </div>
);
    
export default Welcome ;