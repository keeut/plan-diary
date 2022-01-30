import { Router } from "express";
import { createDayPlan, editComplete, editPlan, editTodo,findPlan } from "../controller/dayPlan.js";

const router = Router();

router.post('/',createDayPlan)

router.put('/plan',editPlan)
router.put('/complete',editComplete)
router.put('/todo',editTodo)

router.get('/',findPlan)


export default router;