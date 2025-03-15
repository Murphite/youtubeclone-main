import {BrowserRouter, Routes, Route} from "react-router-dom"; 
import {Box} from '@mui/material';

import Navbar from "./components/Navbar";
import Feed from "./components/Feed";
import VideoDetail from "./components/VideoDetail";
import ChannelDetail from "./components/ChannelDetail";
import SearchFeed from "./components/SearchFeed";



const App = () => (
    <BrowserRouter>
        <Box sx={{ backgroundColor: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)'}}>
            <Navbar/>
            <Routes>
              <Route path="/" exact element={<Feed />}/>
              <Route path="/video/:id" element={<VideoDetail/>}/>
              <Route path="/channel/:id" element={<ChannelDetail/>}/>
              <Route path="/search/:searchTerm" element={<SearchFeed/>}/>
            </Routes>
        </Box>
    </BrowserRouter>

  )


export default App