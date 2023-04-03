const puppeteer = require('puppeteer');
const { getData, writeDataVehicleToFile, readDataFromMvs } = require('../mvs/mvs.js');
const { oranta_doc } = require('./oranta');
require('dotenv').config({ path: '../.env' });

//const serial = 'СХМ';
//const number = '  ';
//const num_vehicle = 'ВІ7946СІ';

const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

const insurance = async (
    department,
    typeOfPerson,
    typeOfPolicy,
    tariffPlan,
    franchise,
    registrationOfTheVehicleOwner,
    serial,
    number,
    numVehicle,
    regionOwner,
    district,
    settlement,
    streetIndex,
    typeStreet,
    titleStreet,
    numHouse,
    numApart,
) => {
    const data = await getData(serial, number, numVehicle);
    //await writeDataVehicleToFile(numVehicle, data);
    await getData(serial, number, numVehicle);
    const arrayMvsDataFromFile = await readDataFromMvs(numVehicle);

    await oranta_doc(
        department,
        typeOfPerson,
        typeOfPolicy,
        tariffPlan,
        franchise,
        registrationOfTheVehicleOwner,
        regionOwner,
        district,
        settlement,
        streetIndex,
        typeStreet,
        titleStreet,
        numHouse,
        numApart,
        arrayMvsDataFromFile,
    );

    return 0;
};

app.post('/oranta', async (req, res) => {
    console.log(req.body);
    insurance(
        //req.body.department,
        '2313 Смілянське районне відділення НАСК "Оранта"',
        req.body.typeOfPerson,
        req.body.typeOfPolicy,
        req.body.tariffPlan,
        req.body.franchise,
        req.body.registrationOfTheVehicleOwner,
        req.body.serial,
        req.body.number,
        req.body.numVehicle,
        req.body.regionOwner,
        req.body.district,
        req.body.settlement,
        req.body.streetIndex,
        req.body.typeStreet,
        req.body.titleStreet,
        req.body.numHouse,
        req.body.numApart,
    );
    res.status(200).json({ msg: 'secs' });
});

app.listen(8888, '127.0.0.1', () => {
    console.log('server run');
});

module.exports = { insurance };
