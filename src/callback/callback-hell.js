function cuadradoCallback(value, callback, callback2){
    console.log("Extayendo información.... puede tardar");
    setTimeout(() => {
        var nombre = "pepito"
        callback(value, value * value);
        callback2(nombre)
    }, 10000);
}

cuadradoCallback(4, (value, result) => {
    console.log(`${value}, ${result}`)
}, (nombre) => {
    console.log(`Su nombre luego de extraer la info es ${nombre}`)
    cuadradoCallback(
      10,
      (value, result) => {
        console.log(`${value}, ${result}`);
      },
      (nombre) => {
        console.log(`Su nombre luego de extraer la info es ${nombre}`);
        cuadradoCallback(20, (value, result) => {
            console.log(`${value}, ${result}`);
        }, (nombre) => {
            console.log(`Su nombre luego de extraer la info es ${nombre}`);
            cuadradoCallback(
              40,
              (value, result) => {
                console.log(`${value}, ${result}`);
              },
              (nombre) => {
                console.log(`Su nombre luego de extraer la info es ${nombre}`);
                cuadradoCallback(
                  7,
                  (value, result) => {
                    console.log(`${value}, ${result}`);
                  },
                  (nombre) => {
                    console.log(
                      `Su nombre luego de extraer la info es ${nombre}`
                    );
                  }
                );
              }
            );
        })
        
      }
    );
})

