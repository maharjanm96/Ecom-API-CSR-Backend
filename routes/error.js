const express = require('express');
const router = express.Router();

router.get("*", (req, res) => {

    res.setHeader("Content-Type", "text/html")
    res.send("YAAAAAAAAAAA not Found")
})

module.exports = router;