const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman'
}

const {nombre,edad, clave} = persona;



const usoContexto = ({nombre,edad,clave='SuperHero'}) => {

    
    //console.log(nombre,edad,clave)
    return{
        nombreClave: clave,
        anios:edad,
        latlng: {
            lat: 14.5657,
            lng: 23.4546
        }
    }
}


const avenger = usoContexto(persona);

//console.log(avenger)
//extraer objetos anidados
const {nombreClave,anios,latlng:{ lat, lng}} = avenger;

console.log(nombreClave,anios);
console.log(lat,lng)

//desestructuracion de arreglos
const personajes = ['Goku','Vegeta','Trunks'];
const [ , p1 ] = personajes;

console.log(p1);

