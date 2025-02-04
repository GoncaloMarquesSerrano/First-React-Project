import React from "react";
import { fetchPopularMovies } from "../../serviços/Info";
import FilmeLista from "../listas/FilmeLista";
import { useState, useEffect } from "react";

function FilmesPopular() {
const [popular, setPopular] = useState([]);
const [loading, setLoading] = useState(true);

async function getPopular() {
    const popular = await fetchPopularMovies();
    setPopular(popular);
    setLoading(false);
    }

    useEffect(() => {
        getPopular();
    }, []);

    return <FilmeLista movies={popular} loading={loading} />;
}


export default FilmesPopular;
