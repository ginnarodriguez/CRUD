const http = new XMLHttpRequest();

// abrir http(metodo, url)
// crud
// create post
// read get
// update put/patch  
// delete delete

http.open("GET", "http://localhost:3000/perfil")
http.send();

http.onload= ()=>{
    const data = http.response;
    console.log(data);
}


console.log(http);