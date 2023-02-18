const retornaArreglo = () =>{
    return ['ABC', 123];
}

 const [ letras , numeros ] = retornaArreglo();

 console.log(letras,numeros)

//tarea
//1 el primer valor del arr se llamara nombre
//2 se llamara setNombre
const usoStado = ( valor ) => {
    return [valor , ()=>{console.log('Hola mundo')}];

}

const [nombre , setNombre] = usoStado ('Goku');

//arr[1]()
console.log (nombre);
setNombre();