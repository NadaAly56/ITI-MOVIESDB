import './MovieDetailes.css'
import Star from '@mui/icons-material/StarRate';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
const MovieDetailes = () => {
  const [movie, setMovie] = useState({
    title:"Ant-Man and the Wasp: Quantumania",
    overview:"Super-Hero partners Scott Lang and Hope van Dyne, along with with Hope's parents Janet van Dyne and Hank Pym, and Scott's daughter Cassie Lang, find themselves exploring the Quantum Realm, interacting with strange new creatures and embarking on an adventure that will push them beyond the limits of what they thought possible.",
    vote_average:"8.0",
    poster_path:"9Hk9qdCyce04VXNQuDXAK1d138E.jpg"
  })
    
  const arr = useSelector(state=>state);
  const img = "https://image.tmdb.org/t/p/w500/";
  const {id} = useParams()
  useEffect(()=>{
    
    if (id) {
      const m = arr.find(m=> {
        return +m.id === +id
      })
      setMovie(m);
      
    }
  },[arr,id])
  if (!movie) return <div>Looading</div>
    return (
        <div className="item">
      <div className="img-wrap">
      <div className='div' style={{backgroundImage:`url(${movie.poster_path?(movie.poster_path.startsWith("data")?movie.poster_path:img+movie.poster_path):"https://healvets.org/wp-content/uploads/2021/10/ef3-placeholder-image.jpeg"})`}} >
        <div>
            <div className='detailes'>
            <h1>{movie.title}</h1>
            <p>{movie.overview}</p>
            <div className='rating'>
                <Star></Star>
                {movie.vote_average}
            </div>
            </div>
            
        </div>
        </div>
      </div></div>
        
    )
}
export default MovieDetailes;