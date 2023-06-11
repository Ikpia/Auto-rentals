const CarDetails = require('../models/carDetails'); // import CarDetails model
const car1 = new CarDetails({
    name: 'Toyota Camry',
    price: 10000,
    image: 'img/car-rent-1.png',
    year: '2021',
    distance: '10000'
});
const car2 = new CarDetails({
    name: 'Corolla',
    price: 12000,
    image: 'img/car-rent-2.png',
    year: '2019',
    distance: '20000'
});
const car3 = new CarDetails({
    name: 'Avalon',
    price: 15000,
    image: 'img/car-rent-3.png',
    year: '2022',
    distance: '30000'
});
const car4 = new CarDetails({
    name: 'Highlander',
    price: 20000,
    image: 'img/car-rent-4.png',
    year: '2022',
    distance: '40000'
});
const car5 = new CarDetails({
    name: 'Toyota RAV4',
    price: 25000,
    image: 'img/car-rent-5.png',
    year: '2023',
    distance: '50000'
});
const car6 = new CarDetails({
    name: 'Toyota Venza',
    price: 30000,
    image: 'img/car-rent-6.png',
    year: '2023',
    distance: '60000'
});
const car7 = new CarDetails({
    name: 'Sienna',
    price: 35000,
    image: 'https://images.unsplash.com/photo-1580894744768-4a5b8b0aeaab?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dG95b3RvJTIwY2FtcmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80',
    year: '2023',
    distance: '70000'
});
const car8 = new CarDetails({
    name: 'Tacoma',
    price: 40000,
    image: 'https://images.unsplash.com/photo-1580894744768-4a5b8b0aeaab?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dG95b3RvJTIwY2FtcmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80',
    year: '2023',
    distance: '80000'
});
const car9 = new CarDetails({
    name: 'Toyota Tundra',
    price: 45000,
    image: 'https://images.unsplash.com/photo-1580894744768-4a5b8b0aeaab?ixid=Mnwx.MjA3fDB8MHxzZWFyY2h8Mnx8dG95b3RvJTIwY2FtcmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80',
    year: '2023',
    distance: '90000'
});

const cars = [car1, car2, car3, car4, car5, car6, car7, car8, car9];
const car = carDetails.insertMany(cars)
console.log(car);


module.exports = car;