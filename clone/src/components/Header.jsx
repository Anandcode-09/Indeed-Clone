
import {AppBar , Toolbar , styled} from '@mui/material';
import logo from './Indeed_logo.png';
import {Box , Typography } from '@mui/material';
import { useState } from 'react';

const StyledAppBar = styled(AppBar)(
    {
        background : 'white',
        height : '65px'
    }
)
const Header = () => {

    const [activeTab , setActiveTab] = useState("");
     
    const tabs = ["𝙷𝚘𝚖𝚎","𝚌𝚘𝚖𝚙𝚊𝚗𝚢 𝚁𝚎𝚟𝚒𝚎𝚠𝚜", "𝚜𝚊𝚕𝚊𝚛𝚢 𝙶𝚞𝚒𝚍𝚎𝚜"];
    const tabs1 = ["𝐒𝐢𝐠𝐧 𝐢𝐧 " ,"|","𝙴𝚖𝚙𝚕𝚘𝚢𝚎𝚛𝚜/𝙿𝚘𝚜𝚝 𝙹𝚘𝚋"];
    

    return ( 
       <StyledAppBar>
           <Toolbar>
            qasdW45
                   <img src={logo} alt='Indeed_logo.png' style ={{width:110 , marginBottom:15 , height:30}}/>
                <Box 
           sx = {{
            display : 'flex',
            gap:3,
            ml:5,
            pt : 4,
           }}>
              {tabs.map((tab) => (
                <Typography 
                key={tab}
                onClick = {() => setActiveTab(tab)}
                    sx={{ 
                        fontSize : 13,
                        fontWeight : 500 ,
                        cursor : 'pointer',
                        color : 'black',
                        paddingBottom : 2,
                        borderBottom : activeTab === tab ? '2  px solid #176896' : '3px solid Transperant',
                        "&: hover" : {
                            borderBottom : "2px solid #176896",
                    },
                    }}
                >
                    {tab}
                    
                </Typography>
              ))}
               </Box>
               <Box 
               sx = {{
                display : 'flex',
                gap  : 3,
                ml : 63,
                pt : 4,
               }}>
               {tabs1.map((tab) => (
                <Typography 
                key={tab}
                onClick = {() => setActiveTab(tab)}
                    sx={{ 
                        fontSize : 13,
                        fontWeight : 500 ,
                        cursor : 'pointer',
                        color : '#3271a8',
                        paddingBottom : 2,
                        borderBottom : activeTab === tab ? '2px solid #176896' : '3px solid Transperant',
                        "&: hover" : {
                            borderBottom : "2px solid #176896",
                    },
                    }}
                >
                    {tab}
                    
                </Typography>
              ))}
               </Box>
           </Toolbar>
          
       </StyledAppBar>
    );
};

export default Header;