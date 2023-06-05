function fetchData(url, parametro, callback){
    setTimeout(()=>{
        let newUrl = url + "/" + parametro
        callback(newUrl)
    }, 4000)
}


fetchData("www.com.ar", "productos", (newUrl) =>{
    console.log(`La url es ${newUrl} y se puede acceder!`)
    fetchData(newUrl, "4", (newUrl2) => {
        console.log(`La url es ${newUrl2} y se puede acceder!`);
        fetchData(newUrl2, "stats", (finalUrl) => {
            console.log(`La url final es ${finalUrl}`)
        })
    })
})

console.log("Esto se ejecuta?")
console.log("Y esto?");