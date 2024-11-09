import sendMail from "./controllers/sendMail.js";
import express from "express" ;
const app = express()



import dotenv from "dotenv" ;
dotenv.config()


app.get('/',(req,res)=> {
    res.send("Happy New Year")
})

app.get("/email",sendMail)


app.listen(process.env.PORT || 9000 ,() => {
    console.log(`Server is listening on ${process.env.PORT}`);
    
})