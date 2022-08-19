import { useEffect, useState } from "react";
import { GiftsManager } from "../GiftsManager";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function GiftsPanel(props) {

    const [bookedGifts, setBookedGifs] = useState();
    const [giftList, setGiftList] = useState(false);
    const [showGiftListModal, setShowGiftListModal] = useState(false);

    useEffect(() => {
        GiftsManager.getBookedGifts(setBookedGifs);
        GiftsManager.getGiftList(setGiftList);
    }, []);
    
    return (
        <div className="container py-3">
            <div className="d-flex justify-content-between">
                <h3>Panel de resultados<span className="dot-color">.</span></h3>
                <Button variant="success" onClick={() => setShowGiftListModal(true)} className="rounded">Lista de regalos</Button>
            </div>
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
            <Modal show={showGiftListModal} size="lg" onHide={() => setShowGiftListModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Lista de regalo</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <table className="table">
                        <thead>
                            <tr>
                                <td>Regalo</td>
                                <td></td>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.keys(giftList).map((key) => <tr key={key}>
                                <td className={giftList[key].available && "text-secondary"}>{giftList[key].name}</td>
                            </tr>)}
                        </tbody>
                    </table>
                    <div className="d-flex justify-content-end gap-1">
                        <Button onClick={() => setShowGiftListModal(false)} variant="secondary">Close</Button>
                        <Button variant="primary">Save changes</Button>
                    </div>
                </Modal.Body>

            </Modal>
        </div>
    );
}

export default GiftsPanel;