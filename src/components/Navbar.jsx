import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';

import {logo} from '../utils/constants'
import SearchBar from './SearchBar';

const Navbar = () =>  (
    <Stack 
    direction="row" 
    alignItems="center" 
    p={2} 
    sx={{position: 'sticky', 
    background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)',
    top: 0, 
    justifyContent: 'space-between'}}
    >
        <Link to="/" style={{display:'flex', alignItems: 'center'}}>
          <img src={logo} alt="logo" height={45}/>
        </Link>
        <SearchBar/>

    </Stack>
  )


export default Navbar