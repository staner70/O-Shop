let env = require('dotenv').config();
const jwt = require("jsonwebtoken");
// const db = require("../models"); ici c'est pour sequelize , on doit trouver autre chose
const User = db.user;


const authJwt = {

    verifyToken = (req, res, next) => {
        let token = req.body["x-access-token"];
      
        if (!token) {
          return res.status(403).send({
            message: "No token provided!"
          });
        }
      
        jwt.verify(token, env.secret, (err, decoded) => {
          if (err) {
            return res.status(401).send({
              message: "Unauthorized!"
            });
          }
          req.userId = decoded.id;
          next();
        });
      };
      
      isAdmin = (req, res, next) => {
        User.findByPk(req.userId).then(user => {
          user.getRoles().then(roles => {
            for (let i = 0; i < roles.length; i++) {
              if (roles[i].name === "admin") {
                next();
                return;
              }
            }
      
            res.status(403).send({
              message: "Require Admin Role!"
            });
            return;
          });
        });
      };
      
      isModerator = (req, res, next) => {
        User.findByPk(req.userId).then(user => {
          user.getRoles().then(roles => {
            for (let i = 0; i < roles.length; i++) {
              if (roles[i].name === "moderator") {
                next();
                return;
              }
            }
      
            res.status(403).send({
              message: "Require Moderator Role!"
            });
          });
        });
      };
      
      isModeratorOrAdmin = (req, res, next) => {
        User.findByPk(req.userId).then(user => {
          user.getRoles().then(roles => {
            for (let i = 0; i < roles.length; i++) {
              if (roles[i].name === "moderator") {
                next();
                return;
              }
      
              if (roles[i].name === "admin") {
                next();
                return;
              }
            }
      
            res.status(403).send({
              message: "Require Moderator or Admin Role!"
            });
          });
        });
      };
      
};
module.exports = authJwt;