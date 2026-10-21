const shamsa = document.querySelector(".shamsa");
const jose = document.querySelector(".jose");

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
  jose.innerHTML = " "; 
  data.forEach(user => {
    jose.innerHTML += `<div>
      <h1>${user.name}</h1>
      <h2>${user.email}</h2>
      </div>
      
        
    `;
    
  });
}

shamsa.addEventListener("click", mseti);
mseti();