
import React from "react";
import {Link , Box , Typography} from '@mui/material';

const Post = () => {
    return (
        <Box sx = {{
            textAlign : 'center' , mt : 5 
        }}>
            <Typography variant="body1" >
                <Link herf = "#" underline="hover" sx = {{color : '#092d67ff' , fontWeight:600, cursor:'pointer'}}>
                 Post Your Resume
                </Link>
                - It only takes a few seconds
            </Typography>
             <Typography variant="body1" >
                <Link herf = "#" underline="hover" sx = {{color : '#092d67ff' , fontWeight:600,cursor:'pointer'}}>
                <underline> Post a Job on Indeed</underline>
                </Link>
            </Typography>
            <Typography variant="body2" sx={{ mt: 4 ,mb: 2 }}>
        <Link href="#" underline="hover" sx={{ color: '#2557a7', fontWeight: 500 }}>
          Indeed हिंदी में भी उपलब्ध है
        </Link>
      </Typography>

      <Typography variant="subtitle2" sx={{ mb: 2 }}>
        What’s trending on Indeed ▼
      </Typography>
        </Box>
    );
};

export default Post ;