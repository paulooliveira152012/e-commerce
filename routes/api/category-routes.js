const router = require('express').Router();
const { Category, Product } = require('../../models');
const sequelize = require('sequelize')

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll({
    include: [
      //including associated products
      {
        model: Product,
        attributes: [
          'id',
          'product_name',
          'price',
          'stock',
          'category_id'
        ]
      }
    ]
  })
  //display content
  .then(dbCategoryData => res.json(dbCategoryData))
  //if there is an error then...:
  .catch(err => {
    console.log(err);
    res.status(500).json(err)
  });
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findOne({
    where: {
      id: req.params.id
    },
    include: [
      {
        model: Product,
        //PRODUCTS ATTRIBUTES IN THE OBJECT
        attributes: [
          'id',
          'product_name',
          'price',
          'stock',
          'category_id'
        ]
      }
    ]
  })
  //display content
  .then(dbCategoryData => res.json(dbCategoryData))
  //if there is an error then...:
  .catch(err => {
    console.log(err);
    res.status(500).json(err)
  });
});

//router to create a new category
router.post('/', (req, res) => {
  // create a new category
  Category.create({
    category_name: req.body.category_name
  })
  .then(dbCategoryData => res.json(dbCategoryData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

//router to update a new category
router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(
    req.body,
    {
      where: {
        id: req.params.id,
      }
    }
  )
  .then(dbCategoryData => {
    if(!dbCategoryData) {
      res.status(404).json({ message: 'No category found with this id' });
      return;
    }
    res.json(dbCategoryData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
});

//deleting a category
router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(dbCategoryData => {
    if (!dbCategoryData) {
      res.status(404).json({ message: 'No cateory found with this id' });
      return;
    }
    res.json(dbCategoryData);
  })
});

module.exports = router;
