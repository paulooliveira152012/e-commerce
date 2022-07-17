const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');
const { findOne } = require('../../models/Product');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  Tag.findAll({
    include: [
      // be sure to include its associated Product data
      {
        model: Product,
      }
    ]
  })
  .then(dbTagData => res.json(dbTagData))
  //if err
  .catch(err => {
    console.log(err);
    res.status(500).json(err)
  });
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  Tag.findOne({
    where: {
      id: req.params.id
    },
    // be sure to include its associated Product data
    include: [
      {
        model: Product,
      }
    ]
  })
  .then(dbTagData => res.json(dbTagData))
  //if there is an error then...:
  .catch(err => {
    console.log(err);
    res.status(500).json(err)
  });

});

// ------------------------------

//creating a new tag
router.post('/', (req, res) => {
  // create a new tag
  Tag.create({
    tag: req.body.tag
  })
  .then(dbTagData => res.json(dbTagData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
});

//updating a new tag
router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(
    req.body,
    {
      where: {
        id: req.params.id,
      }
    }
  )
  .then(dbTagData => {
    if(!dbTagData){
      res.status(404).json({ message: 'No tag found with this id' });
      return;
    }
    res.json(dbTagData);
  })
});

//Deleting a tag
router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(dbTagData => {
    if(!dbTagData) {
      res.status(404).json({ message: 'No tag found with this id'});
      return;
    }
    res.json(dbTagData)
  })
});

module.exports = router;
