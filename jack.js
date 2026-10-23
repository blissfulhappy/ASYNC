const shamsa = document.querySelector(".shamsa");
const jose = document.querySelector(".jose");
const nameinput= document.getElementById("name");
const killy = document.querySelector(".killy");
let kamdomo = [];
shamsa.addEventListener("click",async function mset() {
  

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    
    blissful(data);
  
  } catch (error) {
    console.log("Error:", error);
  }
});

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
    
    ``
  });
}



function search() {
  const jina = nameinput.value.trim().toLowerCase();
  const results=kamdomo.filter(user => user.name.toLowerCase().includes(jina)||
  user.email.toLowerCase().includes(jina) || user.phone.toLowerCase().includes(jina));
raha(results);
document.querySelector(".jose").style.display ="none";
}

function raha(results) {
  if (results.length === 0) {
    killy.innerHTML = "<h1>hakuna matokeo</h1>";
    return;
  }
  killy.innerHTML = " "; 
  results.forEach(user => {
    killy.innerHTML += `<div>
      <h1>${user.name}</h1>
      <h2>${user.email}</h2>
      <h3>${user.phone}</h3>
      </div> `
  });
}
nameinput.addEventListener("input", search);



