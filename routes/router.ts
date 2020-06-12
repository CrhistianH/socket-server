
import { Router, Request, Response } from 'express';
import Server from '../classes/server';

const ROUTER = Router();

ROUTER.get('/mensajes', (req: Request, res: Response) => {
    
    res.json({
        ok: true,
        mensaje: 'GET - Listo'
    });
});

ROUTER.post('/mensajes', (req: Request, res: Response) => {

    const cuerpo = req.body.cuerpo;
    const de = req.body.de;
    const sala = req.body.sala;

    const server = Server.instance;
    const payload = {
        cuerpo,
        de
    }

    server.io.emit('mensaje-nuevo', payload);
    
    res.json({
        ok: true,
        cuerpo,
        de
    });
});

ROUTER.post('/mensajes/:id', (req: Request, res: Response) => {

    const cuerpo = req.body.cuerpo;
    const de = req.body.de;
    const id = req.params.id;

    const server = Server.instance;

    const payload = {
        de,
        cuerpo
    }

    server.io.in(id).emit('mensaje-privado', payload);
    
    res.json({
        ok: true,
        cuerpo,
        de,
        id
    });
});

export default ROUTER;