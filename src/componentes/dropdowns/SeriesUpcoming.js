import React from "react";
import { fetchUpcomingTv } from "../../serviços/Info";
import SerieLista from "../listas/SerieLista";
import { useState, useEffect } from "react";

function SeriesAiring() {
const [upcoming, setUpcoming] = useState([]);
const [loading, setLoading] = useState(true);

async function getUpcoming() {
    const upcoming = await fetchUpcomingTv();
    setUpcoming(upcoming);
    setLoading(false);
    }

    useEffect(() => {
        getUpcoming();
    }, []);

    return <SerieLista series={upcoming} loading={loading} />;
}


export default SeriesAiring;