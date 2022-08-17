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
        const csvGifts = "Opcion libre (personal)-=-Abrelatas, sacacorchos, tijeras para cocina-=-Aplastador de papas-=-Asaderas-=-Asaderas antiaderentes-=-Azucarera y salero-=-Balanza para cocina-=-Balde, escurridor, trapo de piso-=-Bandejas para  servir-=-Bases para utensilios calientes-=-Batidora Manual-=-Budinera-=-Cesta para pan-=-Colador de Fideos-=-Colador de Jugos-=-Condimenteros-=-Contenedores de  alimentos-=-Copas de Vino-=-Corta torta-=-Cortador de Pizza-=-Cuadritos decorativos de cocina-=-Cucharas de mesa  y cucharitas-=-Cucharas para servir-=-Cucharona,espumadera,espatula y martillo de carne-=-Cucharonas de madera-=-Cuchillos  de mesa -=-Cuchillos para cortar carne y afilador de cuchillo-=-De libre opcion personal-=-Delantal de Cocina-=-Ensaladeras-=-Escoba, palita, basurero-=-Escurridor de arroz-=-Escurridor de cubiertos-=-Exprimidor de ajo y limon-=-Frutera-=-Hervidora de leche-=-Individuales-=-Jarra medidora de vidrio-=-Jarra para jugo-=-Juego de compotera-=-Juego de tazas-=-Juego de Vasos-=-Latonas-=-Mantel para mesa cuadrada 4 personas-=-Molde  para hielo-=-Moldes para cup cakes-=-Moldes para tortas-=-Olla pororocera-=-Olla de tamaño mediano-=-Olla de tamaño pequeño-=-Opcion libre (personal)-=-Palo de amasar-=-Paño de  cocina , manoplas -=-Pava-=-Pincel Culinario-=-Pinza para fideos-=-Pinzas para ensaladas-=-Pirex  pequeño-=-Pirex Grande-=-Pirex mediano-=-Pizzera-=-Platitos para postre-=-Platos hondos-=-Platos playos-=-Porta condimentos-=-Porta vasos, servilletero, porta papel de cocina-=-Portacubiertos-=-Potes de vidrio-=-Rayador-=-Sarten mediana-=-Sarten omeletera-=-Sarten para fritar huevos-=-Soporte de detergente y esponja-=-Tabla de planchar-=-Tablas de picar carne ,verduras y frutas-=-Tapete de cocina-=-Tartera-=-Tenedores-=-Termo-=-Tetera-=-Tuppers de tamaño variado-=-Escurridor de lechuga-=-Procesador de verduras manual-=-Reloj de pared  para cocina-=-";
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