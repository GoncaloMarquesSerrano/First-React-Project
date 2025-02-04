import React from "react";
import { fetchTopTv } from "../../serviços/Info";
import SerieLista from "../listas/SerieLista";
import { useState, useEffect } from "react";

function SeriesTop() {
const [top, setTop] = useState([]);
const [loading, setLoading] = useState(true);

async function getTop() {
    const top = await fetchTopTv();
    setTop(top);
    setLoading(false);
    }

    useEffect(() => {
        getTop();
    }, []);

    return <SerieLista series={top} loading={loading} />;
}


export default SeriesTop;