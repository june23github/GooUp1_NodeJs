import express, { Request, Response } from "express";

const app = express();
const PORT : number = 5000;


app.get('/', (req: Request, res: Response) : void => {
    res.send('Hello, TypeScript!');
} );


app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
})