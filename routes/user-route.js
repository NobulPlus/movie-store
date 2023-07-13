const express = require('express')
const { saveMovie } = require('../controller/test')
// const { test } = require('../controller/test')

const router = express.Router()

// router.post("/test", test)
router.post("/add-movie", saveMovie)

module.exports = router