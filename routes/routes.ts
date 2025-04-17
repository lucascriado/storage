import { Router } from 'express';

import carAvailabilityRoutes from './r_routes/r_carAvailability';

const router = Router();

router.use('/api', carAvailabilityRoutes);

export default router;