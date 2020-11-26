import React from 'react';
import Container from '@material-ui/core/Container';
import Pagination from '@material-ui/lab/Pagination';
import Grid from '@material-ui/core/Grid';

export default function SearchResults(props) {
    const {searchResult, selectedMovies, numResults, handleMovieSelect, numPages, page, handlePageChange} = props;
    return   (
        <React.Fragment>
            <Grid className="numResults" >
                {numResults} total results
            </Grid>
            <Grid container spacing={3} >
                {searchResult.map((movie) => {
                    let selectedClass = "poster";
                    if (selectedMovies.has(movie.imdbID)) {
                        selectedClass += " selected";
                    }

                    let poster;
                    if (movie.Poster === "N/A") {
                        poster = <div  key={movie.imdbID} className="emptyPoster">{movie.Title}</div>;
                    } else {
                        poster = <img key={movie.imdbID} width="100%" src={movie.Poster}  alt={movie.Title} />;
                    }

                    return <Grid className={selectedClass} key={movie.imdbID} item xs={6} sm={4} md={3} onClick={() => handleMovieSelect(movie)} >
                                <div>{poster}</div>
                            </Grid>
                })}
            </Grid>
            <Container className="pagination" maxWidth="lg" >
                <Pagination count={numPages} page={page} onChange={handlePageChange} />
            </Container>
        </React.Fragment>
    );
}