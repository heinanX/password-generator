import express from 'express';
import cors from 'cors';
import { apiRoutes } from './resources/apiRoutes';
const app = express();
app.use(express.json());
app.use(cors({
    origin: ['http://localhost:3000/', 'http://localhost:5173/']
}));

app.listen(3000, () => { console.log('server is live at: http://localhost:3000/');
})

app.use('/api', apiRoutes);