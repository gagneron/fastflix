import React from 'react';
import { Button, Container, AppBar, Toolbar, IconButton, InputBase} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

export default function TopBar(props) {
    const {changeSearch, checkChangeSearch, searchValue, handleModalOpen, selectedMovies, submitSearch} = props;
    return (
        <AppBar position="fixed" className="toolbar">
            <Container maxWidth="lg">
                <Toolbar>
                    <div className="searchArea">
                        <InputBase color="secondary" onChange={changeSearch} onKeyPress={checkChangeSearch} placeholder="Search for a movie" value={searchValue} />
                        <Button variant="contained" onClick={() => {submitSearch()}}>Search</Button>
                    </div>
                    <Typography variant="h6" align="center">
                        Fastflix
                    </Typography>
                    <IconButton onClick={handleModalOpen} className="cartBtn">
                        <ShoppingCartIcon />
                        {selectedMovies.size > 0 && <div>{selectedMovies.size}</div>}
                    </IconButton>
                </Toolbar>
            </Container>
        </AppBar>
    )
}