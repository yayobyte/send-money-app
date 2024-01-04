import express, { Request, Response } from 'express';

const PORT: number = Number(process.env.PORT) || 3000;
const app = express();
app.disable('x-powered-by');

app.get('/', (req: Request, res: Response) => {
    res.json({ mensaje: 'hola' });
});

app.listen(PORT, () => {
    console.log(`listening on port http://localhost:${PORT}`);
});