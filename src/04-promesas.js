import  getHeroeById,{getHeroesByOwner } from "./03-imp-exp";

// const promesa = new Promise((resolve, reject) =>{

//     setTimeout( ()=>{
//         const heroe = getHeroeById(1)
//         console.log(heroe)
//         //resolve();
//     },2000);
// });


// promesa.then( () =>{
//     console.log('Then de la promesa')
// }).catch( err => console.warn(err))

const getHeroeByIdAsync = ( id ) =>{
    return new Promise((resolve, reject) =>{

        setTimeout( ()=>{
            const heroe = getHeroeById(id)
            //console.log(heroe)
            if (heroe) {
                resolve(heroe);
            }else{
                reject('No se pudo encontrar el heroe');
            }
            //resolve();
        },2000);
    });
}

getHeroeByIdAsync(2)
.then( console.log)
.catch( err => console.warn(err))