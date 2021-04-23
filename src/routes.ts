import { Router } from 'express';
import { SettingsController } from './controllers/SettingsController';

const routes = Router();

/*
    * Tipos de parametros
    * Routes Params => Parametros de rotas
    * Query Params => Filtros e buscas
    * Body Params => 

*/
const settingsController = new SettingsController();

routes.post('/settings', settingsController.create);

export { routes };