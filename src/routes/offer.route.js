import express from "express";
import offerController from "../controllers/offer.controller.js";

const router = express.Router();

router.get("/", offerController.getAllOffer);

router.post("/", offerController.getFilterOffer);

router.get("/api/filter", offerController.apiFilter);

router.get("/api/all", offerController.apiAll);


export default router;
