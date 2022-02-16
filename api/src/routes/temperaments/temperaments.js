// const router = require('express').Router();
// const { response } = require('express');
// const {Temperament} = require('../../db');
// const {default: axios} = require('axios');

// router.get('/temperaments', async (req, res) => {
    
//     const response = await axios.get('https://api.thedogapi.com/v1/breeds/');
//     const apiTemperaments = response.data.map((dog) => {
//         return{
//             temperament: dog.temperament?.split(', '),
            
//         }});
//         return apiTemperaments
                    
//                 //     if (dog.temperament) {
//                 //         let temp = dog.temperament.replace(/\s/g, '').split(',');
//                 //         temp.map(async (tem) => {
//                 //             await Temperament.findOrCreate({
//                 //                 where: {name: tem},
//                 //                 defaults: {
//                 //                     name: tem,
//                 //                 },
//                 //             });
//                 //         });
//                 //     }
//                 // });
    
    
//     // const allTemperaments = await Temperament.findAll()
//     // console.log(temp)
//     // res.send(temp)
// });

// router.post('/temperaments', async (req, res) =>{
//     let temperamentDB = await Temperament.findAll({
//         where: {name : temp}
//     })
//     dogCreated.addTemperament(temperamentDB)
//     res.send('Done!')

// })

// module.exports = router;