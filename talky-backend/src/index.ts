import express, { Request, Response, NextFunction, json } from "express";
import dotenv from 'dotenv';
import cors from 'cors';


dotenv.config();

const app = express();

app.use(cors());
app.use(json());


app.use((error: Error, req: Request, res:Response, next:NextFunction) => {
    res.json({
        message: error.message
    })
})

const port = process.env.PORT || 3000;

app.listen(port, () => {        
  console.log(`Server listening at port :${port}`);
});