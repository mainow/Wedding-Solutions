import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { GiftsManager } from "../GiftsManager";

function Setup(props) {

    useEffect(() => {
        GiftsManager.createGiftList();
    }, []);

    return <Navigate to="/lista-regalo"></Navigate>;
}

export default Setup;