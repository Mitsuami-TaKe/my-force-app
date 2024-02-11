const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/dev');
const fakeDB = require('./fakeDB');

const productRoutes = require('./routes/products');
const path = require('path');

const DB_connectID ='mongodb+srv://test:testUser@atlascluster.jp5foxk.mongodb.net/?retryWrites=true&w=majority'

//DBとのコネクションをとる envがあればそれを使う
if (config.DB_URL) {
    DB_connectID =  config.DB_URL;
}
mongoose.connect(DB_connectID)
    .then(
        () => {
            //コネクションができたら製品情報に関するDAO(ノーコードのやつもDAOっていうのか知らんけど)
            const fakeDb = new fakeDB()
            fakeDb.initDB()
            console.log('Connected!')
        }
    );

const app = express();


const appPath = path.join( __dirname,'..','dist','browser');

app.use('/api/v1/products',productRoutes)

app.use(express.static(appPath));
app.get("*",function(req,res){
    res.sendFile(path.resolve(appPath,'index.html'))
})

const poot = process.env.PORT || '3001'

app.listen(poot, function () {
    if (poot == '3001') {
        console.log(`Can't read env.PORT, Therefore use poot=${poot}`);
    } else {
        console.log(`Can read env.POAT! env.PORT = ${poot}`);
    }
    console.log('hello node.express');
})