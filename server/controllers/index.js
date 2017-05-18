const jwt = require('jsonwebtoken');
const passwordHash = require('password-hash');
const mongoose = require('mongoose');
const User = require('../models/users');
const Articels = require('../models/articels');



let controllers = {}
//users
controllers.login = (req,res)=>{
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

// controllers.updateUser = (req,res)=>{
//
// }
//
// controllers.deleteUser = (req, res)=>{
//
// }

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
    title : req.body.title || data.title
    content : req.body.content || data.content
    category : req.body.category || data.category

    data.save((err, data)=>{
      res.send(data)
    })
  })
}

controllers.articelsDelete = (req,res)=>{

}

module.exports = controllers;

