const fs = require('fs');
const path = require('path');

const writerModel = require("../models/writer");
const writerPath = path.join(__dirname, "..", "data", "writers.json");

const readAll = (request, response) => {
    const writers = authorModel.readAll(request.params.id);
    response.send(writers)
};

const readIndividual = (request, response) => {
    const writer = writerModel.readIndividual(request.params.id);
    response.send(writer);
}

const createIndividual = (request, response) => {
    const new_writer = writerModel.createIndividual(request, response);
    response.send(new_writer);
 }

module.exports = {
    readAll,
    createIndividual,
    readIndividual
}
