const jwt = require('jsonwebtoken');
const passwordHash = require('password-hash');
const mongoose = require('mongoose');
const User = require('../models/users');
const Articels = require('../models/articels');



let controllers = {}
//users
controllers.getUser = (req,res)=>{
  User.find({}, (err,data)=>{
    res.send(data)
  })
}

controllers.getId = (req,res)=>{
  User.findById(req.params.id, (err,data)=>{
    res.send(data)
  })
}

controllers.login = (req,res)=>{
  console.log('kesini');
  User.findOne({username : req.body.username},(err, data)=>{
    if(passwordHash.verify(req.body.password, data.password)){
      let token = jwt.sign({username : data.username}, 'sssss', { expiresIn : '1d' })
      res.send({token : token})
    }
  })
}

controllers.register = (req,res)=>{
  let newUser = new User({
    username : req.body.username,
    password : passwordHash.generate(req.body.password)
  })

  newUser.save((err, data)=>{
    res.send(data)
  })
}

controllers.updateUser = (req,res)=>{
  User.findById(req.params.id, (err, data)=>{
    res.send(data)
  })
}

controllers.deleteUser = (req, res)=>{
  User.findByIdAndRemove(req.params.id, (err,data)=>{
    res.send(data)
  })
}

// //articels
controllers.articelsAll = (req, res)=>{
  Articels.find({},(err,data)=>{
    res.send(data)
  })
}

controllers.articelsCreate = (req,res)=>{
  let newData = new Articels({
    title : req.body.title,
    content : req.body.content,
    category : req.body.category,
    author : req.body.author
  })

  newData.save((err, data)=>{
    res.send(data)
  })
}

controllers.articelsUpdate = (req,res)=>{
  Articels.findById(req.params.id, (err, data)=>{
    data.title = req.body.title || data.title,
    data.content = req.body.content || data.content,
    data.category = req.body.category || data.category

    data.save((err, data)=>{
      res.send(data)
    })
  })
}

controllers.articelsDelete = (req,res)=>{
  Articels.findByIdAndRemove(req.params.id, (err, data)=>{
    res.send({status: 'ok'})
  })
}

module.exports = controllers;

