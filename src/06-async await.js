

//const getImagenPromesa = () => new Promise ( resolve=> resolve('http://asdasd.com'))
//getImagenPromesa().then(console.log)

const getImage = async() => {


    try {
        const apiKey = 'FNVAsMChBAXFnUiuBc73QM0p0MEBKqvl';
        const respuesta = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey}`);
        const {data} = await respuesta.json();

        console.log(data)
        const { url } = data.images.original;
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img)
    } catch (error) {
            console.error(error)
    }
}
getImage();


// const apiKey = 'FNVAsMChBAXFnUiuBc73QM0p0MEBKqvl';

// const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey}`);

// peticion
// .then( resp => resp.json())
// .then( ({data}) =>{
//     console.log(data.images.original.url)
//     const { url } = data.images.original;
//     const img = document.createElement('img');
//     img.src = url;
//     document.body.append(img)
// })

// .catch( console.warn)