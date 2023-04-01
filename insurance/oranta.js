const puppeteer = require('puppeteer');
require('dotenv').config({ path: '../,env' });

const screenshot = '/Users/bohdanziuman/Desktop/carinsurance/server/oranta.png';

const arrayDepartament = ['14dfaa7d-86e9-4e97-bf83-ca404c35240b', 'a0cf3456-34d4-430c-ac6b-c03dca8b4c02'];
const arrayTypeOfPerson = ['1', '2'];
const arrayTypeOfPolicy = ['1', '2'];
const arrayTariffPlan = [
    '5cc983fc-0f0d-4731-8320-73aa6b9e6803',
    'df182254-7e95-46ac-b7af-87688c340fee',
    '6e840f80-dd53-416b-b386-2d4c3f2aef3e',
    '4d4c6c36-76ad-4f9f-adb6-8a04687c48a2',
    'a34b1984-2f5c-4407-a743-034ce2e88fde',
];
const arrayFranchise = [
    '17cd2768-2e09-44ce-a165-b15350ad17e8',
    '47243f6a-653a-4cf9-90c4-58d577d6e2bb',
    'c9c47b4d-1e16-4b31-ba69-722f9cca509f',
];
const arrayRegistrationOfTheVehicleOwner = [
    '3b7e93c4-66d8-49ad-9264-ca96496c8bb3',
    'ef0b10ad-87bf-475e-8300-2ccfaf82e0e1',
    '7445b625-b3f2-42b6-89d6-bcfa294819f9',
];

const typeCar = [
    'A1 - Мотоцикли та моторолери до 300  см3',
    'A2 - Мотоцикли та моторолери 300 см3 та більше &nbsp;',
    'B1 - Легкові автомобілі з об’ємом двигуна до 1600 см3 &nbsp;',
    'B2 - Легкові автомобілі з об’ємом двигуна 1600 - 2000 см &nbsp;',
    'B3 - Легкові автомобілі з об’ємом двигуна 2000 - 3000 см3 &nbsp;',
    'B4 - Легкові автомобілі з об’ємом двигуна понад 3000 см3',
    'B5 -Легкові електромобілі виключно з силовим електродвигуном, крім гібридних авто',
    'C1 - Вантажні автомобілі вантажопідйомністю до 2 т',
    'C2 - Вантажні автомобілі вантажопідйомністю понад 2 т',
    'D1 - Автобуси до 20 місць',
    'D2 - Автобуси більше 20 місць',
    'E - Причепи та напівпричепи до вантажних автомобілей',
    'F - Причепи та напівпричепи до легкових автомобілей',
];
const fuelType = 'БЕНЗИН';
const countryOfRegistration = 'Україна';

const oranta_doc = async (
    department,
    typeOfPerson,
    typeOfPolicy,
    tariffPlan,
    franchise,
    registrationOfTheVehicleOwner,
    mvsData,
) => {
    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: {
            width: 1100,
            height: 600,
        },
    });
    const page = await browser.newPage();
    // login to oranta
    await page.goto(process.env.ORANTA_LOGIN_PAGE_URL);
    await page.type('#LoginMain_UserName', process.env.ORANTA_LOGIN);
    await page.type('#LoginMain_Password', process.env.ORANTA_PASSWORD);
    await page.click('[name="LoginMain$LoginButton"]');
    //await page.waitForNavigation();
    await page.waitForTimeout(1000);
    await page.click('[id="ctl00_LeftMenuContent_MyDataBlock1_MyDataListView_ctrl1_HyperLink"]');
    await page.waitForTimeout(2000);

    //відділення
    await page.select(
        'select#MtplView__Wizard__0_MtplFirstPageView__Calculator____BranchGID',
        arrayDepartament[department],
    );

    await page.waitForTimeout(1000);

    //тип особи
    await page.select(
        'select#MtplView__Wizard__0_MtplFirstPageView__Calculator____PersonType',
        arrayTypeOfPerson[typeOfPerson],
    );
    await page.waitForTimeout(1000);

    //тип полісу
    await page.select(
        'select#MtplView__Wizard__0_MtplFirstPageView__Calculator____ProductFormatType',
        arrayTypeOfPolicy[typeOfPolicy],
    );
    await page.waitForTimeout(1000);

    //тарифний план
    await page.select(
        'select#MtplView__Wizard__0_MtplFirstPageView__Calculator____AgentPermissionGID',
        arrayTariffPlan[tariffPlan],
    );
    await page.waitForTimeout(1000);

    //франшиза
    await page.select('#MtplView__Wizard__0_MtplFirstPageView__Calculator____Franchise', arrayFranchise[franchise]);
    await page.waitForTimeout(1000);

    //реєстрація власника за тз(тех паспортом)
    await page.select(
        '#MtplView__Wizard__0_MtplFirstPageView__Calculator____RegistrationType',
        arrayRegistrationOfTheVehicleOwner[registrationOfTheVehicleOwner],
    );
    await page.waitForTimeout(1000);

    //держ номер
    await page.type('#MtplView__Wizard__0_MtplFirstPageView__FindVehicle__RegistrationNumber', mvsData[1]);

    //марка
    const optionVehicle = (
        await page.$x(
            `//*[@id = "MtplView__Wizard__0_MtplFirstPageView__Vehicle____ManufacturerGID"]/option[text() = "${mvsData[5]}"]`,
        )
    )[0];
    const valueVehicle = await (await optionVehicle.getProperty('value')).jsonValue();

    await page.select('#MtplView__Wizard__0_MtplFirstPageView__Vehicle____ManufacturerGID', valueVehicle);
    await page.waitForTimeout(1000);

    //модель
    const optionVehicleModel = (
        await page.$x(
            `//*[@id = "MtplView__Wizard__0_MtplFirstPageView__Vehicle____ModelGID"]/option[text() = "${String(
                mvsData[6],
            )}"]`,
        )
    )[0];
    const valueVehicleModel = await (await optionVehicleModel.getProperty('value')).jsonValue();
    await page.select('select#MtplView__Wizard__0_MtplFirstPageView__Vehicle____ModelGID', valueVehicleModel);
    await page.waitForTimeout(1000);

    //модель з тех. паспорту
    //await page.type('#MtplView__Wizard__0_MtplFirstPageView__Vehicle____TechDocModel', mvsData[5]);

    //тип тз
    /*
    const optionVehicleType = (
        await page.$x(
            `//*[@id = "MtplView__Wizard__0_MtplFirstPageView__Vehicle____TypeGID"]/option[text() = "${typeCar[2]}"]`,
        )
    )[0];
    const valueVehicleType = await (await optionVehicleType.getProperty('value')).jsonValue();
    await page.select('select#MtplView__Wizard__0_MtplFirstPageView__Vehicle____TypeGID', valueVehicleType);
    await page.waitForTimeout(1000);
*/

    await page.select(
        'select#MtplView__Wizard__0_MtplFirstPageView__Vehicle____TypeGID',
        '96106dbf-1817-4136-a06c-e7ff47e5a993',
    );
    await page.waitForTimeout(1000);

    //адреса власника
    await page.click('#MtplView__Wizard__0_MtplFirstPageView__Vehicle____PostAddressObject_Select');
    page.waitForTimeout(1000);

    const optionRegin = (
        await page.$x(
            `//*[@id = "AddEditPostAddressView_dialog____PostAddressView___RegionTypes_0___Value"]/option[text() = "Полтавська область"]`,
        )
    )[0];
    const valueRegion = await (await optionRegin.getProperty('value')).jsonValue();
    await page.select('select#AddEditPostAddressView_dialog____PostAddressView___RegionTypes_0___Value', valueRegion);
    await page.waitForTimeout(1000);
    await page.type('#AddEditPostAddressView_dialog____PostAddressView____FullSettlementName', 'Полтава');
    await page.click('[id="AddEditPostAddressView_dialog______ButtonSave"]');
    await page.waitForTimeout(1000);

    //рік випуску тз
    await page.type('#MtplView__Wizard__0_MtplFirstPageView__Vehicle____ProducedDate', mvsData[4]);
    await page.waitForTimeout(1000);

    //Vin код номер кузова
    await page.type('#MtplView__Wizard__0_MtplFirstPageView__Vehicle____BodyNumber', mvsData[8]);
    await page.waitForTimeout(1000);

    //Номер авто
    await page.type('#MtplView__Wizard__0_MtplFirstPageView__Vehicle____RegistrationNumber', mvsData[1]);
    await page.waitForTimeout(1000);

    //Дата реєстрації
    await page.type('#MtplView__Wizard__0_MtplFirstPageView__Vehicle____RegistrationDate', mvsData[3]);
    await page.waitForTimeout(1000);

    //Обєм двигуна
    await page.type('#MtplView__Wizard__0_MtplFirstPageView__Vehicle____Capacity', mvsData[14]);
    await page.waitForTimeout(1000);
    //////////
    //Повна маса ТЗ
    await page.type('#MtplView__Wizard__0_MtplFirstPageView__Vehicle____TotalWeight', mvsData[11]);
    await page.waitForTimeout(1000);

    //Масса ТЗ без навантаження
    await page.type('#MtplView__Wizard__0_MtplFirstPageView__Vehicle____OwnWeight', mvsData[10]);
    await page.waitForTimeout(1000);

    //Кількість сидячих місць з місцем водія
    await page.type('#MtplView__Wizard__0_MtplFirstPageView__Vehicle____NumberOfSeats', mvsData[17]);
    await page.waitForTimeout(1000);

    //Тип пального
    const optionVehicleTypeFule = (
        await page.$x(
            `//*[@id = "MtplView__Wizard__0_MtplFirstPageView__Vehicle____Fuel"]/option[text() = "${fuelType}"]`,
        )
    )[0];
    const valueVehicleTypeFuel = await (await optionVehicleTypeFule.getProperty('value')).jsonValue();
    await page.select('select#MtplView__Wizard__0_MtplFirstPageView__Vehicle____Fuel', valueVehicleTypeFuel);
    await page.waitForTimeout(1000);

    //Колір
    await page.type('#MtplView__Wizard__0_MtplFirstPageView__Vehicle____Color   ', mvsData[16]);
    await page.waitForTimeout(1000);

    //Країна реєстрації
    const optionCountryOfRegistration = (
        await page.$x(
            `//*[@id = "MtplView__Wizard__0_MtplFirstPageView__Vehicle____CountryGID"]/option[text() = "${countryOfRegistration}"]`,
        )
    )[0];
    const valueountryOfRegistration = await (await optionCountryOfRegistration.getProperty('value')).jsonValue();
    await page.select('select#MtplView__Wizard__0_MtplFirstPageView__Vehicle____CountryGID', valueountryOfRegistration);
    await page.waitForTimeout(1000);

    await page.screenshot({
        path: screenshot,
        fullPage: true,
    });

    await page.screenshot({
        path: screenshot,
    });
    //await browser.close();

    console.log('See screenshot: ' + screenshot);
};

module.exports = { oranta_doc };
