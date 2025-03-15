import {Link} from 'react-router-dom'
import { Typography, Card, CardContent, CardMedia } from '@mui/material'
import {CheckCircle} from '@mui/icons-material'

import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle} from '../utils/constants'

const VideoCard = ({video: {id: {
videoId
}, snippet}}) => (
    
    <Card sx={{width: { xs: '100%', sm:'358px', md: '320px'},boxShadow:'none', borderRadius: 4, ml: 5}}>
        <Link to={videoId ? `/video/${videoId}`: demoVideoUrl}>
            <CardMedia 
            image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
            alt={snippet?.title}
            sx={{width: {xs: '100%', sm: '358px', md:'320px'}, height: 180}}
            />
        </Link>
        <CardContent sx={{ backgroundColor:'#3131bb',
            height:'106px'
    }}>
        <Link to={videoId ? `/video/${videoId}`: demoVideoUrl}>
            <Typography variant="subTitle1" fontWeight="bold" color="#FFF">
                {snippet?.title.slice(0,100) || demoVideoTitle.slice(0,100)}
            </Typography>
        </Link>
        <br/>
        <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}`: demoChannelUrl}>
            <Typography variant="subTitle2" fontWeight="bold" color="gray">
                {snippet?.channelTitle.slice(0,30) || demoChannelTitle.slice(0,60)}
                
                <CheckCircle sx={{fontSize:"12", color:"gray", ml:"5px"}}/>
            </Typography>
        </Link>
    </CardContent>
    </Card>
  );


export default VideoCard