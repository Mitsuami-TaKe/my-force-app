const Product = require('./model/product')

class fakeDB {

    constructor() {
        this.product = [
            {
                coverImage: "../../../assets/img/phone-cover.jpg",
                id: 1,
                name: 'Phone XL',
                stock: 100,
                price: 799,
                description: 'A large phone with one of the best screens',
                Heading: {
                    title: ['point1', 'point2', 'point3'],
                    value: [
                        'The only way to do great work is to love what you do.',
                        'In the middle of difficulty lies opportunity.',
                        'Believe you can and your halfway there.']
                }
            },
            {
                coverImage: "../../../assets/img/phone-cover.jpg",
                id: 2,
                name: 'Phone MiniMini',
                stock: 150,
                price: 699,
                description: 'A great phone with one of the best cameras',
                Heading: {
                    title: ['point1', 'point2', 'point3'],
                    value: [
                        'Dont count the days, make the days count.',
                        'The only limit to our realization of tomorrow will be our doubts of today.',
                        'Success is not final, failure is not fatal: It is the courage to continue that counts.']
                }
            },
            {
                coverImage: './assets/img/phone-cover.jpg',
                id: 3,
                name: 'Phone Standard',
                stock: 200,
                price: 299,
                description: 'normal',
                Heading: {
                    title: ['point1', 'point2', 'point3'],
                    value: [
                        'If you want to lift yourself up, lift up someone else.',
                        'Do not wait to strike till the iron is hot, but make it hot by striking.',
                        'The only person you are destined to become is the person you decide to be.']
                }
            },
            {
                coverImage: './assets/img/phone-cover.jpg',
                id: 4,
                name: 'Phone Great',
                stock: 250,
                price: 399,
                description: 'すごい！',
                Heading: {
                    title: ['point1', 'point2', 'point3'],
                    value: [
                        'The future belongs to those who believe in the beauty of their dreams.',
                        'Be the change that you wish to see in the world.',
                        'It always seems impossible until its done.']
                }
            }
        ]
    }

    async initDB() {
        //いったんさらにしてもっかいデータぶち込む
        await this.cleanDB()
        this.pushProductsToDB()
    }

    async cleanDB() {
        await Product.deleteMany({})
    }
    pushProductsToDB() {
        this.product.forEach(
            (product) => {
                const newProduct = new Product(product);
                newProduct.save()
            }
        )
    }

    seeDB() {
        this.pushProductsToDB()
    }
}
module.exports = fakeDB;