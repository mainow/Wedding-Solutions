import { useEffect, useState } from "react";
import { GiftsManager } from "../GiftsManager";

function GiftsPanel(props) {

    const [bookedGifts, setBookedGifs] = useState();

    useEffect(() => {
        GiftsManager.getBookedGifts(setBookedGifs)
    }, []);

    
    return (
        <div className="container">
            <h1>Panel de resultados</h1>
            <table className="table table-stripped">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Regalo</th>
                    </tr>
                </thead>
                <tbody>
                { bookedGifts &&
                    bookedGifts._snapshot.docChanges.map(doc => doc.doc.data.value.mapValue.fields && 
                    <tr>
                        <td>{doc.doc.data.value.mapValue.fields?.booker.stringValue}</td>
                        <td>{doc.doc.data.value.mapValue.fields?.gift.stringValue}</td>
                        <td>
                            <button className="action-btn btn btn-danger rounded">x</button>
                        </td>
                    </tr>
                    )
                }
                </tbody>
            </table>
        </div>
    );
}

export default GiftsPanel;