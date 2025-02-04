import React from "react";
import { fetchTopMovies } from "../../serviços/Info";
import FilmeLista from "../listas/FilmeLista";
import { useState, useEffect } from "react";

function FilmesTop() {
const [top, setTop] = useState([]);
const [loading, setLoading] = useState(true);

async function getTop() {
    const top = await fetchTopMovies();
    setTop(top);
    setLoading(false);
    }

    useEffect(() => {
        getTop();
    }, []);

    return <FilmeLista movies={top} loading={loading} />;
}


export default FilmesTop;
