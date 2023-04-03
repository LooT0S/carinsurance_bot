const puppeteer = require('puppeteer');
const fs = require('fs');
const readline = require('readline');
const events = require('events');

const searchInData = async (data) => {
    let newData = '';
    const index = data.search(/виданий/gi);
    if (index === -1) throw new Error('error search in data');
    for (let i = index; ; i++) {
        if (data[i] === undefined) break;
        newData += data[i];
    }

    return newData;
};

const getData = async (serial, number, num_vehical) => {
    if (serial && number && num_vehical === null) {
        throw new Error('can not get data from mvs');
    }
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto('https://opendata.hsc.gov.ua/check-vehicle-registration-certificate/');
    await page.type('#seria_srtz', serial);
    await page.type('#number_srtz', number);
    await page.type('#car_number', num_vehical);
    await page.click('[type="submit"]');
    await page.waitForNavigation();
    const data = await page.$eval('.row', (elements) => elements.innerText);
    await browser.close();

    try {
        await writeDataVehicleToFile(num_vehical, await searchInData(data));
    } catch (err) {
        return err;
    }
};

const writeDataVehicleToFile = async (num_vehical, data) => {
    fs.writeFile(`${__dirname}/data/${num_vehical}.txt`, data, (err) => {
        if (err) throw err;
    });
};

const readDataFromMvs = async (num_vehical) => {
    const arrayMvsDataFromFile = [];
    try {
        const rl = readline.createInterface({
            input: fs.createReadStream(`${__dirname}/data/${num_vehical}.txt`),
            crlfDelay: Infinity,
        });

        rl.on('line', (line) => {
            arrayMvsDataFromFile.push(line);
        });
        await events.once(rl, 'close');
    } catch (error) {
        console.error(error);
    }
    return arrayMvsDataFromFile;
};

module.exports = { getData, writeDataVehicleToFile, readDataFromMvs };
