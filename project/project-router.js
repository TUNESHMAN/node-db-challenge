const express = require('express');
const {
  getAllProjects,
  getProjectById,
  insertNewProject,
  replaceProjectById,
  deleteProjectById,
} = require('./project-model');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const allProjects = await getAllProjects()
    res.json(allProjects)
  } catch (e) {
    console.log(e);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const theProjectIWant = await getProjectById(req.params.id)
    res.json(theProjectIWant)
  } catch (e) {
    console.log(e);
  }
});

router.post('/', async (req, res) => {
  try {
    const { Name, description} = req.body;
    const id = await insertNewProjectt({ Name, description })
    res.json({ message: `new project with id ${id} was created` })
  } catch (e) {
    console.log(e);
  }
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { Name, description } = req.body;
  try {
    const count = await replaceProjectById({ id, Name, description })
    res.json({ message: `${count} project got updated`})
  } catch (e) {
    console.log(e);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const count = await deleteProjectById(req.params.id)
    res.json({
      message: `${count} project got deleted`
    })
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
