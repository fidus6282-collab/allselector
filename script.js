// // Function declaration
// function firdavsBot() {
//     console.log("Bexruz jun!");
// }

// firdavsBot();

// // Function expression
// const sayBye = function() {
//     console.log("Goodbye!");
// };

// sayBye();

// // Arrow function
// const greet = () => {
//     console.log("Nma gap!");
// };

// greet();

// function greetUser(name) {
//     console.log('Salom ${name}!');
// }
// greetUser('Ali');

function Pressme() {
  alert("Siz Light Mode dasiz!");
  document.body.style.backgroundColor = "hsla(30, 46%, 73%, 0.66)";
  const all_p = document.querySelectorAll("p");

  const all_h1 = document.querySelectorAll("h1");

    const all_h3 = document.querySelectorAll("h3");

  all_h3.forEach((h3) => {
    h3.style.color = "black";
  })

  all_h1.forEach((h1) => {
    h1.style.color = 'black'
  });
  all_p.forEach((p) => {
    p.style.color = "black";
  });
}

function Clickbutton() {
  alert("Siz Dark Mode dasiz!");
  document.body.style.backgroundColor = "black";

  const all_p = document.querySelectorAll("p");
  const all_h1 = document.querySelectorAll("h1");
  const all_h3 = document.querySelectorAll("h3");
  const all_li = document.querySelectorAll("li");
  const all_btn = document.querySelectorAll("button");

  all_btn.forEach((btn) => {
    btn.style.background = "#FA9021";
  })

  all_h3.forEach((h3) => {
    h3.style.color = "white";
  })

  all_li.forEach((li) => {
    li.style.color = "white";
  })
  
  all_h1.forEach((h1) => {
    h1.style.color = "white"
  });

  all_p.forEach((p) => {
    p.style.color = "white";
  });
}
