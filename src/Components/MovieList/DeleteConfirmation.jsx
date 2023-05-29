import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { FilterMovies } from '../../Redux/actionCreators';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function DeleteConfirmation({id}) {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = ()=> {
    setOpen(false);
    axios.delete(`http://localhost:3000/Data/${id}`);
    dispatch(FilterMovies(id));
  }
  return (
    <div>
      <Button style={{fontSize:'20px', padding:'10px 20px'}} className='button-active' onClick={handleClickOpen}>
        Delete
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle style={{backgroundColor:'#333', fontSize:'30px', color:'#fff', padding:'50px', textAlign:'center'}}>{"Are you sure you want to delete that movie?"}</DialogTitle>
        <DialogActions style={{backgroundColor:'#333'}}>
          <div style={{display:'flex', width:'80%'}}>
          <Button  className='d-Button-Custom' onClick={handleClose}>Cancel</Button>
          <Button className='d-Button-Custom d-button-active' onClick={handleDelete}>Delete</Button>
          </div>
          
        </DialogActions>
      </Dialog>
    </div>
  );
}