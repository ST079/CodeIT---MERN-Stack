import express from 'express';
//aaba yo aap le sabai kaam garnu milxa express ma,
// server banaune, route haru define garne, middleware haru use garne, etc.

const app = express();

app.listen(5000,()=>{
    console.log("Server is running on port 5000");
});