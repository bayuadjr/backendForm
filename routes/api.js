import express from 'express'

const router = express.Router()

router.get("/", (request, response) =>{
    console.log(request.body.umur)
    response.json({title: `Hello ${request.query.nama}, umur ${request.body.umur}`})
})
router.post("/", (request, response) =>{
    console.log(request.body.orang.nama)
    response.json({title: `Hello ${request.body.orang.nama}, umur ${request.body.orang.umur}`})
})
router.get("/submit", (request, response) =>{
    console.log(request.body.umur)
    response.json({title: `Hello submit`})
})

export default router