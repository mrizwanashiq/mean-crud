import {
	create,
	findAll,
	findAllPublished,
	findOne,
	update,
	deleteById,
	deleteAll,
} from "../controllers/book.controller.js";

import express from "express";

const router = express.Router();

router.post("/", create);

router.get("/", findAll);

router.get("/published", findAllPublished);

router.get("/:id", findOne);

router.put("/:id", update);

router.delete("/:id", deleteById);

router.delete("/", deleteAll);

export default router;
