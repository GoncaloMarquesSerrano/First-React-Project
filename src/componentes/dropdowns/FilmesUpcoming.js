import React from "react";
import { fetchUpcomingMovies } from "../../serviços/Info";
import FilmeLista from "../listas/FilmeLista";
import { useState, useEffect } from "react";

function FilmesUpcoming() {
const [upcoming, setUpcoming] = useState([]);
const [loading, setLoading] = useState(true);

async function getUpcoming() {
    const top = await fetchUpcomingMovies();
    setUpcoming(top);
    setLoading(false);
    }

    useEffect(() => {
        getUpcoming();
    }, []);

    return <FilmeLista movies={upcoming} loading={loading} />;
}


export default FilmesUpcoming;
