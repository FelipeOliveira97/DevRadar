const axios = require('axios');
const Dev = require('../models/Dev');
const ParseStringAsArray = require('../Utils/parseStringAsArray');

module.exports = {

    async index(request, response) {
        const devs = await Dev.find();

        return response.json(devs);
    },

    async store(request, response) {
        const { github_username, techs, latitude, longitude } = request.body;

        let dev = await Dev.findOne({ github_username });

        if (!dev) {
            const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);
            //Continuar
            const { name = login, avatar_url, bio } = apiResponse.data;

            const techsArray = ParseStringAsArray(techs);

            const location = {
                type: 'Point',
                coordinates: [longitude, latitude],
            }

            dev = await Dev.create({
                github_username,
                name,
                avatar_url,
                bio,
                techs: techsArray,
                location,
            })
        }
        // console.log(name, avatar_url, bio, github_username);
        return response.json(dev);
    },

    // async destroy(request, response) {
    //     const { github_username } = request.query;

    //     let dev = await Dev.findOneAndRemove({ github_username });


    //     return response.json(dev);
    //     //return response.json ({ message: "Deletado com sucesso"});
    // },

    // async update(request, response) {
    //     const {name, avatar_url, bio, techs} = request.body;
    //     const techsArray = ParseStringAsArray(techs);
    //     const dev = await Dev.findByIdAndUpdate(request.params.id, {
    //         name, avatar_url, bio, techs: techsArray
    //     }, {new: true });
    //     // const { github_username, techs, latitude, longitude } = request.body;
    //     // const dev = await Dev.findOne({ github_username });  
    //     // const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);
    //     // const { name = login, avatar_url, bio } = apiResponse.data;
    //     // const techsArray = ParseStringAsArray(techs);
    //     // const location = {
    //     //     type: 'Point',
    //     //     coordinates: [longitude, latitude],
    //     // }
    //     console.log(name, bio, avatar_url, github_username, techs);
    //     return response.json(dev)
    // },
};