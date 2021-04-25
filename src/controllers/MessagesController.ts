import { Request, Response } from 'express';
import { MessagesService } from '../services/MessageService';


class MessagesController {
    async create(req: Request, res: Response){
        const { admin_id, text, user_id } = req.body;
        const messsagesServices = new MessagesService();

        const message = await messsagesServices.create({
            admin_id,
            text, 
            user_id
        })

        return res.json(message);
    }

    async showByUser(req: Request, res: Response){
        const { id } = req.params;

        const messsagesServices = new MessagesService();

        const list = await messsagesServices.listByUser(id);

        return res.json(list);
    }
}

export { MessagesController };