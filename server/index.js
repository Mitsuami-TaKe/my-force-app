const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/dev');
const fakeDB = require('./fakeDB');

const productRoutes = require('./routes/products')

//DBとのコネクションをとる
mongoose.connect(config.DB_URL)
    .then(
        () => {
            //コネクションができたら製品情報に関するDAO(ノーコードのやつもDAOっていうのか知らんけど)
            const fakeDb = new fakeDB()
            fakeDb.initDB()
            console.log('Connected!')
        }
    );

const app = express();

app.use('/api/v1/products',productRoutes)

const poot = process.env.PORT || '3001'

app.listen(poot, function () {
    if (poot == '3001') {
        console.log(`Can't read env.PORT, Therefore use poot=${poot}`);
    } else {
        console.log(`Can read env.POAT! env.PORT = ${poot}`);
    }
    console.log('hello node.express');
})