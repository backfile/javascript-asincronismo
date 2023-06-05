function fetchData(word){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            if(word === "hola"){
                resolve(word);
            }else{
                reject(word)
            }
            
        }, 10000)
    })
}


function onfulfilled(data){
    console.log(`La palabra ${data} fue escrita`)
}

function onrejected(err){
    console.log(`(error) La palabra ${err} no es la esperada`)
}

fetchData("hola")
.then(onfulfilled)
.catch(onrejected)
.finally(() => console.log("La ejecución termino"))

console.log("Esto se ejecuta primero")
console.log("Esto tambien");