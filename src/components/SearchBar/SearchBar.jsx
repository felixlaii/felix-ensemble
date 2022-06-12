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
    <div>SearchBar</div>
  )
}

export default SearchBar