
import React from "react";
import {Box , Link  , Grid , Divider} from "@mui/material";

const Footer = () => {
    return (
        <Box>
           <Divider
        sx={{
          width: '100%',
          mx: 'auto',
          my: 3,
          borderColor: '#d4d2d0',
        }}
      />
 
          <Grid
        container
        spacing={6}
        justifyContent="center"
        sx={{ fontSize: '14px', color: '#555' }}
      >
        {['Career advice',
'Browse jobs',
'Browse companies',
'Salaries',
'Indeed Events',
'Work at Indeed',
'Countries',
'About',
'Help',
'ESG at Indeed',
'Guidelines for safe job search',
'Post a job'].map((item, index) => (
          <Grid item key={index}>
            <Link href="#" underline="hover" sx={{ color: '#000' }}>
              {item}
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Footer;