const PORT = 3000;
console.log(PORT);
console.log(PORT + 1);

// cannot update consts, but can update attributes
// eg

const CONFIG = {
  PORT: 3000,
};

console.log(CONFIG);
CONFIG.PORT = 3001;
console.log(CONFIG);
