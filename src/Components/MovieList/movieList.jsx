import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './MovieList.css'
import { Button, CardActionArea, CardActions } from '@mui/material';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getMovies } from '../../Redux/actionCreators';
import DeleteConfirmation from './DeleteConfirmation';

export default function MovieList() {
    const arr = useSelector(state=>state);
    const dispatch = useDispatch();
    const img = "https://image.tmdb.org/t/p/w500/";
    React.useEffect(() => {
       axios.get("http://localhost:3000/Data").then((res) => {
         dispatch(getMovies(res.data))
        });
      }, [dispatch]);
  return (<div style={{display:'flex', justifyContent:'flex-start', gap:'20px', flexWrap:'wrap'}}>
    {arr&&arr.map((m)=>(
        
    <Card key={m.id} sx={{ width: 345, borderRadius:'30px', height:'550px', backgroundColor:'#141414' }}>
        <Link style={{textDecoration:'none', color:'#fff'}} to={`/detailes/${m.id}`}>
    <CardActionArea style={{height:'80%'}}>
      <CardMedia
      style={{height:'50%'}}
      className='img-height'
        component="img"
        height="140"
        image={m.poster_path?(m.poster_path.startsWith("data")?m.poster_path:img+m.poster_path):"https://healvets.org/wp-content/uploads/2021/10/ef3-placeholder-image.jpeg"}
        alt="green iguana"
      />
      <CardContent style={{height:'20%'}}>
        <Typography style={{fontSize:'27px'}} gutterBottom variant="h5" component="div">
          {m.title}
        </Typography>
      </CardContent>
    </CardActionArea>
    </Link>
    <CardActions style={{padding:'5% 7%',display:'flex', justifyContent:'center', gap:'10px', height:'20%'}}>
        <DeleteConfirmation id={m.id}></DeleteConfirmation>
      <Link to={`/${m.id}`} style={{fontSize:'25px',textDecoration:'none', borderRadius:'5px', padding:'12px 20px'}} className='button-update' size="small" color="primary">
        Update
      </Link>
    </CardActions>
  </Card>
        ))
    }</div>);
}