import express from "express";
import { Ship } from "../models/ship.js";
import multer from "multer";

const router = express.Router();
const mult = multer();

router.get("/", async (req, res) => {
  try {
    const ships = await Ship.find().lean();
    res.json(ships);
  } catch (err) {
    console.error(err);
    res.sendStatus(404);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const ship = await Ship.findById(req.params.id).lean();
    res.json(ship);
  } catch (err) {
    console.error(err);
    res.sendStatus(404);
  }
});

router.post("/", mult.none(), async (req, res) => {
  console.log(req.body);
  try {
    const newShip = new Ship({
      name: req.body.name,
      baujahr: req.body.baujahr,
      serialNumber: req.body.serialNumber,
      imageUrl: req.body.imageUrl,
      material: req.body.material,
      shipType: req.body.shipType,
    });

    const saveResult = await newShip.save();
    res.status(201).json(saveResult);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deleteResult = await Ship.deleteOne({ _id: req.params.id });
    if (deleteResult.deletedCount === 0) {
      return res.status(404).json({ error: "Ship not found" });
    }
    res.json({ message: "Ship deleted successfully" });
  } catch (error) {
    console.error("Error deleting ship:", error);
    res.status(500).json({ error: "Failed to delete ship" });
  }
});

router.patch("/:id", mult.none(), async (req, res) => {
  try {
    const shipId = req.params.id;
    const updates = req.body;
    const existingShip = await Ship.findById(shipId);
    if (!existingShip) {
      return res.status(404).json({ error: "Ship not found" });
    }
    Object.assign(existingShip, updates);
    await existingShip.save();
    res.json(existingShip);
  } catch (error) {
    console.error("Error editing ship:", error);
    res.status(500).json({ error: "Failed to edit ship" });
  }
});

export default router;
