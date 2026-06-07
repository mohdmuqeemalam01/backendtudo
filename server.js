import app from "./src/index.js";
import dotenv from "dotenv";

dotenv.config({ path: "./src/.env" });

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});