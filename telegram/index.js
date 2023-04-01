const { Telegraf, Markup, Scenes, session } = require('telegraf');
const ScenOrantaPolicy = require('./ScenesOranta');
require('dotenv').config({ path: '/Users/bohdanziuman/Desktop/carinsurance/server/.env' });

const SceneOranta = new ScenOrantaPolicy();
const departamentScene = SceneOranta.SlectDepartament();
const typeOfPerson = SceneOranta.SelectTypeOfPerson();
const typeOfPolicy = SceneOranta.SelectTypeOfPolicy();
const tariffPlanElec = SceneOranta.SelectTariffPlanElec();
const tariffPlanPepr = SceneOranta.SelectTariffPlanPepr();
const franchise = SceneOranta.SelectFranchise();
const registrationOfTheVehicleOwner = SceneOranta.SelectRegistrationOfTheVehicleOwner();
const vehicleNum = SceneOranta.SelectVehicleNum();

const reginOwner = SceneOranta.SelectRegionOwner();

const crymeDistrict = SceneOranta.SelectCrymeDistrict();
const vinnytsiaDistrict = SceneOranta.SelectVinnytsiaDistrict();
const volynDistrict = SceneOranta.SelectVolynDistrict();
const dnipropetrovskDistrict = SceneOranta.SelectDnipropetrovskDistrict();
const donetskDistrict = SceneOranta.SelectDonetskDistrict();
const zhytomyrDistrict = SceneOranta.SelectZhytomyrDistrict();
const transcarpathianDistrict = SceneOranta.SelecTranscarpathianDistrict();
const zaporizhzhiaDistrict = SceneOranta.SelectZaporizhzhiaDistrict();
const kirovohradDistrict = SceneOranta.SelectKirovohradDistrict();
const kyivDistrict = SceneOranta.SelectKyivDistrict();
const luhanskDistrict = SceneOranta.SelectLuhanskDistrict();
const lvivDistrict = SceneOranta.SelectLvivDistrict();
const mykolaivDistrict = SceneOranta.SelectMykolaivDistrict();
const odesaDistrict = SceneOranta.SelectOdesaDistrict();
const poltavaDistrict = SceneOranta.SelectPoltavaDistrict();
const rivneDistrict = SceneOranta.SelectRivneDistrict();
const sumyDistrict = SceneOranta.SelectSumyDistrict();
const ternopilDestrict = SceneOranta.SelectTernopilDestrict();
const kharkivDistrict = SceneOranta.SelectKharkivDistrict();
const khersonDistrict = SceneOranta.SelectKhersonDistrict();
const khmelnytskyiDistrict = SceneOranta.SelectKhmelnytskyiDistrict();
const cherkasyDistrict = SceneOranta.SelectCherkasyDistrict();
const chernivtsiDistrict = SceneOranta.SelectChernivtsiDistrict();
const chernihivDistrict = SceneOranta.SelectChernihivDistrict();

const settlement = SceneOranta.SelectSettlement();
const streetIndex = SceneOranta.SelectStreetIndex();
const typeStreet = SceneOranta.SelectTypeStreet();
const titleStreet = SceneOranta.SelectTitleStreet();
const numHouse = SceneOranta.SelectNumHouse();
const numApart = SceneOranta.SelectNumApart();

const bot = new Telegraf(process.env.BOT_TOKEN);
bot.use(Telegraf.log());
const stage = new Scenes.Stage([
    departamentScene,
    typeOfPerson,
    typeOfPolicy,
    tariffPlanElec,
    tariffPlanPepr,
    franchise,
    registrationOfTheVehicleOwner,
    vehicleNum,
    reginOwner,
    crymeDistrict,
    vinnytsiaDistrict,
    volynDistrict,
    dnipropetrovskDistrict,
    donetskDistrict,
    zhytomyrDistrict,
    transcarpathianDistrict,
    zaporizhzhiaDistrict,
    kirovohradDistrict,
    kyivDistrict,
    luhanskDistrict,
    lvivDistrict,
    mykolaivDistrict,
    odesaDistrict,
    poltavaDistrict,
    rivneDistrict,
    sumyDistrict,
    ternopilDestrict,
    kharkivDistrict,
    khersonDistrict,
    khmelnytskyiDistrict,
    cherkasyDistrict,
    chernivtsiDistrict,
    chernihivDistrict,
    settlement,
    streetIndex,
    typeStreet,
    titleStreet,
    numHouse,
    numApart,
]);
bot.use(session());
bot.use(stage.middleware());

bot.start((ctx) => ctx.reply('Welcome'));

bot.start((ctx) => ctx.reply('Welcome'));
bot.command('new', async (ctx) => {
    await ctx.reply('Оберіть страхову компанію', {
        reply_markup: {
            inline_keyboard: [[{ text: 'Оранта', callback_data: 'oranta' }]],
        },
    });
});
bot.action('oranta', async (ctx) => {
    ctx.scene.enter('departament');
});
bot.launch();
