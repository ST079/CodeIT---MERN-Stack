import dotenv from "dotenv";
dotenv.config();
import express from "express";
import config from "./config/index.js";
import productRoutes from "./routes/product.route.js";
import bodyParser from "body-parser";
//aaba yo aap le sabai kaam garnu milxa express ma,
// server banaune, route haru define garne, middleware haru use garne, etc.
const app = express();
// app.get('/', (req, res) => {
//     res.send({
//         name: config.name,
//         version: config.version,
//         featureAdminEnabled: config.feature.admin.enabled,
//     });
// });

// app.get("/admin", (req, res) => {
//     if(config.feature.admin.enabled){
//         res.send("Welcome to the admin panel!");
//     } else {
//         res.status(403).send("Admin panel is disabled.");
//     }
// });
app.use(bodyParser.json())

app.use(process.env.VERSION + "/products", productRoutes);

app.listen(config.port, () => {
  console.log(`Server is running on port ${config.port}....`);
});
