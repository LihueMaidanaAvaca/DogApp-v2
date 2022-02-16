// const router = require('express').Router();
// const {default: axios} = require('axios');
// const {Dog, Temperament} = require('../../db');
// const {Op} = require('sequelize')


// router.get('/', async (req, res) => {
//     const {name}= req.query;
    

//         const response = await axios('https://api.thedogapi.com/v1/breeds');
        
//         const apiDogs = response.data.map(dog =>{
//             return {
//             id: dog.id,
//             name : dog.name,
//             height : dog.height.metric,
//             weight : wht = dog.weight.metric?.split('-'),
//             weightmin : ' '+wht[0],
//             weightmax : wht[1]+' ',
//             lifespan : dog.life_span,
//             temp : dog.temperament?.split(', '),
//             img: dog.image.url
//         }});
        
//         console.log('perro8',apiDogs[4])
                
//         const dataBaseDogs = await Dog.findAll({
//             where:{name: {[Op.like]:`%${name}%`}},
//             include: {
//                 model: Temperament,
//                 attributes : ['name'],
//                 through: {
//                     attributes: [],
//                 },
//             }})
//             // const every = await Promise.all([dballDogs, dogs])
//             res.send(apiDogs)
        
//         })
        
// router.post('/', async (req, res, next) => {

//     const {name, heightmin, heightmax, weightmin, weightmax, lifespan, temp, img} = req.body;
//     try {
//         let newDog = await Dog.create({
//             name ,
//             heightmin ,
//             heightmax ,
//             weightmin ,
//             weightmax ,
//             lifespan ,
//             img ,
//             created: 'true',
//             });
//         if (temp.length) {
//             temp.map(async (tem) => {
//                 try {
//                     let temper = await Temperament.findOne({where: {name: tem}});
//                     newDog.addTemperament(temper);
//                 } catch (err) {
//                     next(err);
//                 }
//             });
//         }
//         res.send('Dog Created!');
//     } catch (err) {
//         next(err);
//     }
//         });        


// module.exports = router;