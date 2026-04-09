import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.json(["Product 1", "Product 2", "Product 3"]);
});

export default router;