import  Express  from "express";
import apiRouter from "./routes/api.js"
import connection from "./connection.js";

const app = Express()

app.use(Express.json())
app.use(Express.urlencoded({ extended : true }))

app.use('/', apiRouter)

// catch 404 error
app.use((req, res) => {
    res.status(404).json({massage: '404_NOT_FOUND'})
})

//MongoDB Connection
connection()

app.listen(3000, () =>{
    console.log('Server started on port 3000')
})