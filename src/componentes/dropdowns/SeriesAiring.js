import React from "react";
import { fetchAiringTv } from "../../serviços/Info";
import SerieLista from "../listas/SerieLista";
import { useState, useEffect } from "react";

function SeriesAiring() {
const [airing, setAiring] = useState([]);
const [loading, setLoading] = useState(true);

async function getAiring() {
    const airing = await fetchAiringTv();
    setAiring(airing);
    setLoading(false);
    }

    useEffect(() => {
        getAiring();
    }, []);

    return <SerieLista series={airing} loading={loading} />;
}


export default SeriesAiring;
