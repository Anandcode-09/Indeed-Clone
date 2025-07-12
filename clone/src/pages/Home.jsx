import React from 'react';
import Header from '../components/Header';
import { Autocomplete, TextField, Button, Box , Typography , Stack } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SearchIcon from '@mui/icons-material/Search';
import Welcome from '../components/Welcome';
import Post from '../components/Post';
import Footer from '../components/Footer';

const jobSuggestions = [
  { label: 'Work from home' },
  { label: 'Fresher' },
  { label: 'Part time' },
  { label: 'Accountant' },
  { label: 'Teacher' },
  { label: 'Data analyst' },
  { label: 'Graphic designer' },
  { label: 'Internship' },
];

const locationSuggestions = [
  { label: 'Visakapatnam , Andhra Pradesh' },
  { label: 'Hyderabad,Telangana' },
  { label: 'New Dehli' },
  { label: 'Mumbai,Maharastra' },
  { label: 'Bangalore,karnataka' },
  { label: 'Gujarat , Gandhi Nagar' },
  { label: 'Chennai,Tamil Nadu' },
  { label: 'Kolkata' },
  { label: 'Pune' },
  { label: 'Locknow' },
];

const Home = () => {
  return (
    <div>
      <Header />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 1,
          mt: 10,
          flexWrap: 'wrap',
          boxSizing:100,
        }}
      >
        <Autocomplete
          disablePortal
          options={jobSuggestions}
          getOptionLabel={(option) => option.label}
          renderOption = {(props , option) => (
            <Box component="li" {...props}>
              <Stack direction="row" alignItems="center" gap = {3}>
                <SearchIcon fontSize='small'/> 
                <Typography>{option.label}</Typography>
              </Stack>
            </Box>
          )}
          sx={{width : 350 ,boxShadow:3 , borderRadius : 1 , height : 55}}
          renderInput={(params) => (
            <TextField
              {...params}
              placeholder="Job title, keywords, or company"
              InputProps={{
                ...params.InputProps,
                startAdornment: <SearchIcon sx={{ mr: 1 }} />,
              }}
            />
          )}
        />
            
        {/* Location Autocomplete */}
        <Autocomplete
          disablePortal
          options={locationSuggestions}
          getOptionLabel={(option) => option.label}
          renderOption={(props , option) => (
            <Box component="li" {...props}>
              <Stack direction="row" alignItems = "center" gap = {3}>
                <LocationOnIcon sx={{mr : 1}}/>
                <Typography>{option.label}</Typography>
              </Stack>
            </Box>
          )}
          sx={{ width: 350 , boxShadow : 3 , borderRadius: 1 , height : 55}}
          renderInput={(params) => (
            <TextField
              {...params}
              placeholder='City, state, zip code, or "remote"'
              InputProps={{
                ...params.InputProps,
                startAdornment: <LocationOnIcon sx={{ mr: 1 }} />,
              }}
            />
          )}
        />
        <Button
          variant="contained"
          color="primary"
          sx={{ height: 56, textTransform: 'none' , boxShadow : 3 ,borderRadius : 1}}
        >
          Find jobs
        </Button>
      </Box>
      <Welcome />
      <Post/> 
      <Footer />
    </div>
  );
};

export default Home;