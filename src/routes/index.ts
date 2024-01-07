import { Router } from 'express';
import APIV1 from './API/V1';

const routers = Router();

routers.get('/', (req, res) => res.send('Hello!'));

routers.get('/health', (req, res) => res.send('OK'));

routers.use('/', APIV1);

export default routers;
