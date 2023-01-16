import express from "express";
import offerController from "../controllers/offer.controller.js";

const router = express.Router();


router.post("/api/filter", offerController.apiFilter);

router.get("/api/all", offerController.apiAll);


export default router;
