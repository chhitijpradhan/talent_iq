import express from "express";
import { createSession, endSession, getActiveSessions, getMyRecentSessions, getSessionById, joinSession } from "../controllers/sessionController.js";
import { protectRoute } from "../middleware/protectRoute.js";
const router  =express.Router();

router.post('/',protectRoute, createSession);
router.post('/:id/join',protectRoute, joinSession);
router.post('/:id/end',protectRoute, endSession);
router.get('/active',protectRoute, getActiveSessions);
router.get('/my-recent',protectRoute, getMyRecentSessions);
router.get('/:id',protectRoute, getSessionById);

export default router;