const express = require('express');
const Product = require('../model/product')

const router = express.Router()


router.get('', function (req, res) {
    Product.find({})
        .then(result => {
            res.json({
                result
            })
            console.log('api叩かれたお')
        })
        .catch(err => {
            res.json({
                errorCode: 'E12301',
                errorMessage: err
            })
            console.log(err)
        });
})
router.get('/:productId', function (req, res) {
    const productId = req.params.productId
    Product.find({ id: productId })
        .then(result => {
            if (result && result.length > 0) {
                console.log('detailアピられたよ')
                return res.json({
                    result
                })
            } else {
                return res.status(422).send({
                    error: [
                        {
                            title: 'Product error',
                            detail: 'Products not found'
                        }
                    ]
                })
            }
        })
        .catch(err => {
            console.log(err)
            return res.json({
                errorCode: 'E12302',
                errorMessage: err
            })
        });
})
module.exports = router