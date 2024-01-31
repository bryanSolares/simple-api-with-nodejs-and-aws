import { Router } from "express";

const router = Router();

let characteres = [
  { id: 1, name: "Iron-Man" },
  { id: 2, name: "Capitan America" },
  { id: 3, name: "Hulk" },
  { id: 4, name: "Spider-Man" },
];

router.get("/health", (_, res) => {
  res.status(200).json({ message: "okidoki" });
});

router.get("/characters", (_, res) => {
  res.status(200).json({ message: "_", data: characteres });
});

router.post("/character", (req, res) => {
  const { name } = req.body;
  const id = new Date().getTime();
  characteres.push({ id, name });
  res.status(201).json({ message: "Character created succesfully!", data: characteres });
});

router.put("/character/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  if (!characteres.find((character) => character.id === parseInt(id))) {
    return res.status(400).json({ message: "Character not exists", data: characteres });
  }

  characteres.map((character) => {
    if (character.id === parseInt(id)) {
      character.name = name;
    }

    return character;
  });

  res.status(200).json({ message: "Character updated succesfully!", data: characteres });
});

router.delete("/character/:id", (req, res) => {
  const { id } = req.params;

  if (characteres.find((character) => character.id === parseInt(id))) {
    characteres = characteres.filter((character) => character.id !== parseInt(id));
    return res.status(200).json({ message: "Character deleted successfully!", data: characteres });
  }

  return res.status(400).json({ message: "Character not exist!", data: characteres });
});

export default router;
