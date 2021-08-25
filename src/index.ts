import express, {Application, Request, Response} from 'express';

const app = express();

app.get("/", (req:Request,res:Response)=>{
    res.send("working")
})


app.listen(8080, ()=> console.log("server up"))