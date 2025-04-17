import { Router } from 'express';
import { allCarsList } from '../../controllers/carAvailability'

const router = Router();

router.get('/carAvailability', async (req, res) => {
    try {
      const cars = await allCarsList();
      res.status(200).json(cars);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar disponibilidade de carros.' });
    }
  });

export default router;
