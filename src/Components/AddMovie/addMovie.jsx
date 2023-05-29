import { Button, FormControl, TextField } from "@mui/material";
import './addMovie.css'
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { AddMovies } from "../../Redux/actionCreators";
const AddMovie = ()=> {
    const  dispatch = useDispatch();
    const [movie, setMovie] = useState({
        title:"",
        overview:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla doloribus provident nostrum optio nam cumque aut quis delectus? Assumenda, aperiam.",
        vote_average:"8.0",
        poster_path:""
      })

      const addMovie = async (data) => {
        await axios.post('http://localhost:3000/Data',data ).then(res => {
          dispatch(AddMovies(res.data))
         })
        }

      const handleChange = (event) => {
        const {name,value} = event.target;
        setMovie({...movie, [name]:value})
    }

    const handleImageUpload = (event) => {
        const img = event.target.files[0]
        let reader = new FileReader();
        reader.readAsDataURL(img);
        reader.onloadend = () => {
            setMovie((d)=>({...d, poster_path:reader.result}))
        }
      }
    
    const handleSubmit = (e)=> {
        e.preventDefault();
       
        if(movie.title && movie.overview)  {
          addMovie(movie)
          alert("Movie has been Added")}
      else alert("Please fill all data")
    }
    return(
        <form onSubmit={handleSubmit}>
            <label>Title</label>
            <input type="text"  label="Title" value={movie.title} onChange={handleChange} name="title"/>
            <label>Overview</label>
            <input type="text" label="Overview" value={movie.overview} onChange={handleChange} name="overview"/>
            <label>Poster</label>
            <input type="file" onChange={handleImageUpload} name='poster_path'/>
            <Button type="submit" className="a-Button-Custom a-button-active">Add</Button>
        </form>
    )
}
export default AddMovie;