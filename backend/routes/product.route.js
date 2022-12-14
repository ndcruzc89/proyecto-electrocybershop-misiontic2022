let express = require("express"),
  router = express.Router();

// Modelo Producto
let productSchema = require("../models/Product");

// Obtener la lista de Productos
router.route("/").get((req, res, next) => {
  productSchema.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Obtener un Producto
router.route("/get-product/:id").get((req, res, next) => {
  productSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Crear un Producto
router.route("/create-product").post((req, res, next) => {
  productSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log(data);
      res.json(data);
    }
  });
});

// Actualizar un Producto
router.route("/update-product/:id").put((req, res, next) => {
  productSchema.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (error, data) => {
      if (error) {
        console.log(error);
        return next(error);
      } else {
        res.json(data);
        console.log("Producto actualizado con éxito!");
      }
    }
  );
});

// Eliminar un Producto
router.route("/delete-product/:id").delete((req, res, next) => {
  productSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
});

module.exports = router;
