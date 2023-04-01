const { Scenes, Markup } = require('telegraf');

class SceneOrantaPolicy {
    SlectDepartament() {
        const departament = new Scenes.BaseScene('departament');
        departament.enter(async (ctx) => {
            await ctx.reply('Відділення:', {
                reply_markup: {
                    inline_keyboard: [
                        [{ text: '2313 Смілянське районне відділення НАСК "Оранта"', callback_data: 'oranta' }],
                        [{ text: '231341 ТПП 231341', callback_data: 'tpp' }],
                    ],
                },
            });
        });

        departament.action('oranta', async (ctx) => {
            await ctx.reply('Ви обрали: 2313 Смілянське районне відділення НАСК "Оранта"');
            ctx.scene.enter('typeOfPerson');
        });

        departament.action('tpp', async (ctx) => {
            await ctx.reply('Ви обрали: 231341 ТПП 231341');
            ctx.scene.enter('typeOfPerson');
        });
        return departament;
    }

    SelectTypeOfPerson() {
        const typeOfPerson = new Scenes.BaseScene('typeOfPerson');
        typeOfPerson.enter(async (ctx) => {
            await ctx.reply('Тип особи:', {
                reply_markup: {
                    inline_keyboard: [
                        [{ text: 'фіз. особа', callback_data: 'fiz' }],
                        //[{ text: 'юр. особа', callback_data: 'jur' }],
                    ],
                },
            });
        });

        typeOfPerson.action('fiz', async (ctx) => {
            await ctx.reply('Ви обрали: фіз. особа');
            ctx.scene.enter('typeOfPolicy');
        });

        typeOfPerson.action('jur', async (ctx) => {
            await ctx.reply('Ви обрали: юр. особа');
            ctx.scene.enter('typeOfPolicy');
        });
        return typeOfPerson;
    }

    SelectTypeOfPolicy() {
        const typeOfPolicy = new Scenes.BaseScene('typeOfPolicy');
        typeOfPolicy.enter(async (ctx) => {
            await ctx.reply('Тип полісу:', {
                reply_markup: {
                    inline_keyboard: [
                        [{ text: 'Електронний поліс', callback_data: 'elect' }],
                        [{ text: 'Паперовий поліс', callback_data: 'paper' }],
                    ],
                },
            });
        });

        typeOfPolicy.action('elect', async (ctx) => {
            await ctx.reply('Ви обрали: Електронний поліс');
            ctx.scene.enter('tariffPlanElec');
        });

        typeOfPolicy.action('paper', async (ctx) => {
            await ctx.reply('Ви обрали: Паперовий поліс');
            ctx.scene.enter('tariffPlanPepr');
        });
        return typeOfPolicy;
    }

    /////////

    SelectTariffPlanElec() {
        const tariffPlanElec = new Scenes.BaseScene('tariffPlanElec');
        tariffPlanElec.enter(async (ctx) => {
            await ctx.reply('Тарифний план:', {
                reply_markup: {
                    inline_keyboard: [
                        [{ text: 'ЕП Дисконт', callback_data: 'ep1' }],
                        [{ text: 'ЕП Стандарт 12П АП3 Нов', callback_data: 'ep2' }],
                        [{ text: 'ЕП Стандарт 1М_3 ФО 2022', callback_data: 'ep3' }],
                        [{ text: 'ЕП Стандарт 2М_2 ФО 2022', callback_data: 'ep4' }],
                        [{ text: 'ЕП Стандарт 8П ФО АП3 Нов', callback_data: 'ep5' }],
                    ],
                },
            });
        });

        tariffPlanElec.action('ep1', async (ctx) => {
            await ctx.reply('Ви обрали: ЕП Дисконт');
            ctx.scene.enter('franchise');
        });

        tariffPlanElec.action('ep2', async (ctx) => {
            await ctx.reply('Ви обрали: ЕП Стандарт 12П АП3 Нов');
            ctx.scene.enter('franchise');
        });

        tariffPlanElec.action('ep3', async (ctx) => {
            await ctx.reply('Ви обрали: ЕП Стандарт 1М_3 ФО 2022');
            ctx.scene.enter('franchise');
        });

        tariffPlanElec.action('ep4', async (ctx) => {
            await ctx.reply('Ви обрали: ЕП Стандарт 2М_2 ФО 2022');
            ctx.scene.enter('franchise');
        });

        tariffPlanElec.action('ep5', async (ctx) => {
            await ctx.reply('Ви обрали: ЕП Стандарт 8П ФО АП3 Нов');
            ctx.scene.enter('franchise');
        });

        return tariffPlanElec;
    }

    SelectTariffPlanPepr() {
        const tariffPlanPepr = new Scenes.BaseScene('tariffPlanPepr');
        tariffPlanPepr.enter(async (ctx) => {
            await ctx.reply('Тарифний план:', {
                reply_markup: {
                    inline_keyboard: [
                        [{ text: 'Стандарт 12П АП3 Нов', callback_data: 'p1' }],
                        [{ text: 'Стандарт 1М_3 ФО 2022', callback_data: 'p2' }],
                        [{ text: 'Стандарт 2М_2 ФО 2022', callback_data: 'p3' }],
                        [{ text: 'ЕП Стандарт 2М_2 ФО 2022', callback_data: 'p4' }],
                        [{ text: 'Стандарт 8П ФО АП3 Нов', callback_data: 'p5' }],
                    ],
                },
            });
        });

        tariffPlanPepr.action('p1', async (ctx) => {
            await ctx.reply('Ви обрали: Стандарт 12П АП3 Нов');
            ctx.scene.enter('franchise');
        });

        tariffPlanPepr.action('p2', async (ctx) => {
            await ctx.reply('Ви обрали: Стандарт 1М_3 ФО 2022');
            ctx.scene.enter('franchise');
        });

        tariffPlanPepr.action('p3', async (ctx) => {
            await ctx.reply('Ви обрали: Стандарт 2М_2 ФО 2022');
            ctx.scene.enter('franchise');
        });

        tariffPlanPepr.action('p4', async (ctx) => {
            await ctx.reply('Ви обрали: ЕП Стандарт 2М_2 ФО 2022');
            ctx.scene.enter('franchise');
        });

        tariffPlanPepr.action('p5', async (ctx) => {
            await ctx.reply('Ви обрали: Стандарт 8П ФО АП3 Нов');
            ctx.scene.enter('franchise');
        });

        return tariffPlanPepr;
    }

    SelectFranchise() {
        const franchise = new Scenes.BaseScene('franchise');
        franchise.enter(async (ctx) => {
            await ctx.reply('Франшиза:', {
                reply_markup: {
                    inline_keyboard: [
                        [{ text: '0 грн', callback_data: 'zero' }],
                        [{ text: '1500 грн', callback_data: 'one' }],
                        [{ text: '2500 грн', callback_data: 'two' }],
                    ],
                },
            });
        });

        franchise.action('zero', async (ctx) => {
            await ctx.reply('Ви обрали: франшизу 0 грн');
            ctx.scene.enter('registrationOfTheVehicleOwner');
        });

        franchise.action('one', async (ctx) => {
            await ctx.reply('Ви обрали: франшизу 1000 грн');
            ctx.scene.enter('registrationOfTheVehicleOwner');
        });

        franchise.action('two', async (ctx) => {
            await ctx.reply('Ви обрали: 2500 грн');
            ctx.scene.enter('registrationOfTheVehicleOwner');
        });
        return franchise;
    }

    SelectRegistrationOfTheVehicleOwner() {
        const registrationOfTheVehicleOwner = new Scenes.BaseScene('registrationOfTheVehicleOwner');
        registrationOfTheVehicleOwner.enter(async (ctx) => {
            await ctx.reply('Реєстрація Власника ТЗ(за тех. паспортом):', {
                reply_markup: {
                    inline_keyboard: [
                        [{ text: 'Україна', callback_data: 'ukr' }],
                        [{ text: 'Інша країна', callback_data: 'othercontry' }],
                        [{ text: 'Тимчасові номери', callback_data: 'tmpnum' }],
                    ],
                },
            });
        });

        registrationOfTheVehicleOwner.action('ukr', async (ctx) => {
            await ctx.reply('Ви обрали: реєстрація Україна');
            ctx.scene.enter('vehicleNum');
        });

        registrationOfTheVehicleOwner.action('othercontry', async (ctx) => {
            await ctx.reply('Ви обрали: реєстрація в іншій країні');
            ctx.scene.enter('vehicleNum');
        });

        registrationOfTheVehicleOwner.action('tmpnum', async (ctx) => {
            await ctx.reply('Ви обрали: тимчасові номера');
            ctx.scene.enter('vehicleNum');
        });

        return registrationOfTheVehicleOwner;
    }

    SelectVehicleNum() {
        const vehicleNum = new Scenes.BaseScene('vehicleNum');
        vehicleNum.enter(async (ctx) => {
            await ctx.reply('Введіть номер тарнспортного засобу:');
        });

        vehicleNum.on('text', async (ctx) => {
            await ctx.reply(`Ви вели номер ${ctx.message.text}`);
            ctx.scene.enter('regionOwner');
        });
        return vehicleNum;
    }

    SelectRegionOwner() {
        const regionOwner = new Scenes.BaseScene('regionOwner');
        regionOwner.enter(async (ctx) => {
            await ctx.reply('Вкажіть область власника:', {
                reply_markup: {
                    inline_keyboard: [
                        [{ text: 'АР Крим', callback_data: 'crimea' }],
                        [{ text: 'Вінницька область', callback_data: 'vinnytsiaRg' }],
                        [{ text: 'Волинська область', callback_data: 'volynRg' }],
                        [{ text: 'Дніпропетровська область', callback_data: 'dnipropetrovskRg' }],
                        [{ text: 'Донецька область', callback_data: 'donetskRg' }],
                        [{ text: 'Житомирська область', callback_data: 'zhytomyrRg' }],
                        [{ text: 'Закарпатська область', callback_data: 'transcarpathianRg' }],
                        [{ text: 'Запорізька область', callback_data: 'zaporizhzhiaRg' }],
                        [{ text: 'Івано-франківська область', callback_data: 'ivanoFrankivskRg' }],
                        [{ text: 'Київська область', callback_data: 'kyivRg' }],
                        [{ text: 'Кіровоградська область', callback_data: 'kirovohradRg' }],
                        [{ text: 'Луганська область', callback_data: 'luhanskRg' }],
                        [{ text: 'Львівська область', callback_data: 'lvivRg' }],
                        [{ text: 'м.Київ', callback_data: 'kyiv' }],
                        [{ text: 'м.Севастополь', callback_data: 'sevastopol' }],
                        [{ text: 'Миколаївська область', callback_data: 'mykolaivRg' }],
                        [{ text: 'Одеська область', callback_data: 'odesaRg' }],
                        [{ text: 'Полтавська область', callback_data: 'poltavaRg' }],
                        [{ text: 'Рівненська область', callback_data: 'rivneRg' }],
                        [{ text: 'Сумська область', callback_data: 'sumyRg' }],
                        [{ text: 'Тернопільська область', callback_data: 'ternopilRg' }],
                        [{ text: 'Харківська область', callback_data: 'kharkivRg' }],
                        [{ text: 'Херсонська область', callback_data: 'khersonRg' }],
                        [{ text: 'Хмельницька область', callback_data: 'khmelnytskyiRg' }],
                        [{ text: 'Черкаська область', callback_data: 'cherkasyRg' }],
                        [{ text: 'Чернівецька область', callback_data: 'chernivtsiRg' }],
                        [{ text: 'Чернігівська область', callback_data: 'chernihivRg' }],
                    ],
                },
            });
        });

        regionOwner.action('crimea', async (ctx) => {
            await ctx.reply('Ви обрали: АР Крим');
            ctx.scene.enter('crymeDistrict');
        });

        regionOwner.action('vinnytsiaRg', async (ctx) => {
            await ctx.reply('Ви обрали: Вінницьку область');
            ctx.scene.enter('vinnytsiaDistrict');
        });

        regionOwner.action('volynRg', async (ctx) => {
            await ctx.reply('Ви обрали: Волинську область');
            ctx.scene.enter('volynDistrict');
        });

        regionOwner.action('dnipropetrovskRg', async (ctx) => {
            await ctx.reply('Ви обрали: Дніпропетровську область');
            ctx.scene.enter('dnipropetrovskDistrict');
        });

        regionOwner.action('donetskRg', async (ctx) => {
            await ctx.reply('Ви обрали: Донецьку область');
            ctx.scene.enter('donetskDistrict');
        });

        regionOwner.action('zhytomyrRg', async (ctx) => {
            await ctx.reply('Ви обрали: Житомирську область');
            ctx.scene.enter('zhytomyrDistrict');
        });

        regionOwner.action('transcarpathianRg', async (ctx) => {
            await ctx.reply('Ви обрали: Закарпатську область');
            ctx.scene.enter('transcarpathianDistrict');
        });

        regionOwner.action('zaporizhzhiaRg', async (ctx) => {
            await ctx.reply('Ви обрали: Запоріжську область');
            ctx.scene.enter('zaporizhzhiaDistrict');
        });

        regionOwner.action('ivanoFrankivskRg', async (ctx) => {
            await ctx.reply('Ви обрали: Івано-Франківську область');
            ctx.scene.enter('ivanoFrankivskDistrict');
        });

        regionOwner.action('kyivRg', async (ctx) => {
            await ctx.reply('Ви обрали: Київську область');
            ctx.scene.enter('kyivDistrict');
        });

        regionOwner.action('kirovohradRg', async (ctx) => {
            await ctx.reply('Ви обрали: Кіровоградську область');
            ctx.scene.enter('kirovohradDistrict');
        });

        regionOwner.action('luhanskRg', async (ctx) => {
            await ctx.reply('Ви обрали: Луганську область');
            ctx.scene.enter('luhanskDistrict');
        });

        regionOwner.action('lvivRg', async (ctx) => {
            await ctx.reply('Ви обрали: Львівську область');
            ctx.scene.enter('lvivDistrict');
        });
        /*
        regionOwner.action('kyiv', async (ctx) => {
            await ctx.reply('Ви обрали: м.Київ');
            ctx.scene.enter('');
        });

        regionOwner.action('sevastopol', async (ctx) => {
            await ctx.reply('Ви обрали: м.Севастополь');
            ctx.scene.enter('');
        });
*/
        regionOwner.action('mykolaivRg', async (ctx) => {
            await ctx.reply('Ви обрали: Миколаївську область');
            ctx.scene.enter('mykolaivDistrict');
        });

        regionOwner.action('odesaRg', async (ctx) => {
            await ctx.reply('Ви обрали: Одеську область');
            ctx.scene.enter('odesaDistrict');
        });

        regionOwner.action('poltavaRg', async (ctx) => {
            await ctx.reply('Ви обрали: Полтавську область');
            ctx.scene.enter('poltavaDistrict');
        });

        regionOwner.action('rivneRg', async (ctx) => {
            await ctx.reply('Ви обрали: Рівенську область');
            ctx.scene.enter('rivneDistrict');
        });

        regionOwner.action('sumyRg', async (ctx) => {
            await ctx.reply('Ви обрали: Сумську область');
            ctx.scene.enter('sumyDistrict');
        });

        regionOwner.action('ternopilRg', async (ctx) => {
            await ctx.reply('Ви обрали: Тернопілську область');
            ctx.scene.enter('ternopilDestrict');
        });

        regionOwner.action('kharkivRg', async (ctx) => {
            await ctx.reply('Ви обрали: Харківську область');
            ctx.scene.enter('kharkivDistrict');
        });

        regionOwner.action('khersonRg', async (ctx) => {
            await ctx.reply('Ви обрали: Херсонську область');
            ctx.scene.enter('khersonDistrict');
        });

        regionOwner.action('khmelnytskyiRg', async (ctx) => {
            await ctx.reply('Ви обрали: Хмельницьку область');
            ctx.scene.enter('khmelnytskyiDistrict');
        });

        regionOwner.action('cherkasyRg', async (ctx) => {
            await ctx.reply('Ви обрали: Черкаську область');
            ctx.scene.enter('cherkasyDistrict');
        });

        regionOwner.action('chernivtsiRg', async (ctx) => {
            await ctx.reply('Ви обрали: Черніветську область');
            ctx.scene.enter('chernivtsiDistrict');
        });

        regionOwner.action('chernihivRg', async (ctx) => {
            await ctx.reply('Ви обрали: Чернігівську область');
            ctx.scene.enter('chernihivDistrict');
        });

        return regionOwner;
    }

    /*
    [{ text: '', callback_data: '' }],
    [{ text: '', callback_data: '' }],
    [{ text: '', callback_data: '' }],
    [{ text: '', callback_data: '' }],
    [{ text: '', callback_data: '' }],
    [{ text: '', callback_data: '' }],
    [{ text: '', callback_data: '' }],
    [{ text: '', callback_data: '' }],
    [{ text: '', callback_data: '' }],
    [{ text: '', callback_data: '' }],
    [{ text: '', callback_data: '' }],
    [{ text: '', callback_data: '' }],
    [{ text: '', callback_data: '' }],
    [{ text: '', callback_data: '' }],
    [{ text: '', callback_data: '' }], 
*/

    SelectCrymeDistrict() {
        const crymeDistrict = new Scenes.BaseScene('crymeDistrict');
        crymeDistrict.enter(async (ctx) => {
            await ctx.reply('Оберіть район Криму:', {
                reply_markup: {
                    inline_keyboard: [
                        [{ text: ' ', callback_data: 'blank' }],
                        [{ text: 'Алушта', callback_data: 'alushta' }],
                        [{ text: 'Армянськ', callback_data: 'armeniansk' }],
                        [{ text: 'Бахчисарайський район', callback_data: 'bakhchisarayskyi' }],
                        [{ text: 'Білогірський район', callback_data: 'biloghirsky' }],
                        [{ text: 'Джанкойський район', callback_data: 'dzhankoy' }],
                        [{ text: 'Євпаторія', callback_data: 'yevpatoria' }],
                        [{ text: 'Кіровський район', callback_data: 'kirovsky' }],
                        [{ text: 'Красногвардійський район', callback_data: 'krasnogvardiyskyi' }],
                        [{ text: 'Красноперекопський район', callback_data: 'krasnoperekopskyi' }],
                        [{ text: 'Ленінський район', callback_data: 'leninsky' }],
                        [{ text: 'Нижньогірський район', callback_data: 'nizhnyohirskyi' }],
                        [{ text: 'Первомайський район', callback_data: 'pervomaisyki' }],
                        [{ text: 'Роздольненський район', callback_data: 'rosdolenskyi' }],
                        [{ text: 'Сакський район', callback_data: 'saksky' }],
                        [{ text: 'Сімферополь', callback_data: 'simferopol' }],
                        [{ text: 'Сімферопольський район', callback_data: 'simferopolDst' }],
                        [{ text: 'Совєтський район', callback_data: 'soviet' }],
                        [{ text: 'Судак', callback_data: 'sudak' }],
                        [{ text: 'Феодосія', callback_data: 'feodosia' }],
                        [{ text: 'Чорноморський район', callback_data: 'chornomorsky' }],
                        [{ text: 'Ялта', callback_data: 'yalta' }],
                    ],
                },
            });
        });

        crymeDistrict.action('blank', async (ctx) => {
            //await ctx.reply('Ви обрали: реєстрація Україна');
            ctx.scene.enter('settlement');
        });

        crymeDistrict.action('alushta', async (ctx) => {
            await ctx.reply('Ви обрали район Криму Алушта');
            ctx.scene.enter('settlement');
        });

        crymeDistrict.action('armeniansk', async (ctx) => {
            await ctx.reply('Ви обрали район Криму Армянськ');
            ctx.scene.enter('settlement');
        });

        crymeDistrict.action('bakhchisarayskyi', async (ctx) => {
            await ctx.reply('Ви обрали Бахчисарайський район Криму ');
            ctx.scene.enter('settlement');
        });

        crymeDistrict.action('biloghirsky', async (ctx) => {
            await ctx.reply('Ви обрали Білогірський район Криму');
            ctx.scene.enter('settlement');
        });

        crymeDistrict.action('dzhankoy', async (ctx) => {
            await ctx.reply('Ви обрали Джанкойський район Криму');
            ctx.scene.enter('settlement');
        });

        crymeDistrict.action('yevpatoria', async (ctx) => {
            await ctx.reply('Ви обрали район Криму Євпаторія');
            ctx.scene.enter('settlement');
        });

        crymeDistrict.action('kirovsky', async (ctx) => {
            await ctx.reply('Ви обрали Кіровський район Криму');
            ctx.scene.enter('settlement');
        });

        crymeDistrict.action('krasnogvardiyskyi', async (ctx) => {
            await ctx.reply('Ви обрали Красногвардійський район Криму');
            ctx.scene.enter('settlement');
        });

        crymeDistrict.action('krasnoperekopskyi', async (ctx) => {
            await ctx.reply('Ви обрали Красноперекопський район Криму');
            ctx.scene.enter('settlement');
        });

        crymeDistrict.action('leninsky', async (ctx) => {
            await ctx.reply('Ви обрали Ленінський район Криму');
            ctx.scene.enter('settlement');
        });

        crymeDistrict.action('nizhnyohirskyi', async (ctx) => {
            await ctx.reply('Ви обрали Нижньогірський район Криму');
            ctx.scene.enter('settlement');
        });

        crymeDistrict.action('pervomaisyki', async (ctx) => {
            await ctx.reply('Ви обрали Первомайський район Криму');
            ctx.scene.enter('settlement');
        });

        crymeDistrict.action('rosdolenskyi', async (ctx) => {
            await ctx.reply('Ви обрали Роздольненський район Криму');
            ctx.scene.enter('settlement');
        });

        crymeDistrict.action('saksky', async (ctx) => {
            await ctx.reply('Ви обрали Сакський район Криму');
            ctx.scene.enter('settlement');
        });

        crymeDistrict.action('simferopol', async (ctx) => {
            await ctx.reply('Ви обрали Сімферополь');
            ctx.scene.enter('settlement');
        });

        crymeDistrict.action('simferopolDst', async (ctx) => {
            await ctx.reply('Ви обрали Сімферопольський район Криму');
            ctx.scene.enter('settlement');
        });

        crymeDistrict.action('soviet', async (ctx) => {
            await ctx.reply('Ви обрали Совєтський район Криму');
            ctx.scene.enter('settlement');
        });

        crymeDistrict.action('sudak', async (ctx) => {
            await ctx.reply('Ви обрали Судак');
            ctx.scene.enter('settlement');
        });

        crymeDistrict.action('feodosia', async (ctx) => {
            await ctx.reply('Ви обрали Феодосія');
            ctx.scene.enter('settlement');
        });

        crymeDistrict.action('chornomorsky', async (ctx) => {
            await ctx.reply('Ви обрали Чорноморський район Криму');
            ctx.scene.enter('settlement');
        });

        crymeDistrict.action('yalta', async (ctx) => {
            await ctx.reply('Ви обрали Ялта');
            ctx.scene.enter('settlement');
        });

        return crymeDistrict;
    }

    SelectVinnytsiaDistrict() {
        const vinnytsiaDistrict = new Scenes.BaseScene('vinnytsiaDistrict');
        vinnytsiaDistrict.enter(async (ctx) => {
            await ctx.reply('Оберіть район Вінниці:', {
                reply_markup: {
                    inline_keyboard: [
                        [{ text: ' ', callback_data: 'blank' }],
                        [{ text: 'Барський район', callback_data: 'barsky' }],
                        [{ text: 'Бершадський район', callback_data: 'bershadsky' }],
                        [{ text: 'Вінницький район', callback_data: 'vinnytsia' }],
                        [{ text: 'Гайсинський район', callback_data: 'haysynskyi' }],
                        [{ text: 'Жмеринський район', callback_data: 'zhmerinsky' }],
                        [{ text: 'Іллінецький район', callback_data: 'illinetskyi' }],
                        [{ text: 'Калинівський район', callback_data: 'kalinovsky' }],
                        [{ text: 'Козятинський район', callback_data: 'kozyatinsky' }],
                        [{ text: 'Крижопільський район', callback_data: 'kryzhopolskyi' }],
                        [{ text: 'Липовецький район', callback_data: 'lipovetskyi' }],
                        [{ text: 'Літинський район', callback_data: 'litinsky' }],
                        [{ text: 'Могилів-подільський', callback_data: 'mohylovPodilskyi' }],
                        [{ text: 'Могилів-подільський район', callback_data: 'mogilevPodilskyiDst' }],
                        [{ text: 'Мурованокуриловецький район', callback_data: 'murovanokurilovetskyi' }],
                        [{ text: 'Немирівський район', callback_data: 'nemyrivskyi' }],
                        [{ text: 'Оратівський район', callback_data: 'orativskyi' }],
                        [{ text: 'Піщанський район', callback_data: 'pischanskyi' }],
                        [{ text: 'Погребищенський район', callback_data: 'pogrebyschenskyi' }],
                        [{ text: 'Теплицький район', callback_data: 'teplytskyi' }],
                        [{ text: 'Тиврівський район', callback_data: 'tyvrovsky' }],
                        [{ text: 'Томашпільський район', callback_data: 'tomashpilskyi' }],
                        [{ text: 'Тростянецький район', callback_data: 'trostyanetskyi' }],
                        [{ text: 'Тульчинський район', callback_data: 'tulchynskyi' }],
                        [{ text: 'Хмільницький район', callback_data: 'khmilnytskyi' }],
                        [{ text: 'Чернівецький район', callback_data: 'chernivtsi' }],
                        [{ text: 'Чечельницький район', callback_data: 'chechelnytskyi' }],
                        [{ text: 'Шаргородський район', callback_data: 'shargorodskyi' }],
                        [{ text: 'Ямпільський район', callback_data: 'yampilskyi' }],
                    ],
                },
            });
        });

        vinnytsiaDistrict.action('blank', async (ctx) => {
            //await ctx.reply('Ви обрали: реєстрація Україна');
            ctx.scene.enter('settlement');
        });

        vinnytsiaDistrict.action('barsky', async (ctx) => {
            await ctx.reply('Ви обрали Барський район Вінниці');
            ctx.scene.enter('settlement');
        });

        vinnytsiaDistrict.action('bershadsky', async (ctx) => {
            await ctx.reply('Ви обрали Бершадський район Вінниці');
            ctx.scene.enter('settlement');
        });

        vinnytsiaDistrict.action('vinnytsia', async (ctx) => {
            await ctx.reply('Ви обрали Вінницький район Вінниці');
            ctx.scene.enter('settlement');
        });

        vinnytsiaDistrict.action('haysynskyi', async (ctx) => {
            await ctx.reply('Ви обрали Гайсинський район Вінниці');
            ctx.scene.enter('settlement');
        });

        vinnytsiaDistrict.action('zhmerinsky', async (ctx) => {
            await ctx.reply('Ви обрали Жмеринський район Вінниці');
            ctx.scene.enter('settlement');
        });

        vinnytsiaDistrict.action('illinetskyi', async (ctx) => {
            await ctx.reply('Ви обрали Іллінецький район Вінниці');
            ctx.scene.enter('settlement');
        });

        vinnytsiaDistrict.action('kalinovsky', async (ctx) => {
            await ctx.reply('Ви обрали Калинівський район Вінниці');
            ctx.scene.enter('settlement');
        });

        vinnytsiaDistrict.action('kozyatinsky', async (ctx) => {
            await ctx.reply('Ви обрали Козятинський район Вінниці');
            ctx.scene.enter('settlement');
        });

        vinnytsiaDistrict.action('kryzhopolskyi', async (ctx) => {
            await ctx.reply('Ви обрали Крижопільський район Вінниці');
            ctx.scene.enter('settlement');
        });

        vinnytsiaDistrict.action('lipovetskyi', async (ctx) => {
            await ctx.reply('Ви обрали Липовецький район Вінниці');
            ctx.scene.enter('settlement');
        });

        vinnytsiaDistrict.action('litinsky', async (ctx) => {
            await ctx.reply('Ви обрали Літинський район Вінниці');
            ctx.scene.enter('settlement');
        });

        vinnytsiaDistrict.action('mohylovPodilskyi', async (ctx) => {
            await ctx.reply('Ви обрали Могилів-подільський');
            ctx.scene.enter('settlement');
        });

        vinnytsiaDistrict.action('mogilevPodilskyiDst', async (ctx) => {
            await ctx.reply('Ви обрали Могилів-подільський район Вінниці');
            ctx.scene.enter('settlement');
        });

        vinnytsiaDistrict.action('murovanokurilovetskyi', async (ctx) => {
            await ctx.reply('Ви обрали Мурованокуриловецький район Вінниці');
            ctx.scene.enter('settlement');
        });

        vinnytsiaDistrict.action('nemyrivskyi', async (ctx) => {
            await ctx.reply('Ви обрали Немирівський район Вінниці');
            ctx.scene.enter('settlement');
        });

        vinnytsiaDistrict.action('orativskyi', async (ctx) => {
            await ctx.reply('Ви обрали Оратівський район Вінниці');
            ctx.scene.enter('settlement');
        });

        vinnytsiaDistrict.action('pischanskyi', async (ctx) => {
            await ctx.reply('Ви обрали Піщанський район Вінниці');
            ctx.scene.enter('settlement');
        });

        vinnytsiaDistrict.action('pogrebyschenskyi', async (ctx) => {
            await ctx.reply('Ви обрали Погребищенський район Вінниці');
            ctx.scene.enter('settlement');
        });

        vinnytsiaDistrict.action('teplytskyi', async (ctx) => {
            await ctx.reply('Ви обрали Теплицький район Вінниці');
            ctx.scene.enter('settlement');
        });

        vinnytsiaDistrict.action('tyvrovsky', async (ctx) => {
            await ctx.reply('Ви обрали Тиврівський район Вінниці');
            ctx.scene.enter('settlement');
        });

        vinnytsiaDistrict.action('tomashpilskyi', async (ctx) => {
            await ctx.reply('Ви обрали Томашпільський район Вінниці');
            ctx.scene.enter('settlement');
        });

        vinnytsiaDistrict.action('trostyanetskyi', async (ctx) => {
            await ctx.reply('Ви обрали Тростянецький район Вінниці');
            ctx.scene.enter('settlement');
        });

        vinnytsiaDistrict.action('tulchynskyi', async (ctx) => {
            await ctx.reply('Ви обрали Тульчинський район Вінниці');
            ctx.scene.enter('settlement');
        });

        vinnytsiaDistrict.action('khmilnytskyi', async (ctx) => {
            await ctx.reply('Ви обрали Хмільницький район Вінниці');
            ctx.scene.enter('settlement');
        });

        vinnytsiaDistrict.action('chernivtsi', async (ctx) => {
            await ctx.reply('Ви обрали Чернівецький район Вінниці');
            ctx.scene.enter('settlement');
        });

        vinnytsiaDistrict.action('chechelnytskyi', async (ctx) => {
            await ctx.reply('Ви обрали Чечельницький район Вінниці');
            ctx.scene.enter('settlement');
        });

        vinnytsiaDistrict.action('shargorodskyi', async (ctx) => {
            await ctx.reply('Ви обрали Шаргородський район Вінниці');
            ctx.scene.enter('settlement');
        });

        vinnytsiaDistrict.action('yampilskyi', async (ctx) => {
            await ctx.reply('Ви обрали Ямпільський район Вінниці');
            ctx.scene.enter('settlement');
        });

        return vinnytsiaDistrict;
    }

    SelectVolynDistrict() {
        const volynDistrict = new Scenes.BaseScene('volynDistrict');
        volynDistrict.enter(async (ctx) => {
            await ctx.reply('Оберіть район Волині:', {
                reply_markup: {
                    inline_keyboard: [
                        [{ text: ' ', callback_data: 'blank' }],
                        [{ text: 'Володимир-волинський район', callback_data: 'volodymyrVolynskyi' }],
                        [{ text: 'Горохівський район', callback_data: 'horohivskyi' }],
                        [{ text: 'Іваничівський район', callback_data: 'ivanychivskyi' }],
                        [{ text: 'Камінь-каширський район', callback_data: 'kaminyKashir' }],
                        [{ text: 'Ківерцівський район', callback_data: 'kivertsivskyi' }],
                        [{ text: 'Ковельський район', callback_data: 'kovelsky' }],
                        [{ text: 'Локачинський район', callback_data: 'lokachinsky' }],
                        [{ text: 'Луцький район', callback_data: 'lutskyi' }],
                        [{ text: 'Любешівський район', callback_data: 'lyubeshivskyi' }],
                        [{ text: 'Любомльський район', callback_data: 'lubomlskyi' }],
                        [{ text: 'Маневицький район', callback_data: 'manevytskyi' }],
                        [{ text: 'Нововолинськ', callback_data: 'novovolynsk' }],
                        [{ text: 'Ратнівський район', callback_data: 'ratnivskyi' }],
                        [{ text: 'Рожищенський район', callback_data: 'rozhishchenskyi' }],
                        [{ text: 'Старовижівський район', callback_data: 'starovyzhivskyi' }],
                        [{ text: 'Турійський район', callback_data: 'turiya' }],
                        [{ text: 'Шацький район', callback_data: 'shatskyi' }],
                    ],
                },
            });
        });

        volynDistrict.action('blank', async (ctx) => {
            //await ctx.reply('Ви обрали: реєстрація Україна');
            ctx.scene.enter('settlement');
        });

        volynDistrict.action('volodymyrVolynskyi', async (ctx) => {
            await ctx.reply('Ви обрали Володимир-волинський район Воліні');
            ctx.scene.enter('settlement');
        });

        volynDistrict.action('horohivskyi', async (ctx) => {
            await ctx.reply('Ви обрали Горохівський район Воліні');
            ctx.scene.enter('settlement');
        });

        volynDistrict.action('ivanychivskyi', async (ctx) => {
            await ctx.reply('Ви обрали Іваничівський район Воліні ');
            ctx.scene.enter('settlement');
        });

        volynDistrict.action('kashirStone', async (ctx) => {
            await ctx.reply('Ви обрали Камінь-каширський район Воліні');
            ctx.scene.enter('settlement');
        });

        volynDistrict.action('kivertsivskyi', async (ctx) => {
            await ctx.reply('Ви обрали Ківерцівський район Воліні');
            ctx.scene.enter('settlement');
        });

        volynDistrict.action('kovelsky', async (ctx) => {
            await ctx.reply('Ви обрали Ковельський район Воліні');
            ctx.scene.enter('settlement');
        });

        volynDistrict.action('lokachinsky', async (ctx) => {
            await ctx.reply('Ви обрали Локачинський район Воліні');
            ctx.scene.enter('settlement');
        });

        volynDistrict.action('lutskyi', async (ctx) => {
            await ctx.reply('Ви обрали Луцький район Воліні');
            ctx.scene.enter('settlement');
        });

        volynDistrict.action('lyubeshivskyi', async (ctx) => {
            await ctx.reply('Ви обрали Любешівський район Воліні');
            ctx.scene.enter('settlement');
        });

        volynDistrict.action('lubomlskyi', async (ctx) => {
            await ctx.reply('Ви обрали Любомльський район Воліні');
            ctx.scene.enter('settlement');
        });

        volynDistrict.action('Manevytskyi', async (ctx) => {
            await ctx.reply('Ви обрали Маневицький район Воліні');
            ctx.scene.enter('settlement');
        });

        volynDistrict.action('novovolynsk', async (ctx) => {
            await ctx.reply('Ви обрали Нововолинськ Воліні');
            ctx.scene.enter('settlement');
        });

        volynDistrict.action('ratnivskyi', async (ctx) => {
            await ctx.reply('Ви обрали Ратнівський район Воліні');
            ctx.scene.enter('settlement');
        });

        volynDistrict.action('rozhishchenskyi', async (ctx) => {
            await ctx.reply('Ви обрали Рожищенський район Воліні');
            ctx.scene.enter('settlement');
        });

        volynDistrict.action('starovyzhivskyi', async (ctx) => {
            await ctx.reply('Ви обрали Старовижівський район Воліні');
            ctx.scene.enter('settlement');
        });

        volynDistrict.action('turiya', async (ctx) => {
            await ctx.reply('Ви обрали Турійський район Воліні');
            ctx.scene.enter('settlement');
        });

        volynDistrict.action('shatskyi', async (ctx) => {
            await ctx.reply('Ви обрали Шацький район Воліні');
            ctx.scene.enter('settlement');
        });

        return volynDistrict;
    }

    SelectDnipropetrovskDistrict() {
        const dnipropetrovskDistrict = new Scenes.BaseScene('dnipropetrovskDistrict');
        dnipropetrovskDistrict.enter(async (ctx) => {
            await ctx.reply('Оберіть район Дніпропетровщини:', {
                reply_markup: {
                    inline_keyboard: [
                        [{ text: ' ', callback_data: 'blank' }],
                        [{ text: 'Апостолівський район', callback_data: 'apostolovskyi' }],
                        [{ text: 'Васильківський район', callback_data: 'vasylkivskyi' }],
                        [{ text: 'Верхньодніпровський район', callback_data: 'verkhnyodniprovskyi' }],
                        [{ text: 'Дніпро', callback_data: 'dnipro' }],
                        [{ text: 'Дніпровський район', callback_data: 'dniprovskyDst' }],
                        [{ text: 'Жовті води', callback_data: 'jovtiVodi' }],
                        [{ text: "Кам'янське", callback_data: 'kamianske' }],
                        [{ text: 'Кривий ріг', callback_data: 'kryvyiRih' }],
                        [{ text: 'Криворізький район', callback_data: 'kryvorizkiyDst' }],
                        [{ text: 'Криничанський район', callback_data: 'krynychanskyi' }],
                        [{ text: 'Магдалинівський район', callback_data: 'magdalinovskyi' }],
                        [{ text: 'Марганець', callback_data: 'marganetic' }],
                        [{ text: 'Межівський район', callback_data: 'mezhivskyi' }],
                        [{ text: 'Нікопольський район', callback_data: 'nikopolskyi' }],
                        [{ text: 'Новомосковський район', callback_data: 'novomoskovskiy' }],
                        [{ text: 'Павлоградський район', callback_data: 'pavlogradskyi' }],
                        [{ text: 'Петриківський район', callback_data: 'petrykivskyi' }],
                        [{ text: 'Петропавлівський район', callback_data: 'petropavlovskyi' }],
                        [{ text: 'Покров', callback_data: 'Покров' }],
                        [{ text: 'Покровський район', callback_data: 'pokrovDst' }],
                        [{ text: "П'ятихатський район", callback_data: 'pyatikhatskyi' }],
                        [{ text: 'Синельниківський район', callback_data: 'synelnykovskiy' }],
                        [{ text: 'Солонянський район', callback_data: 'solonyanskyi' }],
                        [{ text: 'Софіївський район', callback_data: 'sofiivskyi' }],
                        [{ text: 'Тернівка', callback_data: 'ternivka' }],
                        [{ text: 'Томаківський район', callback_data: 'tomakivskyi' }],
                        [{ text: 'Царичанський район', callback_data: 'tsarychanskyi' }],
                        [{ text: 'Широківський район', callback_data: 'shirokivskyi' }],
                        [{ text: "Юр'ївський район", callback_data: 'yuryivskyi' }],
                    ],
                },
            });
        });

        dnipropetrovskDistrict.action('blank', async (ctx) => {
            //await ctx.reply('Ви обрали район Дніпропетровщини');
            ctx.scene.enter('settlement');
        });

        dnipropetrovskDistrict.action('apostolovskyi', async (ctx) => {
            await ctx.reply('Ви обрали Апостолівський район Дніпропетровщини');
            ctx.scene.enter('settlement');
        });

        dnipropetrovskDistrict.action('vasylkivskyi', async (ctx) => {
            await ctx.reply('Ви обрали Васильківський район Дніпропетровщини');
            ctx.scene.enter('settlement');
        });

        dnipropetrovskDistrict.action('verkhnyodniprovskyi', async (ctx) => {
            await ctx.reply('Ви обрали Верхньодніпровський район Дніпропетровщини');
            ctx.scene.enter('settlement');
        });

        dnipropetrovskDistrict.action('dnipro', async (ctx) => {
            await ctx.reply('Ви обрали Дніпро');
            ctx.scene.enter('settlement');
        });

        dnipropetrovskDistrict.action('dniprovskyDst', async (ctx) => {
            await ctx.reply('Ви обрали Дніпровський район Дніпропетровщини');
            ctx.scene.enter('settlement');
        });

        dnipropetrovskDistrict.action('jovtiVodi', async (ctx) => {
            await ctx.reply('Ви обрали Жовті води');
            ctx.scene.enter('settlement');
        });

        dnipropetrovskDistrict.action('kamianske', async (ctx) => {
            await ctx.reply("Ви обрали Кам'янське");
            ctx.scene.enter('settlement');
        });

        dnipropetrovskDistrict.action('kryvyiRih', async (ctx) => {
            await ctx.reply('Ви обрали Кривий ріг');
            ctx.scene.enter('settlement');
        });

        dnipropetrovskDistrict.action('kryvorizkiyDst', async (ctx) => {
            await ctx.reply('Ви обрали Криворізький район Дніпропетровщини');
            ctx.scene.enter('settlement');
        });

        dnipropetrovskDistrict.action('krynychanskyi', async (ctx) => {
            await ctx.reply('Ви обрали Криничанський район Дніпропетровщини');
            ctx.scene.enter('settlement');
        });

        dnipropetrovskDistrict.action('magdalinovskyi', async (ctx) => {
            await ctx.reply('Ви обрали Магдалинівський район Дніпропетровщини');
            ctx.scene.enter('settlement');
        });

        dnipropetrovskDistrict.action('marganetic', async (ctx) => {
            await ctx.reply('Ви обрали Марганець район Дніпропетровщини');
            ctx.scene.enter('settlement');
        });

        dnipropetrovskDistrict.action('mezhivskyi', async (ctx) => {
            await ctx.reply('Ви обрали Межівський район Дніпропетровщини');
            ctx.scene.enter('settlement');
        });

        dnipropetrovskDistrict.action('nikopolskyi', async (ctx) => {
            await ctx.reply('Ви обрали Нікопольський район Дніпропетровщини');
            ctx.scene.enter('settlement');
        });

        dnipropetrovskDistrict.action('novomoskovskiy', async (ctx) => {
            await ctx.reply('Ви обрали Новомосковський район Дніпропетровщини');
            ctx.scene.enter('settlement');
        });

        dnipropetrovskDistrict.action('pavlogradskyi', async (ctx) => {
            await ctx.reply('Ви обрали Павлоградський район Дніпропетровщини');
            ctx.scene.enter('settlement');
        });

        dnipropetrovskDistrict.action('petrykivskyi', async (ctx) => {
            await ctx.reply('Ви обрали Петриківський район Дніпропетровщини');
            ctx.scene.enter('settlement');
        });

        dnipropetrovskDistrict.action('petropavlovskyi', async (ctx) => {
            await ctx.reply('Ви обрали Петропавлівський район Дніпропетровщини');
            ctx.scene.enter('settlement');
        });

        dnipropetrovskDistrict.action('Покров', async (ctx) => {
            await ctx.reply('Ви обрали Покров');
            ctx.scene.enter('settlement');
        });

        dnipropetrovskDistrict.action('pokrovDst', async (ctx) => {
            await ctx.reply('Ви обрали Покровський район Дніпропетровщини');
            ctx.scene.enter('settlement');
        });

        dnipropetrovskDistrict.action('pyatikhatskyi', async (ctx) => {
            await ctx.reply("Ви обрали П'ятихатський район Дніпропетровщини");
            ctx.scene.enter('settlement');
        });

        dnipropetrovskDistrict.action('synelnykovskiy', async (ctx) => {
            await ctx.reply('Ви обрали Синельниківський район Дніпропетровщини');
            ctx.scene.enter('settlement');
        });

        dnipropetrovskDistrict.action('solonyanskyi', async (ctx) => {
            await ctx.reply('Ви обрали Солонянський район Дніпропетровщини');
            ctx.scene.enter('settlement');
        });

        dnipropetrovskDistrict.action('sofiivskyi', async (ctx) => {
            await ctx.reply('Ви обрали Софіївський район Дніпропетровщини');
            ctx.scene.enter('settlement');
        });

        dnipropetrovskDistrict.action('ternivka', async (ctx) => {
            await ctx.reply('Ви обрали Тернівка');
            ctx.scene.enter('settlement');
        });

        dnipropetrovskDistrict.action('tomakivskyi', async (ctx) => {
            await ctx.reply('Ви обрали Томаківський район Дніпропетровщини');
            ctx.scene.enter('settlement');
        });

        dnipropetrovskDistrict.action('tsarychanskyi', async (ctx) => {
            await ctx.reply('Ви обрали Царичанський район Дніпропетровщини');
            ctx.scene.enter('settlement');
        });

        dnipropetrovskDistrict.action('shirokivskyi', async (ctx) => {
            await ctx.reply('Ви обрали Широківський район Дніпропетровщини');
            ctx.scene.enter('settlement');
        });

        dnipropetrovskDistrict.action('yuryivskyi', async (ctx) => {
            await ctx.reply("Ви обрали Юр'ївський район Дніпропетровщини");
            ctx.scene.enter('settlement');
        });

        return dnipropetrovskDistrict;
    }

    SelectDonetskDistrict() {
        const donetskDistrict = new Scenes.BaseScene('donetskDistrict');
        donetskDistrict.enter(async (ctx) => {
            await ctx.reply('Оберіть район Донетчини:', {
                reply_markup: {
                    inline_keyboard: [
                        [{ text: ' ', callback_data: 'blank' }],
                        [{ text: 'Амвросіївський район', callback_data: 'amvrosiivskyi' }],
                        [{ text: 'Бахмут', callback_data: 'bakhmut' }],
                        [{ text: 'Бахмутський район', callback_data: 'bakhmutDst' }],
                        [{ text: 'Бойківський район', callback_data: 'boykivskyi' }],
                        [{ text: 'Великоновосілківський район', callback_data: 'velikonovosilkivskyi' }],
                        [{ text: 'Волноваський район', callback_data: 'volnovaskyi' }],
                        [{ text: 'Володарський район', callback_data: 'volodarsky' }],
                        [{ text: 'Горлівка', callback_data: 'gorlovka' }],
                        [{ text: 'Дебальцеве', callback_data: 'debaltseve' }],
                        [{ text: 'Добропілля', callback_data: 'dobropilla' }],
                        [{ text: 'Добропільський район', callback_data: 'dobropillaDst' }],
                        [{ text: 'Докучаєвськ', callback_data: 'dokuchaevsk' }],
                        [{ text: 'Донецьк', callback_data: 'donetsk' }],
                        [{ text: 'Дружківка', callback_data: 'druzhkivka' }],
                        [{ text: 'Єнакієве', callback_data: 'yenakievo' }],
                        [{ text: 'Жданівка', callback_data: 'zhdanivka' }],
                        [{ text: 'Костянтинівський район', callback_data: 'kostyantynivskyi' }],
                        [{ text: 'Краматорськ', callback_data: 'kramatorsk' }],
                        [{ text: 'Лиман', callback_data: 'liman' }],
                        [{ text: 'Лиманський район', callback_data: 'limanDst' }],
                        [{ text: 'Макіївка', callback_data: 'makiivka' }],
                        [{ text: 'Маріуполь', callback_data: 'mariupol' }],
                        [{ text: "Мар'їнський район", callback_data: 'mariinsky' }],
                        [{ text: 'Мирноград', callback_data: 'myrnograd' }],
                        [{ text: 'Новоазовський район', callback_data: 'novoazovsky' }],
                        [{ text: 'Олександрівський район', callback_data: 'oleksandrovsky' }],
                        [{ text: 'Першотравневий район', callback_data: 'pershotravneviy' }],
                        [{ text: 'Покровськ', callback_data: 'pokrovsk' }],
                        [{ text: 'Покровський район', callback_data: 'pokrovskDst' }],
                        [{ text: 'Селидове', callback_data: 'selidove' }],
                        [{ text: "Слов'янськ", callback_data: 'slavyansk' }],
                        [{ text: "Слов'янський район", callback_data: 'slavyanskDst' }],
                        [{ text: 'Сніжне', callback_data: 'snijne' }],
                        [{ text: 'Старобешівський район', callback_data: 'starobeshivskyi' }],
                        [{ text: 'Торецьк', callback_data: 'toretsk' }],
                        [{ text: 'Харцизьк', callback_data: 'khartsyzk' }],
                        [{ text: 'Чистякове', callback_data: 'chistyakove' }],
                        [{ text: 'Шахтарськ', callback_data: 'shakhtarsk' }],
                        [{ text: 'Шахтарський район', callback_data: 'shakhtarskDst' }],
                        [{ text: 'Ясинуватський район', callback_data: 'yasynuvatskyi' }],
                    ],
                },
            });
        });

        donetskDistrict.action('amvrosiivskyi', async (ctx) => {
            await ctx.reply('Ви обрали Амвросіївський район Донетчини');
            ctx.scene.enter('settlement');
        });

        donetskDistrict.action('bakhmut', async (ctx) => {
            await ctx.reply('Ви обрали Бахмут Донетчина');
            ctx.scene.enter('settlement');
        });

        donetskDistrict.action('bakhmutDst', async (ctx) => {
            await ctx.reply('Ви обрали Бахмутський район Донетчини');
            ctx.scene.enter('settlement');
        });

        donetskDistrict.action('boykivskyi', async (ctx) => {
            await ctx.reply('Ви обрали Бойківський район Донетчини');
            ctx.scene.enter('settlement');
        });

        donetskDistrict.action('velikonovosilkivskyi', async (ctx) => {
            await ctx.reply('Ви обрали Великоновосілківський район Донетчини');
            ctx.scene.enter('settlement');
        });

        donetskDistrict.action('volnovaskyi', async (ctx) => {
            await ctx.reply('Ви обрали Волноваський район Донетчини');
            ctx.scene.enter('settlement');
        });

        donetskDistrict.action('volodarsky', async (ctx) => {
            await ctx.reply('Ви обрали Володарський район Донетчини');
            ctx.scene.enter('settlement');
        });

        donetskDistrict.action('gorlovka', async (ctx) => {
            await ctx.reply('Ви обрали Горлівка Донетчина');
            ctx.scene.enter('settlement');
        });

        donetskDistrict.action('debaltseve', async (ctx) => {
            await ctx.reply('Ви обрали Дебальцеве Донетчина');
            ctx.scene.enter('settlement');
        });

        donetskDistrict.action('dobropilla', async (ctx) => {
            await ctx.reply('Ви обрали Добропілля Донетчина');
            ctx.scene.enter('settlement');
        });

        donetskDistrict.action('dobropillaDst', async (ctx) => {
            await ctx.reply('Ви обрали Добропільський район Донетчини');
            ctx.scene.enter('settlement');
        });

        donetskDistrict.action('dokuchaevsk', async (ctx) => {
            await ctx.reply('Ви обрали Докучаєвськ Донетчина');
            ctx.scene.enter('settlement');
        });

        donetskDistrict.action('donetsk', async (ctx) => {
            await ctx.reply('Ви обрали Донецьк Донетчина');
            ctx.scene.enter('settlement');
        });

        donetskDistrict.action('druzhkivka', async (ctx) => {
            await ctx.reply('Ви обрали Дружківка Донетчина');
            ctx.scene.enter('settlement');
        });

        donetskDistrict.action('yenakievo', async (ctx) => {
            await ctx.reply('Ви обрали Єнакієве Донетчина');
            ctx.scene.enter('settlement');
        });

        donetskDistrict.action('zhdanivka', async (ctx) => {
            await ctx.reply('Ви обрали Жданівка Донетчина');
            ctx.scene.enter('settlement');
        });

        donetskDistrict.action('kostyantynivskyi', async (ctx) => {
            await ctx.reply('Ви обрали Костянтинівський район Донетчини');
            ctx.scene.enter('settlement');
        });

        donetskDistrict.action('kramatorsk', async (ctx) => {
            await ctx.reply('Ви обрали Краматорськ Донетчина');
            ctx.scene.enter('settlement');
        });

        donetskDistrict.action('liman', async (ctx) => {
            await ctx.reply('Ви обрали Лиман Донетчина');
            ctx.scene.enter('settlement');
        });

        donetskDistrict.action('limanDst', async (ctx) => {
            await ctx.reply('Ви обрали Лиманський район Донетчини');
            ctx.scene.enter('settlement');
        });

        donetskDistrict.action('makiivka', async (ctx) => {
            await ctx.reply('Ви обрали Макіївка Донетчина');
            ctx.scene.enter('settlement');
        });

        donetskDistrict.action('mariupol', async (ctx) => {
            await ctx.reply('Ви обрали Маріуполь Донетчина');
            ctx.scene.enter('settlement');
        });

        donetskDistrict.action('mariinsky', async (ctx) => {
            await ctx.reply("Ви обрали Мар'їнський район Донетчини");
            ctx.scene.enter('settlement');
        });

        donetskDistrict.action('myrnograd', async (ctx) => {
            await ctx.reply('Ви обрали Мирноград Донетчина');
            ctx.scene.enter('settlement');
        });

        donetskDistrict.action('novoazovsky', async (ctx) => {
            await ctx.reply('Ви обрали Новоазовський район Донетчини');
            ctx.scene.enter('settlement');
        });

        donetskDistrict.action('oleksandrovsky', async (ctx) => {
            await ctx.reply('Ви обрали Олександрівський район Донетчини');
            ctx.scene.enter('settlement');
        });

        donetskDistrict.action('pershotravneviy', async (ctx) => {
            await ctx.reply('Ви обрали Першотравневий район Донетчини');
            ctx.scene.enter('settlement');
        });

        donetskDistrict.action('pokrovsk', async (ctx) => {
            await ctx.reply('Ви обрали Покровськ Донетчина');
            ctx.scene.enter('settlement');
        });

        donetskDistrict.action('pokrovskDst', async (ctx) => {
            await ctx.reply('Ви обрали Покровський район Донетчини');
            ctx.scene.enter('settlement');
        });

        donetskDistrict.action('selidove', async (ctx) => {
            await ctx.reply('Ви обрали Селидове Донетчина');
            ctx.scene.enter('settlement');
        });

        donetskDistrict.action('slavyansk', async (ctx) => {
            await ctx.reply("Ви обрали Слов'янськ Донетчина");
            ctx.scene.enter('settlement');
        });

        donetskDistrict.action('slavyanskDst', async (ctx) => {
            await ctx.reply("Ви обрали Слов'янський район Донетчини");
            ctx.scene.enter('settlement');
        });

        donetskDistrict.action('snijne', async (ctx) => {
            await ctx.reply('Ви обрали Сніжне Донетчина');
            ctx.scene.enter('settlement');
        });

        donetskDistrict.action('starobeshivskyi', async (ctx) => {
            await ctx.reply('Ви обрали Старобешівський район Донетчини');
            ctx.scene.enter('settlement');
        });

        donetskDistrict.action('toretsk', async (ctx) => {
            await ctx.reply('Ви обрали Торецьк Донетчина');
            ctx.scene.enter('settlement');
        });

        donetskDistrict.action('khartsyzk', async (ctx) => {
            await ctx.reply('Ви обрали Харцизьк Донетчина');
            ctx.scene.enter('settlement');
        });

        donetskDistrict.action('chistyakove', async (ctx) => {
            await ctx.reply('Ви обрали Чистякове Донетчина');
            ctx.scene.enter('settlement');
        });

        donetskDistrict.action('shakhtarsk', async (ctx) => {
            await ctx.reply('Ви обрали Шахтарськ Донетчина');
            ctx.scene.enter('settlement');
        });

        donetskDistrict.action('shakhtarskDst', async (ctx) => {
            await ctx.reply('Ви обрали Шахтарський район Донетчини');
            ctx.scene.enter('settlement');
        });

        donetskDistrict.action('yasynuvatskyi', async (ctx) => {
            await ctx.reply('Ви обрали Ясинуватський район Донетчини');
            ctx.scene.enter('settlement');
        });

        return donetskDistrict;
    }

    SelectZhytomyrDistrict() {
        const zhytomyrDistrict = new Scenes.BaseScene('zhytomyrDistrict');
        zhytomyrDistrict.enter(async (ctx) => {
            await ctx.reply('Оберіть район Житомирщини:', {
                reply_markup: {
                    inline_keyboard: [
                        [{ text: ' ', callback_data: 'blank' }],
                        [{ text: 'Андрушівський район', callback_data: 'andrushivskyi' }],
                        [{ text: 'Баранівський район', callback_data: 'baranivskyi' }],
                        [{ text: 'Бердичівський район', callback_data: 'berdychivskyi' }],
                        [{ text: 'Брусилівський район', callback_data: 'brusylivskyi' }],
                        [{ text: 'Ємільчинський район', callback_data: 'emilchynskyi' }],
                        [{ text: 'Житомирський район', callback_data: 'zhytomyrskyi' }],
                        [{ text: 'Звягельський район', callback_data: 'zvyagelskyi' }],
                        [{ text: 'Коростенський район', callback_data: 'korostenskyi' }],
                        [{ text: 'Коростишівський район', callback_data: 'korostyshivskyi' }],
                        [{ text: 'Лугинський район', callback_data: 'luginsky' }],
                        [{ text: 'Любарський район', callback_data: 'lubarsky' }],
                        [{ text: 'Малинський район', callback_data: 'malinsky' }],
                        [{ text: 'Народицький район', callback_data: 'narodytskyi' }],
                        [{ text: 'Овруцький район', callback_data: 'ovrutskyi' }],
                        [{ text: 'Олевський район', callback_data: 'olevsky' }],
                        [{ text: 'Попільнянський район', callback_data: 'popilnianskyi' }],
                        [{ text: 'Пулинський район', callback_data: 'pulinsky' }],
                        [{ text: 'Радомишльський район', callback_data: 'radomyshlskyi' }],
                        [{ text: 'Романівський район', callback_data: 'romanivskyi' }],
                        [{ text: 'Ружинський район', callback_data: 'ruzhynskyi' }],
                        [{ text: 'Хорошівський район', callback_data: 'khoroshivskyi' }],
                        [{ text: 'Черняхівський район', callback_data: 'chernyakhivskyi' }],
                        [{ text: 'Чуднівський район', callback_data: 'chudnivsky' }],
                    ],
                },
            });
        });

        zhytomyrDistrict.action('blank', async (ctx) => {
            //await ctx.reply('Ви обрали: реєстрація Україна');
            ctx.scene.enter('settlement');
        });

        zhytomyrDistrict.action('baranivskyi', async (ctx) => {
            await ctx.reply('Ви обрали Андрушівський район Житомирщини');
            ctx.scene.enter('settlement');
        });

        zhytomyrDistrict.action('berdychivskyi', async (ctx) => {
            await ctx.reply('Ви обрали Баранівський район Житомирщини');
            ctx.scene.enter('settlement');
        });

        zhytomyrDistrict.action('brusylivskyi', async (ctx) => {
            await ctx.reply('Ви обрали Бердичівський район Житомирщини ');
            ctx.scene.enter('settlement');
        });

        zhytomyrDistrict.action('brusylivskyi', async (ctx) => {
            await ctx.reply('Ви обрали Брусилівський район Житомирщини');
            ctx.scene.enter('settlement');
        });

        zhytomyrDistrict.action('emilchynskyi', async (ctx) => {
            await ctx.reply('Ви обрали Ємільчинський район Житомирщини');
            ctx.scene.enter('settlement');
        });

        zhytomyrDistrict.action('zhytomyrskyi', async (ctx) => {
            await ctx.reply('Ви обрали Житомирський район Житомирщини');
            ctx.scene.enter('settlement');
        });

        zhytomyrDistrict.action('zvyagelskyi', async (ctx) => {
            await ctx.reply('Ви обрали Звягельський район Житомирщини');
            ctx.scene.enter('settlement');
        });

        zhytomyrDistrict.action('korostenskyi', async (ctx) => {
            await ctx.reply('Ви обрали Коростенський район Житомирщини');
            ctx.scene.enter('settlement');
        });

        zhytomyrDistrict.action('korostyshivskyi', async (ctx) => {
            await ctx.reply('Ви обрали Коростишівський район Житомирщини');
            ctx.scene.enter('settlement');
        });

        zhytomyrDistrict.action('luginsky', async (ctx) => {
            await ctx.reply('Ви обрали Лугинський район Житомирщини');
            ctx.scene.enter('settlement');
        });

        zhytomyrDistrict.action('lubarsky', async (ctx) => {
            await ctx.reply('Ви обрали Любарський район Житомирщини');
            ctx.scene.enter('settlement');
        });

        zhytomyrDistrict.action('malinsky', async (ctx) => {
            await ctx.reply('Ви обрали Малинський район Житомирщини');
            ctx.scene.enter('settlement');
        });

        zhytomyrDistrict.action('narodytskyi', async (ctx) => {
            await ctx.reply('Ви обрали Народицький район Житомирщини');
            ctx.scene.enter('settlement');
        });

        zhytomyrDistrict.action('ovrutskyi', async (ctx) => {
            await ctx.reply('Ви обрали Овруцький район Житомирщини');
            ctx.scene.enter('settlement');
        });

        zhytomyrDistrict.action('olevsky', async (ctx) => {
            await ctx.reply('Ви обрали Олевський район Житомирщини');
            ctx.scene.enter('settlement');
        });

        zhytomyrDistrict.action('popilnianskyi', async (ctx) => {
            await ctx.reply('Ви обрали Попільнянський район Житомирщини');
            ctx.scene.enter('settlement');
        });

        zhytomyrDistrict.action('pulinsky', async (ctx) => {
            await ctx.reply('Ви обрали Пулинський район Житомирщини');
            ctx.scene.enter('settlement');
        });

        zhytomyrDistrict.action('radomyshlskyi', async (ctx) => {
            await ctx.reply('Ви обрали Радомишльський район Житомирщини');
            ctx.scene.enter('settlement');
        });

        zhytomyrDistrict.action('romanivskyi', async (ctx) => {
            await ctx.reply('Ви обрали Романівський район Житомирщини');
            ctx.scene.enter('settlement');
        });

        zhytomyrDistrict.action('ruzhynskyi', async (ctx) => {
            await ctx.reply('Ви обрали Ружинський район Житомирщини');
            ctx.scene.enter('settlement');
        });

        zhytomyrDistrict.action('khoroshivskyi', async (ctx) => {
            await ctx.reply('Ви обрали Хорошівський район Житомирщини');
            ctx.scene.enter('settlement');
        });

        zhytomyrDistrict.action('chernyakhivskyi', async (ctx) => {
            await ctx.reply('Ви обрали Черняхівський район Житомирщини');
            ctx.scene.enter('settlement');
        });

        zhytomyrDistrict.action('chudnivsky', async (ctx) => {
            await ctx.reply('Ви обрали Чуднівський район Житомирщини');
            ctx.scene.enter('settlement');
        });

        return zhytomyrDistrict;
    }

    SelecTranscarpathianDistrict() {
        const transcarpathianDistrict = new Scenes.BaseScene('transcarpathianDistrict');
        transcarpathianDistrict.enter(async (ctx) => {
            await ctx.reply('Оберіть район Закарпатщини:', {
                reply_markup: {
                    inline_keyboard: [
                        [{ text: ' ', callback_data: 'blank' }],
                        [{ text: 'Берегівський район', callback_data: 'berehivskyiDst' }],
                        [{ text: 'Берегове', callback_data: 'beregove' }],
                        [{ text: 'Великоберезнянський район', callback_data: 'velikobereznyanskyi' }],
                        [{ text: 'Виноградівський район', callback_data: 'vynogradivskyi' }],
                        [{ text: 'Воловецький район', callback_data: 'volovetskyi' }],
                        [{ text: 'Іршавський район', callback_data: 'irshavskyi' }],
                        [{ text: 'Міжгірський район', callback_data: 'mizhhirskyi' }],
                        [{ text: 'Мукачівський район', callback_data: 'mukachevsky' }],
                        [{ text: 'Перечинський район', callback_data: 'perechynskyi' }],
                        [{ text: 'Рахівський район', callback_data: 'rakhivskyi' }],
                        [{ text: 'Свалявський район', callback_data: 'svalyavskyi' }],
                        [{ text: 'Тячівський район', callback_data: 'tyachivskyi' }],
                        [{ text: 'Ужгородський район', callback_data: 'uzhgorodskyi' }],
                        [{ text: 'Хуст', callback_data: 'hust' }],
                        [{ text: 'Хустський район', callback_data: 'hustDst' }],
                    ],
                },
            });
        });

        transcarpathianDistrict.action('blank', async (ctx) => {
            //await ctx.reply('Ви обрали: реєстрація Україна');
            ctx.scene.enter('settlement');
        });

        transcarpathianDistrict.action('berehivskyiDst', async (ctx) => {
            await ctx.reply('Ви обрали Берегівський район Закарпатщини');
            ctx.scene.enter('settlement');
        });

        transcarpathianDistrict.action('beregove', async (ctx) => {
            await ctx.reply('Ви обрали Берегове Закарпатщина');
            ctx.scene.enter('settlement');
        });

        transcarpathianDistrict.action('velikobereznyanskyi', async (ctx) => {
            await ctx.reply('Ви обрали Великоберезнянський район Закарпатщини');
            ctx.scene.enter('settlement');
        });

        transcarpathianDistrict.action('vynogradivskyi', async (ctx) => {
            await ctx.reply('Ви обрали Виноградівський район Закарпатщини');
            ctx.scene.enter('settlement');
        });

        transcarpathianDistrict.action('volovetskyi', async (ctx) => {
            await ctx.reply('Ви обрали Воловецький район Закарпатщини');
            ctx.scene.enter('settlement');
        });

        transcarpathianDistrict.action('irshavskyi', async (ctx) => {
            await ctx.reply('Ви обрали Іршавський район Закарпатщини');
            ctx.scene.enter('settlement');
        });

        transcarpathianDistrict.action('mizhhirskyi', async (ctx) => {
            await ctx.reply('Ви обрали Міжгірський район Закарпатщини');
            ctx.scene.enter('settlement');
        });

        transcarpathianDistrict.action('mukachevsky', async (ctx) => {
            await ctx.reply('Ви обрали Мукачівський район Закарпатщини');
            ctx.scene.enter('settlement');
        });

        transcarpathianDistrict.action('perechynskyi', async (ctx) => {
            await ctx.reply('Ви обрали Перечинський район Закарпатщини');
            ctx.scene.enter('settlement');
        });

        transcarpathianDistrict.action('rakhivskyi', async (ctx) => {
            await ctx.reply('Ви обрали Рахівський район Закарпатщини');
            ctx.scene.enter('settlement');
        });

        transcarpathianDistrict.action('svalyavskyi', async (ctx) => {
            await ctx.reply('Ви обрали Свалявський район Закарпатщини');
            ctx.scene.enter('settlement');
        });

        transcarpathianDistrict.action('tyachivskyi', async (ctx) => {
            await ctx.reply('Ви обрали Тячівський район Закарпатщини');
            ctx.scene.enter('settlement');
        });

        transcarpathianDistrict.action('uzhgorodskyi', async (ctx) => {
            await ctx.reply('Ви обрали Ужгородський район Закарпатщини');
            ctx.scene.enter('settlement');
        });

        transcarpathianDistrict.action('hust', async (ctx) => {
            await ctx.reply('Ви обрали  Хуст Закарпатщина');
            ctx.scene.enter('settlement');
        });

        transcarpathianDistrict.action('hustDst', async (ctx) => {
            await ctx.reply('Ви обрали Хустський район Закарпатщини');
            ctx.scene.enter('settlement');
        });

        return transcarpathianDistrict;
    }

    SelectZaporizhzhiaDistrict() {
        const zaporizhzhiaDistrict = new Scenes.BaseScene('zaporizhzhiaDistrict');
        zaporizhzhiaDistrict.enter(async (ctx) => {
            await ctx.reply('Оберіть район Запоріжчини:', {
                reply_markup: {
                    inline_keyboard: [
                        [{ text: ' ', callback_data: 'blank' }],
                        [{ text: 'Бердянськ', callback_data: 'berdyansk' }],
                        [{ text: 'Бердянський район', callback_data: 'berdyanskDst' }],
                        [{ text: 'Більмацький район', callback_data: 'bilmatsky' }],
                        [{ text: 'Василівський район', callback_data: 'vasylovsky' }],
                        [{ text: 'Великобілозерський район', callback_data: 'velikobilozerskyi' }],
                        [{ text: 'Веселівський район', callback_data: 'veselivskyi' }],
                        [{ text: 'Вільнянський район', callback_data: 'vilnius' }],
                        [{ text: 'Гуляйпільський район', callback_data: 'hulyaipilskyi' }],
                        [{ text: 'Запорізький район', callback_data: 'zaporozhye' }],
                        [{ text: "Кам'янсько-дніпровський район", callback_data: 'kamiunoDniprovsky' }],
                        [{ text: 'Мелітопольський район', callback_data: 'melitopolskyi' }],
                        [{ text: 'Михайлівський район', callback_data: 'mykhailivskyi' }],
                        [{ text: 'Новомиколаївський район', callback_data: 'novomykolaivskyi' }],
                        [{ text: 'Оріхівський район', callback_data: 'orichivskyi' }],
                        [{ text: 'Пологівський район', callback_data: 'polohivskyi' }],
                        [{ text: 'Приазовський район', callback_data: 'priazovsky' }],
                        [{ text: 'Приморський район', callback_data: 'primorskyi' }],
                        [{ text: 'Розівський район', callback_data: 'rozovsky' }],
                        [{ text: 'Токмацький район', callback_data: 'tokmacki' }],
                        [{ text: 'Чернігівський район', callback_data: 'chernihivskyi' }],
                        [{ text: 'Якимівський район', callback_data: 'yakymovsky' }],
                    ],
                },
            });
        });

        zaporizhzhiaDistrict.action('blank', async (ctx) => {
            //await ctx.reply('Ви обрали Бердянськ Запоріжчинf');
            ctx.scene.enter('settlement');
        });

        zaporizhzhiaDistrict.action('berdyansk', async (ctx) => {
            await ctx.reply('Ви обрали Бердянськ Запоріжчина');
            ctx.scene.enter('settlement');
        });

        zaporizhzhiaDistrict.action('berdyanskDst', async (ctx) => {
            await ctx.reply('Ви обрали Бердянський район Запоріжчини');
            ctx.scene.enter('settlement');
        });

        zaporizhzhiaDistrict.action('bilmatsky', async (ctx) => {
            await ctx.reply('Ви обрали Більмацький район Запоріжчини');
            ctx.scene.enter('settlement');
        });

        zaporizhzhiaDistrict.action('vasylovsky', async (ctx) => {
            await ctx.reply('Ви обрали Василівський район Запоріжчини');
            ctx.scene.enter('settlement');
        });

        zaporizhzhiaDistrict.action('velikobilozerskyi', async (ctx) => {
            await ctx.reply('Ви обрали Великобілозерський район Запоріжчини');
            ctx.scene.enter('settlement');
        });

        zaporizhzhiaDistrict.action('veselivskyi', async (ctx) => {
            await ctx.reply('Ви обрали Веселівський район Запоріжчини');
            ctx.scene.enter('settlement');
        });

        zaporizhzhiaDistrict.action('vilnius', async (ctx) => {
            await ctx.reply('Ви обрали Вільнянський район Запоріжчини');
            ctx.scene.enter('settlement');
        });

        zaporizhzhiaDistrict.action('hulyaipilskyi', async (ctx) => {
            await ctx.reply('Ви обрали Гуляйпільський район Запоріжчини');
            ctx.scene.enter('settlement');
        });

        zaporizhzhiaDistrict.action('zaporozhye', async (ctx) => {
            await ctx.reply('Ви обрали Запорізький район Запоріжчини');
            ctx.scene.enter('settlement');
        });

        zaporizhzhiaDistrict.action('kamiunoDniprovsky', async (ctx) => {
            await ctx.reply("Ви обрали Кам'янсько-дніпровський район Запоріжчини");
            ctx.scene.enter('settlement');
        });

        zaporizhzhiaDistrict.action('melitopolskyi', async (ctx) => {
            await ctx.reply('Ви обрали Мелітопольський район Запоріжчини');
            ctx.scene.enter('settlement');
        });

        zaporizhzhiaDistrict.action('mykhailivskyi', async (ctx) => {
            await ctx.reply('Ви обрали Михайлівський район Запоріжчини');
            ctx.scene.enter('settlement');
        });

        zaporizhzhiaDistrict.action('novomykolaivskyi', async (ctx) => {
            await ctx.reply('Ви обрали Новомиколаївський район Запоріжчини');
            ctx.scene.enter('settlement');
        });

        zaporizhzhiaDistrict.action('orichivskyi', async (ctx) => {
            await ctx.reply('Ви обрали Оріхівський район Запоріжчини');
            ctx.scene.enter('settlement');
        });

        zaporizhzhiaDistrict.action('polohivskyi', async (ctx) => {
            await ctx.reply('Ви обрали Пологівський район Запоріжчини');
            ctx.scene.enter('settlement');
        });

        zaporizhzhiaDistrict.action('polohivskyi', async (ctx) => {
            await ctx.reply('Ви обрали Приазовський район Запоріжчини');
            ctx.scene.enter('settlement');
        });

        zaporizhzhiaDistrict.action('priazovsky', async (ctx) => {
            await ctx.reply('Ви обрали Приазовський район Запоріжчини');
            ctx.scene.enter('settlement');
        });

        zaporizhzhiaDistrict.action('primorskyi', async (ctx) => {
            await ctx.reply('Ви обрали Приморський район Запоріжчини');
            ctx.scene.enter('settlement');
        });

        zaporizhzhiaDistrict.action('rozovsky', async (ctx) => {
            await ctx.reply('Ви обрали Розівський район Запоріжчини');
            ctx.scene.enter('settlement');
        });

        zaporizhzhiaDistrict.action('tokmacki', async (ctx) => {
            await ctx.reply('Ви обрали Токмацький район Запоріжчини');
            ctx.scene.enter('settlement');
        });

        zaporizhzhiaDistrict.action('chernihivskyi', async (ctx) => {
            await ctx.reply('Ви обрали Чернігівський район Запоріжчини');
            ctx.scene.enter('settlement');
        });

        zaporizhzhiaDistrict.action('yakymovsky', async (ctx) => {
            await ctx.reply('Ви обрали Якимівський район Запоріжчини');
            ctx.scene.enter('settlement');
        });

        return zaporizhzhiaDistrict;
    }

    SelectIvanoFrankivskDistrict() {
        const ivanoFrankivskDistrict = new Scenes.BaseScene('ivanoFrankivskDistrict');
        ivanoFrankivskDistrict.enter(async (ctx) => {
            await ctx.reply('Оберіть район Івано-Франківщини:', {
                reply_markup: {
                    inline_keyboard: [
                        [{ text: ' ', callback_data: 'blank' }],
                        [{ text: 'Богородчанський район', callback_data: 'bogorodchanskyi' }],
                        [{ text: 'Болехів', callback_data: 'bolehiv' }],
                        [{ text: 'Верховинський район', callback_data: 'verkhovynskyi' }],
                        [{ text: 'Галицький район', callback_data: 'halytskyi' }],
                        [{ text: 'Городенківський район', callback_data: 'horodenkivskyi' }],
                        [{ text: 'Долинський район', callback_data: 'folynskyi' }],
                        [{ text: 'Івано-франківськ', callback_data: 'ivanoFrankivsk' }],
                        [{ text: 'Калуський район', callback_data: 'kalusky' }],
                        [{ text: 'Коломийський район', callback_data: 'kolomiyskyi' }],
                        [{ text: 'Косівський район', callback_data: 'kosivskyi' }],
                        [{ text: 'Надвірнянський район', callback_data: 'nadvirnyanskyi' }],
                        [{ text: 'Рогатинський район', callback_data: 'rohatynskyi' }],
                        [{ text: 'Рожнятівський район', callback_data: 'rozhnativskyi' }],
                        [{ text: 'Снятинський район', callback_data: 'snyatinsky' }],
                        [{ text: 'Тисменицький район', callback_data: 'tysmenitskyi' }],
                        [{ text: 'Тлумацький район', callback_data: 'tlumatsly' }],
                        [{ text: 'Яремче', callback_data: 'yaremche' }],
                    ],
                },
            });
        });

        ivanoFrankivskDistrict.action('blank', async (ctx) => {
            await ctx.reply('');
            ctx.scene.enter('settlement');
        });

        ivanoFrankivskDistrict.action('bogorodchanskyi', async (ctx) => {
            await ctx.reply('Ви обрали Богородчанський район Івано-Франківщини');
            ctx.scene.enter('settlement');
        });

        ivanoFrankivskDistrict.action('bolehiv', async (ctx) => {
            await ctx.reply('Ви обрали Болехів район Івано-Франківщина');
            ctx.scene.enter('settlement');
        });

        ivanoFrankivskDistrict.action('verkhovynskyi', async (ctx) => {
            await ctx.reply('Ви обрали Верховинський район Івано-Франківщини');
            ctx.scene.enter('settlement');
        });

        ivanoFrankivskDistrict.action('halytskyi', async (ctx) => {
            await ctx.reply('Ви обрали Галицький район Івано-Франківщини');
            ctx.scene.enter('settlement');
        });

        ivanoFrankivskDistrict.action('horodenkivskyi', async (ctx) => {
            await ctx.reply('Ви обрали Городенківський район Івано-Франківщини');
            ctx.scene.enter('settlement');
        });

        ivanoFrankivskDistrict.action('folynskyi', async (ctx) => {
            await ctx.reply('Ви обрали Долинський район Івано-Франківщини');
            ctx.scene.enter('settlement');
        });

        ivanoFrankivskDistrict.action('ivanoFrankivsk', async (ctx) => {
            await ctx.reply('Ви обрали Івано-франківськ Івано-Франківщиниа');
            ctx.scene.enter('settlement');
        });

        ivanoFrankivskDistrict.action('kalusky', async (ctx) => {
            await ctx.reply('Ви обрали Калуський район Івано-Франківщини');
            ctx.scene.enter('settlement');
        });

        ivanoFrankivskDistrict.action('kolomiyskyi', async (ctx) => {
            await ctx.reply('Ви обрали Коломийський район Івано-Франківщини');
            ctx.scene.enter('settlement');
        });

        ivanoFrankivskDistrict.action('kosivskyi', async (ctx) => {
            await ctx.reply('Ви обрали Косівський район Івано-Франківщини');
            ctx.scene.enter('settlement');
        });

        ivanoFrankivskDistrict.action('nadvirnyanskyi', async (ctx) => {
            await ctx.reply('Ви обрали Надвірнянський район Івано-Франківщини');
            ctx.scene.enter('settlement');
        });

        ivanoFrankivskDistrict.action('rohatynskyi', async (ctx) => {
            await ctx.reply('Ви обрали Рогатинський район Івано-Франківщини');
            ctx.scene.enter('settlement');
        });

        ivanoFrankivskDistrict.action('rozhnativskyi', async (ctx) => {
            await ctx.reply('Ви обрали Рожнятівський район Івано-Франківщини');
            ctx.scene.enter('settlement');
        });

        ivanoFrankivskDistrict.action('snyatinsky', async (ctx) => {
            await ctx.reply('Ви обрали Снятинський район Івано-Франківщини');
            ctx.scene.enter('settlement');
        });

        ivanoFrankivskDistrict.action('tysmenitskyi', async (ctx) => {
            await ctx.reply('Ви обрали Тисменицький район Івано-Франківщини');
            ctx.scene.enter('settlement');
        });

        ivanoFrankivskDistrict.action('tlumatsly', async (ctx) => {
            await ctx.reply('Ви обрали Тлумацький район Івано-Франківщини');
            ctx.scene.enter('settlement');
        });

        return ivanoFrankivskDistrict;
    }

    SelectKirovohradDistrict() {
        const kirovohradDistrict = new Scenes.BaseScene('kirovohradDistrict');
        kirovohradDistrict.enter(async (ctx) => {
            await ctx.reply('Оберіть район Кіровоградщини:', {
                reply_markup: {
                    inline_keyboard: [
                        [{ text: ' ', callback_data: 'blank' }],
                        [{ text: 'Благовіщенський район', callback_data: 'blagovinjenky' }],
                        [{ text: 'Бобринецький район', callback_data: 'bobrynetskyi' }],
                        [{ text: 'Вільшанський район', callback_data: 'vilshansky' }],
                        [{ text: 'Гайворонський район', callback_data: 'hayvoronskyi' }],
                        [{ text: 'Голованівський район', callback_data: 'golovanivskyi' }],
                        [{ text: 'Добровеличківський район', callback_data: 'dobrovelichkivskyi' }],
                        [{ text: 'Долинський район', callback_data: 'dolynskyi' }],
                        [{ text: "Знам'янка", callback_data: 'znamyanka' }],
                        [{ text: "Знам'янський район", callback_data: 'znamyankaDst' }],
                        [{ text: 'Компаніївський район', callback_data: 'kompaniivskyi' }],
                        [{ text: 'Кропивницький', callback_data: 'kropyvnytskyi' }],
                        [{ text: 'Кропивницький район', callback_data: 'kropyvnytskyiDst' }],
                        [{ text: 'Маловисківський район', callback_data: 'malovyskivskyi' }],
                        [{ text: 'Новгородківський район', callback_data: 'novgorodkivskyi' }],
                        [{ text: 'Новоархангельський район', callback_data: 'novoarkhangelsk' }],
                        [{ text: 'Новомиргородський район', callback_data: 'novomyrhorodskyi' }],
                        [{ text: 'Новоукраїнський район', callback_data: 'novoukrainsky' }],
                        [{ text: 'Олександрівський район', callback_data: 'oleksandrovsky' }],
                        [{ text: 'Олександрійський район', callback_data: 'oleksandrovskyDst' }],
                        [{ text: 'Олександрія', callback_data: 'olexandria' }],
                        [{ text: 'Онуфріївський район', callback_data: 'onufriivskyi' }],
                        [{ text: 'Петрівський район', callback_data: 'petrivskyi' }],
                        [{ text: 'Світловодськ', callback_data: 'svitlovodsk' }],
                        [{ text: 'Світловодський район', callback_data: 'svitlovodskDst' }],
                        [{ text: 'Устинівський район', callback_data: 'ustinivskyi' }],
                    ],
                },
            });
        });

        kirovohradDistrict.action('blank', async (ctx) => {
            //await ctx.reply('Ви обрали район Кіровоградщини');
            ctx.scene.enter('settlement');
        });

        kirovohradDistrict.action('blagovinjenky', async (ctx) => {
            await ctx.reply('Ви обрали Благовіщенський район Кіровоградщини');
            ctx.scene.enter('settlement');
        });

        kirovohradDistrict.action('bobrynetskyi', async (ctx) => {
            await ctx.reply('Ви обрали Бобринецький район Кіровоградщини');
            ctx.scene.enter('settlement');
        });

        kirovohradDistrict.action('vilshansky', async (ctx) => {
            await ctx.reply('Ви обрали Вільшанський район Кіровоградщини');
            ctx.scene.enter('settlement');
        });

        kirovohradDistrict.action('hayvoronskyi', async (ctx) => {
            await ctx.reply('Ви обрали Гайворонський район Кіровоградщини');
            ctx.scene.enter('settlement');
        });

        kirovohradDistrict.action('golovanivskyi', async (ctx) => {
            await ctx.reply('Ви обрали Голованівський район Кіровоградщини');
            ctx.scene.enter('settlement');
        });

        kirovohradDistrict.action('dobrovelichkivskyi', async (ctx) => {
            await ctx.reply('Ви обрали Добровеличківський район Кіровоградщини');
            ctx.scene.enter('settlement');
        });

        kirovohradDistrict.action('dolynskyi', async (ctx) => {
            await ctx.reply('Ви обрали Долинський район Кіровоградщини');
            ctx.scene.enter('settlement');
        });

        kirovohradDistrict.action('znamyanka', async (ctx) => {
            await ctx.reply("Ви обрали Знам'янка Кіровоградщина");
            ctx.scene.enter('settlement');
        });

        kirovohradDistrict.action('znamyankaDst', async (ctx) => {
            await ctx.reply("Ви обрали Знам'янський  район Кіровоградщини");
            ctx.scene.enter('settlement');
        });

        kirovohradDistrict.action('kompaniivskyi', async (ctx) => {
            await ctx.reply('Ви обрали Компаніївський район Кіровоградщини');
            ctx.scene.enter('settlement');
        });

        kirovohradDistrict.action('kropyvnytskyi', async (ctx) => {
            await ctx.reply('Ви обрали Кропивницький Кіровоградщина');
            ctx.scene.enter('settlement');
        });

        kirovohradDistrict.action('kropyvnytskyiDst', async (ctx) => {
            await ctx.reply('Ви обрали Кропивницький район Кіровоградщини');
            ctx.scene.enter('settlement');
        });

        kirovohradDistrict.action('malovyskivskyi', async (ctx) => {
            await ctx.reply('Ви обрали Маловисківський район Кіровоградщини');
            ctx.scene.enter('settlement');
        });

        kirovohradDistrict.action('novgorodkivskyi', async (ctx) => {
            await ctx.reply('Ви обрали Новгородківський район Кіровоградщини');
            ctx.scene.enter('settlement');
        });

        kirovohradDistrict.action('novoarkhangelsk', async (ctx) => {
            await ctx.reply('Ви обрали Новоархангельський район Кіровоградщини');
            ctx.scene.enter('settlement');
        });

        kirovohradDistrict.action('novomyrhorodskyi', async (ctx) => {
            await ctx.reply('Ви обрали Новомиргородський район Кіровоградщини');
            ctx.scene.enter('settlement');
        });

        kirovohradDistrict.action('novoukrainsky', async (ctx) => {
            await ctx.reply('Ви обрали Новоукраїнський район Кіровоградщини');
            ctx.scene.enter('settlement');
        });

        kirovohradDistrict.action('oleksandrovsky', async (ctx) => {
            await ctx.reply('Ви обрали Олександрівський район Кіровоградщини');
            ctx.scene.enter('settlement');
        });

        kirovohradDistrict.action('oleksandrovskyDst', async (ctx) => {
            await ctx.reply('Ви обрали Олександрійський район Кіровоградщини');
            ctx.scene.enter('settlement');
        });

        kirovohradDistrict.action('olexandria', async (ctx) => {
            await ctx.reply('Ви обрали Олександрія район Кіровоградщина');
            ctx.scene.enter('settlement');
        });

        kirovohradDistrict.action('onufriivskyi', async (ctx) => {
            await ctx.reply('Ви обрали Онуфріївський район Кіровоградщини');
            ctx.scene.enter('settlement');
        });

        kirovohradDistrict.action('petrivskyi', async (ctx) => {
            await ctx.reply('Ви обрали Петрівський район Кіровоградщини');
            ctx.scene.enter('settlement');
        });

        kirovohradDistrict.action('svitlovodsk', async (ctx) => {
            await ctx.reply('Ви обрали Світловодськ Кіровоградщина');
            ctx.scene.enter('settlement');
        });

        kirovohradDistrict.action('svitlovodskDst', async (ctx) => {
            await ctx.reply('Ви обрали Світловодськ район Кіровоградщини');
            ctx.scene.enter('settlement');
        });

        kirovohradDistrict.action('ustinivskyi', async (ctx) => {
            await ctx.reply('Ви обрали Устинівський район Кіровоградщини');
            ctx.scene.enter('settlement');
        });

        return kirovohradDistrict;
    }

    SelectKyivDistrict() {
        const kyivDistrict = new Scenes.BaseScene('kyivDistrict');
        kyivDistrict.enter(async (ctx) => {
            await ctx.reply('Оберіть район Київщини:', {
                reply_markup: {
                    inline_keyboard: [
                        [{ text: ' ', callback_data: 'blank' }],
                        [{ text: 'Баришівський район', callback_data: 'baryshivskyi' }],
                        [{ text: 'Білоцерківський район', callback_data: 'belotserkivskyi' }],
                        [{ text: 'Богуславський район', callback_data: 'boguslavskyi' }],
                        [{ text: 'Бориспільський район', callback_data: 'boryspilskyi' }],
                        [{ text: 'Бородянський район', callback_data: 'borodyanskyi' }],
                        [{ text: 'Броварський район', callback_data: 'brovarsky' }],
                        [{ text: 'Васильківський район', callback_data: 'vasylkivskyi' }],
                        [{ text: 'Вишгородський район', callback_data: 'vyshgorodskyi' }],
                        [{ text: 'Володарський район', callback_data: 'volodarsky' }],
                        [{ text: 'Згурівський район', callback_data: 'zgurivskyi' }],
                        [{ text: 'Іванківський район', callback_data: 'ivankivskyi' }],
                        [{ text: 'Ірпінь', callback_data: 'irpin' }],
                        [{ text: 'Кагарлицький район', callback_data: 'kagarlytskyi' }],
                        [{ text: 'Києво-святошинський район', callback_data: 'kyivSvyatoshinskyi' }],
                        [{ text: 'Макарівський район', callback_data: 'makarovsky' }],
                        [{ text: 'Миронівський район', callback_data: 'myronivskyi' }],
                        [{ text: 'Обухівський район', callback_data: 'obukhivskyi' }],
                        [{ text: 'Переяслав-хмельницький район', callback_data: 'pereyaslavKhmelnytskyi' }],
                        [{ text: 'Поліський район', callback_data: 'polisky' }],
                        [{ text: 'Рокитнянський район', callback_data: 'rokytnianskyi' }],
                        [{ text: 'Сквирський район', callback_data: 'skvirsky' }],
                        [{ text: 'Ставищенський район', callback_data: 'stavishchenskyi' }],
                        [{ text: 'Таращанський район', callback_data: 'taraschanskyi' }],
                        [{ text: 'Тетіївський район', callback_data: 'tetiivskyi' }],
                        [{ text: 'Фастівський район', callback_data: 'fastivskyi' }],
                        [{ text: 'Яготинський район', callback_data: 'yagotynskyi' }],
                    ],
                },
            });
        });

        kyivDistrict.action('blank', async (ctx) => {
            //await ctx.reply('');
            ctx.scene.enter('settlement');
        });

        kyivDistrict.action('baryshivskyi', async (ctx) => {
            await ctx.reply('Ви обрали Баришівський район Київщини');
            ctx.scene.enter('settlement');
        });

        kyivDistrict.action('belotserkivskyi', async (ctx) => {
            await ctx.reply('Ви обрали Білоцерківський район Київщини');
            ctx.scene.enter('settlement');
        });

        kyivDistrict.action('boguslavskyi', async (ctx) => {
            await ctx.reply('Ви обрали Богуславський район Київщини');
            ctx.scene.enter('settlement');
        });

        kyivDistrict.action('boryspilskyi', async (ctx) => {
            await ctx.reply('Ви обрали Бориспільський район Київщини');
            ctx.scene.enter('settlement');
        });

        kyivDistrict.action('borodyanskyi', async (ctx) => {
            await ctx.reply('Ви обрали Бородянський район Київщини');
            ctx.scene.enter('settlement');
        });

        kyivDistrict.action('brovarsky', async (ctx) => {
            await ctx.reply('Ви обрали Броварський район Київщини');
            ctx.scene.enter('settlement');
        });

        kyivDistrict.action('vasylkivskyi', async (ctx) => {
            await ctx.reply('Ви обрали Васильківський район Київщини');
            ctx.scene.enter('settlement');
        });

        kyivDistrict.action('vyshgorodskyi', async (ctx) => {
            await ctx.reply('Ви обрали Вишгородський район Київщини');
            ctx.scene.enter('settlement');
        });

        kyivDistrict.action('volodarsky', async (ctx) => {
            await ctx.reply('Ви обрали Володарський район Київщини');
            ctx.scene.enter('settlement');
        });

        kyivDistrict.action('zgurivskyi', async (ctx) => {
            await ctx.reply('Ви обрали Згурівський район Київщини');
            ctx.scene.enter('settlement');
        });

        kyivDistrict.action('ivankivskyi', async (ctx) => {
            await ctx.reply('Ви обрали Іванківський район Київщини');
            ctx.scene.enter('settlement');
        });

        kyivDistrict.action('irpin', async (ctx) => {
            await ctx.reply('Ви обрали Ірпінь Київщина');
            ctx.scene.enter('settlement');
        });

        kyivDistrict.action('kagarlytskyi', async (ctx) => {
            await ctx.reply('Ви обрали Кагарлицький район Київщини');
            ctx.scene.enter('settlement');
        });

        kyivDistrict.action('kyivSvyatoshinskyi', async (ctx) => {
            await ctx.reply('Ви обрали Києво-святошинський район Київщини');
            ctx.scene.enter('settlement');
        });

        kyivDistrict.action('makarovsky', async (ctx) => {
            await ctx.reply('Ви обрали Макарівський район Київщини');
            ctx.scene.enter('settlement');
        });

        kyivDistrict.action('myronivskyi', async (ctx) => {
            await ctx.reply('Ви обрали Миронівський район Київщини');
            ctx.scene.enter('settlement');
        });

        kyivDistrict.action('obukhivskyi', async (ctx) => {
            await ctx.reply('Ви обрали Обухівський район Київщини');
            ctx.scene.enter('settlement');
        });

        kyivDistrict.action('pereyaslavKhmelnytskyi', async (ctx) => {
            await ctx.reply('Ви обрали Переяслав-хмельницький район Київщини');
            ctx.scene.enter('settlement');
        });

        kyivDistrict.action('polisky', async (ctx) => {
            await ctx.reply('Ви обрали Поліський район Київщини');
            ctx.scene.enter('settlement');
        });

        kyivDistrict.action('rokytnianskyi', async (ctx) => {
            await ctx.reply('Ви обрали Рокитнянський район Київщини');
            ctx.scene.enter('settlement');
        });

        kyivDistrict.action('skvirsky', async (ctx) => {
            await ctx.reply('Ви обрали Сквирський район Київщини');
            ctx.scene.enter('settlement');
        });

        kyivDistrict.action('stavishchenskyi', async (ctx) => {
            await ctx.reply('Ви обрали Ставищенський район Київщини');
            ctx.scene.enter('settlement');
        });

        kyivDistrict.action('taraschanskyi', async (ctx) => {
            await ctx.reply('Ви обрали Таращанський район Київщини');
            ctx.scene.enter('settlement');
        });

        kyivDistrict.action('tetiivskyi', async (ctx) => {
            await ctx.reply('Ви обрали Тетіївський район Київщини');
            ctx.scene.enter('settlement');
        });

        kyivDistrict.action('fastivskyi', async (ctx) => {
            await ctx.reply('Ви обрали Фастівський район Київщини');
            ctx.scene.enter('settlement');
        });

        kyivDistrict.action('yagotynskyi', async (ctx) => {
            await ctx.reply('Ви обрали Яготинський район Київщини');
            ctx.scene.enter('settlement');
        });

        return kyivDistrict;
    }

    SelectLuhanskDistrict() {
        const luhanskDistrict = new Scenes.BaseScene('luhanskDistrict');
        luhanskDistrict.enter(async (ctx) => {
            await ctx.reply('Оберіть район Луганщини:', {
                reply_markup: {
                    inline_keyboard: [
                        [{ text: ' ', callback_data: 'blank' }],
                        [{ text: 'Антрацит', callback_data: 'anthracite' }],
                        [{ text: 'Антрацитівський район', callback_data: 'anthraciteDst' }],
                        [{ text: 'Біловодський район', callback_data: 'bilovodskyi' }],
                        [{ text: 'Білокуракинський район', callback_data: 'bilokurakinskyi' }],
                        [{ text: 'Брянка', callback_data: 'bryanka' }],
                        [{ text: 'Голубівка', callback_data: 'golubivka' }],
                        [{ text: 'Довжанськ', callback_data: 'dovzhansk' }],
                        [{ text: 'Довжанський район', callback_data: 'dovzhanskDst' }],
                        [{ text: 'Золоте', callback_data: 'zolote' }],
                        [{ text: 'Кадіївка', callback_data: 'kadiivka' }],
                        [{ text: 'Краснодон', callback_data: 'krasnodon' }],
                        [{ text: 'Краснодонський район', callback_data: 'krasnodonDst' }],
                        [{ text: 'Кремінський район', callback_data: 'kreminsky' }],
                        [{ text: 'Лисичанськ', callback_data: 'lysychansk' }],
                        [{ text: 'Луганськ', callback_data: 'luhansk' }],
                        [{ text: 'Лутугинский район', callback_data: 'luhanskDst' }],
                        [{ text: 'Марківський район', callback_data: 'markivskyi' }],
                        [{ text: 'Міловський район', callback_data: 'milovsky' }],
                        [{ text: 'Новоайдарський район', callback_data: 'novoaidarskyi' }],
                        [{ text: 'Новопсковський район', callback_data: 'novopskovsky' }],
                        [{ text: 'Первомайськ', callback_data: 'pervomaisk' }],
                        [{ text: 'Перевальський район', callback_data: 'perevalsky' }],
                        [{ text: 'Попаснянський район', callback_data: 'popasnyanskyi' }],
                        [{ text: 'Ровеньки', callback_data: 'rivenka' }],
                        [{ text: 'Сватівський район', callback_data: 'svativskyi' }],
                        [{ text: 'Сєвєродонецьк', callback_data: 'severodonetsk' }],
                        [{ text: "Слов'яносербський район", callback_data: 'sloviunoSerbsky' }],
                        [{ text: 'Станично-луганський район', callback_data: 'stanychnoLuhansk' }],
                        [{ text: 'Старобільський район', callback_data: 'starobilsky' }],
                        [{ text: 'Троїцький район', callback_data: 'troitsky' }],
                        [{ text: 'Хрустальний', callback_data: 'hrustalyniy' }],
                    ],
                },
            });
        });

        luhanskDistrict.action('blank', async (ctx) => {
            //await ctx.reply('Ви обрали  район Луганщини');
            ctx.scene.enter('settlement');
        });

        luhanskDistrict.action('anthracite', async (ctx) => {
            await ctx.reply('Ви обрали Антрацит Луганщина');
            ctx.scene.enter('settlement');
        });

        luhanskDistrict.action('anthraciteDst', async (ctx) => {
            await ctx.reply('Ви обрали Антрацитівський район Луганщини');
            ctx.scene.enter('settlement');
        });

        luhanskDistrict.action('bilovodskyi', async (ctx) => {
            await ctx.reply('Ви обрали Біловодський район Луганщини');
            ctx.scene.enter('settlement');
        });

        luhanskDistrict.action('bilokurakinskyi', async (ctx) => {
            await ctx.reply('Ви обрали Білокуракинський район Луганщини');
            ctx.scene.enter('settlement');
        });

        luhanskDistrict.action('bryanka', async (ctx) => {
            await ctx.reply('Ви обрали Брянка Луганщина');
            ctx.scene.enter('settlement');
        });

        luhanskDistrict.action('golubivka', async (ctx) => {
            await ctx.reply('Ви обрали Голубівка Луганщина');
            ctx.scene.enter('settlement');
        });

        luhanskDistrict.action('dovzhansk', async (ctx) => {
            await ctx.reply('Ви обрали Довжанськ Луганщина');
            ctx.scene.enter('settlement');
        });

        luhanskDistrict.action('dovzhanskDst', async (ctx) => {
            await ctx.reply('Ви обрали Довжанський район Луганщини');
            ctx.scene.enter('settlement');
        });

        luhanskDistrict.action('zolote', async (ctx) => {
            await ctx.reply('Ви обрали Золоте Луганщина');
            ctx.scene.enter('settlement');
        });

        luhanskDistrict.action('kadiivka', async (ctx) => {
            await ctx.reply('Ви обрали Кадіївка Луганщина');
            ctx.scene.enter('settlement');
        });

        luhanskDistrict.action('krasnodon', async (ctx) => {
            await ctx.reply('Ви обрали Краснодон Луганщина');
            ctx.scene.enter('settlement');
        });

        luhanskDistrict.action('krasnodonDst', async (ctx) => {
            await ctx.reply('Ви обрали Краснодонський район Луганщини');
            ctx.scene.enter('settlement');
        });

        luhanskDistrict.action('kreminsky', async (ctx) => {
            await ctx.reply('Ви обрали Кремінський район Луганщини');
            ctx.scene.enter('settlement');
        });

        luhanskDistrict.action('lysychansk', async (ctx) => {
            await ctx.reply('Ви обрали Лисичанськ Луганщина');
            ctx.scene.enter('settlement');
        });

        luhanskDistrict.action('luhansk', async (ctx) => {
            await ctx.reply('Ви обрали Луганськ Луганщина');
            ctx.scene.enter('settlement');
        });

        luhanskDistrict.action('luhanskDst', async (ctx) => {
            await ctx.reply('Ви обрали Лутугинский район Луганщини');
            ctx.scene.enter('settlement');
        });

        luhanskDistrict.action('markivskyi', async (ctx) => {
            await ctx.reply('Ви обрали Марківський район Луганщини');
            ctx.scene.enter('settlement');
        });

        luhanskDistrict.action('milovsky', async (ctx) => {
            await ctx.reply('Ви обрали Міловський район Луганщини');
            ctx.scene.enter('settlement');
        });

        luhanskDistrict.action('novoaidarskyi', async (ctx) => {
            await ctx.reply('Ви обрали Новоайдарський район Луганщини');
            ctx.scene.enter('settlement');
        });

        luhanskDistrict.action('novopskovsky', async (ctx) => {
            await ctx.reply('Ви обрали Новопсковський район Луганщини');
            ctx.scene.enter('settlement');
        });

        luhanskDistrict.action('pervomaisk', async (ctx) => {
            await ctx.reply('Ви обрали Первомайськ Луганщина');
            ctx.scene.enter('settlement');
        });

        luhanskDistrict.action('perevalsky', async (ctx) => {
            await ctx.reply('Ви обрали Перевальський район Луганщини');
            ctx.scene.enter('settlement');
        });

        luhanskDistrict.action('popasnyanskyi', async (ctx) => {
            await ctx.reply('Ви обрали  район Луганщини');
            ctx.scene.enter('settlement');
        });

        luhanskDistrict.action('rivenka', async (ctx) => {
            await ctx.reply('Ви обрали Ровеньки Луганщина');
            ctx.scene.enter('settlement');
        });

        luhanskDistrict.action('svativskyi', async (ctx) => {
            await ctx.reply('Ви обрали Сватівський район Луганщини');
            ctx.scene.enter('settlement');
        });

        luhanskDistrict.action('severodonetsk', async (ctx) => {
            await ctx.reply('Ви обрали Сєвєродонецьк Луганщина');
            ctx.scene.enter('settlement');
        });

        luhanskDistrict.action('sloviunoSerbsky', async (ctx) => {
            await ctx.reply("Ви обрали Слов'яносербський район Луганщини");
            ctx.scene.enter('settlement');
        });

        luhanskDistrict.action('stanychnoLuhansk', async (ctx) => {
            await ctx.reply('Ви обрали Станично-луганський район Луганщини');
            ctx.scene.enter('settlement');
        });

        luhanskDistrict.action('starobilsky', async (ctx) => {
            await ctx.reply('Ви обрали Старобільський район Луганщини');
            ctx.scene.enter('settlement');
        });

        luhanskDistrict.action('troitsky', async (ctx) => {
            await ctx.reply('Ви обрали Троїцький район Луганщини');
            ctx.scene.enter('settlement');
        });

        luhanskDistrict.action('hrustalyniy', async (ctx) => {
            await ctx.reply('Ви обрали Хрустальний Луганщина');
            ctx.scene.enter('settlement');
        });

        return luhanskDistrict;
    }

    /*
        заповнити акшени 
    */

    SelectLvivDistrict() {
        const lvivDistrict = new Scenes.BaseScene('lvivDistrict');
        lvivDistrict.enter(async (ctx) => {
            await ctx.reply('Оберіть район Лвівщини:', {
                reply_markup: {
                    inline_keyboard: [
                        [{ text: ' ', callback_data: 'blank' }],
                        [{ text: 'Борислав', callback_data: 'boryslav' }],
                        [{ text: 'Бродівський район', callback_data: 'brodovsky' }],
                        [{ text: 'Буський район', callback_data: 'busky' }],
                        [{ text: 'Городоцький район', callback_data: 'horodotskyi' }],
                        [{ text: 'Дрогобицький район', callback_data: 'drohobytskyi' }],
                        [{ text: 'Дрогобич', callback_data: 'drohobych' }],
                        [{ text: 'Жидачівський район', callback_data: 'zhydachevskyi' }],
                        [{ text: 'Жовківський район', callback_data: 'zhovkivskyi' }],
                        [{ text: 'Золочівський район', callback_data: 'zolochivskyi' }],
                        [{ text: "Кам'янка-бузький район", callback_data: 'kamiankaBuzikiy' }],
                        [{ text: 'Миколаївський район', callback_data: 'mykolaivskyi' }],
                        [{ text: 'Мостиський район', callback_data: 'mostyskyi' }],
                        [{ text: 'Перемишлянський район', callback_data: 'przemyslyanskyi' }],
                        [{ text: 'Пустомитівський район', callback_data: 'pustomitivskyi' }],
                        [{ text: 'Радехівський район', callback_data: 'radekhivskyi' }],
                        [{ text: 'Самбірський район', callback_data: 'sambirskyi' }],
                        [{ text: 'Сколівський район', callback_data: 'skolovsky' }],
                        [{ text: 'Сокальський район', callback_data: 'sokalsky' }],
                        [{ text: 'Старосамбірський район', callback_data: 'starosambirskyi' }],
                        [{ text: 'Стрийський район', callback_data: 'stryiskyi' }],
                        [{ text: 'Турківський район', callback_data: 'turkivskyi' }],
                        [{ text: 'Червоноград', callback_data: 'chervonograd' }],
                        [{ text: 'Яворівський район', callback_data: 'yavorivskyi' }],
                    ],
                },
            });
        });

        lvivDistrict.action('blank', async (ctx) => {
            //await ctx.reply('Ви обрали  район Лвівщини');
            ctx.scene.enter('settlement');
        });

        lvivDistrict.action('boryslav', async (ctx) => {
            await ctx.reply('Ви обрали Борислав Лвівщина');
            ctx.scene.enter('settlement');
        });

        lvivDistrict.action('brodovsky', async (ctx) => {
            await ctx.reply('Ви обрали Бродівський район Лвівщини');
            ctx.scene.enter('settlement');
        });

        lvivDistrict.action('busky', async (ctx) => {
            await ctx.reply('Ви обрали Буський район Лвівщини');
            ctx.scene.enter('settlement');
        });

        lvivDistrict.action('horodotskyi', async (ctx) => {
            await ctx.reply('Ви обрали Городоцький район Лвівщини');
            ctx.scene.enter('settlement');
        });

        lvivDistrict.action('drohobytskyi', async (ctx) => {
            await ctx.reply('Ви обрали Дрогобицький район Лвівщини');
            ctx.scene.enter('settlement');
        });

        lvivDistrict.action('drohobych', async (ctx) => {
            await ctx.reply('Ви обрали Дрогобич Лвівщина');
            ctx.scene.enter('settlement');
        });

        lvivDistrict.action('zhydachevskyi', async (ctx) => {
            await ctx.reply('Ви обрали Жидачівський район Лвівщини');
            ctx.scene.enter('settlement');
        });

        lvivDistrict.action('zhovkivskyi', async (ctx) => {
            await ctx.reply('Ви обрали Жовківський район Лвівщини');
            ctx.scene.enter('settlement');
        });

        lvivDistrict.action('zolochivskyi', async (ctx) => {
            await ctx.reply('Ви обрали Золочівський район Лвівщини');
            ctx.scene.enter('settlement');
        });

        lvivDistrict.action('kamiankaBuzikiy', async (ctx) => {
            await ctx.reply("Ви обрали Кам'янка-бузький район Лвівщини");
            ctx.scene.enter('settlement');
        });

        lvivDistrict.action('mykolaivskyi', async (ctx) => {
            await ctx.reply('Ви обрали Миколаївський район Лвівщини');
            ctx.scene.enter('settlement');
        });

        lvivDistrict.action('mostyskyi', async (ctx) => {
            await ctx.reply('Ви обрали Мостиський район Лвівщини');
            ctx.scene.enter('settlement');
        });

        lvivDistrict.action('przemyslyanskyi', async (ctx) => {
            await ctx.reply('Ви обрали  район Лвівщини');
            ctx.scene.enter('settlement');
        });

        lvivDistrict.action('pustomitivskyi', async (ctx) => {
            await ctx.reply('Ви обрали Перемишлянський район Лвівщини');
            ctx.scene.enter('settlement');
        });

        lvivDistrict.action('radekhivskyi', async (ctx) => {
            await ctx.reply('Ви обрали Радехівський район Лвівщини');
            ctx.scene.enter('settlement');
        });

        lvivDistrict.action('sambirskyi', async (ctx) => {
            await ctx.reply('Ви обрали Самбірський район Лвівщини');
            ctx.scene.enter('settlement');
        });

        lvivDistrict.action('skolovsky', async (ctx) => {
            await ctx.reply('Ви обрали Сколівський район Лвівщини');
            ctx.scene.enter('settlement');
        });

        lvivDistrict.action('sokalsky', async (ctx) => {
            await ctx.reply('Ви обрали Сокальський район Лвівщини');
            ctx.scene.enter('settlement');
        });

        lvivDistrict.action('starosambirskyi', async (ctx) => {
            await ctx.reply('Ви обрали Старосамбірський район Лвівщини');
            ctx.scene.enter('settlement');
        });

        lvivDistrict.action('stryiskyi', async (ctx) => {
            await ctx.reply('Ви обрали Стрийський район Лвівщини');
            ctx.scene.enter('settlement');
        });

        lvivDistrict.action('turkivskyi', async (ctx) => {
            await ctx.reply('Ви обрали Турківський район Лвівщини');
            ctx.scene.enter('settlement');
        });

        lvivDistrict.action('chervonograd', async (ctx) => {
            await ctx.reply('Ви обрали Червоноград район Лвівщини');
            ctx.scene.enter('settlement');
        });

        lvivDistrict.action('yavorivskyi', async (ctx) => {
            await ctx.reply('Ви обрали Яворівський район Лвівщини');
            ctx.scene.enter('settlement');
        });

        return lvivDistrict;
    }

    /*
    SelectKyivDistrict() {
        const vinnytsiaDistrict = new Scenes.BaseScene('vinnytsiaDistrict');
        vinnytsiaDistrict.enter(async (ctx) => {
            await ctx.reply('Реєстрація Власника ТЗ(за тех. паспортом):', {
                reply_markup: {
                    inline_keyboard: [
                        [{ text: 'Україна', callback_data: 'ukr' }],
                        [{ text: 'Інша країна', callback_data: 'othercontry' }],
                        [{ text: 'Тимчасові номери', callback_data: 'tmpnum' }],
                    ],
                },
            });
        });

        vinnytsiaDistrict.action('ukr', async (ctx) => {
            await ctx.reply('Ви обрали: реєстрація Україна');
            ctx.scene.enter('settlement');
        });

        return vinnytsiaDistrict
    }

    SelectSevastopolDistrict() {
        const vinnytsiaDistrict = new Scenes.BaseScene('vinnytsiaDistrict');
        vinnytsiaDistrict.enter(async (ctx) => {
            await ctx.reply('Реєстрація Власника ТЗ(за тех. паспортом):', {
                reply_markup: {
                    inline_keyboard: [
                        [{ text: 'Україна', callback_data: 'ukr' }],
                        [{ text: 'Інша країна', callback_data: 'othercontry' }],
                        [{ text: 'Тимчасові номери', callback_data: 'tmpnum' }],
                    ],
                },
            });
        });

        vinnytsiaDistrict.action('ukr', async (ctx) => {
            await ctx.reply('Ви обрали: реєстрація Україна');
            ctx.scene.enter('settlement');
        });

        return vinnytsiaDistrict
    }
*/

    SelectMykolaivDistrict() {
        const mykolaivDistrict = new Scenes.BaseScene('mykolaivDistrict');
        mykolaivDistrict.enter(async (ctx) => {
            await ctx.reply('Оберіть район Миколаївщини:', {
                reply_markup: {
                    inline_keyboard: [
                        [{ text: ' ', callback_data: 'blank' }],
                        [{ text: 'Арбузинський район', callback_data: 'arbuzynskyi' }],
                        [{ text: 'Баштанський район', callback_data: 'bashtansky' }],
                        [{ text: 'Березанський район', callback_data: 'berezansky' }],
                        [{ text: 'Березнегуватський район', callback_data: 'berezneguvatskyi' }],
                        [{ text: 'Братський район', callback_data: 'bratsikiy' }],
                        [{ text: 'Веселинівський район', callback_data: 'veselynivskyi' }],
                        [{ text: 'Вітовський район', callback_data: 'vitovsky' }],
                        [{ text: 'Вознесенський район', callback_data: 'voznesensky' }],
                        [{ text: 'Врадіївський район', callback_data: 'vradiivskyi' }],
                        [{ text: 'Доманівський район', callback_data: 'domanivskyi' }],
                        [{ text: 'Єланецький район', callback_data: 'yelanetskyi' }],
                        [{ text: 'Казанківський район', callback_data: 'kazankivskyi' }],
                        [{ text: 'Кривоозерський район', callback_data: 'kryvoozerskyi' }],
                        [{ text: 'Миколаївський район', callback_data: 'mykolaivskyi' }],
                        [{ text: 'Новобузький район', callback_data: 'novobuzky' }],
                        [{ text: 'Новоодеський район', callback_data: 'novoOdesa' }],
                        [{ text: 'Очаківський район', callback_data: 'ochakivskyi' }],
                        [{ text: 'Первомайський район', callback_data: 'pervomaiskiy' }],
                        [{ text: 'Снігурівський район', callback_data: 'snigurivskyi' }],
                    ],
                },
            });
        });

        mykolaivDistrict.action('blank', async (ctx) => {
            //await ctx.reply('Ви обали  район Миколаївщини');
            ctx.scene.enter('settlement');
        });

        mykolaivDistrict.action('arbuzynskyi', async (ctx) => {
            await ctx.reply('Ви обали Арбузинський район Миколаївщини');
            ctx.scene.enter('settlement');
        });

        mykolaivDistrict.action('bashtansky', async (ctx) => {
            await ctx.reply('Ви обали Баштанський район Миколаївщини');
            ctx.scene.enter('settlement');
        });

        mykolaivDistrict.action('berezansky', async (ctx) => {
            await ctx.reply('Ви обали Березанський район Миколаївщини');
            ctx.scene.enter('settlement');
        });

        mykolaivDistrict.action('berezneguvatskyi', async (ctx) => {
            await ctx.reply('Ви обали Березнегуватський район Миколаївщини');
            ctx.scene.enter('settlement');
        });

        mykolaivDistrict.action('bratsikiy', async (ctx) => {
            await ctx.reply('Ви обали Братський район Миколаївщини');
            ctx.scene.enter('settlement');
        });

        mykolaivDistrict.action('veselynivskyi', async (ctx) => {
            await ctx.reply('Ви обали Веселинівський район Миколаївщини');
            ctx.scene.enter('settlement');
        });

        mykolaivDistrict.action('vitovsky', async (ctx) => {
            await ctx.reply('Ви обали Вітовський район Миколаївщини');
            ctx.scene.enter('settlement');
        });

        mykolaivDistrict.action('voznesensky', async (ctx) => {
            await ctx.reply('Ви обали Вознесенський район Миколаївщини');
            ctx.scene.enter('settlement');
        });

        mykolaivDistrict.action('vradiivskyi', async (ctx) => {
            await ctx.reply('Ви обали Врадіївський район Миколаївщини');
            ctx.scene.enter('settlement');
        });

        mykolaivDistrict.action('domanivskyi', async (ctx) => {
            await ctx.reply('Ви обали Доманівський район Миколаївщини');
            ctx.scene.enter('settlement');
        });

        mykolaivDistrict.action('yelanetskyi', async (ctx) => {
            await ctx.reply('Ви обали Єланецький район Миколаївщини');
            ctx.scene.enter('settlement');
        });

        mykolaivDistrict.action('kazankivskyi', async (ctx) => {
            await ctx.reply('Ви обали Казанківський район Миколаївщини');
            ctx.scene.enter('settlement');
        });

        mykolaivDistrict.action('kryvoozerskyi', async (ctx) => {
            await ctx.reply('Ви обали Кривоозерський район Миколаївщини');
            ctx.scene.enter('settlement');
        });

        mykolaivDistrict.action('mykolaivskyi', async (ctx) => {
            await ctx.reply('Ви обали Миколаївський район Миколаївщини');
            ctx.scene.enter('settlement');
        });

        mykolaivDistrict.action('novobuzky', async (ctx) => {
            await ctx.reply('Ви обали Новобузький район Миколаївщини');
            ctx.scene.enter('settlement');
        });

        mykolaivDistrict.action('novoOdesa', async (ctx) => {
            await ctx.reply('Ви обали Новоодеський район Миколаївщини');
            ctx.scene.enter('settlement');
        });

        mykolaivDistrict.action('ochakivskyi', async (ctx) => {
            await ctx.reply('Ви обали Очаківський район Миколаївщини');
            ctx.scene.enter('settlement');
        });

        mykolaivDistrict.action('pervomaiskiy', async (ctx) => {
            await ctx.reply('Ви обали Первомайський район Миколаївщини');
            ctx.scene.enter('settlement');
        });

        mykolaivDistrict.action('snigurivskyi', async (ctx) => {
            await ctx.reply('Ви обали Снігурівський район Миколаївщини');
            ctx.scene.enter('settlement');
        });

        return mykolaivDistrict;
    }

    SelectOdesaDistrict() {
        const odesaDistrict = new Scenes.BaseScene('odesaDistrict');
        odesaDistrict.enter(async (ctx) => {
            await ctx.reply('Оберіть район Одесчини:', {
                reply_markup: {
                    inline_keyboard: [
                        [{ text: ' ', callback_data: 'blank' }],
                        [{ text: 'Ананьївський район', callback_data: 'ananyivskyi' }],
                        [{ text: 'Арцизький район', callback_data: 'artsyzky' }],
                        [{ text: 'Балтський район', callback_data: 'baltkiy' }],
                        [{ text: 'Березівський район', callback_data: 'berezivskyi' }],
                        [{ text: 'Білгород-дністровський', callback_data: 'bilgorodDnistrovskiy' }],
                        [{ text: 'Білгород-дністровський район', callback_data: 'bilgorodDnistrovskiyDst' }],
                        [{ text: 'Біляївський район', callback_data: 'bilyaivskyi' }],
                        [{ text: 'Болградський район', callback_data: 'bolgradskyi' }],
                        [{ text: 'Великомихайлівський район', callback_data: 'velikomykhailovskyi' }],
                        [{ text: 'Захарівський район', callback_data: 'zakharivskyi' }],
                        [{ text: 'Іванівський район', callback_data: 'ivanivskyi' }],
                        [{ text: 'Ізмаїльський район', callback_data: 'ishmaelsky' }],
                        [{ text: 'Кілійський район', callback_data: 'kiliyskyi' }],
                        [{ text: 'Кодимський район', callback_data: 'kodimskyi' }],
                        [{ text: 'Лиманський район', callback_data: 'lymanskyi' }],
                        [{ text: 'Любашівський район', callback_data: 'lyubashivskyi' }],
                        [{ text: 'Миколаївський район', callback_data: 'mykolaivskyi' }],
                        [{ text: 'Овідіопольський район', callback_data: 'ovidiopolsky' }],
                        [{ text: 'Окнянський район', callback_data: 'oknyanskyi' }],
                        [{ text: 'Подільський район', callback_data: 'podolsky' }],
                        [{ text: 'Ренійський район', callback_data: 'rhenyskyi' }],
                        [{ text: 'Роздільнянський район', callback_data: 'rozdilnianskyi' }],
                        [{ text: 'Савранський район', callback_data: 'savranskyi' }],
                        [{ text: 'Саратський район', callback_data: 'saratsky' }],
                        [{ text: 'Тарутинський район', callback_data: 'tarutynskyi' }],
                        [{ text: 'Татарбунарський район', callback_data: 'tatarbunarskyi' }],
                        [{ text: 'Чорноморськ', callback_data: 'chornomorsk' }],
                        [{ text: 'Ширяївський район', callback_data: 'shiryaivskyi' }],
                    ],
                },
            });
        });

        odesaDistrict.action('blank', async (ctx) => {
            //await ctx.reply('Ви обали  район Одесчини');
            ctx.scene.enter('settlement');
        });

        odesaDistrict.action('ananyivskyi', async (ctx) => {
            await ctx.reply('Ви обали Ананьївський район Одесчини');
            ctx.scene.enter('settlement');
        });

        odesaDistrict.action('artsyzky', async (ctx) => {
            await ctx.reply('Ви обали Арцизький район Одесчини');
            ctx.scene.enter('settlement');
        });

        odesaDistrict.action('baltkiy', async (ctx) => {
            await ctx.reply('Ви обали Балтський район Одесчини');
            ctx.scene.enter('settlement');
        });

        odesaDistrict.action('berezivskyi', async (ctx) => {
            await ctx.reply('Ви обали Березівський район Одесчини');
            ctx.scene.enter('settlement');
        });

        odesaDistrict.action('bilgorodDnistrovskiy', async (ctx) => {
            await ctx.reply('Ви обали Білгород-дністровський Одесчина');
            ctx.scene.enter('settlement');
        });

        odesaDistrict.action('bilgorodDnistrovskiyDst', async (ctx) => {
            await ctx.reply('Ви обали Білгород-дністровський район Одесчини');
            ctx.scene.enter('settlement');
        });

        odesaDistrict.action('bilyaivskyi', async (ctx) => {
            await ctx.reply('Ви обали Біляївський район Одесчини');
            ctx.scene.enter('settlement');
        });

        odesaDistrict.action('bolgradskyi', async (ctx) => {
            await ctx.reply('Ви обали Болградський район Одесчини');
            ctx.scene.enter('settlement');
        });

        odesaDistrict.action('velikomykhailovskyi', async (ctx) => {
            await ctx.reply('Ви обали Великомихайлівський район Одесчини');
            ctx.scene.enter('settlement');
        });

        odesaDistrict.action('zakharivskyi', async (ctx) => {
            await ctx.reply('Ви обали Захарівський район Одесчини');
            ctx.scene.enter('settlement');
        });

        odesaDistrict.action('ivanivskyi', async (ctx) => {
            await ctx.reply('Ви обали Іванівський район Одесчини');
            ctx.scene.enter('settlement');
        });

        odesaDistrict.action('ishmaelsky', async (ctx) => {
            await ctx.reply('Ви обали Ізмаїльський район Одесчини');
            ctx.scene.enter('settlement');
        });

        odesaDistrict.action('kiliyskyi', async (ctx) => {
            await ctx.reply('Ви обали Кілійський район Одесчини');
            ctx.scene.enter('settlement');
        });

        odesaDistrict.action('kodimskyi', async (ctx) => {
            await ctx.reply('Ви обали Кодимський район Одесчини');
            ctx.scene.enter('settlement');
        });

        odesaDistrict.action('lymanskyi', async (ctx) => {
            await ctx.reply('Ви обали Лиманський район Одесчини');
            ctx.scene.enter('settlement');
        });

        odesaDistrict.action('lyubashivskyi', async (ctx) => {
            await ctx.reply('Ви обали Любашівський район Одесчини');
            ctx.scene.enter('settlement');
        });

        odesaDistrict.action('mykolaivskyi', async (ctx) => {
            await ctx.reply('Ви обали Миколаївський район Одесчини');
            ctx.scene.enter('settlement');
        });

        odesaDistrict.action('ovidiopolsky', async (ctx) => {
            await ctx.reply('Ви обали Овідіопольський район Одесчини');
            ctx.scene.enter('settlement');
        });

        odesaDistrict.action('oknyanskyi', async (ctx) => {
            await ctx.reply('Ви обали Окнянський район Одесчини');
            ctx.scene.enter('settlement');
        });

        odesaDistrict.action('podolsky', async (ctx) => {
            await ctx.reply('Ви обали Подільський район Одесчини');
            ctx.scene.enter('settlement');
        });

        odesaDistrict.action('rhenyskyi', async (ctx) => {
            await ctx.reply('Ви обали Ренійський район Одесчини');
            ctx.scene.enter('settlement');
        });

        odesaDistrict.action('rozdilnianskyi', async (ctx) => {
            await ctx.reply('Ви обали Роздільнянський район Одесчини');
            ctx.scene.enter('settlement');
        });

        odesaDistrict.action('savranskyi', async (ctx) => {
            await ctx.reply('Ви обали Савранський район Одесчини');
            ctx.scene.enter('settlement');
        });

        odesaDistrict.action('saratsky', async (ctx) => {
            await ctx.reply('Ви обали  район Одесчини');
            ctx.scene.enter('settlement');
        });

        odesaDistrict.action('tarutynskyi', async (ctx) => {
            await ctx.reply('Ви обали Саратський район Одесчини');
            ctx.scene.enter('settlement');
        });

        odesaDistrict.action('tatarbunarskyi', async (ctx) => {
            await ctx.reply('Ви обали Татарбунарський район Одесчини');
            ctx.scene.enter('settlement');
        });

        odesaDistrict.action('chornomorsk', async (ctx) => {
            await ctx.reply('Ви обали Чорноморськ Одесчина');
            ctx.scene.enter('settlement');
        });

        odesaDistrict.action('shiryaivskyi', async (ctx) => {
            await ctx.reply('Ви обали Ширяївський район Одесчини');
            ctx.scene.enter('settlement');
        });

        return odesaDistrict;
    }

    SelectPoltavaDistrict() {
        const poltavaDistrict = new Scenes.BaseScene('poltavaDistrict');
        poltavaDistrict.enter(async (ctx) => {
            await ctx.reply('Оберіть район Полтавщини:', {
                reply_markup: {
                    inline_keyboard: [
                        [{ text: ' ', callback_data: 'blank' }],
                        [{ text: 'Великобагачанський район', callback_data: 'velikobagachanskyi' }],
                        [{ text: 'Гадяцький район', callback_data: 'hadyatskyi' }],
                        [{ text: 'Глобинський район', callback_data: 'globinsky' }],
                        [{ text: 'Горішні Плавні', callback_data: 'horishni' }],
                        [{ text: 'Гребінківський район', callback_data: 'hrebinkivskyi' }],
                        [{ text: 'Диканський район', callback_data: 'dykansky' }],
                        [{ text: 'Зіньківський район', callback_data: 'zinkivskyi' }],
                        [{ text: 'Карлівський район', callback_data: 'karlivskyi' }],
                        [{ text: 'Кобеляцький район', callback_data: 'kobelyatskyi' }],
                        [{ text: 'Козельщинський район', callback_data: 'kozelshchynskyi' }],
                        [{ text: 'Котелевський район', callback_data: 'kotelevsky' }],
                        [{ text: 'Кременчуцький район', callback_data: 'kremenchutskyi' }],
                        [{ text: 'Лохвицький район', callback_data: 'lokhvytskyi' }],
                        [{ text: 'Лубенський район', callback_data: 'lubensky' }],
                        [{ text: 'Машівський район', callback_data: 'mashivskyi' }],
                        [{ text: 'Миргородський район', callback_data: 'myrhorodskyi' }],
                        [{ text: 'Новосанжарський район', callback_data: 'novosanzharskyi' }],
                        [{ text: 'Оржицький район', callback_data: 'orzhytskyi' }],
                        [{ text: 'Пирятинський район', callback_data: 'pyryatinsky' }],
                        [{ text: 'Полтавський район', callback_data: 'poltavsiy' }],
                        [{ text: 'Решетилівський район', callback_data: 'reshetylivskyi' }],
                        [{ text: 'Семенівський район', callback_data: 'semenivskyi' }],
                        [{ text: 'Хорольський район', callback_data: 'khorolskyi' }],
                        [{ text: 'Чорнухинський район', callback_data: 'chornukhinsky' }],
                        [{ text: 'Чутівський район', callback_data: 'chutivskyi' }],
                        [{ text: 'Шишацький район', callback_data: 'shishatskyi' }],
                    ],
                },
            });
        });

        poltavaDistrict.action('blank', async (ctx) => {
            //await ctx.reply('Ви обали  район Полтавщини');
            ctx.scene.enter('settlement');
        });

        poltavaDistrict.action('velikobagachanskyi', async (ctx) => {
            await ctx.reply('Ви обали Великобагачанський район Полтавщини');
            ctx.scene.enter('settlement');
        });

        poltavaDistrict.action('hadyatskyi', async (ctx) => {
            await ctx.reply('Ви обали Гадяцький район Полтавщини');
            ctx.scene.enter('settlement');
        });

        poltavaDistrict.action('globinsky', async (ctx) => {
            await ctx.reply('Ви обали Глобинський район Полтавщини');
            ctx.scene.enter('settlement');
        });

        poltavaDistrict.action('horishni', async (ctx) => {
            await ctx.reply('Ви обали Горішні Плавні Полтавщина');
            ctx.scene.enter('settlement');
        });

        poltavaDistrict.action('hrebinkivskyi', async (ctx) => {
            await ctx.reply('Ви обали Гребінківський район Полтавщини');
            ctx.scene.enter('settlement');
        });

        poltavaDistrict.action('dykansky', async (ctx) => {
            await ctx.reply('Ви обали Диканський район Полтавщини');
            ctx.scene.enter('settlement');
        });

        poltavaDistrict.action('zinkivskyi', async (ctx) => {
            await ctx.reply('Ви обали Зіньківський район Полтавщини');
            ctx.scene.enter('settlement');
        });

        poltavaDistrict.action('karlivskyi', async (ctx) => {
            await ctx.reply('Ви обали Карлівський район Полтавщини');
            ctx.scene.enter('settlement');
        });

        poltavaDistrict.action('kobelyatskyi', async (ctx) => {
            await ctx.reply('Ви обрали Кобеляцький район Полтавщини');
            ctx.scene.enter('settlement');
        });

        poltavaDistrict.action('kozelshchynskyi', async (ctx) => {
            await ctx.reply('Ви обали Козельщинський район Полтавщини');
            ctx.scene.enter('settlement');
        });

        poltavaDistrict.action('kotelevsky', async (ctx) => {
            await ctx.reply('Ви обали Котелевський район Полтавщини');
            ctx.scene.enter('settlement');
        });

        poltavaDistrict.action('kremenchutskyi', async (ctx) => {
            await ctx.reply('Ви обали Кременчуцький район Полтавщини');
            ctx.scene.enter('settlement');
        });

        poltavaDistrict.action('lokhvytskyi', async (ctx) => {
            await ctx.reply('Ви обали Лохвицький район Полтавщини');
            ctx.scene.enter('settlement');
        });

        poltavaDistrict.action('lubensky', async (ctx) => {
            await ctx.reply('Ви обали Лубенський район Полтавщини');
            ctx.scene.enter('settlement');
        });

        poltavaDistrict.action('mashivskyi', async (ctx) => {
            await ctx.reply('Ви обали Машівський район Полтавщини');
            ctx.scene.enter('settlement');
        });

        poltavaDistrict.action('myrhorodskyi', async (ctx) => {
            await ctx.reply('Ви обали Миргородський район Полтавщини');
            ctx.scene.enter('settlement');
        });

        poltavaDistrict.action('novosanzharskyi', async (ctx) => {
            await ctx.reply('Ви обали Новосанжарський район Полтавщини');
            ctx.scene.enter('settlement');
        });

        poltavaDistrict.action('orzhytskyi', async (ctx) => {
            await ctx.reply('Ви обали Оржицький район Полтавщини');
            ctx.scene.enter('settlement');
        });

        poltavaDistrict.action('pyryatinsky', async (ctx) => {
            await ctx.reply('Ви обали Пирятинський район Полтавщини');
            ctx.scene.enter('settlement');
        });

        poltavaDistrict.action('poltavsiy', async (ctx) => {
            await ctx.reply('Ви обали Полтавський район Полтавщини');
            ctx.scene.enter('settlement');
        });

        poltavaDistrict.action('reshetylivskyi', async (ctx) => {
            await ctx.reply('Ви обали Решетилівський район Полтавщини');
            ctx.scene.enter('settlement');
        });

        poltavaDistrict.action('semenivskyi', async (ctx) => {
            await ctx.reply('Ви обали Семенівський район Полтавщини');
            ctx.scene.enter('settlement');
        });

        poltavaDistrict.action('khorolskyi', async (ctx) => {
            await ctx.reply('Ви обали Хорольський район Полтавщини');
            ctx.scene.enter('settlement');
        });

        poltavaDistrict.action('chornukhinsky', async (ctx) => {
            await ctx.reply('Ви обали Чорнухинський район Полтавщини');
            ctx.scene.enter('settlement');
        });

        poltavaDistrict.action('chutivskyi', async (ctx) => {
            await ctx.reply('Ви обали Чутівський район Полтавщини');
            ctx.scene.enter('settlement');
        });

        poltavaDistrict.action('shishatskyi', async (ctx) => {
            await ctx.reply('Ви обали Шишацький район Полтавщини');
            ctx.scene.enter('settlement');
        });

        return poltavaDistrict;
    }

    SelectRivneDistrict() {
        const rivneDistrict = new Scenes.BaseScene('rivneDistrict');
        rivneDistrict.enter(async (ctx) => {
            await ctx.reply('Оберіть район Рівеньщини:', {
                reply_markup: {
                    inline_keyboard: [
                        [{ text: ' ', callback_data: 'blank' }],
                        [{ text: 'Березнівський район', callback_data: 'bereznivskyi' }],
                        [{ text: 'Володимирецький район', callback_data: 'volodymyretskyi' }],
                        [{ text: 'Гощанський район', callback_data: 'goshchanskyi' }],
                        [{ text: 'Демидівський район', callback_data: 'demidivskyi' }],
                        [{ text: 'Дубенський район', callback_data: 'dubensky' }],
                        [{ text: 'Дубровицький район', callback_data: 'dubrovytskyi' }],
                        [{ text: 'Зарічненський район', callback_data: 'zarichchenskyi' }],
                        [{ text: 'Здолбунівський район', callback_data: 'zdolbunivskyi' }],
                        [{ text: 'Корецький район', callback_data: 'koretskyi' }],
                        [{ text: 'Костопільський район', callback_data: 'kostopilskyi' }],
                        [{ text: 'Млинівський район', callback_data: 'mlynivskyi' }],
                        [{ text: 'Острозький район', callback_data: 'ostrozhsky' }],
                        [{ text: 'Радивилівський район', callback_data: 'radyvylivskyi' }],
                        [{ text: 'Рівненський район', callback_data: 'rivne' }],
                        [{ text: 'Рокитнівський район', callback_data: 'rokytnivskyi' }],
                        [{ text: 'Сарненський район', callback_data: 'sarnensky' }],
                    ],
                },
            });
        });

        rivneDistrict.action('blank', async (ctx) => {
            //await ctx.reply('Ви обали  район Рівеньщини');
            ctx.scene.enter('settlement');
        });

        rivneDistrict.action('bereznivskyi', async (ctx) => {
            await ctx.reply('Ви обали Березнівський район Рівеньщини');
            ctx.scene.enter('settlement');
        });

        rivneDistrict.action('volodymyretskyi', async (ctx) => {
            await ctx.reply('Ви обали Володимирецький район Рівеньщини');
            ctx.scene.enter('settlement');
        });

        rivneDistrict.action('goshchanskyi', async (ctx) => {
            await ctx.reply('Ви обали Гощанський район Рівеньщини');
            ctx.scene.enter('settlement');
        });

        rivneDistrict.action('demidivskyi', async (ctx) => {
            await ctx.reply('Ви обали Демидівський район Рівеньщини');
            ctx.scene.enter('settlement');
        });

        rivneDistrict.action('dubensky', async (ctx) => {
            await ctx.reply('Ви обали Дубенський район Рівеньщини');
            ctx.scene.enter('settlement');
        });

        rivneDistrict.action('dubrovytskyi', async (ctx) => {
            await ctx.reply('Ви обали Дубровицький район Рівеньщини');
            ctx.scene.enter('settlement');
        });

        rivneDistrict.action('zarichchenskyi', async (ctx) => {
            await ctx.reply('Ви обали Зарічненський район Рівеньщини');
            ctx.scene.enter('settlement');
        });

        rivneDistrict.action('zdolbunivskyi', async (ctx) => {
            await ctx.reply('Ви обали Здолбунівський район Рівеньщини');
            ctx.scene.enter('settlement');
        });

        rivneDistrict.action('koretskyi', async (ctx) => {
            await ctx.reply('Ви обали Корецький район Рівеньщини');
            ctx.scene.enter('settlement');
        });

        rivneDistrict.action('kostopilskyi', async (ctx) => {
            await ctx.reply('Ви обали Костопільський район Рівеньщини');
            ctx.scene.enter('settlement');
        });

        rivneDistrict.action('mlynivskyi', async (ctx) => {
            await ctx.reply('Ви обали Млинівський район Рівеньщини');
            ctx.scene.enter('settlement');
        });

        rivneDistrict.action('ostrozhsky', async (ctx) => {
            await ctx.reply('Ви обали Острозький район Рівеньщини');
            ctx.scene.enter('settlement');
        });

        rivneDistrict.action('radyvylivskyi', async (ctx) => {
            await ctx.reply('Ви обали Радивилівський район Рівеньщини');
            ctx.scene.enter('settlement');
        });

        rivneDistrict.action('rivne', async (ctx) => {
            await ctx.reply('Ви обали Рівненський район Рівеньщини');
            ctx.scene.enter('settlement');
        });

        rivneDistrict.action('rokytnivskyi', async (ctx) => {
            await ctx.reply('Ви обали Рокитнівський район Рівеньщини');
            ctx.scene.enter('settlement');
        });

        rivneDistrict.action('sarnensky', async (ctx) => {
            await ctx.reply('Ви обали Сарненський район Рівеньщини');
            ctx.scene.enter('settlement');
        });

        return rivneDistrict;
    }

    SelectSumyDistrict() {
        const sumyDistrict = new Scenes.BaseScene('sumyDistrict');
        sumyDistrict.enter(async (ctx) => {
            await ctx.reply('Оберіть район Сумщини:', {
                reply_markup: {
                    inline_keyboard: [
                        [{ text: ' ', callback_data: 'blank' }],
                        [{ text: 'Білопільський район', callback_data: 'bilopolsky' }],
                        [{ text: 'Буринський район', callback_data: 'burynskyi' }],
                        [{ text: 'Великописарівський район', callback_data: 'velikopysarivskyi' }],
                        [{ text: 'Глухів', callback_data: 'gluhiv' }],
                        [{ text: 'Глухівський район', callback_data: 'gluhivDst' }],
                        [{ text: 'Конотоп', callback_data: 'konotop' }],
                        [{ text: 'Конотопський район', callback_data: 'konotopDst' }],
                        [{ text: 'Краснопільський район', callback_data: 'krasnopilskyi' }],
                        [{ text: 'Кролевецький район', callback_data: 'krolevetskyi' }],
                        [{ text: 'Лебедин', callback_data: 'lebedin' }],
                        [{ text: 'Лебединський район', callback_data: 'lebedinDst' }],
                        [{ text: 'Липоводолинський район', callback_data: 'lipovodolinskyi' }],
                        [{ text: 'Недригайлівський район', callback_data: 'nedrigailivskyi' }],
                        [{ text: 'Охтирка', callback_data: 'okhtyrka' }],
                        [{ text: 'Охтирський район', callback_data: 'okhtyrkaDst' }],
                        [{ text: 'Путивльський район', callback_data: 'putivlskyi' }],
                        [{ text: 'Роменський район', callback_data: 'romenskyi' }],
                        [{ text: 'Ромни', callback_data: 'romany' }],
                        [{ text: 'Середино-будський район', callback_data: 'serdniBudskiy' }],
                        [{ text: 'Суми', callback_data: 'sumi' }],
                        [{ text: 'Сумський район', callback_data: 'sumiDst' }],
                        [{ text: 'Тростянецький район', callback_data: 'trostyanetskyi' }],
                        [{ text: 'Шосткинський район', callback_data: 'shostkinsky' }],
                        [{ text: 'Ямпільський район', callback_data: 'yampilskyi' }],
                    ],
                },
            });
        });

        sumyDistrict.action('blank', async (ctx) => {
            //await ctx.reply('Ви обали  район Сумщини');
            ctx.scene.enter('settlement');
        });

        sumyDistrict.action('bilopolsky', async (ctx) => {
            await ctx.reply('Ви обали Білопільський район Сумщини');
            ctx.scene.enter('settlement');
        });

        sumyDistrict.action('burynskyi', async (ctx) => {
            await ctx.reply('Ви обали Буринський район Сумщини');
            ctx.scene.enter('settlement');
        });

        sumyDistrict.action('velikopysarivskyi', async (ctx) => {
            await ctx.reply('Ви обали Великописарівський район Сумщини');
            ctx.scene.enter('settlement');
        });

        sumyDistrict.action('gluhiv', async (ctx) => {
            await ctx.reply('Ви обали Глухів Сумщина');
            ctx.scene.enter('settlement');
        });

        sumyDistrict.action('gluhivDst', async (ctx) => {
            await ctx.reply('Ви обали Глухівський район Сумщини');
            ctx.scene.enter('settlement');
        });

        sumyDistrict.action('konotop', async (ctx) => {
            await ctx.reply('Ви обали Конотоп Сумщина');
            ctx.scene.enter('settlement');
        });

        sumyDistrict.action('konotopDst', async (ctx) => {
            await ctx.reply('Ви обали Конотопський район Сумщини');
            ctx.scene.enter('settlement');
        });

        sumyDistrict.action('krasnopilskyi', async (ctx) => {
            await ctx.reply('Ви обали Краснопільський район Сумщини');
            ctx.scene.enter('settlement');
        });

        sumyDistrict.action('krolevetskyi', async (ctx) => {
            await ctx.reply('Ви обали Кролевецький район Сумщини');
            ctx.scene.enter('settlement');
        });

        sumyDistrict.action('lebedin', async (ctx) => {
            await ctx.reply('Ви обали Лебедин Сумщина');
            ctx.scene.enter('settlement');
        });

        sumyDistrict.action('lebedinDst', async (ctx) => {
            await ctx.reply('Ви обали Лебединський район Сумщини');
            ctx.scene.enter('settlement');
        });

        sumyDistrict.action('lipovodolinskyi', async (ctx) => {
            await ctx.reply('Ви обали Липоводолинський район Сумщини');
            ctx.scene.enter('settlement');
        });

        sumyDistrict.action('nedrigailivskyi', async (ctx) => {
            await ctx.reply('Ви обали Недригайлівський район Сумщини');
            ctx.scene.enter('settlement');
        });

        sumyDistrict.action('okhtyrka', async (ctx) => {
            await ctx.reply('Ви обали Охтирка Сумщина');
            ctx.scene.enter('settlement');
        });

        sumyDistrict.action('okhtyrkaDst', async (ctx) => {
            await ctx.reply('Ви обали Охтирський район Сумщини');
            ctx.scene.enter('settlement');
        });

        sumyDistrict.action('putivlskyi', async (ctx) => {
            await ctx.reply('Ви обали Путивльський район Сумщини');
            ctx.scene.enter('settlement');
        });

        sumyDistrict.action('romenskyi', async (ctx) => {
            await ctx.reply('Ви обали Роменський район Сумщини');
            ctx.scene.enter('settlement');
        });

        sumyDistrict.action('romany', async (ctx) => {
            await ctx.reply('Ви обали Ромни Сумщина');
            ctx.scene.enter('settlement');
        });

        sumyDistrict.action('serdniBudskiy', async (ctx) => {
            await ctx.reply('Ви обали Середино-будський район Сумщини');
            ctx.scene.enter('settlement');
        });

        sumyDistrict.action('sumi', async (ctx) => {
            await ctx.reply('Ви обали Суми Сумщина');
            ctx.scene.enter('settlement');
        });

        sumyDistrict.action('sumiDst', async (ctx) => {
            await ctx.reply('Ви обали Сумський район Сумщини');
            ctx.scene.enter('settlement');
        });

        sumyDistrict.action('trostyanetskyi', async (ctx) => {
            await ctx.reply('Ви обали Тростянецький район Сумщини');
            ctx.scene.enter('settlement');
        });

        sumyDistrict.action('shostkinsky', async (ctx) => {
            await ctx.reply('Ви обали Шосткинський район Сумщини');
            ctx.scene.enter('settlement');
        });

        sumyDistrict.action('yampilskyi', async (ctx) => {
            await ctx.reply('Ви обали Ямпільський район Сумщини');
            ctx.scene.enter('settlement');
        });

        return sumyDistrict;
    }

    SelectTernopilDestrict() {
        const ternopilDestrict = new Scenes.BaseScene('ternopilDestrict');
        ternopilDestrict.enter(async (ctx) => {
            await ctx.reply('Оберіть район Тернопільщини:', {
                reply_markup: {
                    inline_keyboard: [
                        [{ text: ' ', callback_data: 'blank' }],
                        [{ text: 'Бережанський район', callback_data: 'berezhanskyi' }],
                        [{ text: 'Борщівський район', callback_data: 'borschivskyi' }],
                        [{ text: 'Бучацький район', callback_data: 'buchatskyi' }],
                        [{ text: 'Гусятинський район', callback_data: 'husiatynskyi' }],
                        [{ text: 'Заліщицький район', callback_data: 'zalishchytskyi' }],
                        [{ text: 'Збаразький район', callback_data: 'zbarazky' }],
                        [{ text: 'Зборівський район', callback_data: 'zborivskyi' }],
                        [{ text: 'Козівський район', callback_data: 'kozovsky' }],
                        [{ text: 'Кременецький район', callback_data: 'kremenetski' }],
                        [{ text: 'Лановецький район', callback_data: 'lanovetskyi' }],
                        [{ text: 'Монастириський район', callback_data: 'monastirskiy' }],
                        [{ text: 'Підволочиський район', callback_data: 'podvolochyskyi' }],
                        [{ text: 'Підгаєцький район', callback_data: 'pidgaetskyi' }],
                        [{ text: 'Теребовлянський район', callback_data: 'terebovlyanskyi' }],
                        [{ text: 'Тернопільський район', callback_data: 'ternopilskyi' }],
                        [{ text: 'Чортківський район', callback_data: 'chortkivskyi' }],
                        [{ text: 'Шумський район', callback_data: 'shumsky' }],
                    ],
                },
            });
        });

        ternopilDestrict.action('blank', async (ctx) => {
            //await ctx.reply('Ви обали  район Тернопільщини');
            ctx.scene.enter('settlement');
        });

        ternopilDestrict.action('berezhanskyi', async (ctx) => {
            await ctx.reply('Ви обали Бережанський район Тернопільщини');
            ctx.scene.enter('settlement');
        });

        ternopilDestrict.action('borschivskyi', async (ctx) => {
            await ctx.reply('Ви обали Борщівський район Тернопільщини');
            ctx.scene.enter('settlement');
        });

        ternopilDestrict.action('buchatskyi', async (ctx) => {
            await ctx.reply('Ви обали Бучацький район Тернопільщини');
            ctx.scene.enter('settlement');
        });

        ternopilDestrict.action('husiatynskyi', async (ctx) => {
            await ctx.reply('Ви обали Гусятинський район Тернопільщини');
            ctx.scene.enter('settlement');
        });

        ternopilDestrict.action('zalishchytskyi', async (ctx) => {
            await ctx.reply('Ви обали Заліщицький район Тернопільщини');
            ctx.scene.enter('settlement');
        });

        ternopilDestrict.action('zbarazky', async (ctx) => {
            await ctx.reply('Ви обали Збаразький район Тернопільщини');
            ctx.scene.enter('settlement');
        });

        ternopilDestrict.action('zborivskyi', async (ctx) => {
            await ctx.reply('Ви обали Зборівський район Тернопільщини');
            ctx.scene.enter('settlement');
        });

        ternopilDestrict.action('kozovsky', async (ctx) => {
            await ctx.reply('Ви обали Козівський район Тернопільщини');
            ctx.scene.enter('settlement');
        });

        ternopilDestrict.action('kremenetski', async (ctx) => {
            await ctx.reply('Ви обали Кременецький район Тернопільщини');
            ctx.scene.enter('settlement');
        });

        ternopilDestrict.action('lanovetskyi', async (ctx) => {
            await ctx.reply('Ви обали Лановецький район Тернопільщини');
            ctx.scene.enter('settlement');
        });

        ternopilDestrict.action('monastirskiy', async (ctx) => {
            await ctx.reply('Ви обали Монастириський район Тернопільщини');
            ctx.scene.enter('settlement');
        });

        ternopilDestrict.action('podvolochyskyi', async (ctx) => {
            await ctx.reply('Ви обали Підволочиський район Тернопільщини');
            ctx.scene.enter('settlement');
        });

        ternopilDestrict.action('pidgaetskyi', async (ctx) => {
            await ctx.reply('Ви обали Підгаєцький район Тернопільщини');
            ctx.scene.enter('settlement');
        });

        ternopilDestrict.action('terebovlyanskyi', async (ctx) => {
            await ctx.reply('Ви обали Теребовлянський район Тернопільщини');
            ctx.scene.enter('settlement');
        });

        ternopilDestrict.action('ternopilskyi', async (ctx) => {
            await ctx.reply('Ви обали Тернопільський район Тернопільщини');
            ctx.scene.enter('settlement');
        });

        ternopilDestrict.action('chortkivskyi', async (ctx) => {
            await ctx.reply('Ви обали Чортківський район Тернопільщини');
            ctx.scene.enter('settlement');
        });

        ternopilDestrict.action('shumsky', async (ctx) => {
            await ctx.reply('Ви обали Шумський район Тернопільщини');
            ctx.scene.enter('settlement');
        });

        return ternopilDestrict;
    }

    SelectKharkivDistrict() {
        const kharkivDistrict = new Scenes.BaseScene('kharkivDistrict');
        kharkivDistrict.enter(async (ctx) => {
            await ctx.reply('Оберіть район Харківщини:', {
                reply_markup: {
                    inline_keyboard: [
                        [{ text: ' ', callback_data: 'blank' }],
                        [{ text: 'Балаклійський район', callback_data: 'balakliyskyi' }],
                        [{ text: 'Барвінківський район', callback_data: 'barvinkivskyi' }],
                        [{ text: 'Близнюківський район', callback_data: 'blyzniukivskyi' }],
                        [{ text: 'Богодухівський район', callback_data: 'bogoduhivskyi' }],
                        [{ text: 'Борівський район', callback_data: 'borivskyi' }],
                        [{ text: 'Валківський район', callback_data: 'valkivskyi' }],
                        [{ text: 'Великобурлуцький район', callback_data: 'velikoburlutskyi' }],
                        [{ text: 'Вовчанський район', callback_data: 'vovchanskyi' }],
                        [{ text: 'Дворічанський район', callback_data: 'dvorichanskyi' }],
                        [{ text: 'Дергачівський район', callback_data: 'derhachevskyi' }],
                        [{ text: 'Зачепилівський район', callback_data: 'zachepilivskyi' }],
                        [{ text: 'Зміївський район', callback_data: 'zmiivskyi' }],
                        [{ text: 'Золочівський район', callback_data: 'zolochivskyi' }],
                        [{ text: 'Ізюмський район', callback_data: 'izyumskyi' }],
                        [{ text: 'Кегичівський район', callback_data: 'kegichevskyi' }],
                        [{ text: 'Коломацький район', callback_data: 'kolomatskyi' }],
                        [{ text: 'Красноградський район', callback_data: 'krasnogradskyi' }],
                        [{ text: 'Краснокутський район', callback_data: 'krasnokutskyi' }],
                        [{ text: "Куп'янськ", callback_data: 'kupyansk' }],
                        [{ text: "Куп'янський район", callback_data: 'kupyanskDst' }],
                        [{ text: 'Лозівський район', callback_data: 'lozovsky' }],
                        [{ text: 'Лозова', callback_data: 'lozova' }],
                        [{ text: 'Люботин', callback_data: 'lubotin' }],
                        [{ text: 'Нововодолазький район', callback_data: 'novovodolazky' }],
                        [{ text: 'Первомайський', callback_data: 'pervomaisky' }],
                        [{ text: 'Первомайський район', callback_data: 'pervomaiskyDst' }],
                        [{ text: 'Печенізький район', callback_data: 'pechenegskyi' }],
                        [{ text: 'Сахновщинський район', callback_data: 'sakhnovshchynskyi' }],
                        [{ text: 'Харківський район', callback_data: 'kharkivDst' }],
                        [{ text: 'Чугуїв', callback_data: 'chuguyiv' }],
                        [{ text: 'Чугуївський район', callback_data: 'chuguyivDst' }],
                        [{ text: 'Шевченківський район', callback_data: 'shevchenkivskyi' }],
                    ],
                },
            });
        });

        kharkivDistrict.action('blank', async (ctx) => {
            //await ctx.reply('Ви обали  район Харківщини');
            ctx.scene.enter('settlement');
        });

        kharkivDistrict.action('balakliyskyi', async (ctx) => {
            await ctx.reply('Ви обали Балаклійський район Харківщини');
            ctx.scene.enter('settlement');
        });

        kharkivDistrict.action('barvinkivskyi', async (ctx) => {
            await ctx.reply('Ви обали Барвінківський район Харківщини');
            ctx.scene.enter('settlement');
        });

        kharkivDistrict.action('blyzniukivskyi', async (ctx) => {
            await ctx.reply('Ви обали Близнюківський район Харківщини');
            ctx.scene.enter('settlement');
        });

        kharkivDistrict.action('bogoduhivskyi', async (ctx) => {
            await ctx.reply('Ви обали Богодухівський район Харківщини');
            ctx.scene.enter('settlement');
        });

        kharkivDistrict.action('borivskyi', async (ctx) => {
            await ctx.reply('Ви обали Борівський район Харківщини');
            ctx.scene.enter('settlement');
        });

        kharkivDistrict.action('valkivskyi', async (ctx) => {
            await ctx.reply('Ви обали Валківський район Харківщини');
            ctx.scene.enter('settlement');
        });

        kharkivDistrict.action('velikoburlutskyi', async (ctx) => {
            await ctx.reply('Ви обали Великобурлуцький район Харківщини');
            ctx.scene.enter('settlement');
        });

        kharkivDistrict.action('vovchanskyi', async (ctx) => {
            await ctx.reply('Ви обали Вовчанський район Харківщини');
            ctx.scene.enter('settlement');
        });

        kharkivDistrict.action('dvorichanskyi', async (ctx) => {
            await ctx.reply('Ви обали Дворічанський район Харківщини');
            ctx.scene.enter('settlement');
        });

        kharkivDistrict.action('derhachevskyi', async (ctx) => {
            await ctx.reply('Ви обали Дергачівський район Харківщини');
            ctx.scene.enter('settlement');
        });

        kharkivDistrict.action('zachepilivskyi', async (ctx) => {
            await ctx.reply('Ви обали Зачепилівський район Харківщини');
            ctx.scene.enter('settlement');
        });

        kharkivDistrict.action('zmiivskyi', async (ctx) => {
            await ctx.reply('Ви обали Зміївський район Харківщини');
            ctx.scene.enter('settlement');
        });

        kharkivDistrict.action('zolochivskyi', async (ctx) => {
            await ctx.reply('Ви обали Золочівський район Харківщини');
            ctx.scene.enter('settlement');
        });

        kharkivDistrict.action('izyumskyi', async (ctx) => {
            await ctx.reply('Ви обали Ізюмський район Харківщини');
            ctx.scene.enter('settlement');
        });

        kharkivDistrict.action('kegichevskyi', async (ctx) => {
            await ctx.reply('Ви обали Кегичівський район Харківщини');
            ctx.scene.enter('settlement');
        });

        kharkivDistrict.action('kolomatskyi', async (ctx) => {
            await ctx.reply('Ви обали Коломацький район Харківщини');
            ctx.scene.enter('settlement');
        });

        kharkivDistrict.action('krasnogradskyi', async (ctx) => {
            await ctx.reply('Ви обали Красноградський район Харківщини');
            ctx.scene.enter('settlement');
        });

        kharkivDistrict.action('krasnokutskyi', async (ctx) => {
            await ctx.reply('Ви обали Краснокутський район Харківщини');
            ctx.scene.enter('settlement');
        });

        kharkivDistrict.action('kupyansk', async (ctx) => {
            await ctx.reply("Ви обали Куп'янськ Харківщина");
            ctx.scene.enter('settlement');
        });

        kharkivDistrict.action('kupyanskDst', async (ctx) => {
            await ctx.reply("Ви обали Куп'янський район Харківщини");
            ctx.scene.enter('settlement');
        });

        kharkivDistrict.action('lozovsky', async (ctx) => {
            await ctx.reply('Ви обали Лозівський район Харківщини');
            ctx.scene.enter('settlement');
        });

        kharkivDistrict.action('lozova', async (ctx) => {
            await ctx.reply('Ви обали Лозова Харківщина');
            ctx.scene.enter('settlement');
        });

        kharkivDistrict.action('lubotin', async (ctx) => {
            await ctx.reply('Ви обали Люботин Харківщина');
            ctx.scene.enter('settlement');
        });

        kharkivDistrict.action('novovodolazky', async (ctx) => {
            await ctx.reply('Ви обали Нововодолазький район Харківщини');
            ctx.scene.enter('settlement');
        });

        kharkivDistrict.action('pervomaisky', async (ctx) => {
            await ctx.reply('Ви обали Первомайський Харківщина');
            ctx.scene.enter('settlement');
        });

        kharkivDistrict.action('pervomaiskyDst', async (ctx) => {
            await ctx.reply('Ви обали Первомайський район Харківщини');
            ctx.scene.enter('settlement');
        });

        kharkivDistrict.action('pechenegskyi', async (ctx) => {
            await ctx.reply('Ви обали Печенізький район Харківщини');
            ctx.scene.enter('settlement');
        });

        kharkivDistrict.action('sakhnovshchynskyi', async (ctx) => {
            await ctx.reply('Ви обали Сахновщинський район Харківщини');
            ctx.scene.enter('settlement');
        });

        kharkivDistrict.action('kharkivDst', async (ctx) => {
            await ctx.reply('Ви обали Харківський район Харківщини');
            ctx.scene.enter('settlement');
        });

        kharkivDistrict.action('chuguyiv', async (ctx) => {
            await ctx.reply('Ви обали Чугуїв Харківщина');

            ctx.scene.enter('settlement');
        });

        kharkivDistrict.action('chuguyivDst', async (ctx) => {
            await ctx.reply('Ви обали Чугуївський район Харківщини');
            ctx.scene.enter('settlement');
        });

        kharkivDistrict.action('shevchenkivskyi', async (ctx) => {
            await ctx.reply('Ви обали Шевченківський район Харківщини');
            ctx.scene.enter('settlement');
        });

        return kharkivDistrict;
    }

    SelectKhersonDistrict() {
        const khersonDistrict = new Scenes.BaseScene('khersonDistrict');
        khersonDistrict.enter(async (ctx) => {
            await ctx.reply('Оберіть район Херсонщини:', {
                reply_markup: {
                    inline_keyboard: [
                        [{ text: ' ', callback_data: 'blank' }],
                        [{ text: 'Бериславський район', callback_data: 'berislavskyi' }],
                        [{ text: 'Білозерський район', callback_data: 'bilozerskyi' }],
                        [{ text: 'Великолепетиський район', callback_data: 'velikolepetyskyi' }],
                        [{ text: 'Великоолександрівський район', callback_data: 'velikolexandrivskyi' }],
                        [{ text: 'Верхньорогачицький район', callback_data: 'verkhnyoroghachytskyi' }],
                        [{ text: 'Високопільський район', callback_data: 'vysokopilskyi' }],
                        [{ text: 'Генічеський район', callback_data: 'henicheski' }],
                        [{ text: 'Голопристанський район', callback_data: 'holoprystanskyi' }],
                        [{ text: 'Горностаївський район', callback_data: 'gornostaivskyi' }],
                        [{ text: 'Іванівський район', callback_data: 'ivanivskyi' }],
                        [{ text: 'Каланчацький район', callback_data: 'kalanchatskyi' }],
                        [{ text: 'Каховський район', callback_data: 'kakhovsky' }],
                        [{ text: 'Нижньосірогозький район', callback_data: 'nizhnyosyrogozky' }],
                        [{ text: 'Нова каховка', callback_data: 'novaKahovka' }],
                        [{ text: 'Нововоронцовський район', callback_data: 'novovorontsovsky' }],
                        [{ text: 'Новотроїцький район', callback_data: 'novotroitskyi' }],
                        [{ text: 'Олешківський район', callback_data: 'oleshkivskyi' }],
                        [{ text: 'Скадовський район', callback_data: 'skadovsky' }],
                        [{ text: 'Херсон', callback_data: 'kherson' }],
                        [{ text: 'Чаплинський район', callback_data: 'chaplinsky' }],
                    ],
                },
            });
        });

        khersonDistrict.action('blank', async (ctx) => {
            //await ctx.reply('Ви обрали  район Херсонщини');
            ctx.scene.enter('settlement');
        });

        khersonDistrict.action('berislavskyi', async (ctx) => {
            await ctx.reply('Ви обрали Бериславський район Херсонщини');
            ctx.scene.enter('settlement');
        });

        khersonDistrict.action('bilozerskyi', async (ctx) => {
            await ctx.reply('Ви обрали Білозерський район Херсонщини');
            ctx.scene.enter('settlement');
        });

        khersonDistrict.action('velikolepetyskyi', async (ctx) => {
            await ctx.reply('Ви обрали Великолепетиський район Херсонщини');
            ctx.scene.enter('settlement');
        });

        khersonDistrict.action('velikolexandrivskyi', async (ctx) => {
            await ctx.reply('Ви обрали Великоолександрівський район Херсонщини');
            ctx.scene.enter('settlement');
        });

        khersonDistrict.action('verkhnyoroghachytskyi', async (ctx) => {
            await ctx.reply('Ви обрали Верхньорогачицький район Херсонщини');
            ctx.scene.enter('settlement');
        });

        khersonDistrict.action('vysokopilskyi', async (ctx) => {
            await ctx.reply('Ви обрали Високопільський район Херсонщини');
            ctx.scene.enter('settlement');
        });

        khersonDistrict.action('henicheski', async (ctx) => {
            await ctx.reply('Ви обрали Генічеський район Херсонщини');
            ctx.scene.enter('settlement');
        });

        khersonDistrict.action('holoprystanskyi', async (ctx) => {
            await ctx.reply('Ви обрали Голопристанський район Херсонщини');
            ctx.scene.enter('settlement');
        });

        khersonDistrict.action('gornostaivskyi', async (ctx) => {
            await ctx.reply('Ви обрали Горностаївський район Херсонщини');
            ctx.scene.enter('settlement');
        });

        khersonDistrict.action('ivanivskyi', async (ctx) => {
            await ctx.reply('Ви обрали Іванівський район Херсонщини');
            ctx.scene.enter('settlement');
        });

        khersonDistrict.action('kalanchatskyi', async (ctx) => {
            await ctx.reply('Ви обрали Каланчацький район Херсонщини');
            ctx.scene.enter('settlement');
        });

        khersonDistrict.action('kakhovsky', async (ctx) => {
            await ctx.reply('Ви обрали Каховський район Херсонщини');
            ctx.scene.enter('settlement');
        });

        khersonDistrict.action('nizhnyosyrogozky', async (ctx) => {
            await ctx.reply('Ви обрали Нижньосірогозький район Херсонщини');
            ctx.scene.enter('settlement');
        });

        khersonDistrict.action('novaKahovka', async (ctx) => {
            await ctx.reply('Ви обрали Нова каховка Херсонщина');
            ctx.scene.enter('settlement');
        });

        khersonDistrict.action('novovorontsovsky', async (ctx) => {
            await ctx.reply('Ви обрали Нововоронцовський район Херсонщини');
            ctx.scene.enter('settlement');
        });

        khersonDistrict.action('novotroitskyi', async (ctx) => {
            await ctx.reply('Ви обрали Новотроїцький район Херсонщини');
            ctx.scene.enter('settlement');
        });

        khersonDistrict.action('oleshkivskyi', async (ctx) => {
            await ctx.reply('Ви обрали Олешківський район Херсонщини');
            ctx.scene.enter('settlement');
        });

        khersonDistrict.action('skadovsky', async (ctx) => {
            await ctx.reply('Ви обрали Скадовський район Херсонщини');
            ctx.scene.enter('settlement');
        });

        khersonDistrict.action('kherson', async (ctx) => {
            await ctx.reply('Ви обрали Херсон Херсонщина');
            ctx.scene.enter('settlement');
        });

        khersonDistrict.action('chaplinsky', async (ctx) => {
            await ctx.reply('Ви обрали Чаплинський район Херсонщини');
            ctx.scene.enter('settlement');
        });

        return khersonDistrict;
    }

    SelectKhmelnytskyiDistrict() {
        const khmelnytskyiDistrict = new Scenes.BaseScene('khmelnytskyiDistrict');
        khmelnytskyiDistrict.enter(async (ctx) => {
            await ctx.reply('Оберіть район Хмельнитчини:', {
                reply_markup: {
                    inline_keyboard: [
                        [{ text: ' ', callback_data: 'blank' }],
                        [{ text: 'Білогірський район', callback_data: 'biloghirskyi' }],
                        [{ text: 'Віньковецький район', callback_data: 'vinkovetskyi' }],
                        [{ text: 'Волочиський район', callback_data: 'volochyskyi' }],
                        [{ text: 'Городоцький район', callback_data: 'horodotskyi' }],
                        [{ text: 'Деражнянський район', callback_data: 'deraznyanskyi' }],
                        [{ text: 'Дунаєвецький район', callback_data: 'dunayevetskyi' }],
                        [{ text: 'Ізяславський район', callback_data: 'izyaslavskyi' }],
                        [{ text: "Кам'янець-подільський район", callback_data: 'kamianetsPodilskyi' }],
                        [{ text: 'Красилівський район', callback_data: 'krasylivskyi' }],
                        [{ text: 'Летичівський район', callback_data: 'letychivskyi' }],
                        [{ text: 'Новоушицький район', callback_data: 'novoushytskyi' }],
                        [{ text: 'Полонський район', callback_data: 'polonsky' }],
                        [{ text: 'Славутський район', callback_data: 'slavutskyi' }],
                        [{ text: 'Старокостянтинівський район', callback_data: 'starokostyantynivskyi' }],
                        [{ text: 'Старосинявський район', callback_data: 'starosyniavskyi' }],
                        [{ text: 'Теофіпольський район', callback_data: 'teofipolskyi' }],
                        [{ text: 'Хмельницький район', callback_data: 'khmelnytskyi' }],
                        [{ text: 'Чемеровецький район', callback_data: 'chemerovetskyi' }],
                        [{ text: 'Шепетівський район', callback_data: 'shepetivskyi' }],
                        [{ text: 'Ярмолинецький район', callback_data: 'yarmolinetskyi' }],
                    ],
                },
            });
        });

        khmelnytskyiDistrict.action('blank', async (ctx) => {
            //await ctx.reply('Ви обрали  район Хмельнитчини');
            ctx.scene.enter('settlement');
        });

        khmelnytskyiDistrict.action('biloghirskyi', async (ctx) => {
            await ctx.reply('Ви обрали Білогірський район Хмельнитчини');
            ctx.scene.enter('settlement');
        });

        khmelnytskyiDistrict.action('vinkovetskyi', async (ctx) => {
            await ctx.reply('Ви обрали Віньковецький район Хмельнитчини');
            ctx.scene.enter('settlement');
        });

        khmelnytskyiDistrict.action('volochyskyi', async (ctx) => {
            await ctx.reply('Ви обрали Волочиський район Хмельнитчини');
            ctx.scene.enter('settlement');
        });

        khmelnytskyiDistrict.action('horodotskyi', async (ctx) => {
            await ctx.reply('Ви обрали Городоцький район Хмельнитчини');
            ctx.scene.enter('settlement');
        });

        khmelnytskyiDistrict.action('deraznyanskyi', async (ctx) => {
            await ctx.reply('Ви обрали Деражнянський район Хмельнитчини');
            ctx.scene.enter('settlement');
        });

        khmelnytskyiDistrict.action('dunayevetskyi', async (ctx) => {
            await ctx.reply('Ви обрали Дунаєвецький район Хмельнитчини');
            ctx.scene.enter('settlement');
        });

        khmelnytskyiDistrict.action('izyaslavskyi', async (ctx) => {
            await ctx.reply('Ви обрали Ізяславський район Хмельнитчини');
            ctx.scene.enter('settlement');
        });

        khmelnytskyiDistrict.action('kamianetsPodilskyi', async (ctx) => {
            await ctx.reply("Ви обрали Кам'янець-подільський район Хмельнитчини");
            ctx.scene.enter('settlement');
        });

        khmelnytskyiDistrict.action('krasylivskyi', async (ctx) => {
            await ctx.reply('Ви обрали Красилівський район Хмельнитчини');
            ctx.scene.enter('settlement');
        });

        khmelnytskyiDistrict.action('letychivskyi', async (ctx) => {
            await ctx.reply('Ви обрали Летичівський район Хмельнитчини');
            ctx.scene.enter('settlement');
        });

        khmelnytskyiDistrict.action('novoushytskyi', async (ctx) => {
            await ctx.reply('Ви обрали Новоушицький район Хмельнитчини');
            ctx.scene.enter('settlement');
        });

        khmelnytskyiDistrict.action('polonsky', async (ctx) => {
            await ctx.reply('Ви обрали Полонський район Хмельнитчини');
            ctx.scene.enter('settlement');
        });

        khmelnytskyiDistrict.action('slavutskyi', async (ctx) => {
            await ctx.reply('Ви обрали Славутський район Хмельнитчини');
            ctx.scene.enter('settlement');
        });

        khmelnytskyiDistrict.action('starokostyantynivskyi', async (ctx) => {
            await ctx.reply('Ви обрали Старокостянтинівський район Хмельнитчини');
            ctx.scene.enter('settlement');
        });

        khmelnytskyiDistrict.action('starosyniavskyi', async (ctx) => {
            await ctx.reply('Ви обрали Старосинявський район Хмельнитчини');
            ctx.scene.enter('settlement');
        });

        khmelnytskyiDistrict.action('teofipolskyi', async (ctx) => {
            await ctx.reply('Ви обрали Теофіпольський район Хмельнитчини');
            ctx.scene.enter('settlement');
        });

        khmelnytskyiDistrict.action('khmelnytskyi', async (ctx) => {
            await ctx.reply('Ви обрали Хмельницький район Хмельнитчина');
            ctx.scene.enter('settlement');
        });

        khmelnytskyiDistrict.action('chemerovetskyi', async (ctx) => {
            await ctx.reply('Ви обрали Чемеровецький район Хмельнитчини');
            ctx.scene.enter('settlement');
        });

        khmelnytskyiDistrict.action('shepetivskyi', async (ctx) => {
            await ctx.reply('Ви обрали Шепетівський район Хмельнитчини');
            ctx.scene.enter('settlement');
        });

        khmelnytskyiDistrict.action('yarmolinetskyi', async (ctx) => {
            await ctx.reply('Ви обрали Ярмолинецький район Хмельнитчини');
            ctx.scene.enter('settlement');
        });

        return khmelnytskyiDistrict;
    }

    SelectCherkasyDistrict() {
        const cherkasyDistrict = new Scenes.BaseScene('cherkasyDistrict');
        cherkasyDistrict.enter(async (ctx) => {
            await ctx.reply('Оберіть район Черкащини:', {
                reply_markup: {
                    inline_keyboard: [
                        [{ text: ' ', callback_data: 'blank' }],
                        [{ text: 'Ватутіне', callback_data: 'vatutin' }],
                        [{ text: 'Городищенський район', callback_data: 'horodyshchenskyi' }],
                        [{ text: 'Драбівський район', callback_data: 'drabivskyi' }],
                        [{ text: 'Жашківський район', callback_data: 'zhashkivskyi' }],
                        [{ text: 'Звенигородський район', callback_data: 'zvenigorodskyi' }],
                        [{ text: 'Золотоніський район', callback_data: 'zolotoniskyi' }],
                        [{ text: 'Золотоноша', callback_data: 'zolotonosha' }],
                        [{ text: "Кам'янський район", callback_data: 'kamiunsiy' }],
                        [{ text: 'Канівський район', callback_data: 'kanivskyi' }],
                        [{ text: 'Катеринопільський район', callback_data: 'katerynopilskyi' }],
                        [{ text: 'Корсунь-шевченківський район', callback_data: 'korsunShevchenkivskyi' }],
                        [{ text: 'Лисянський район', callback_data: 'lysyanskyi' }],
                        [{ text: 'Маньківський район', callback_data: 'mankivskyi' }],
                        [{ text: 'Монастирищенський район', callback_data: 'monastryshchenskyi' }],
                        [{ text: 'Сміла', callback_data: 'smila' }],
                        [{ text: 'Смілянський район', callback_data: 'smilyanskyi' }],
                        [{ text: 'Тальнівський район', callback_data: 'talnivskyi' }],
                        [{ text: 'Уманський район', callback_data: 'umansky' }],
                        [{ text: 'Христинівський район', callback_data: 'khrystynivskyi' }],
                        [{ text: 'Черкаси', callback_data: 'cherkasy' }],
                        [{ text: 'Черкаський район', callback_data: 'cherkasyDst' }],
                        [{ text: 'Чигиринський район', callback_data: 'chigyrinsky' }],
                        [{ text: 'Чорнобаївський район', callback_data: 'chornobayivskyi' }],
                        [{ text: 'Шполянський район', callback_data: 'shpolyanskyi' }],
                    ],
                },
            });
        });

        cherkasyDistrict.action('blank', async (ctx) => {
            //await ctx.reply('Ви обрали район Черкащини');
            ctx.scene.enter('settlement');
        });

        cherkasyDistrict.action('vatutin', async (ctx) => {
            await ctx.reply('Ви обрали Ватутіне Черкащина');
            ctx.scene.enter('settlement');
        });

        cherkasyDistrict.action('horodyshchenskyi', async (ctx) => {
            await ctx.reply('Ви обрали Городищенський район Черкащини');
            ctx.scene.enter('settlement');
        });

        cherkasyDistrict.action('drabivskyi', async (ctx) => {
            await ctx.reply('Ви обрали Драбівський район Черкащини');
            ctx.scene.enter('settlement');
        });

        cherkasyDistrict.action('zhashkivskyi', async (ctx) => {
            await ctx.reply('Ви обрали Жашківський район Черкащини');
            ctx.scene.enter('settlement');
        });

        cherkasyDistrict.action('zvenigorodskyi', async (ctx) => {
            await ctx.reply('Ви обрали Звенигородський район Черкащини');
            ctx.scene.enter('settlement');
        });

        cherkasyDistrict.action('zolotoniskyi', async (ctx) => {
            await ctx.reply('Ви обрали Золотоніський район Черкащини');
            ctx.scene.enter('settlement');
        });

        cherkasyDistrict.action('zolotonosha', async (ctx) => {
            await ctx.reply('Ви обрали Золотоноша Черкащина');
            ctx.scene.enter('settlement');
        });

        cherkasyDistrict.action('kamiunsiy', async (ctx) => {
            await ctx.reply("Ви обрали Кам'янський район Черкащини");
            ctx.scene.enter('settlement');
        });

        cherkasyDistrict.action('kanivskyi', async (ctx) => {
            await ctx.reply('Ви обрали Канівський район Черкащини');
            ctx.scene.enter('settlement');
        });

        cherkasyDistrict.action('katerynopilskyi', async (ctx) => {
            await ctx.reply('Ви обрали Катеринопільський район Черкащини');
            ctx.scene.enter('settlement');
        });

        cherkasyDistrict.action('korsunShevchenkivskyi', async (ctx) => {
            await ctx.reply('Ви обрали Корсунь-шевченківський район Черкащини');
            ctx.scene.enter('settlement');
        });

        cherkasyDistrict.action('lysyanskyi', async (ctx) => {
            await ctx.reply('Ви обрали Лисянський район Черкащини');
            ctx.scene.enter('settlement');
        });

        cherkasyDistrict.action('mankivskyi', async (ctx) => {
            await ctx.reply('Ви обрали Маньківський район Черкащини');
            ctx.scene.enter('settlement');
        });

        cherkasyDistrict.action('monastryshchenskyi', async (ctx) => {
            await ctx.reply('Ви обрали Монастирищенський район Черкащини');
            ctx.scene.enter('settlement');
        });

        cherkasyDistrict.action('smila', async (ctx) => {
            await ctx.reply('Ви обрали Сміла Черкащина');
            ctx.scene.enter('settlement');
        });

        cherkasyDistrict.action('smilyanskyi', async (ctx) => {
            await ctx.reply('Ви обрали Смілянський район Черкащини');
            ctx.scene.enter('settlement');
        });

        cherkasyDistrict.action('talnivskyi', async (ctx) => {
            await ctx.reply('Ви обрали Тальнівський район Черкащини');
            ctx.scene.enter('settlement');
        });

        cherkasyDistrict.action('umansky', async (ctx) => {
            await ctx.reply('Ви обрали Уманський район Черкащини');
            ctx.scene.enter('settlement');
        });

        cherkasyDistrict.action('khrystynivskyi', async (ctx) => {
            await ctx.reply('Ви обрали Христинівський район Черкащини');
            ctx.scene.enter('settlement');
        });

        cherkasyDistrict.action('cherkasy', async (ctx) => {
            await ctx.reply('Ви обрали Черкаси Черкащина');
            ctx.scene.enter('settlement');
        });

        cherkasyDistrict.action('cherkasyDst', async (ctx) => {
            await ctx.reply('Ви обрали Черкаський район Черкащини');
            ctx.scene.enter('settlement');
        });

        cherkasyDistrict.action('chigyrinsky', async (ctx) => {
            await ctx.reply('Ви обрали Чигиринський район Черкащини');
            ctx.scene.enter('settlement');
        });

        cherkasyDistrict.action('chornobayivskyi', async (ctx) => {
            await ctx.reply('Ви обрали Чорнобаївський район Черкащини');
            ctx.scene.enter('settlement');
        });

        cherkasyDistrict.action('shpolyanskyi', async (ctx) => {
            await ctx.reply('Ви обрали Шполянський район Черкащини');
            ctx.scene.enter('settlement');
        });

        return cherkasyDistrict;
    }

    SelectChernivtsiDistrict() {
        const chernivtsiDistrict = new Scenes.BaseScene('chernivtsiDistrict');
        chernivtsiDistrict.enter(async (ctx) => {
            await ctx.reply('Оберіть район Чернівинщини:', {
                reply_markup: {
                    inline_keyboard: [
                        [{ text: ' ', callback_data: 'blank' }],
                        [{ text: 'Вижницький район', callback_data: 'vyzhnytskyi' }],
                        [{ text: 'Герцаївський район', callback_data: 'hertsaivskyi' }],
                        [{ text: 'Глибоцький район', callback_data: 'hlybocki' }],
                        [{ text: 'Заставнівський район', callback_data: 'zastavnivskyi' }],
                        [{ text: 'Кельменецький район', callback_data: 'kelmenetskyi' }],
                        [{ text: 'Кіцманський район', callback_data: 'kitzmanskyi' }],
                        [{ text: 'Новоселицький район', callback_data: 'novoselytskyi' }],
                        [{ text: 'Путильський район', callback_data: 'putylskyi' }],
                        [{ text: 'Сокирянський район', callback_data: 'sokyrianskyi' }],
                        [{ text: 'Сторожинецький район', callback_data: 'storozhinetsky' }],
                        [{ text: 'Хотинський район', callback_data: 'khotynskyi' }],
                    ],
                },
            });
        });

        chernivtsiDistrict.action('blank', async (ctx) => {
            //await ctx.reply('Ви обрали район Чернівинщини');
            ctx.scene.enter('settlement');
        });

        chernivtsiDistrict.action('vyzhnytskyi', async (ctx) => {
            await ctx.reply('Ви обрали Вижницький район Чернівинщини');
            ctx.scene.enter('settlement');
        });

        chernivtsiDistrict.action('hertsaivskyi', async (ctx) => {
            await ctx.reply('Ви обрали Герцаївський район Чернівинщини');
            ctx.scene.enter('settlement');
        });

        chernivtsiDistrict.action('hlybocki', async (ctx) => {
            await ctx.reply('Ви обрали Глибоцький район Чернівинщини');
            ctx.scene.enter('settlement');
        });

        chernivtsiDistrict.action('zastavnivskyi', async (ctx) => {
            await ctx.reply('Ви обрали Заставнівський район Чернівинщини');
            ctx.scene.enter('settlement');
        });

        chernivtsiDistrict.action('kelmenetskyi', async (ctx) => {
            await ctx.reply('Ви обрали Кельменецький район Чернівинщини');
            ctx.scene.enter('settlement');
        });

        chernivtsiDistrict.action('kitzmanskyi', async (ctx) => {
            await ctx.reply('Ви обрали Кіцманський район Чернівинщини');
            ctx.scene.enter('settlement');
        });

        chernivtsiDistrict.action('novoselytskyi', async (ctx) => {
            await ctx.reply('Ви обрали Новоселицький район Чернівинщини');
            ctx.scene.enter('settlement');
        });

        chernivtsiDistrict.action('putylskyi', async (ctx) => {
            await ctx.reply('Ви обрали Путильський район Чернівинщини');
            ctx.scene.enter('settlement');
        });

        chernivtsiDistrict.action('sokyrianskyi', async (ctx) => {
            await ctx.reply('Ви обрали Сокирянський район Чернівинщини');
            ctx.scene.enter('settlement');
        });

        chernivtsiDistrict.action('storozhinetsky', async (ctx) => {
            await ctx.reply('Ви обрали Сторожинецький район Чернівинщини');
            ctx.scene.enter('settlement');
        });

        return chernivtsiDistrict;
    }

    SelectChernihivDistrict() {
        const chernihivDistrict = new Scenes.BaseScene('chernihivDistrict');
        chernihivDistrict.enter(async (ctx) => {
            await ctx.reply('Оберіть район Чернігівщини:', {
                reply_markup: {
                    inline_keyboard: [
                        [{ text: ' ', callback_data: 'blank' }],
                        [{ text: 'Бахмацький район', callback_data: 'bakhmatsky' }],
                        [{ text: 'Бобровицький район', callback_data: 'bobrovytskyi' }],
                        [{ text: 'Борзнянський район', callback_data: 'borznyanskyi' }],
                        [{ text: 'Варвинський район', callback_data: 'varvinskyi' }],
                        [{ text: 'Городнянський район', callback_data: 'horodnyanskyi' }],
                        [{ text: 'Ічнянський район', callback_data: 'ichnyanskyi' }],
                        [{ text: 'Козелецький район', callback_data: 'kozeletskyi' }],
                        [{ text: 'Коропський район', callback_data: 'koropskyi' }],
                        [{ text: 'Корюківський район', callback_data: 'koryukivskyi' }],
                        [{ text: 'Куликівський район', callback_data: 'kulikivskyi' }],
                        [{ text: 'Менський район', callback_data: 'manx' }],
                        [{ text: 'Ніжинський район', callback_data: 'nijinsky' }],
                        [{ text: 'Новгород-сіверський район', callback_data: 'novgorodSiverskyi' }],
                        [{ text: 'Носівський район', callback_data: 'nosivskyi' }],
                        [{ text: 'Прилуцький район', callback_data: 'prylutsky' }],
                        [{ text: 'Ріпкинський район', callback_data: 'ripkinsky' }],
                        [{ text: 'Семенівський район', callback_data: 'semenivskyi' }],
                        [{ text: 'Сновський район', callback_data: 'snovsky' }],
                        [{ text: 'Сосницький район', callback_data: 'sosnytskyi' }],
                        [{ text: 'Срібнянський район', callback_data: 'sribnianskyi' }],
                        [{ text: 'Талалаївський район', callback_data: 'talalaivskyi' }],
                        [{ text: 'Чернігівський район', callback_data: 'chernihivskyi' }],
                    ],
                },
            });
        });

        chernihivDistrict.action('blank', async (ctx) => {
            //await ctx.reply('Ви обрали район Чернігівщини');
            ctx.scene.enter('settlement');
        });

        chernihivDistrict.action('bakhmatsky', async (ctx) => {
            await ctx.reply('Ви обрали Бахмацький район Чернігівщини');
            ctx.scene.enter('settlement');
        });

        chernihivDistrict.action('bobrovytskyi', async (ctx) => {
            await ctx.reply('Ви обрали Бобровицький район Чернігівщини');
            ctx.scene.enter('settlement');
        });

        chernihivDistrict.action('borznyanskyi', async (ctx) => {
            await ctx.reply('Ви обрали Борзнянський район Чернігівщини');
            ctx.scene.enter('settlement');
        });

        chernihivDistrict.action('varvinskyi', async (ctx) => {
            await ctx.reply('Ви обрали Варвинський район Чернігівщини');
            ctx.scene.enter('settlement');
        });

        chernihivDistrict.action('horodnyanskyi', async (ctx) => {
            await ctx.reply('Ви обрали Городнянський район Чернігівщини');
            ctx.scene.enter('settlement');
        });

        chernihivDistrict.action('ichnyanskyi', async (ctx) => {
            await ctx.reply('Ви обрали Ічнянський район Чернігівщини');
            ctx.scene.enter('settlement');
        });

        chernihivDistrict.action('kozeletskyi', async (ctx) => {
            await ctx.reply('Ви обрали Козелецький район Чернігівщини');
            ctx.scene.enter('settlement');
        });

        chernihivDistrict.action('koropskyi', async (ctx) => {
            await ctx.reply('Ви обрали Коропський район Чернігівщини');
            ctx.scene.enter('settlement');
        });

        chernihivDistrict.action('koryukivskyi', async (ctx) => {
            await ctx.reply('Ви обрали Корюківський район Чернігівщини');
            ctx.scene.enter('settlement');
        });

        chernihivDistrict.action('kulikivskyi', async (ctx) => {
            await ctx.reply('Ви обрали Куликівський район Чернігівщини');
            ctx.scene.enter('settlement');
        });

        chernihivDistrict.action('manx', async (ctx) => {
            await ctx.reply('Ви обрали Менський район Чернігівщини');
            ctx.scene.enter('settlement');
        });

        chernihivDistrict.action('nijinsky', async (ctx) => {
            await ctx.reply('Ви обрали Ніжинський район Чернігівщини');
            ctx.scene.enter('settlement');
        });

        chernihivDistrict.action('novgorodSiverskyi', async (ctx) => {
            await ctx.reply('Ви обрали Новгород-сіверський район Чернігівщини');
            ctx.scene.enter('settlement');
        });

        chernihivDistrict.action('nosivskyi', async (ctx) => {
            await ctx.reply('Ви обрали Носівський район Чернігівщини');
            ctx.scene.enter('settlement');
        });

        chernihivDistrict.action('prylutsky', async (ctx) => {
            await ctx.reply('Ви обрали Прилуцький район Чернігівщини');
            ctx.scene.enter('settlement');
        });

        chernihivDistrict.action('ripkinsky', async (ctx) => {
            await ctx.reply('Ви обрали Ріпкинський район Чернігівщини');
            ctx.scene.enter('settlement');
        });

        chernihivDistrict.action('semenivskyi', async (ctx) => {
            await ctx.reply('Ви обрали Семенівський район Чернігівщини');
            ctx.scene.enter('settlement');
        });

        chernihivDistrict.action('snovsky', async (ctx) => {
            await ctx.reply('Ви обрали Сновський район Чернігівщини');
            ctx.scene.enter('settlement');
        });

        chernihivDistrict.action('sosnytskyi', async (ctx) => {
            await ctx.reply('Ви обрали Сосницький район Чернігівщини');
            ctx.scene.enter('settlement');
        });

        chernihivDistrict.action('sribnianskyi', async (ctx) => {
            await ctx.reply('Ви обрали Срібнянський район Чернігівщини');
            ctx.scene.enter('settlement');
        });

        chernihivDistrict.action('talalaivskyi', async (ctx) => {
            await ctx.reply('Ви обрали Талалаївський район Чернігівщини');
            ctx.scene.enter('settlement');
        });

        chernihivDistrict.action('chernihivskyi', async (ctx) => {
            await ctx.reply('Ви обрали Чернігівський район Чернігівщини');
            ctx.scene.enter('settlement');
        });

        return chernihivDistrict;
    }

    SelectSettlement() {
        const settlement = new Scenes.BaseScene('settlement');
        settlement.enter(async (ctx) => {
            await ctx.reply('Введіть назву населеного пункту:');
        });

        settlement.on('text', async (ctx) => {
            await ctx.reply(`Ви обрали налений пункт ${ctx.message.text}`);
            ctx.scene.enter('streetIndex');
        });
        return settlement;
    }

    SelectStreetIndex() {
        const streetIndex = new Scenes.BaseScene('streetIndex');
        streetIndex.enter(async (ctx) => {
            await ctx.reply('Введіть поштовий індекс вулиці або населеного пункту');
        });

        streetIndex.on('text', async (ctx) => {
            await ctx.reply(`Ви вказали індекс ${ctx.message.text}`);
            ctx.scene.enter('typeStreet');
        });
        return streetIndex;
    }

    SelectTypeStreet() {
        const typeStreet = new Scenes.BaseScene('typeStreet');
        typeStreet.enter(async (ctx) => {
            await ctx.reply('Оберіть тип вулиці:', {
                reply_markup: {
                    inline_keyboard: [
                        [{ text: ' ', callback_data: 'blank' }],
                        [{ text: 'бульвар', callback_data: 'boulevard' }],
                        [{ text: "в'їзд", callback_data: 'entrance' }],
                        [{ text: 'вулиця', callback_data: 'street' }],
                        [{ text: 'дорога', callback_data: 'road' }],
                        [{ text: 'квартал', callback_data: 'quarter' }],
                        [{ text: 'кордонний перехід', callback_data: 'borderCrossing' }],
                        [{ text: 'майдан', callback_data: 'maidan' }],
                        [{ text: 'мікрорайон', callback_data: 'microdistrict' }],
                        [{ text: 'набережна', callback_data: 'quay' }],
                        [{ text: 'площа', callback_data: 'area' }],
                        [{ text: 'провулок', callback_data: 'lane' }],
                        [{ text: 'проїзд', callback_data: 'journey' }],
                        [{ text: 'проспект', callback_data: 'prospectus' }],
                        [{ text: 'тупик', callback_data: 'impasse' }],
                        [{ text: 'узвіз', callback_data: 'takeOff' }],
                        [{ text: 'шоссе', callback_data: 'highway' }],
                    ],
                },
            });
        });

        typeStreet.action('blank', async (ctx) => {
            //await ctx.reply('Ви обрали тип вулиці');
            ctx.scene.enter('titleStreet');
        });

        typeStreet.action('boulevard', async (ctx) => {
            await ctx.reply('Ви обрали тип вулиці бульвар');
            ctx.scene.enter('titleStreet');
        });

        typeStreet.action('entrance', async (ctx) => {
            await ctx.reply("Ви обрали тип вулиці в'їзд");
            ctx.scene.enter('titleStreet');
        });

        typeStreet.action('street', async (ctx) => {
            await ctx.reply('Ви обрали тип вулиці вулиця');
            ctx.scene.enter('titleStreet');
        });

        typeStreet.action('road', async (ctx) => {
            await ctx.reply('Ви обрали тип вулиці дорога');
            ctx.scene.enter('titleStreet');
        });

        typeStreet.action('quarter', async (ctx) => {
            await ctx.reply('Ви обрали тип вулиці квартал');
            ctx.scene.enter('titleStreet');
        });

        typeStreet.action('borderCrossing', async (ctx) => {
            await ctx.reply('Ви обрали тип вулиці кордонний перехід');
            ctx.scene.enter('titleStreet');
        });

        typeStreet.action('maidan', async (ctx) => {
            await ctx.reply('Ви обрали тип вулиці майдан');
            ctx.scene.enter('titleStreet');
        });

        typeStreet.action('microdistrict', async (ctx) => {
            await ctx.reply('Ви обрали тип вулиці мікрорайон');
            ctx.scene.enter('titleStreet');
        });

        typeStreet.action('quay', async (ctx) => {
            await ctx.reply('Ви обрали тип вулиці набережна');
            ctx.scene.enter('titleStreet');
        });

        typeStreet.action('area', async (ctx) => {
            await ctx.reply('Ви обрали тип вулиці площа');
            ctx.scene.enter('titleStreet');
        });

        typeStreet.action('lane', async (ctx) => {
            await ctx.reply('Ви обрали тип вулиці провулок');
            ctx.scene.enter('titleStreet');
        });

        typeStreet.action('journey', async (ctx) => {
            await ctx.reply('Ви обрали тип вулиці проїзд');
            ctx.scene.enter('titleStreet');
        });

        typeStreet.action('prospectus', async (ctx) => {
            await ctx.reply('Ви обрали тип вулиці проспект');
            ctx.scene.enter('titleStreet');
        });

        typeStreet.action('impasse', async (ctx) => {
            await ctx.reply('Ви обрали тип вулиці тупик');
            ctx.scene.enter('titleStreet');
        });

        typeStreet.action('takeOff', async (ctx) => {
            await ctx.reply('Ви обрали тип вулиці узвіз');
            ctx.scene.enter('titleStreet');
        });

        typeStreet.action('highway', async (ctx) => {
            await ctx.reply('Ви обрали тип вулиці шоссе');
            ctx.scene.enter('titleStreet');
        });

        return typeStreet;
    }

    SelectTitleStreet() {
        const titleStreet = new Scenes.BaseScene('titleStreet');
        titleStreet.enter(async (ctx) => {
            await ctx.reply('Введіть назву вулиці');
        });

        titleStreet.on('text', async (ctx) => {
            await ctx.reply(`Ви вказали назву вулиці ${ctx.message.text}`);
            ctx.scene.enter('numHouse');
        });
        return titleStreet;
    }

    SelectNumHouse() {
        const numHouse = new Scenes.BaseScene('numnumHouse');
        numHouse.enter(async (ctx) => {
            await ctx.reply('Введіть номер будинку');
        });

        numHouse.on('text', async (ctx) => {
            await ctx.reply(`Ви вказали номер будинку ${ctx.message.text}`);
            ctx.scene.enter('numApart');
        });
        return numHouse;
    }

    SelectNumApart() {
        const numApart = new Scenes.BaseScene('numApart');
        numApart.enter(async (ctx) => {
            await ctx.reply('Введіть номер квартири');
        });

        numApart.on('text', async (ctx) => {
            await ctx.reply(`Ви вказали номер квартири ${ctx.message.text}`);
            //ctx.scene.enter('numApart');
            ctx.scene.leave();
        });
        return numApart;
    }
}

module.exports = SceneOrantaPolicy;
