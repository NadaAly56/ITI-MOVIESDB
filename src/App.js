import './App.css';
import NavBar from './Components/NavBar/navBar';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MoviePage from './Pages/MoviePage';
import { Provider } from 'react-redux';
import { store } from './Redux/store';
import AddMovie from './Components/AddMovie/addMovie';
import UpdateMovie from './Components/UpdateMovie/updateMovie';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
     
     <BrowserRouter>
     <NavBar></NavBar>
        <Routes>
          <Route path='/' element={<MoviePage></MoviePage>}></Route>
          <Route path='/detailes/:id' element={<MoviePage></MoviePage>}></Route>
          <Route path='/add' element={<AddMovie></AddMovie>}></Route>
          <Route path='/:id' element={<UpdateMovie></UpdateMovie>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
    </Provider>
  );
}

export default App;
