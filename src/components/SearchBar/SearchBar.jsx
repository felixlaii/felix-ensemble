import React, { useState } from "react";
import { omdbEndPoint, APIKEY } from "../../utils/omdbApi";
import axios from "axios";

function SearchBar() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
  

  return (
    <div>SearchBar</div>
  )
}

export default SearchBar