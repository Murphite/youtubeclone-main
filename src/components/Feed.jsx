import {useState, useEffect} from 'react'
import {Box, Stack, Typography} from '@mui/material'

import { fetchFromAPI } from '../utils/fetchFromAPI'

import SideBar from './SideBar'
import Videos from './Videos'



const Feed = () => {

 const [selectedCategory, setSelectedCategory] = useState('New')
 const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) => setVideos(data.items))
  }, [selectedCategory]);
  
  return (
    <Stack sx={{
      flexDirection:{
        sx: "column",
        md: "row"
      },
      background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)'
    }}>
      <Box sx={{
        height: {sx: 'auto', md: '92vh'},
        borderRight: '1px solid #020024 ', px:{sx: 0, md: 2}
      }}>
          <SideBar
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />

          <Typography className="copyright" variant="body2" sx={{mt: 1.5}}>
            Copyright 2023 Ifeanyi's Creations
          </Typography>
      </Box>

      <Box p={2} sx={{overflowY: 'auto', height: '90vh' , flex:2}}>
        <Typography variant="h4" fontWeight="bold" mb={2} sx={{color:'white'}}>
          {selectedCategory} <span style={{color: '#7272ed'}}>videos</span>
        </Typography>

        <Videos videos={videos}/>
      </Box>

    </Stack>
  )
}

export default Feed