import dotenv from "dotenv";
dotenv.config();

import express from "express";
import { connectdb } from "./config/db.js";
import productRoutes from "./routes/product.route.js";

const app = express();
app.use(express.json());

// Database connect first, then start server
connectdb().then(() => {
    app.use("/api/products", productRoutes);

    app.listen(5000, () => {
        console.log("Server started at http://localhost:5000");
    });
}).catch(err => {
    console.error("Failed to connect to DB:", err);
});
