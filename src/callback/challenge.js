var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const API = "https://api.escuelajs.co/api/v1";

function fetchData(urlAPI, callback) {
  let xhttp = new XMLHttpRequest();
  xhttp.open("GET", urlAPI, true);
  xhttp.onreadystatechange = (event) => {
    if (xhttp.readyState === 4) {
      if (xhttp.status === 200) {
        callback(null, JSON.parse(xhttp.responseText));
      } else {
        const error = new Error("Error" + " " + urlAPI);
        return callback(error, null);
      }
    } 
  };
  xhttp.send();
}


fetchData(`${API}/products`, (error, response)=>{
  if(error){
    console.log(error)
  } else{
    fetchData(`${API}/products/${response[0].id}`, (error2, response2)=>{
      if (error2){
        console.log(error2)
      }else{
        fetchData(`${API}/products/${response2.id}`, (error3, response3)=>{
          if(error3){
            console.log(error)
          }else{
            console.log(response[0])
            console.log(response2.title)
            console.log(response3.category.name);
          }
        });
      }
    });
  }
});
