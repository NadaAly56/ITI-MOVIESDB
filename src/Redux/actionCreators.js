export const getMovies = (data)=> (
    {
        type:"GET_MOVIES",
        payload:data
    }
)
export const FilterMovies = (id)=> (
    {
        type:"Filter_MOVIES",
        payload:id,
    }
)
export const AddMovies = (data)=> (
    {
        type:"ADD_MOVIE",
        payload:data
    }
)
export const UpdateMovies = (data)=> (
    {
        type:"UPDATE_MOVIE",
        payload:data
    }
)