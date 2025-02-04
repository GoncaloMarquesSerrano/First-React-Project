import React from "react";
import { fetchAiringMovies } from "../../serviços/Info";
import FilmeLista from "../listas/FilmeLista";
import { useState, useEffect } from "react";

function FilmesAiring() {
const [airing, setAiring] = useState([]);
const [loading, setLoading] = useState(true);

async function getAiring() {
    const airing = await fetchAiringMovies();
    setAiring(airing);
    setLoading(false);
    }

    useEffect(() => {
        getAiring();
    }, []);

    return <FilmeLista movies={airing} loading={loading} />;
}


export default FilmesAiring;
