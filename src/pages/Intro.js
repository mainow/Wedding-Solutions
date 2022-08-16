import { useEffect, useRef, useState } from "react";
import { GiftsManager } from "../GiftsManager";

function Intro() {

    const [giftList, setGiftList] = useState({0: 1, 1: 2});

    const bookedGift = {
        booker: useRef(),
        gift: useRef()
    }

    const sendWhatsAppConfirmation = () => {
        window.location.href = `https://wa.me/+595983889140?text=Te de Cocina de Arami. ${bookedGift.booker.current.value} - ${giftList[bookedGift.gift.current.value].name}`;
    }
    
    const handleSend = (e) => {
        e.preventDefault();
        GiftsManager.bookGift(bookedGift.booker.current.value, giftList[bookedGift.gift.current.value].name);
        console.log(bookedGift.gift.current.value);
        if (bookedGift.gift.current.value != 0 && bookedGift.gift.current.value != 64) {
            GiftsManager.updateGiftList(bookedGift.gift.current.value, giftList[bookedGift.gift.current.value].name);
        }
        sendWhatsAppConfirmation();
    }

    useEffect(() => GiftsManager.getGiftList(setGiftList), []);
    return (
        <div className="intro container-fluid py-5 d-flex justify-content-center">
            <div className="form container-fluid">
                <h1>Lista de regalos<span className="dot-color">.</span></h1>
                <p>Lista de posibles regalos para el Té de Cocina de Arami Hovy</p>
                <form onSubmit={handleSend}>
                    <label htmlFor="">Nombre</label>
                    <input type="text" required ref={bookedGift.booker} className="form-control" placeholder="" />
                    <div>
                        <label htmlFor="">Regalo</label>
                        <select name="" required ref={bookedGift.gift} className="form-select" id="">
                            {Object.keys(giftList).map(key => giftList[key].available && <option key={key} value={key}>{giftList[key].name}</option>)  }
                        </select>
                    </div>
                    <button type="submit" className="btn container-fluid mt-4">Enviar</button>
                </form>
            </div>
            <svg className="bottom-wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#bc8c3c" fillOpacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>    
        </div>
    );
}

export default Intro;