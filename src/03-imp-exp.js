import  heroes, {owners} from './data/heroes'
//console.log(owners);
const getHeroeById = (id) => {

    //return heroes.find((heroe) => {
        // if (heroe.id === id){
        //     return true;
        // };
    //})
    return heroes.find( heroe => heroe.id === id);
}
//console.log( getHeroeById(2));

export const getHeroesByOwner = (owned) => heroes.filter( heroe => heroe.owner === owned)

//console.log(getHeroesByOwner('Marvel'));

export default getHeroeById;