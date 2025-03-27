import express, { Request, Response } from 'express';
import routes from './routes/routes';

const app = express();

app.use(express.json());
app.use('/api', routes)

app.get('/', (req: Request, res: Response) => {
    res.send({msg: 'Sucesso teste'});
});

app.listen(3000, () => {
    console.log('Server on port 3000')
});