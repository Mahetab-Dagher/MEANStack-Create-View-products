var express = require('express');
var router = express.Router();
var User = require('../models/user');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

router.post('/', function(req, res, next) {

    //console.log('here ==> ',req.body.password, req.body.email);
  var user = new User({
          userName: req.body.userName,
          password: bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10)),
          email: req.body.email,
          isAdmin: false,
          secretWord: bcrypt.hashSync(req.body.secretWord, bcrypt.genSaltSync(10))
          
      });
      var token = jwt.sign({user: user}, 'secret', {expiresIn: 7200});
  user.save(function(err, result){
       if(err){
           return res.status(500).json({
               title: 'sign up unsuccessfull',
               error: err
               
           });
       }

       res.status(201).json({
           title: 'sign up successfull',
           obj: result,
           token: token,
           userId: result._id,
           isAdmin: result.isAdmin
       });
   });
});

router.post('/signin',function(req, res, next){

    User.findOne({email: req.body.email}, function(err, user){
        if(err){
            return res.status(500).json({
                title: 'An error occured',
                error : err
            });
        }
        if(!user){
            return res.status(401).json({
                title: 'login failed !',
                error: {message: 'invalid login credentials'}
            });
        }
        if(!bcrypt.compareSync(req.body.password, user.password)){
            return res.status(401).json({
                title: 'login failed !',
                error: {message: 'invalid login credentials'}
            });
        }

        var token = jwt.sign({user: user}, 'secret', {expiresIn: 7200});
        res.status(200).json({
            message: 'Successfully logged in',
            token: token,
            userId: user._id,
            isAdmin : user.isAdmin
        });

    });
});

router.post('/check', function(req, res, next){
    User.findOne({email: req.body.email}, function(err, user){
        if(err){
            return res.status(500).json({
                title: 'An error occcured',
                error: err
            });
        }
        if(!user){
            return res.status(401).json({
                title: 'An error occured',
                error: {message: 'user not found'}
            });
        }

        if(!bcrypt.compareSync(req.body.secretWord, user.secretWord)){
            return res.status(401).json({
                title: 'An error occured',
                error: {message: 'user not found'}
            });
        }

        var token = jwt.sign({user: user}, 'secret', {expiresIn: 7200});
        res.status(200).json({
            message: 'Successfully found',
            token: token,
            userId: user._id,
            isAdmin : user.isAdmin
        });




    });
});
router.patch('/:id', function(req, res, next){
    User.findById(req.params.id, function(err, user){
        if(err){
            return res.status(500).json({
                title: 'An error occcured',
                error: err
            });
        }
        if(!user){
            return res.status(401).json({
                title: 'An error occured',
                error: {message: 'user not found'}
            });
        }
        user.password = bcrypt.hashSync(req.body.newPassword,bcrypt.genSaltSync(10));
        //console.log('--',req.body.newPassword)
        user.save(function(err, result){
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            var token = jwt.sign({user: user}, 'secret', {expiresIn: 7200});
            res.status(200).json({
                message: 'Password Updated Successfully',
                obj: result,
                token: token,
                isAdmin : user.isAdmin
            });
        });
    });
});
module.exports = router;