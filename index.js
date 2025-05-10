import express from  "express"
import bodyParser from "body-parser"
import router from "./routes";
const app = express()

app.use(bodyParser.json());
app.use(router)


app.listen(4000 , (err)=>{
    if(err) throw err 
    console.log(" le port ecoute sur 4000")
})

