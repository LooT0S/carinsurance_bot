const puppeteer = require('puppeteer');
const { getData, writeDataVehicleToFile, readDataFromMvs } = require('./mvs');
const { oranta_doc } = require('./oranta');
require('dotenv').config({ path: '../.env' });

const serial = 'СХМ';
const number = '575315';
const num_vehicle = 'ВІ7946СІ';

const insurance = async () => {
    //const data = await getData(serial, number, num_vehicle);
    //await writeDataVehicleToFile(num_vehicle, data);
    const arrayMvsDataFromFile = await readDataFromMvs('./ВІ7946СІ.txt');
    await oranta_doc(1, 1, 1, 1, 1, 0, arrayMvsDataFromFile);
};

insurance();

module.exports = { insurance };
