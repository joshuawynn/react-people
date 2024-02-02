const express = require('express')
const router = express.Router()

const peopleCtrl = require('../controllers/people')


//Routes
//People Index Route
router.get("/", peopleCtrl.index)

//People Create Route
router.post("/", peopleCtrl.create)

// PEOPLE SHOW ROUTE
router.get("/:id", peopleCtrl.show)

// PEOPLE DELETE ROUTE
router.delete("/:id", peopleCtrl.delete);

// PEOPLE UPDATE ROUTE
router.put("/:id", peopleCtrl.update); 

module.exports = router