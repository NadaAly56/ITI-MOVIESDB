import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from 'react-router-dom';
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
import { UpdateMovies, getMovies } from '../../Redux/actionCreators';

export default function UpdateMovie() {

    const arr = useSelector((state)=>state)
    const [movie,setMovie] = useState({title:"", overview:"", vote_average:""})
    const {id} = useParams()
    const  dispatch = useDispatch();
    useEffect(()=>{
        // console.log(arr);
        // axios.get("http://localhost:3000/Data").then((res) => {
        //  dispatch(getMovies(res.data))})
        if (id) {
            const m = arr.find(m=> {
              return +m.id === +id
            })
            setMovie(m);
            
          }
     },[arr,id])
     
     const updateMovie = async (id,data) => {
      await axios.put(`http://localhost:3000/Data/${id}`, data).then(res => {
        dispatch(UpdateMovies(res.data))
      });
      }
const handleChange = (event) => {
    const {name,value} = event.target;
    setMovie({...movie, [name]:value})
}

    const handleSubmit = (e)=> {
        e.preventDefault();
            if(movie.title && movie.overview)  {
                updateMovie(id,movie)
                alert("Movie has been updated")}
            else alert("Please fill all data")
            }
    if (!movie) return <div>Loading....</div>
  return (
    <form onSubmit={handleSubmit}>
    <label>Title</label>
    <input type="text"  label="Title" value={movie.title} onChange={handleChange} name="title"/>
    <label>Overview</label>
    <input type="text" label="Overview" value={movie.overview} onChange={handleChange} name="overview"/>
    <label>Rate</label>
    <input type="text" label="Overview" value={movie.vote_average} onChange={handleChange} name="vote_average"/>
    <Button type="submit" className="a-Button-Custom a-button-active">Update</Button>
</form>
    
    
  );
    }