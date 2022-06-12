import React, { useState } from "react";
import { omdbEndPoint, APIKEY } from "../../utils/omdbApi";
import axios from "axios";

function SearchBar() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = (search) => {
    if (search.length > 1) {
      setLoading(true);
      axios
        .get(`${omdbEndPoint}?s=${search}&${APIKEY}`)
        .then((response) => {
          if (response.data.Search) {
            setMovies(response.data.Search);
            setLoading(false);
          }
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <div className="search-bar">
      <div className="search-bar__search">
        <input
          className="search-bar__input"
          type="text"
          placeholder="search..."
          onChange={(e) => fetchData(e.target.value)}
        />
      </div>
      {movies.length ? (
        movies.map((val, key) => {
          return (
            <div className="search-bar__results" key={key}>
              <div className="search-bar__wrapper">
                <div className="search-bar__card">
                  <div className="search-bar__image">
                    <img
                      className="search-bar__poster"
                      src={val.Poster}
                      alt="poster"
                    />
                  </div>
                  <div className="search-bar__details">
                    <p className="search-bar__title">{val.Title}</p>
                    <p className="search-bar__year">{val.Year}</p>
                    <button className="search-bar__button">view</button>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <div className="searc-bar__loading">
          <div className="search-bar__error">
            <p className="search-bar__message">find your favourite movie!</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default SearchBar;
