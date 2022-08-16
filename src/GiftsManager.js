import { firestore } from "./firebase";
import { collection, addDoc, updateDoc, doc, setDoc, onSnapshot } from "@firebase/firestore"

class GiftsManager__ {
    constructor() {
        this.bookedGifts = collection(firestore, "booked-gifts");
        this.giftList = collection(firestore, "gift-list")
    }

    getGiftList(listSetter) {
        onSnapshot(doc(this.giftList, "gifts"), gifts => listSetter(gifts.data()));
    }

    createGiftList() {
        const csvGifts = "Opcion libre (personal)-=-Abrelatas, sacacorchos, tijeras para cocina-=-Asaderas-=-Azucarera y salero-=-Balde, escurridor-=-Bandejas para ensaladas-=-Bases para utensilios calientes-=-Batidora Manual-=-Budinera-=-Cesta para pan-=-Colador de Fideos-=-Colador de Jugos-=-Condimenteros-=-Contenedores de  alimentos-=-Copas de Vino-=-Corta torta-=-Cortador de Pizza-=-Cuadritos decorativos-=-Cucharas para servir-=-Cucharona, espumadera, espatula y martillo de carne-=-Cuchillo  de mesa  , cucharas, tenedor, cucharitas-=-Cuchillos para cortar carne y afilador de cuchillo-=-De libre opcion personal-=-Delantal de Cocina-=-Escoba, palita, basurero-=-Escurridor de arroz-=-Exprimidor de ajo y limon-=-Frutera-=-Hervidora de leche-=-Individuales-=-Jarra para jugo-=-Juego de compotera-=-Juego de tazas-=-Juego de Vasos-=-Latonas-=-Mantel para mesa cuadrada 4 personas-=-Molde  para hielo-=-Ollas de tamaño mediano-=-Ollas de tamaño pequeño-=-Paño de  cocina , manoplas -=-Pava-=-Pincel Culinario-=-Pirex mediano-=-Pirex pequeño-=-Pizzera-=-Platos playos, hondos y platos para postre-=-Porta condimentos-=-Porta vasos, servilletero, porta papel de cocina-=-Portacubiertos-=-Rayador-=-Sarten mediana-=-Sartén omeletero-=-Sarten para fritar huevos-=-Soporte de detergente y esponja-=-Tabla de planchar-=-Tablas de picar carne ,verduras y frutas-=-Tapete de cocina-=-Tartera-=-Termo-=-Tetera-=-Tuppers de tamaño variado-=-Opcion libre (personal)";
        const delimiter = "-=-";
        const gifts = {};
        csvGifts.split(delimiter).forEach((gift, index) => gifts[index] = {name: gift, available: true});
        setDoc(doc(this.giftList, "gifts"), gifts);
    }

    updateGiftList(id, name) {
        const update = {};
        [id].forEach(id => update[id] = {name: name, available: false})
        updateDoc(doc(this.giftList, "gifts"), update);
    }

    bookGift(bookerName, gift) {
        addDoc(this.bookedGifts, {
            "booker": bookerName,
            "gift": gift
        });
    }
}

const GiftsManager = new GiftsManager__();
export { GiftsManager };