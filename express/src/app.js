import express from 'express';
import config from './config/index.js';
//aaba yo aap le sabai kaam garnu milxa express ma,
// server banaune, route haru define garne, middleware haru use garne, etc.

const app = express();

app.listen(config.port, () => {
    console.log(`Server is running on port ${config.port}....`);
});