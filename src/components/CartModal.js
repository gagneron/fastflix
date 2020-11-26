import React from 'react';
import { Button, IconButton, Dialog, DialogTitle, DialogActions, DialogContent } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import DeleteIcon from '@material-ui/icons/Delete';

export default function CartModal(props) {
    const { onClose, open, selectedMovies, submit, handleMovieSelect } = props;

    const handleSubmit = () => {
        onClose();
        submit();
    }

    return (
      <Dialog id="checkoutModal" maxWidth="lg" onClose={onClose} open={open}>
        <DialogTitle>Cart
            <IconButton className="closeBtn" onClick={onClose}>
                <CloseIcon />
            </IconButton>
        </DialogTitle>
        <DialogContent>
           {selectedMovies.size === 0 ?
                "Cart is empty"
                :
                [...selectedMovies.keys()].map(imdbID => (
                    <div className="row" key={imdbID}>
                        <span>{selectedMovies.get(imdbID).Title}</span>
                        <IconButton className="deleteBtn" onClick={() => handleMovieSelect(selectedMovies.get(imdbID))}>
                            <DeleteIcon />
                        </IconButton>
                    </div>
            ))
        }
        </DialogContent>
        {selectedMovies.size > 0 &&
            <DialogActions>
                <Button variant="contained" color="primary" onClick={handleSubmit}>Checkout</Button>
            </DialogActions>
        }
      </Dialog>
    );
}