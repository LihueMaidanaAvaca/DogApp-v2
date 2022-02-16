// const { Router } = require('express');
// const dogs = require('./dogs/dogs.js');
// const temperaments = require('./temperaments/temperaments.js');


// const router = Router();

// router.use('/dogs', dogs);
// router.use('/temperaments', temperaments);







// module.exports = router;



const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const axios = require ('axios')
const {Temperament, Dog} = require ('../db')


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
const getApiInfo = async () => {
    const apiUrl = await axios.get('https://api.thedogapi.com/v1/breeds');
    const apiInfo = await apiUrl.data.map(dog => {
        return {
            id: dog.id,
            name: dog.name,
            height: dog.height.metric,
            weight : wht = dog.weight.metric?.split('-'),
            weightmin : ' '+wht[0],
            weightmax : wht[1]+' ',
            lifespan: dog.life_span,
            Temperaments: dog.temperament?.split(', ').map(t=> { 
                return{ name: t}}),
            image: dog.image.url
        };
    });
    return apiInfo;
};

const getDbInfo = async () => {
    return await Dog.findAll({
        include: {
            model: Temperament,
            through: {
                attributes: [],
            },
        }
    })
}

const getAllDogs = async () => {
    const apiInfo = await getApiInfo();
    const dbInfo = await getDbInfo();
    const infoTotal = dbInfo.concat(apiInfo);
    return infoTotal
}

router.get('/dogs', async (req, res) => {
    const name = req.query.name
    
    let dogsTotal = await getAllDogs();
    if(name){
        console.log('acawachin',dogsTotal)
        let dogName = await dogsTotal.filter(dog => dog.name.toLowerCase().includes(name.toLowerCase()))
        
        dogName.length ?
        res.status(200).send(dogName) :
        res.status(404).send('eso noun peeerri papi.juju')
    } else{
        res.status(200).send(dogsTotal)
    }
})

router.get('/temperaments', async (req, res)=>{
    const temperamentsUrl = await axios.get('https://api.thedogapi.com/v1/breeds')
    const temperamentsApi = temperamentsUrl.data.map(dog => {
        if(dog.temperament) {return dog.temperament.split(', ')}
    if(!dog.temperamentl){return dog.temperament=['Unknown']}})
    
    const tempEach = temperamentsApi.map(temp => {
        for (let i = 0; i < temp.length; i++) return temp[i]})
        
        
    tempEach.forEach(tem => {
        Temperament.findOrCreate({
            where: { name: tem}
        })
    })
    const allTemperaments = await Temperament.findAll();
    res.send(allTemperaments);    
})

router.post('/dog', async (req, res) =>{
    let{
        name,
        heightmin,
        heightmax,
        weightmin,
        weightmax,
        life_span,
        image,
        created,
        temperaments
    } = req.body

    let dogCreated = await Dog.create({
        name,
        heightmin,
        heightmax,
        weightmin,
        weightmax,
        life_span,
        image,
        created
    })
    
    temperaments.map(async t=> {
        let tDB = await Temperament.findOrCreate({
            where: { name : t}
        })
        console.log('aca estas mas cerca del error', tDB)
    dogCreated.addTemperament( tDB[0]) })
    console.log('esto y ya esta' ,dogCreated)
    res.json(dogCreated)
})

router.get('/dogs/:id', async (req, res)=>{
    const id= req.params.id;
    const dogsTotal = await getAllDogs()
    if(id){
        let dogId = await dogsTotal.filter(el => el.id == id)
        dogId.length?
        res.status(200).json(dogId) :
        res.status(404).send('this is not found :(')
    }
})


module.exports = router;

