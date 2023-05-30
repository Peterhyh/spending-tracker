const express = require('express');
const incomeRouter = express.Router();
const Income = require('../models/Income');

incomeRouter.route('/')
    .get((req, res, next) => {
        Income.find()
            .then((incomes) => {
                console.log(incomes);
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(incomes);
            })
            .catch((err) => next(err));
    })
    .post((req, res, next) => {
        Income.create(req.body)
            .then((income) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(income);
            })
            .catch((err) => console.error(err));
    })
    .put((req, res, next) => {
        res.statusCode = 400;
        res.setHeader('Content-Type', 'text/plain');
        res.end('PUT method is not supported');
    })
    .delete((req, res, next) => {
        res.statusCode = 400;
        res.setHeader('Content-Type', 'text/plain');
        res.end('DELETE method is not supported');
    });

module.exports = incomeRouter;

