const Dev = require('../models/Dev');
const ParseStringAsArray = require('../Utils/parseStringAsArray');

module.exports = {
    async index(request, response){
        const { latitude, longitude, techs } = request.query;

        const techsArray = ParseStringAsArray(techs);
        //console.log(request.query);
        //buscar todos os devs num raio de 10km
        // filtrar por tecnologia.

        const devs = await Dev.find({
            techs: {
               $in: techsArray, 
            },
            location: {
                $near: {
                    $geometry: {
                        type: 'Point',
                        coordinates: [longitude, latitude],
                    },
                    $maxDistance: 10000, 
                },
            },
    });
        return response.json({ devs });
    }
}