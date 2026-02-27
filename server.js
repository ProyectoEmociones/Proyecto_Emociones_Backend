require("dotenv").config();
const app = require("./src/app");
const connectToMongo = require("./src/databaseConnection");

const PORT = process.env.PORT;

// Conectamos a MongoDB antes de arrancar el servidor
connectToMongo();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
