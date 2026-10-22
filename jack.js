const shamsa = document.querySelector(".shamsa");
const jose = document.querySelector(".jose");
const msifuni = document.querySelector(".msifuni");
const nameinput= document.getElementById("name");
let kamdomo = [];

async function mseti() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    blissful(data);
  } catch (error) {
    console.log("Error:", error);
  }
}

function blissful(data) {
  kamdomo = data;
  jose.innerHTML = " "; 
  data.forEach(user => {
    jose.innerHTML += `<div>
      <h1>${user.name}</h1>
      <h2>${user.email}</h2>
      <h3>${user.phone}</h3>
      </div>
      
        
    `;
    
  });
}

shamsa.addEventListener("click", mseti);
function search() {
  const jina = nameinput.value.tolowerCase();
  const results=kamdomo.filter(user => user.name.tolowercase().includes(jina)||
  user.email.tolowerCase().includes(jina) || user.phone.tolowerCase().includes(jina));
raha(results);
}

function raha(results) {
  if (results.length === 0) {
    killy.innerHTML = "<h1>hakuna matokeo</h1>";
    return;
  }
  // killy.innerHTML = " "; 
  // results.forEach(user => {
  //   killy.innerHTML += `<div>
  //     <h1>${user.name}</h1>
  //     <h2>${user.email}</h2>
  //     <h3>${user.phone}</h3>
  //     </div> `
  // });
  if(results){
    killy.innerHTML = " "; 
  
    killy.innerHTML += `<div>
      <h1>${user.name}</h1>
      <h2>${user.email}</h2>
      <h3>${user.phone}</h3>
      </div> `
  } else{
    killy.innerHTML = "<h1>hakuna matokeo</h1>";
  }
  };


  
  

msifuni.addEventListener("click", search);

