import { Container } from '@mui/material';
import './MoviePage.css'
import MovieDetailes from '../Components/MovieDetailes/movieDetailes.jsx';
import MovieList from '../Components/MovieList/movieList';
const MoviePage = () => {
    return <section>
        <Container fixed>
            <MovieDetailes></MovieDetailes>
            <div style={{height:'50px'}}></div>
            <MovieList></MovieList>
        </Container>
    </section>
}
export default MoviePage;