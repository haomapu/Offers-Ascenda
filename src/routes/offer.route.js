import express from "express";
import offerController from "../controllers/offer.controller.js";

const router = express.Router();

router.get("/", offerController.getAllOffer);

router.get("/test", offerController.test);


export default router;
