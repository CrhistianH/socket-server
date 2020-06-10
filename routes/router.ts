
import { Router, Request, Response } from 'express';

const ROUTER = Router();

ROUTER.get('/mensajes', (req: Request, res: Response) => {
    
    res.json({
        ok: true,
        mensaje: 'GET - Listo'
    });
});

ROUTER.post('/mensajes', (req: Request, res: Response) => {

    const CUERPO = req.body.cuerpo;
    const DE = req.body.de;

    
    res.json({
        ok: true,
        CUERPO,
        DE
    });
});

ROUTER.post('/mensajes/:id', (req: Request, res: Response) => {

    const CUERPO = req.body.cuerpo;
    const DE = req.body.de;
    const ID = req.params.id;

    
    res.json({
        ok: true,
        CUERPO,
        DE,
        ID
    });
});

export default ROUTER;