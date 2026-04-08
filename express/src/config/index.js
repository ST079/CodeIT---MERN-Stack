import dotenv from 'dotenv';

dotenv.config();

const config = {
    name: process.env.NAME || "",
    port: process.env.PORT || 5000,
    version: process.env.VERSION || "/api/v1"
};

export default config;