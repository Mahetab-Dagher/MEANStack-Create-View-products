var express = require('express');
var router = express.Router();
var Product = require('../models/product');
var multer = require('multer');

var DIR = './public/uploads';
var upload = multer({
    dest: DIR,
    rename: function (fieldname, filename) {
      return filename + Date.now();
    },
    onFileUploadStart: function (file) {
      console.log(file.originalname + ' is starting ...');
    },
    onFileUploadComplete: function (file) {
      console.log(file.fieldname + ' uploaded to  ' + file.path);
    }
  }).single('file');

  var filename='';
  var originalname='';


router.get('/', function(req,res,next){
    Product.find()
    .exec(function(err, products){
        if(err){
            return res.status(500).json({
                title: 'A Error Occured',
                error: err
            });
        }
        if(!products){
            return res.status(500).json({
                title: 'A Error Occured',
                error: {message: 'no products found -_- '}
            });
        }
        res.status(201).json({
            title: 'success',
            obj: products
        });
    });
});

//router.use(multer().single('file'));
/*router.post('/upload',function(req, res, next){
    upload(req, res, function (err) {
        if (err) {
          return res.end(err.toString());
        }
        filename = req.file.filename;
        originalname = req.file.originalname;
        console.log('-_- ', req.body.description);
       res.json({
           filename: filename,
           originalname: originalname
       });
        //res.end('File is uploaded');
      });
});*/

router.post('/new', /*upload.single('file'),*/function(req, res, next) {

   /* var filename='';
    var originalname='';

    filename = req.file.filename;
    originalname = req.file.originalname;*/
    //console.log(' ~_~ ',req.files.medicine)
    /* upload(req, res, function (err) {
        if (err) {
          return res.end(err.toString());
        }
        
        //res.end('File is uploaded');
      }); */
      upload(req, res, function (err) {
        if (err) {
          return res.end(err.toString());
        }
        //filename = req.file.filename;
        //originalname = req.file.originalname;
        //console.log('-- ', req.file.path); //next time will search a  way to make use of this to display image
       // console.log('-_- ', req.body.description);
       /*res.json({
           filename: filename,
           originalname: originalname
       });*/
      //console.log(req.body.image.filename);
    var product = new Product({
        image: {filename: req.file.filename, originalname: req.file.originalname},
        description: req.body.description,
        price: req.body.price,
        newPrice: req.body.newPrice,
        quantity: req.body.quantity
       
    });
   
    product.save(function(err, result){
        if(err){
            return res.status(500).json({
                title: 'An Error Occured',
                error: err
            });
        }
        res.status(201).json({
            title: 'product created successfully ^_^',
            obj: result
        });
    });
});
});


module.exports = router;