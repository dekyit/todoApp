//DEPENDENCIES
const data= require('../models/data.js')
const express = require('express')

//CONFIG
const router = express.Router()

//ROUTES


//INDEX
router.get('/', (req,res) => {
    res.render('index', {
        tasks: data.tasks,
        complete: data.complete
    })
})

//CREATE
router.post('/', (req, res) => {
    data.tasks.push(req.body.add)
        res.redirect('/todos')
})

//UPDATE
router.put('/:todo_id', (req, res)=>{
    const foundToDo = data.tasks.splice(req.params.todo_id, 1)
    data.complete.push(foundToDo[0])
    res.redirect('/todos')
})

//DELETE
router.delete('/:todo_id', (req, res) => {
    const foundToDo = data.tasks.splice(req.params.todo_id, 1)
    res.redirect('/todos')
})
module.exports = router