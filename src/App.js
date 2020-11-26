import './App.css';
import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TopBar from './components/TopBar'
import CartModal from './components/CartModal'
import SearchResults from './components/SearchResults'

function App() {
    const [searchValue, setSearchValue] = useState("");
    const [searchResult, setSearchResult] = useState([]);
    const [numResults, setNumResults] = useState(0);
    const [searchError, setSearchError] = useState("");
    const [selectedMovies, setSelectedMovies] = useState(new Map());
    const [numPages, setNumPages] = useState(0);
    const [page, setPage] = useState(1);
    const [modalOpen, setModalOpen] = React.useState(false);

    function handleModalOpen() {
      setModalOpen(true);
    };

    function handleModalClose(value) {
        setModalOpen(false);
    };

    function changeSearch(e) {
        setSearchValue(e.target.value);
    }

    function checkChangeSearch(e) {
        if (e.which === 13) {
            submitSearch();
        }
    }

    function submitSearch(newPage) {
        // TODO: make the api call from the server so we don't expose the apiKey
        const apiKey = "c9cf2b47";
        let searchEncoded = encodeURIComponent(searchValue);
        newPage = newPage || 1;
        const url = `https://www.omdbapi.com/?apikey=${apiKey}&s=${searchEncoded}&type=movie&page=${newPage}`;
        fetch(url)
        .then(res => res.json())
        .then(res => {
            if (res.Response === "True") {
                setSearchError("");
                setSearchResult(res.Search);
                setNumResults(res.totalResults);
                setNumPages(Math.ceil(res.totalResults / 10));
            } else {
                setSearchError(res.Error || "Error encountered in your search");
            }
        })
        .catch(error => {
            setSearchError(error || "Error encountered");
        });
    }

    function handleMovieSelect(movie) {
        if (selectedMovies.has(movie.imdbID)) {
            selectedMovies.delete(movie.imdbID)
            setSelectedMovies(new Map(selectedMovies));
        } else {
            setSelectedMovies(new Map(selectedMovies.set(movie.imdbID, movie)));
        }
    }

    function handlePageChange(e, newPage) {
        setPage(newPage);
        submitSearch(newPage);
    }

    function handleSubmitCart() {
        // TODO: do something with the selected items
        setSelectedMovies(new Map());
    }

    return (
        <React.Fragment>
            <TopBar
                changeSearch={changeSearch}
                checkChangeSearch={checkChangeSearch}
                searchValue={searchValue}
                handleModalOpen={handleModalOpen}
                selectedMovies={selectedMovies}
                submitSearch={submitSearch}
            />
            <Container id="selectionArea" maxWidth="lg" >
                { searchError ?
                    <Grid className="searchError">
                        Error: {searchError}
                    </Grid>
                    :
                    <SearchResults
                        numResults={numResults}
                        searchResult={searchResult}
                        selectedMovies={selectedMovies}
                        handleMovieSelect={handleMovieSelect}
                        numPages={numPages}
                        page={page}
                        handlePageChange={handlePageChange}
                    />
                }
            </Container>
            <CartModal
                selectedMovies={selectedMovies}
                open={modalOpen}
                onClose={handleModalClose}
                submit={handleSubmitCart}
                handleMovieSelect={handleMovieSelect}
            />
        </React.Fragment>
    );
}


export default App;
