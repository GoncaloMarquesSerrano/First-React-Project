import React from "react";
import { fetchPopularTv } from "../../serviços/Info";
import SerieLista from "../listas/SerieLista";
import { useState, useEffect } from "react";

function SeriesPopular() {
const [popular, setPopular] = useState([]);
const [loading, setLoading] = useState(true);

async function getPopular() {
    const popular = await fetchPopularTv();
    setPopular(popular);
    setLoading(false);
    }

    useEffect(() => {
        getPopular();
    }, []);

    return <SerieLista series={popular} loading={loading} />;
}


export default SeriesPopular;