//import { dataSceneTest } from "./scene-test";

// TODO data must be in some file or something
let localDataPath = "";

// id, path, image
let dataImageList = [
    //["preloader",localDataPath+"preloader(2).jpg", null],

    ["m-background","img/menu-bg.jpg", null],
    ["m-girl","img/menu-girl.png", null],
    ["m-logo","img/menu-logo.png", null],
    ["m-new","img/new-game.png", null],
    ["m-resume","img/resume-game.png", null],
    ["m-settings","img/settings.png", null],
    ["m-about","img/about.png", null],
    ["m-dialogue","img/dialogovoe_okno.png", null],
    ["m-text","img/menu-text.png", null],

    ["bg-grid","img/bg-grid.png", null],

    ["i-mark","img/geo.png", null],
    ["i-mark-h","img/geo-h.png", null],

    ["i-loc-00-street","img/loc_00_street.jpg", null],
    ["i-loc-00-hooker-h","img/hooker-h.png", null],
    ["i-loc-00-stripes-h","img/caution-stripes-h.png", null],
    ["i-loc-00-syringes","img/syringes.png", null],
    ["i-loc-00-syringes-h","img/syringes-h.png", null],
    ["i-loc-00-paper","img/garbage-paper.png", null],
    ["i-loc-00-paper-h","img/garbage-paper-h.png", null],

    ["i-loc-01-street","img/loc_01_street.jpg", null],
    ["i-loc-01-car-h","img/car-h.png", null],

    ["i-loc-02-pereulok","img/loc_02_pereulok.jpg", null],
    ["i-loc-02-guard-h","img/guard-h.png", null],
    ["i-loc-02-door-h","img/bar-door-h.png", null],
    ["i-loc-02-homeless-h","img/homeless-h.png", null],

    ["i-loc-03-bar","img/loc_03_bar.jpg", null],
    ["i-loc-03-barmen-h","img/barmen-h.png", null],
    ["i-loc-03-vip-h","img/vip-h.png", null],

    ["i-loc-04-pereulok","img/loc_04_pereulok.jpg", null],
    ["i-loc-04-closed-door-h","img/closed-door.png", null],
    ["i-loc-04-katana-guy-h","img/katana-guy-h.png", null],


    ["i-loc-05-city-l00","img/loc_05_city_l00.jpg", null],
    ["i-loc-05-city-l01","img/loc_05_city_l01.png", null],
    ["i-loc-05-city-l02","img/loc_05_city_l02.png", null],
    ["i-loc-05-door-h","img/door-to-apt-h.png", null],
    ["i-loc-05-bb1","img/bb1.png", null],
    ["i-loc-05-bb2","img/bb2.png", null],


    ["i-loc-06-apartments-l00","img/loc_06_apartments_l00.jpg", null],
    ["i-loc-06-apartments-l01","img/loc_06_apartments_l01.png", null],
    ["i-loc-06-door-h","img/door-to-city-h.png", null],
    ["i-loc-06-computer-h","img/computer-h.png", null],

    ["naoki","img/char_naoki_01.png", null],
    ["plakat-prestupnika","img/plakat_prestupnika_tochno.png", null],
    ["katana","img/plakat_prestupnika.png", null],
    ["syringes","img/shpritsy.png", null],
    ["nark","img/POroshok.png", null],
    ["clip","img/valessiobrito_Paper_Clip.png", null],
    ["amulet","img/kolye.png", null],

    ["prop-car-01","img/car_01.png", null],
    ["prop-car-02","img/car_02.png", null],
    ["prop-car-03","img/car_03.png", null],
    ["prop-car-04","img/car_04.png", null],
    ["prop-car-05","img/car_05.png", null],

];


let dataSoundList = [
    //["loc-00","sfx/street/Dark_Toys.mp3", null],
    ["loc-00","sfx/street/Mist.mp3", null],
    ["loc-01","sfx/street/Skence - Blue Ghost.mp3", null],
    ["loc-02","sfx/street/ROBORG - Creator.mp3", null],
    ["loc-03","sfx/bar/Synthwave  Niky Nine - Deadchrome (2019) [Lazerdiscs Records].mp3", null],
    ["loc-04","sfx/backstreet/Unsettled Atmosphere - Donn Wilkerson_(zvooq.su).mp3", null],
    ["loc-05","sfx/city/Karin Nobbs- Philippe Bestion-Foggy Tower-patefon-net.ru.mp3", null],
    ["loc-06","sfx/apartament/It_s_Coming.mp3", null],
];


let dataVideoList = [
    ["vid-start","vid/start03.mp4", null],
    ["vid-final","vid/final03.mp4", null],
];




let dataDialogue = [
    ["dia-00", "Стриптизёрша", "Этот кусок говна тебя выгнал? На этой неделе ему\nзадерживают поставку, теперь всех увольняет.", [
        ["to-dia-01","Далее"]]],

    ["dia-01", "Стриптизёрша", "Слушай, в моей ласточке остались кое-какие вещички...\nВ долгу не останусь.", [
        ["","Закрыть"]]],

    ["dia-02", "Стриптизёрша", "Спасибо, пусть это останется между нами. Это тебе.", [
        ["to-dia-f4","Закрыть"]]],

    ["dia-20", "Наоки", "Бедняжка... Уже седьмой случай за этот месяц.", [
        ["","Закрыть"]]],

    ["dia-30", "Наоки", "Хмм...", [
        ["to-dia-f2","Закрыть"]]],

    ["dia-40", "Наоки", "Раньше сюда приходили сливки общества, теперь же остались\nтолько торчки.", [
        ["","Закрыть"]]],

    ["dia-50", "Наоки", "Мне чего-то не хватает.", [
        ["","Закрыть"]]],

    ["dia-51", "Наоки", "Cлишком темно, ничего не видно.", [
        ["","Закрыть"]]],

    ["dia-60", "Вышибала", "Чего встала?", [
        ["","Закрыть"]]],

    ["dia-61", "Вышибала", "Теперь другое дело.", [
        ["","Закрыть"]]],

    ["dia-62", "Наоки", "Иоши разрешили зайти.", [
        ["to-dia-63","Далее"]]],

    ["dia-63", "Вышибала", "Окей, но я за ним слежу.", [
        ["guard-dia-end","Закрыть"]]],

    ["dia-70", "Наоки", "Хей, как поживаешь?", [
        ["to-dia-71","Далее"]]],

    ["dia-71", "Иоши", "Сойдет, только эта стерва меня опять выгнала.", [
        ["to-dia-72","Далее"]]],

    ["dia-72", "Наоки", "За что?", [
        ["to-dia-73","Далее"]]],

    ["dia-73", "Иоши", "Я не выгляжу как их типичные клиенты, прикинь.", [
        ["to-dia-74","Далее"]]],

    ["dia-74", "Наоки", "Я могу договориться.", [
        ["to-dia-75","Далее"]]],

    ["dia-75", "Иоши", "Было бы круто, обожаю тебя. Держи, может пригодиться.", [
        ["to-dia-f5","Закрыть"]]],

    ["dia-80", "Бармен", "Здаров, Наоки. Давно ты ко мне не заглядывала.", [
        ["to-dia-81","Далее"]]],

    ["dia-81", "Наоки", "Ты же знаешь, с Юки нам тяжело. Еще и выгнали с работы.", [
        ["to-dia-82","Далее"]]],

    ["dia-82", "Бармен", "Понятно, что расскажешь?", [
        ["to-dia-83","Ленты"],["to-dia-84","Новая работа"],["to-dia-85","Дела с баром"],["to-dia-86","Иоши"],["to-dia-87","Мутный"],["","Закрыть"]]],

    ["dia-83", "Бармен", "Черт возьми, они уже совсем страх потеряли. Жаль парнишку,\nон был моим лучшим клиентом.", [
        ["to-dia-82","Закрыть"]]],

    ["dia-84", "Бармен", "Я всегда рад тебе помочь с подработкой.", [
        ["to-dia-82","Закрыть"]]],

    ["dia-85", "Бармен", "В последнее время только эти ходят… В округе все закрываются,\nа в центре слишком дорого. Компания хочет выкупить бар,\nне нравится мне все это.", [
        ["to-dia-82","Закрыть"]]],

    ["dia-86", "Бармен", "Ты знаешь правила. Только под твою ответственность и потому\nчто мы давно знакомы.", [
        ["to-dia-82","Закрыть"]]],

    ["dia-87", "Бармен", "После смерти главы в компании работают одни бандиты.\nНе удивительно, что их рожи на каждом столбе.", [
        ["to-dia-82","Закрыть"]]],

    ["dia-90", "Мутный", "Ну привет, красотка.", [
        ["to-dia-91","Далее"]]],

    ["dia-91", "Наоки", "Что тебе надо?", [
        ["to-dia-92","Далее"]]],

    ["dia-92", "Мутный", "Вот захотел повидаться хе-хе. Ты знала, что теперь знаменита\nв наших кругах? Только вот многие готовы отдать за твою голову\nкругленькую сумму. Ты бы не ходила одна по темным переулкам.", [
        ["to-dia-93","Далее"]]],

    ["dia-93", "Наоки", "Я не делала этого, ты же знаешь.", [
        ["to-dia-94","Далее"]]],

    ["dia-94", "Мутный", "Сладкая, ты представить не можешь сколько мне платят\nза молчание.", [
        ["to-dia-95","Далее"]]],

    ["dia-95", "Наоки", "Проваливай отсюда. Иначе слухи окажутся правдой.", [
        ["to-dia-96","Далее"]]],

    ["dia-96", "Мутный", "Воу, я бы не стал так со мной разговаривать. Знаешь,\nя бы на твоем месте поторопился домой, может встретишь кого\nинтересного хе-хе. И да, тебе привет от Шизуко.", [
        ["to-dia-97","Далее"]]],

    ["dia-97", "Наоки", "В иных условиях я посчитала бы это угрозой.", [
        ["to-dia-98","Далее"]]],

    ["dia-98", "Мутный", "Не хорошо это.", [
        ["to-dia-99","Далее"]]],

    ["dia-99", "Наоки", "Что именно?", [
        ["to-dia-9a","Далее"]]],

    ["dia-9a", "Мутный", "Сомневаться.", [
        ["katana-dia-end","Закрыть"]]],

    ["dia-a0", "Наоки", "Закрыто.", [
        ["","Закрыть"]]],

    ["dia-a1", "Наоки", "Вот дерьмо!!!", [
        ["","Закрыть"]]],


    ["dia-f1", "Наоки", "Получен предмет: Шприцы.", [
        ["dia-f1-get","Закрыть"]]],

    ["dia-f2", "Наоки", "Получен предмет: Портрет \"мутного\".", [
        ["dia-f2-get","Закрыть"]]],

    ["dia-f3", "Наоки", "Получен предмет: Странный порошок.", [
        ["dia-f3-get","Закрыть"]]],

    ["dia-f4", "Наоки", "Получен предмет: Ожерелье.", [
        ["dia-f4-get","Закрыть"]]],

    ["dia-f5", "Наоки", "Получен предмет: Скрепка.", [
        ["dia-f5-get","Закрыть"]]],


    ["dia-ff", "Наоки", "На экране видно уведомление. На почту пришло видео.", [
        ["the-end","Посмотреть видео"]]],
];

// id, offsetx, offsety, length, timeout

let dataNaokiAnimations = [
    ["idle-r",0,0,3,500],
    ["idle-l",3,0,3,500],
    ["run-r",0,1,8,100],
    ["run-l",0,2,8,100],
];


let dataBB1Animations = [
    ["idle",0,0,25,100],
];


let dataBB2Animations = [
    ["idle",0,0,12,100],
];


let dataButtonAnimation = [
    ["idle",0,0,1,0],
    ["hover",0,1,1,0],
];


// Описание для переходов между локациями
let description_Door_00_01 = ["door-00-01-h","loc-01",2431,1034];
let description_Door_01_00 = ["door-01-00-h","loc-00",64,924];
let description_Door_00_02 = ["door-00-02-h","loc-02",64,954];
let description_Door_00_04 = ["door-00-04-h","loc-04",64,995];
let description_Door_02_00 = ["door-02-00-h","loc-00",2431,924];
let description_Door_02_03 = ["loc-02-door-h","loc-03",64,954];
let description_Door_03_02 = ["door-03-02-h","loc-02",892,954];
let description_Door_04_00 = ["door-04-00-h","loc-00",1150,924];
let description_Door_04_05 = ["door-04-05-h","loc-05",64,954];
let description_Door_05_04 = ["door-05-04-h","loc-04",2231,995];
let description_Door_05_06 = ["loc-05-door-h","loc-06",64,995];
let description_Door_06_05 = ["loc-06-door-h","loc-05",2231,954];


// Описание сцены и объекта сцены
// id, left right border
// id, type, visible,active, layer, posx,y, activex,y,w,h, centerx,y,rotation, sizex,y, scale, img id, comment, animation sprite width, height, animation active, other data

let description_Scene_00 = [
    ["loc-00",    64,2496,    0,0,2560,1080],
    ["loc-00-street",    "static",    true,true,    0,    0,0,    0,0,0,0,    0,0,0,    1,1,1,    "i-loc-00-street",    "",    0,0,false,    null],
    ["door-00-01",    "static",    true,true,    0,    0,800,    0,0,0,0,    0,0,0,    1,1,1,    "i-mark",    "",    0,0,false,    null],
    ["door-00-01-h",    "door",    false,true,    0,    0,800,    0,0,128,128,    0,0,0,    1,1,1,    "i-mark-h",    "",    0,0,false,    description_Door_00_01],
    ["door-00-02",    "static",    true,true,    0,    2431,800,    0,0,0,0,    0,0,0,    1,1,1,    "i-mark",    "",    0,0,false,    null],
    ["door-00-02-h",    "door",    false,true,    0,    2431,800,    0,0,128,128,    0,0,0,    1,1,1,    "i-mark-h",    "",    0,0,false,    description_Door_00_02],
    ["door-00-04",    "static",    false,false,    0,    1150,700,    0,0,0,0,    0,0,0,    1,1,1,    "i-mark",    "",    0,0,false,    null],
    ["door-00-04-h",    "door",    false,false,    0,    1150,700,    0,0,128,128,    0,0,0,    1,1,1,    "i-mark-h",    "",    0,0,false,    description_Door_00_04],
    ["loc-00-syringes",    "static",    true,true,    0,    2103,806,    0,0,73,66,    0,0,0,    1,1,1,    "i-loc-00-syringes",    "",    0,0,false,    null],
    ["loc-00-paper",    "static",    true,true,    0,    2331,803,    0,0,78,75,    0,0,0,    1,1,1,    "i-loc-00-paper",    "",    0,0,false,    null],
    ["loc-00-hooker-h",    "interactive",    false,true,    0,    283,357,    0,0,151,501,    0,0,0,    1,1,1,    "i-loc-00-hooker-h",    "",    0,0,false,    null],
    ["loc-00-stripes-h",    "interactive",    false,true,    0,    1584,470,    0,0,604,280,    0,0,0,    1,1,1,    "i-loc-00-stripes-h",    "",    0,0,false,    null],
    ["loc-00-syringes-h",    "interactive",    false,true,    0,    2123,816,    0,0,73,66,    0,0,0,    1,1,1,    "i-loc-00-syringes-h",    "",    0,0,false,    null],
    ["loc-00-paper-h",    "interactive",    false,true,    0,    2334,806,    0,0,78,75,    0,0,0,    1,1,1,    "i-loc-00-paper-h",    "",    0,0,false,    null],
    ["naoki",    "static",    true,true,    0,    868,924,    0,0,0,0,    128,345,0,    1,1,1.55,    "naoki",    "",    256,345,true,    dataNaokiAnimations],
];


let description_Scene_01 = [
    ["loc-01",    1080,2496,    0,0,2560,1080],
    ["loc-01-street",    "static",    true,true,    0,    0,0,    0,0,0,0,    0,0,0,    1,1,1,    "i-loc-01-street",    "",    0,0,false,    null],
    ["door-01-00",    "static",    true,true,    0,    2431,800,    0,0,0,0,    0,0,0,    1,1,1,    "i-mark",    "",    0,0,false,    null],
    ["door-01-00-h",    "door",    false,true,    0,    2431,800,    0,0,128,128,    0,0,0,    1,1,1,    "i-mark-h",    "",    0,0,false,    description_Door_01_00],
    ["loc-01-car-h",    "interactive",    false,true,    0,    562,648,    0,0,1005,361,    0,0,0,    1,1,1,    "i-loc-01-car-h",    "",    0,0,false,    null],
    ["naoki",    "static",    true,true,    0,    0,0,    0,0,0,0,    128,345,0,    1,1,1.55,    "naoki",    "",    256,345,true,    dataNaokiAnimations],
];


let description_Scene_02 = [
    ["loc-02",    64,2100,    0,0,2560,1080],
    ["loc-02-pereulok",    "static",    true,true,    0,    0,0,    0,0,0,0,    0,0,0,    1,1,1,    "i-loc-02-pereulok",    "",    0,0,false,    null],
    ["door-02-00",    "static",    true,true,    0,    0,800,    0,0,0,0,    0,0,0,    1,1,1,    "i-mark",    "",    0,0,false,    null],
    ["door-02-00-h",    "door",    false,true,    0,    0,800,    0,0,128,128,    0,0,0,    1,1,1,    "i-mark-h",    "",    0,0,false,    description_Door_02_00],
    ["loc-02-guard-h",    "interactive",    false,true,    0,    1151,294,    0,0,153,534,    0,0,0,    1,1,1,    "i-loc-02-guard-h",    "",    0,0,false,    null],
    ["loc-02-door-h",    "door",    false,false,    0,    892,237,    0,0,262,569,    0,0,0,    1,1,1,    "i-loc-02-door-h",    "",    0,0,false,    description_Door_02_03],
    ["loc-02-homeless-h",    "interactive",    false,true,    0,    2173,646,    0,0,362,434,    0,0,0,    1,1,1,    "i-loc-02-homeless-h",    "",    0,0,false,    null],
    ["naoki",    "static",    true,true,    0,    868,924,    0,0,0,0,    128,345,0,    1,1,1.55,    "naoki",    "",    256,345,true,    dataNaokiAnimations],
];


let description_Scene_03 = [
    ["loc-03",    64,1800,    0,0,2560,1080],
    ["loc-03-bar",    "static",    true,true,    0,    0,0,    0,0,0,0,    0,0,0,    1,1,1,    "i-loc-03-bar",    "",    0,0,false,    null],
    ["door-03-02",    "static",    true,true,    0,    0,800,    0,0,0,0,    0,0,0,    1,1,1,    "i-mark",    "",    0,0,false,    null],
    ["door-03-02-h",    "door",    false,true,    0,    0,800,    0,0,128,128,    0,0,0,    1,1,1,    "i-mark-h",    "",    0,0,false,    description_Door_03_02],
    ["loc-03-barmen-h",    "interactive",    false,true,    0,    2016,387,    0,0,158,352,    0,0,0,    1,1,1,    "i-loc-03-barmen-h",    "",    0,0,false,    null],
    ["loc-03-vip-h",    "interactive",    false,true,    0,    429,0,    0,0,698,688,    0,0,0,    1,1,1,    "i-loc-03-vip-h",    "",    0,0,false,    null],
    ["naoki",    "static",    true,true,    0,    868,924,    0,0,0,0,    128,345,0,    1,1,1.55,    "naoki",    "",    256,345,true,    dataNaokiAnimations],
];


let description_Scene_04 = [
    ["loc-04",    64,2496,    0,0,2560,1080],
    ["loc-04-pereulok",    "static",    true,true,    0,    0,0,    0,0,0,0,    0,0,0,    1,1,1,    "i-loc-04-pereulok",    "",    0,0,false,    null],
    ["door-04-00",    "static",    true,true,    0,    0,900,    0,0,0,0,    0,0,0,    1,1,1,    "i-mark",    "",    0,0,false,    null],
    ["door-04-00-h",    "door",    false,true,    0,    0,900,    0,0,128,128,    0,0,0,    1,1,1,    "i-mark-h",    "",    0,0,false,    description_Door_04_00],
    ["door-04-05",    "static",    false,false,    0,    2231,900,    0,0,0,0,    0,0,0,    1,1,1,    "i-mark",    "",    0,0,false,    null],
    ["door-04-05-h",    "door",    false,false,    0,    2231,900,    0,0,128,128,    0,0,0,    1,1,1,    "i-mark-h",    "",    0,0,false,    description_Door_04_05],
    ["loc-04-closed-door-h",    "interactive",    false,true,    0,    967,239,    225,0,415,613,    0,0,0,    1,1,1,    "i-loc-04-closed-door-h",    "",    0,0,false,    null],
    ["loc-04-katana-guy-h",    "interactive",    false,true,    0,    1611,448,    0,0,238,449,    0,0,0,    1,1,1,    "i-loc-04-katana-guy-h",    "",    0,0,false,    null],
    ["naoki",    "static",    true,true,    0,    868,924,    0,0,0,0,    128,345,0,    1,1,1.55,    "naoki",    "",    256,345,true,    dataNaokiAnimations],
];


let description_Scene_05 = [
    ["loc-05",    64,2296,    0,0,2560,1080],
    ["i-loc-05-city-l00",    "static",    true,true,    0,    0,0,    0,0,0,0,    0,0,0,    1,1,1,    "i-loc-05-city-l00",    "",    0,0,false,    null],
    ["i-loc-05-city-bb1",    "static",    true,true,    0,    1670,104,    0,0,0,0,    0,0,0,    1.048351,1.332031,1,    "i-loc-05-bb1",    "",    455,256,true,    dataBB1Animations],
    ["i-loc-05-city-bb2",    "static",    true,true,    0,    200,46,    0,0,0,0,    0,0,0,    1.381679,1.433593,1,    "i-loc-05-bb2",    "",    262,256,true,    dataBB2Animations],["i-loc-05-city-l01",    "static",    true,true,    0,    0,0,    0,0,0,0,    0,0,0,    1,1,1,    "i-loc-05-city-l01",    "",    0,0,false,    null],
    ["door-05-04",    "static",    true,true,    0,    0,840,    0,0,0,0,    0,0,0,    1,1,1,    "i-mark",    "",    0,0,false,    null],
    ["door-05-04-h",    "door",    false,true,    0,    0,840,    0,0,128,128,    0,0,0,    1,1,1,    "i-mark-h",    "",    0,0,false,    description_Door_05_04],
    ["loc-05-door-h",    "door",    false,true,    0,    2203,452,    0,0,189,459,    0,0,0,    1,1,1,    "i-loc-05-door-h",    "",    0,0,false,    description_Door_05_06],
    ["naoki",    "static",    true,true,    0,    0,0,    0,0,0,0,    128,345,0,    1,1,1.3,    "naoki",    "",    256,345,true,    dataNaokiAnimations],
    ["i-loc-05-city-l02",    "static",    true,true,    0,    0,0,    0,0,0,0,    0,0,0,    1,1,1,    "i-loc-05-city-l02",    "",    0,0,false,    null],
];


let description_Scene_06 = [
    ["loc-06",    264,2296,    0,0,2560,1080],
    ["loc-06-apartments-l00",    "static",    true,true,    0,    0,0,    0,0,0,0,    0,0,0,    1,1,1,    "i-loc-06-apartments-l00",    "",    0,0,false,    null],
    ["loc-06-apartments-l01",    "static",    true,true,    0,    0,0,    0,0,0,0,    0,0,0,    1,1,1,    "i-loc-06-apartments-l01",    "",    0,0,false,    null],
    ["loc-06-door-h",    "door",    false,true,    0,    43,385,    0,0,121,647,    0,0,0,    1,1,1,    "i-loc-06-door-h",    "",    0,0,false,    description_Door_06_05],
    ["loc-06-computer-h",    "interactive",    false,true,    0,    1024,265,    0,0,189,459,    0,0,0,    1,1,1,    "i-loc-06-computer-h",    "",    0,0,false,    null],
    ["naoki",    "static",    true,true,    0,    0,0,    0,0,0,0,    128,345,0,    1,1,1.55,    "naoki",    "",    256,345,true,    dataNaokiAnimations],
];

let jsScreen = null;
let jsVideo = null;
let screenContext = null;
let preloader = null;
let inventory = null;
let preloaderStatus = "";
let imgBackground = null;

let userView = null;
let currentScene = null;
let sceneList = null;
//let props = null;
let hoverObj = null;
let menuMain = null;
let dialogueImage = null;
let dialogueImageDrawn = false;
let currentDialogueId = "";
let currentDialogue = null;
let currentSound = null;
let dialogueList = null;
let katanaImage = null;
let displayingVideo = false;

let loaderMaxItems = 0;
let loaderNumOfItems = 0;

let timeStart = 0;
let timeElapsed = 0;
//let displayTimeout = 35; // ~ 25-30 fps
let displayTimeout = 17; // ~ 60 fps
let displayTimer = null;


let charNaoki = null;
let charNaokiAnim = 0;


let isMenuDisplayed = true;
let isMainMenu = true;
let isDialogueDisplayed = false;
let isPreloaderDisplayed = false;


let loc_01_is_visited = false;
let naoki_have_syringes = false;
let naoki_have_clip = false;
let naoki_have_amulet = false;
let naoki_have_nark = false;
let naoki_talk_ab_stripes = false;
let naoki_talk_ab_job = false;
let naoki_talk_ab_bar = false;
let naoki_talk_ab_yoshi = false;
let naoki_talk_ab_katana = false;
let naoki_saw_door = false;
let naoki_talked_to_barmen = false;


class classUserView {
    constructor() {
        this.cameraXPos = 1280;
        this.cameraYPos = 540;
        this.cameraZoom = 0.5;
        this.sceneXOffset = 0;
        this.sceneYOffset = 0;
        this.mousePosX = 0;
        this.mousePosY = 0;
        this.mouseInScenePosX = 0;
        this.mouseInScenePosY = 0;
    }

    calcOffset() {
        let bgScale = 0;

        let scrW = jsScreen.width;
        let scrH = jsScreen.height;

        let imgRatio = 2560 / 1080;
        let screenRatio = scrW / scrH;

        if(screenRatio > imgRatio) {
            bgScale = scrH / 1080;
        } else {
            bgScale = scrW / 2560;
        }

        let bgW = 2560*bgScale;
        let bgH = 1080*bgScale;

        let bgX = (scrW-bgW) / 2;
        let bgY = (scrH-bgH) / 2;

        userView.cameraZoom = bgScale;




        this.sceneXOffset = jsScreen.width/2-this.cameraXPos*this.cameraZoom;
        this.sceneYOffset = jsScreen.height/2-this.cameraYPos*this.cameraZoom;

        this.mouseInScenePosX = (userView.mousePosX-userView.sceneXOffset)/userView.cameraZoom;
        this.mouseInScenePosY = (userView.mousePosY-userView.sceneYOffset)/userView.cameraZoom;
    }

    cameraTransform() {
        screenContext.setTransform(1, 0, 0, 1, 0, 0);
        screenContext.transform(1, 0, 0, 1, jsScreen.width/2, jsScreen.height/2);
        screenContext.transform(userView.cameraZoom, 0, 0, userView.cameraZoom, 0, 0);
        screenContext.transform(1, 0, 0, 1, -userView.cameraXPos, -userView.cameraYPos);
    }

    drawBackground() {
        let gridSize = imgBackground.width * this.cameraZoom;
        let totalX = this.sceneXOffset%gridSize-gridSize;
        while(totalX < jsScreen.width) {

            let totalY = this.sceneYOffset%gridSize-gridSize;
            while(totalY < jsScreen.height) {

                screenContext.drawImage(imgBackground, totalX, totalY, gridSize, gridSize);

                totalY += gridSize;}
            totalX += gridSize;}

        // тут отрисовываем текст
        screenContext.fillStyle = "white";

        screenContext.font = (48 * this.cameraZoom) + "px calibri";
        screenContext.fillText("Work in progress",
            this.sceneXOffset-155*this.cameraZoom,this.sceneYOffset-10*this.cameraZoom);

        screenContext.font = (24 * this.cameraZoom) + "px calibri";
        screenContext.fillText("Please, be patient",
            this.sceneXOffset-100*this.cameraZoom,this.sceneYOffset+20*this.cameraZoom);
    }

    drawMenu() {
        screenContext.setTransform(1, 0, 0, 1, 0, 0);
        //this.cameraTransform();
        let bgScale = 0;

        let scrW = jsScreen.width;
        let scrH = jsScreen.height;

        let imgRatio = menuMain.menuBG.width / menuMain.menuBG.height;
        let screenRatio = scrW / scrH;


        if(screenRatio <= imgRatio) {
            bgScale = scrH / menuMain.menuBG.height;
        } else {
            bgScale = scrW / menuMain.menuBG.width;
        }


        let bgW = menuMain.menuBG.width*bgScale;
        let bgH = menuMain.menuBG.height*bgScale;

        let bgX = (scrW-bgW) / 2;
        let bgY = (scrH-bgH) / 2;

        screenContext.drawImage(menuMain.menuBG, bgX, bgY, bgW, bgH);

        let girlScale = scrH / menuMain.menuGirl.height;
        screenContext.drawImage(menuMain.menuGirl, scrW/2, 0, menuMain.menuGirl.width*girlScale, menuMain.menuGirl.height*girlScale);

        let textScale = (scrH/4) / menuMain.menuLogo.height;
        screenContext.drawImage(menuMain.menuLogo, 25, scrH/16, menuMain.menuLogo.width*textScale, menuMain.menuLogo.height*textScale);

        screenContext.drawImage(menuMain.menuList, 50, scrH/3, menuMain.menuList.width*textScale, menuMain.menuList.height*textScale);
    }


}


class classDialogueOption {
    constructor(data) {
        this.optionTop = 0;
        this.optionLeft = 0;
        this.optionWidth = 0;
        this.optionHeight = 0;

        if(data === undefined) {
            this.optionTarget = "";
            this.optionText = "";
        } else {
            this.optionTarget = data[0];
            this.optionText = data[1];
        }
    }
}


class classDialogue {
    constructor(data) {
        this.dialogueOptions = [];

        if(data === undefined) {
            this.dialogueId = "";
            this.dialoguePerson = "";
            this.dialogueText = "";
        } else {
            this.dialogueId = data[0];
            this.dialoguePerson = data[1];
            this.dialogueText = data[2];

            if(data[3] != null) {
                let thisDialogueOptions = this.dialogueOptions;
                data[3].forEach(function (item, i, arr) {
                    thisDialogueOptions.push(new classDialogueOption(item));
                });
            }
        }
    }
}


class classSceneObject {
    constructor(data) {
        this.objectAnimationOffsetX = 0;
        this.objectAnimationOffsetY = 0;
        this.objectAnimationLastUpd = 0;
        this.objectAnimationMillisecs = 0;
        this.objectAnimationUpd = false;
        this.objectAnimationFrame = 0;
        this.objectLocalTransform = undefined;
        this.objectGlobalTransform = undefined;
        this.objectVectorMovement = [0,0];
        this.objectHover = false;

        if(data === undefined) {
            this.objectId = "";
            this.objectType = "";
            this.objectVisible = false;
            this.objectActive = false;
            this.objectLayer = false;
            this.objectPositionX = 0;
            this.objectPositionY = 0;
            this.objectHoverX = 0;
            this.objectHoverY = 0;
            this.objectHoverW = 0;
            this.objectHoverH = 0;
            this.objectCenterX = 0;
            this.objectCenterY = 0;
            this.objectRotation = 0;
            this.objectSizeX = 1;
            this.objectSizeY = 1;
            this.objectScale = 1;
            this.objectImageId = "";
            this.objectComment = "";
            this.objectAnimationSpriteWidth = 0;
            this.objectAnimationSpriteHeight = 0;
            this.objectAnimationActive = false;
            this.objectAnimationList = null;
            this.objectAnimationCurrent = null;
            this.objectImage = null;
        } else {
            this.objectId = data[0];
            this.objectType = data[1];
            this.objectVisible = data[2];
            this.objectActive = data[3];
            this.objectLayer = data[4];
            this.objectPositionX = data[5];
            this.objectPositionY = data[6];
            this.objectHoverX = data[7];
            this.objectHoverY = data[8];
            this.objectHoverW = data[9];
            this.objectHoverH = data[10];
            this.objectCenterX = data[11];
            this.objectCenterY = data[12];
            this.objectRotation = data[13];
            this.objectSizeX = data[14];
            this.objectSizeY = data[15];
            this.objectScale = data[16];
            this.objectImageId = data[17];
            this.objectComment = data[18];
            this.objectAnimationSpriteWidth = data[19];
            this.objectAnimationSpriteHeight = data[20];

            // get image from list
            for(let imageNumber = 0; imageNumber < dataImageList.length; imageNumber++)
                if(dataImageList[imageNumber][0] === this.objectImageId)
                    this.objectImage = dataImageList[imageNumber][2];

            // animation list of an object
            if(data[1] === "static" || data[1] === "prop") {
                if (data[22] != null) {
                    this.objectAnimationActive = data[21];
                    this.objectAnimationList = [];

                    let thisObjectAnimationList = this.objectAnimationList;

                    data[22].forEach(function (item, i, arr) {
                        thisObjectAnimationList.push(new classAnimation(item));
                    });

                    this.objectAnimationCurrent = this.objectAnimationList[0];
                } else {
                    this.objectAnimationActive = false;
                    this.objectAnimationList = null;
                    this.objectAnimationCurrent = null;
                }
            }
        }
    }


    objectUpdate() {
        if(this.objectActive === false) return;

        this.objectPositionX += this.objectVectorMovement[0];
        this.objectPositionY += this.objectVectorMovement[1];

        // update animation frames
        if(this.objectAnimationCurrent != null) {

            this.objectAnimationMillisecs = timeElapsed-this.objectAnimationLastUpd;

            if( this.objectAnimationUpd === true || this.objectAnimationMillisecs >= this.objectAnimationCurrent.animationTimeout) {

                this.objectAnimationMillisecs %= this.objectAnimationCurrent.animationTimeout;
                this.objectAnimationLastUpd = timeElapsed - this.objectAnimationMillisecs;

                this.objectAnimationFrame ++;
                if(this.objectAnimationUpd === true || this.objectAnimationFrame >= this.objectAnimationCurrent.animationLength)
                    this.objectAnimationFrame = 0;

                this.objectAnimationOffsetY = this.objectAnimationCurrent.animationOffsetY*this.objectAnimationSpriteHeight;
                this.objectAnimationOffsetX = this.objectAnimationCurrent.animationOffsetX*this.objectAnimationSpriteWidth +
                    this.objectAnimationSpriteWidth*this.objectAnimationFrame;

                this.objectAnimationUpd = false;
                /*console.log("frame " + this.objectAnimationFrame
                    + "; offset " + this.objectAnimationOffsetX
                    + "; offset std " + this.objectAnimationCurrent.animationOffsetX
                    + "; width " + this.objectAnimationCurrent.objectAnimationSpriteWidth
                );*/

                //if(this.objectAnimationOffsetX >= this.objectImage.width)
                //    this.objectAnimationOffsetX = 0;
            }
        }

        if(this.objectType === "door" || this.objectType === "interactive") {
            let objectHX = userView.mouseInScenePosX-this.objectPositionX-this.objectHoverX;
            let objectHY = userView.mouseInScenePosY-this.objectPositionY-this.objectHoverY;
            if( objectHX < this.objectHoverW && objectHY < this.objectHoverH && objectHY > 0 && objectHX > 0) {
                this.objectVisible = true;
                hoverObj = this;
            } else {
                this.objectVisible = false;
                if(hoverObj === this) hoverObj = null;
            }
        }
    }


    objectDraw() {
        if(this.objectVisible === false) return;

        let radrot = this.objectRotation*Math.PI/180;
        userView.cameraTransform();
        screenContext.transform(1, 0, 0, 1, this.objectPositionX, this.objectPositionY); // to position
        screenContext.transform(this.objectScale, 0, 0, this.objectScale, 0, 0); // scale
        screenContext.transform(Math.cos(radrot), -Math.sin(radrot), Math.sin(radrot), Math.cos(radrot), 0, 0); // rotate
        //screenContext.transform(1, 0, 0, 1, -object.objectCenterX, -object.objectCenterY); // to center of object

        if(this.objectImage === undefined) {
            console.log(this.objectId + " img is undefined");
        }

        if(this.objectAnimationCurrent != null) { // animated
            screenContext.drawImage(this.objectImage,
                this.objectAnimationOffsetX, this.objectAnimationOffsetY,
                this.objectAnimationSpriteWidth,this.objectAnimationSpriteHeight,
                -this.objectCenterX, -this.objectCenterY,
                this.objectSizeX * this.objectAnimationSpriteWidth,
                this.objectSizeY * this.objectAnimationSpriteHeight);


            //screenContext.fillStyle = "rgba(255,255,255,0.5)";
            //screenContext.font = "12px calibri";
            //screenContext.fillText("*" + this.objectAnimationCurrent.animationId, -this.objectCenterX, -this.objectCenterY);

        } else { // non animated
            screenContext.drawImage(this.objectImage, -this.objectCenterX, -this.objectCenterY,
                this.objectSizeX * this.objectImage.width,
                this.objectSizeY * this.objectImage.height);

            //screenContext.fillStyle = "rgba(255,255,255,0.5)";
            //screenContext.font = "12px calibri";
            //screenContext.fillText("[" + this.objectId + "] - " + this.objectType, -this.objectCenterX, -this.objectCenterY);
        }
    }

    matrixMultiply(a,b) {

    }
}


class classAnimation {
    constructor(data) {
        if(data === undefined) {
            this.animationId = "";
            this.animationOffsetX = 0;
            this.animationOffsetY = 0;
            this.animationLength = 0;
            this.animationTimeout = 0;
        } else {
            this.animationId = data[0];
            this.animationOffsetX = data[1];
            this.animationOffsetY = data[2];
            this.animationLength = data[3];
            this.animationTimeout = data[4];
        }
    }
}


class classDoor {
    constructor(data) {
        if(data === undefined) {
            this.doorId = "";
            this.locationDst = null;
            this.locationX = 0;
            this.locationY = 0;
        } else {
            this.doorId = data[0];
            this.locationDst = data[1];
            this.locationX = data[2];
            this.locationY = data[3];
        }
    }
}


class classInteractiveObject {
    constructor(data) {
        if(data === undefined) {
            this.interactiveId = "";
        } else {
            this.interactiveId = "";//data[0];
        }
    }
}


class classScene {
    constructor() {
        this.sceneId = "";
        this.borderLeft = 0;
        this.borderRight = 0;
        this.objectArray = [];
        this.doorArray = [];
        //this.interactiveArray = [];
    }

    objectAdd(object) {
        this.objectArray.push(object);
    }

    objectGet(id) {
        for(let iObject = 0; iObject < this.objectArray.length; iObject++) {
            //console.log(this.objectArray[iObject].objectId + " | " + id);
            if(this.objectArray[iObject].objectId === id) {return this.objectArray[iObject];}
        }
    }

    doorGet(id) {
        for(let iObject = 0; iObject < this.doorArray.length; iObject++) {
            if(this.doorArray[iObject].doorId === id) {return this.doorArray[iObject];}
        }
    }

    //interactiveGet(id) {
    //    for(let iObject = 0; iObject < this.interactiveArray.length; iObject++) {
    //        if(this.interactiveArray[iObject].interactiveId === id) {return this.interactiveArray[iObject];}
    //    }
    //}

    sceneLoad(data) {
        let thisScene = this;
        let sceneDesc = data[0];

        thisScene.sceneId = sceneDesc[0];
        thisScene.borderLeft = sceneDesc[1];
        thisScene.borderRight = sceneDesc[2];

        for(let iSceneObject = 1; iSceneObject<data.length; iSceneObject++) {
            //console.log(item[1]);

            thisScene.objectArray.push(new classSceneObject(data[iSceneObject]));

            switch (data[iSceneObject][1]) {
                case "static":
                    break;
                case "door":
                    thisScene.doorArray.push(new classDoor(data[iSceneObject][22]));
                    break;
                //case "interactive":
                //    thisScene.interactiveArray.push(new classInteractiveObject(data[iSceneObject][22]));
                //    break;
            }
        }
    }

    sceneDraw() {

        updateCars();

        this.objectArray.forEach(function(item, i, arr) {
            item.objectUpdate();

            if(item === charNaoki) {
                if(charNaoki.objectPositionX <= currentScene.borderLeft) {
                    charNaoki.objectPositionX = currentScene.borderLeft;
                    if(charNaokiAnim === 3) {
                        charNaokiAnim = 1;
                        charNaoki.objectAnimationCurrent = charNaoki.objectAnimationList[charNaokiAnim];
                        charNaoki.objectAnimationUpd = true;
                        charNaoki.objectVectorMovement[0] = 0;
                    }
                } else if(charNaoki.objectPositionX >= currentScene.borderRight) {
                    charNaoki.objectPositionX = currentScene.borderRight;
                    if(charNaokiAnim === 2) {
                        charNaokiAnim = 0;
                        charNaoki.objectAnimationCurrent = charNaoki.objectAnimationList[charNaokiAnim];
                        charNaoki.objectAnimationUpd = true;
                        charNaoki.objectVectorMovement[0] = 0;
                    }
                }
            }

            item.objectDraw();
        });



        this.doorArray.forEach(function(item, i, arr) {
            //item.objectUpdate();
            //item.objectDraw();
        });
    }
}


class classInventoryObject {
    constructor(data) {
        if(data === undefined) {
            this.objectId = null;
            this.objectImgPath = "";
            this.objectImg = null;
        }
        else {
            this.objectId = data[0];
            this.objectImgPath = data[1];
            this.objectImg = data[2];
        }
    }
}


class classInventory {
    constructor() {
        this.objectArray = [];
    }

    objectAdd(object) {
        this.objectArray.push(object);
    }

    objectGet(id) {
        for(let iObject = 0; iObject < this.objectArray.length; iObject++) {
            if(this.objectArray[iObject].objectId === id) {return this.objectArray[iObject];}
        }
    }

    objectErase(id) {
        let optid = 0;

        for(let iDia = 0; iDia < this.objectArray.length; iDia++)
            if(this.objectArray[iDia].objectId === id)
                optid = iDia;

        this.objectArray.splice(optid,1);
    }

    inventoryDraw() {
        screenContext.setTransform(1, 0, 0, 1, 0, 0);

        let Xoffset = 10;
        this.objectArray.forEach(function(item, i, arr) {
            screenContext.drawImage(item.objectImg, Xoffset, 10, 91, 85);
            Xoffset = Xoffset + 10 + 91;
        });
    }
}


class classMenuButton {
    constructor () {
        this.buttonImage = null;
        this.buttonAnimation = null;
    }
}


class classMenu {
    constructor() {
        this.menuBG = null;
        this.menuLogo = null;
        this.menuGirl = null;
        this.menuList = null;
    }
}


function dataGetFromArray(array, id) {
    for(let iDataObject = 0; iDataObject < array.length; iDataObject++) {
        //console.log(array[iDataObject][0] + " | " + id);
        if(array[iDataObject][0] === id) {return array[iDataObject];}
    }
}


function initScreen() {
    screenContext = jsScreen.getContext("2d");

    screenContext.imageSmoothingEnabled = false;
    screenContext.imageSmoothingQuality = "low";

    let mouseRightIsActive = false;

    jsScreen.style.cursor = "default";

    jsScreen.onmousemove = function(e) {
        let mousePosXEvStart = userView.mousePosX;
        let mousePosYEvStart = userView.mousePosY;
        userView.mousePosX = e.clientX;
        userView.mousePosY = e.clientY;

        if(hoverObj != null) jsScreen.style.cursor = "pointer";
        else jsScreen.style.cursor = "default";

        //if(mouseRightIsActive) {
        //    jsScreen.style.cursor = "grabbing";
        //    //console.log("m calc : " + cameraXPos + " = - (" + mousePosX + " - " + mousePosXEvStart + ")");
        //    userView.cameraXPos -= (userView.mousePosX - mousePosXEvStart) / userView.cameraZoom;
        //    userView.cameraYPos -= (userView.mousePosY - mousePosYEvStart) / userView.cameraZoom;
        //}
    };

    jsScreen.onmousedown = function(e) {
        if(isDialogueDisplayed === true) {

        } else {
            if(e.which === 1) {

            } else if(e.which === 3) {
                mouseRightIsActive = true;
            }
        }
    };

    jsScreen.onmouseup = function(e) {
        jsScreen.style.cursor = "default";
        if(isMenuDisplayed) {
            let bgScale = 0;

            let scrW = jsScreen.width;
            let scrH = jsScreen.height;

            if(userView.mousePosX > 125 && userView.mousePosX < 325 &&
                userView.mousePosY > scrH/3 && userView.mousePosY < scrH/3+64) {
                if(isMainMenu === true) showStartingClip();
                else isMenuDisplayed = false;
            }


        } else if(isDialogueDisplayed === true) {
            if (e.which === 1) {
                charNaoki.objectVectorMovement[0] = 0;
                if(charNaokiAnim === 3) {
                    charNaokiAnim = 1;
                    charNaoki.objectAnimationCurrent = charNaoki.objectAnimationList[charNaokiAnim];
                    charNaoki.objectAnimationUpd = true;
                } else if(charNaokiAnim === 2) {
                    charNaokiAnim = 0;
                    charNaoki.objectAnimationCurrent = charNaoki.objectAnimationList[charNaokiAnim];
                    charNaoki.objectAnimationUpd = true;
                }
                interactDialogue(userView.mousePosX, userView.mousePosY);
            }
        } else {
            if (e.which === 1) {
                if (hoverObj != null) {
                    charNaoki.objectVectorMovement[0] = 0;
                    if(charNaokiAnim === 3) {
                        charNaokiAnim = 1;
                        charNaoki.objectAnimationCurrent = charNaoki.objectAnimationList[charNaokiAnim];
                        charNaoki.objectAnimationUpd = true;
                    } else if(charNaokiAnim === 2) {
                        charNaokiAnim = 0;
                        charNaoki.objectAnimationCurrent = charNaoki.objectAnimationList[charNaokiAnim];
                        charNaoki.objectAnimationUpd = true;
                    }
                    interactWith(hoverObj, "");
                    hoverObj = null;
                }
            }
            if (e.which === 3) {
                //console.log("m up");
                mouseRightIsActive = false;
            }
        }

    };

    jsScreen.onwheel = function(e) {
        e.preventDefault();

        //if(isDialogueDisplayed === true) {

        //} else {
            //userView.cameraZoom *= e.deltaY < 0 ? 1.25 : 0.75;

        //    if(userView.cameraZoom < 0.25) userView.cameraZoom = 0.25;
        //    if(userView.cameraZoom > 5) userView.cameraZoom = 5;
        //}
    };

    jsScreen.onmouseleave = function(e) {
        mouseRightIsActive = false;

        jsScreen.style.cursor = "default";
    };

    jsScreen.addEventListener("contextmenu", function(e) {
        e.preventDefault();
    }, false);


    window.onkeydown = function(e) {
        //e.preventDefault();
        //console.log(e.code);
        switch(e.code) {
            case "KeyA":
                if(charNaoki.objectPositionX > currentScene.borderLeft) {
                    charNaokiAnim = 3;
                    charNaoki.objectAnimationCurrent = charNaoki.objectAnimationList[charNaokiAnim];
                    charNaoki.objectVectorMovement[0] = -0.57 * charNaoki.objectScale * displayTimeout;
                    if (!e.repeat) {
                        charNaoki.objectAnimationUpd = true;
                    }
                } break;
            case "KeyD":
                if(charNaoki.objectPositionX < currentScene.borderRight) {
                    charNaokiAnim = 2;
                    charNaoki.objectAnimationCurrent = charNaoki.objectAnimationList[charNaokiAnim];
                    charNaoki.objectVectorMovement[0] = 0.57 * charNaoki.objectScale * displayTimeout;
                    if(!e.repeat) {
                        charNaoki.objectAnimationUpd = true;
                    }
                } break;
            default:break;
        }
    };


    window.onkeyup = function(e) {
        //e.preventDefault();
        //console.log(e.code);


        if(isPreloaderDisplayed === true) {

        } else if(isDialogueDisplayed === true) {

        } else if(isMenuDisplayed === true && isMainMenu === false) {
            switch(e.code) {
                case "Escape":
                    isMenuDisplayed = false;
                    charNaoki.objectVectorMovement[0] = 0;
                    if(charNaokiAnim === 3) {
                        charNaokiAnim = 1;
                        charNaoki.objectAnimationCurrent = charNaoki.objectAnimationList[charNaokiAnim];
                        charNaoki.objectAnimationUpd = true;
                    } else if(charNaokiAnim === 2) {
                        charNaokiAnim = 0;
                        charNaoki.objectAnimationCurrent = charNaoki.objectAnimationList[charNaokiAnim];
                        charNaoki.objectAnimationUpd = true;
                    }
                    break;
                default:break;
            }
        } else {
            switch(e.code) {
                case "Escape":
                    isMenuDisplayed = true;
                    charNaoki.objectVectorMovement[0] = 0;
                    if(charNaokiAnim === 3) {
                        charNaokiAnim = 1;
                        charNaoki.objectAnimationCurrent = charNaoki.objectAnimationList[charNaokiAnim];
                        charNaoki.objectAnimationUpd = true;
                    } else if(charNaokiAnim === 2) {
                        charNaokiAnim = 0;
                        charNaoki.objectAnimationCurrent = charNaoki.objectAnimationList[charNaokiAnim];
                        charNaoki.objectAnimationUpd = true;
                    }
                    break;
                case "KeyA":
                    if(charNaokiAnim === 3) {
                        charNaokiAnim = 1;
                        charNaoki.objectAnimationCurrent = charNaoki.objectAnimationList[charNaokiAnim];
                        charNaoki.objectAnimationUpd = true;
                        charNaoki.objectVectorMovement[0] = 0;
                    }
                    break;
                case "KeyD":
                    if(charNaokiAnim === 2) {
                        charNaokiAnim = 0;
                        charNaoki.objectAnimationCurrent = charNaoki.objectAnimationList[charNaokiAnim];
                        charNaoki.objectAnimationUpd = true;
                        charNaoki.objectVectorMovement[0] = 0;
                    }
                    break;
                default:break;
            }
        }



    };


    timeStart = Date.now();
    //clearInterval(displayTimer);
    displayTimer = window.setInterval(gameChain, displayTimeout);
    resizeScreen();
}


function resizeScreen() {
    let jsScreenSize = jsScreen.getBoundingClientRect();
    //console.log("Container size: " + jsScreenSize.width + "; " + jsScreenSize.height);

    jsScreen.width = jsScreenSize.width;
    jsScreen.height = jsScreenSize.height;
}


function resourceOnLoad(e) {
    loaderNumOfItems++;
    preloaderStatus = "Загрузка... " + (loaderNumOfItems / loaderMaxItems * 100 | 0) + "%";
    drawCall();
    if(loaderNumOfItems === loaderMaxItems) {
        isPreloaderDisplayed = false;
    }
}


function preloaderOnLoad(e) {
// loading data
    dataImageList.forEach(function(item, i, arr) {
        loaderMaxItems++;
        console.log("  loading " + item[1] + " as " + item[0]);
        item[2] = new Image();
        item[2].onload = resourceOnLoad;
        item[2].src = localDataPath+item[1];
    });

    //let snd = new classSound(dataSoundList[0][1]);
    //snd.play();

    dataSoundList.forEach(function(item, i, arr) {
        console.log("  loading " + item[1] + " as " + item[0]);
        item[2] = new Audio();
        item[2].src = localDataPath+item[1];
        item[2].loop = true;
    });

    userView = new classUserView();
    //props = new classProps();
    currentScene = null;
    sceneList = [];
    dialogueList = [];
    inventory = new classInventory();

    // scenes
    //props.propsLoad( dataProps_ff_n );

    for(let sceneNumber = 0; sceneNumber < 7; sceneNumber++)
        sceneList.push(new classScene());

    sceneList[0].sceneLoad(description_Scene_00);
    sceneList[1].sceneLoad(description_Scene_01);
    sceneList[2].sceneLoad(description_Scene_02);
    sceneList[3].sceneLoad(description_Scene_03);
    sceneList[4].sceneLoad(description_Scene_04);
    sceneList[5].sceneLoad(description_Scene_05);
    sceneList[6].sceneLoad(description_Scene_06);

    for(let diaNumber = 0; diaNumber < dataDialogue.length; diaNumber++)
        dialogueList.push(new classDialogue(dataDialogue[diaNumber]));

    // menu
    menuMain = new classMenu();

    // getting objects
    imgBackground = dataGetFromArray(dataImageList, "bg-grid") [2];

    menuMain.menuBG = dataGetFromArray(dataImageList, "m-background") [2];
    menuMain.menuGirl = dataGetFromArray(dataImageList, "m-girl") [2];
    menuMain.menuLogo = dataGetFromArray(dataImageList, "m-logo") [2];
    menuMain.menuList = dataGetFromArray(dataImageList, "m-text") [2];
    dialogueImage = dataGetFromArray(dataImageList, "m-dialogue") [2];
    katanaImage = dataGetFromArray(dataImageList, "plakat-prestupnika") [2];

}


function drawCall() {
    timeElapsed = Date.now() - timeStart;
    let screenRatio = jsScreen.width / jsScreen.height;

    if(screenRatio < 1.75) {
        let textOffset = 0;
        let textScale = 0;

        screenContext.setTransform(1, 0, 0, 1, 0, 0);
        screenContext.fillStyle = "black";
        screenContext.fillRect(0, 0, jsScreen.width, jsScreen.height);

        if(screenRatio < 1) {
            let radrot = (-90)*Math.PI/180;
            textScale = jsScreen.height/1024;
            screenContext.transform(Math.cos(radrot), -Math.sin(radrot), Math.sin(radrot), Math.cos(radrot), 0, 0); // rotate
            textOffset = -160;
        } else {
            textScale = jsScreen.width/1024;
        }

        screenContext.transform(textScale, 0, 0, textScale, 0, 0);

        screenContext.fillStyle = "white";

        screenContext.font = "128px calibri";
        screenContext.fillText(":(",0,textOffset+128);

        screenContext.font = "48px calibri";
        screenContext.fillText("Device screen ratio is not supported.",80,textOffset+80);
        screenContext.fillText("We're sorry.",80,textOffset+140);
    } else {
        if(isPreloaderDisplayed === true) {
            screenContext.setTransform(1, 0, 0, 1, 0, 0);
            let bgScale = 0;

            let scrW = jsScreen.width;
            let scrH = jsScreen.height;

            let imgRatio = preloader.width / preloader.height;
            let screenRatio = scrW / scrH;


            if(screenRatio <= imgRatio) {
                bgScale = scrH / preloader.height;
            } else {
                bgScale = scrW / preloader.width;
            }


            let bgW = preloader.width*bgScale;
            let bgH = preloader.height*bgScale;

            let bgX = (scrW-bgW) / 2;
            let bgY = (scrH-bgH) / 2;

            screenContext.drawImage(preloader, bgX, bgY, bgW, bgH);
            screenContext.fillStyle = "white";
            screenContext.font = "48px calibri";
            screenContext.fillText(preloaderStatus,jsScreen.width/2,jsScreen.height-80);
        } else if(isDialogueDisplayed === true) {
            screenContext.setTransform(1, 0, 0, 1, 0, 0);

            let diaX = jsScreen.width / 2 - dialogueImage.width / 2;
            let diaY = jsScreen.height - dialogueImage.height - 25;

            if( dialogueImageDrawn === false ) {
                dialogueImageDrawn = true;
                screenContext.drawImage(dialogueImage, diaX, diaY);
            }

            dialogueDraw(diaX, diaY);

        } else if(isMenuDisplayed === true) {
                userView.drawMenu();
        } else {
            userView.calcOffset();
            //userView.drawBackground();

            screenContext.setTransform(1, 0, 0, 1, 0, 0);
            screenContext.fillStyle = "black";
            screenContext.fillRect(0, 0, jsScreen.width, jsScreen.height);
            currentScene.sceneDraw();


            inventory.inventoryDraw();

            //props.propsDraw();

            //userView.cameraTransform();
            //screenContext.fillStyle = "white";
            //screenContext.fillRect(userView.mouseInScenePosX-5,
            //    userView.mouseInScenePosY-5, 10, 10);
        }
    }

    //let timeEndDraw = Date.now();
    //console.log("draw call : " + (timeEnd - timeStart) + "ms");
}


function openDialogue(diaId) {
    currentDialogueId = diaId;

    currentDialogue = null;

    for(let iDia = 0; iDia < dialogueList.length; iDia++)
        if(dialogueList[iDia].dialogueId === currentDialogueId)
            currentDialogue = dialogueList[iDia];

    if(isDialogueDisplayed != true) {
        dialogueImageDrawn = false;
        isDialogueDisplayed = true;
    }
}


function dialogueDraw(diaX, diaY) {
    screenContext.fillStyle = "black";
    screenContext.fillRect(diaX + 23, diaY + 23, 493, 36);
    screenContext.fillRect(diaX + 23, diaY + 72, 493, 105);

    screenContext.fillStyle = "rgba(200,200,200,1)";
    screenContext.font = "24px century gothic";
    screenContext.fillText(currentDialogue.dialoguePerson, diaX + 185, diaY + 48);
    screenContext.font = "14px century gothic";

    let diaText = currentDialogue.dialogueText.split('\n');
    let diaTxtOffset = diaY*1 + 90;

    let diaTextI = 0;
    for(; diaTextI < diaText.length; diaTextI++) {
        screenContext.fillText(diaText[diaTextI], diaX + 28, diaTxtOffset);
        diaTxtOffset = diaTxtOffset + 14;
    }

    diaTxtOffset = diaTxtOffset + 10;

    let diaOptI = 0;
    if(currentDialogue.dialogueOptions != null) for(; diaOptI < currentDialogue.dialogueOptions.length; diaOptI++) {
        if(userView.mousePosX > diaX + 23 && userView.mousePosX < diaX + 516 && userView.mousePosY < diaTxtOffset && userView.mousePosY > diaTxtOffset - 14)
            screenContext.fillStyle = "rgba(255,255,255,1)";
        else
            screenContext.fillStyle = "rgb(220,161,183)";

        screenContext.fillText(currentDialogue.dialogueOptions[diaOptI].optionText, diaX + 28, diaTxtOffset);
        currentDialogue.dialogueOptions[diaOptI].optionTop = diaTxtOffset;
        currentDialogue.dialogueOptions[diaOptI].optionLeft = diaX + 23;
        currentDialogue.dialogueOptions[diaOptI].optionWidth = 493;
        currentDialogue.dialogueOptions[diaOptI].optionHeight = 15;

        diaTxtOffset = diaTxtOffset + 14;
        if(diaOptI === 4) break;
    }
}


function updateCars() {

}


function interactWith(object, comment) {
    let objDst = (object.objectPositionX + object.objectHoverX + object.objectHoverW/2) - charNaoki.objectPositionX;
    if(objDst < 0) objDst = objDst * -1;
    if(objDst > 300) return;

    // door entering event
    if(object.objectType === "door") {
        let currentDoor = currentScene.doorGet(object.objectId);

        for(let iScene = 0; iScene < sceneList.length; iScene++) {
            //console.log(this.objectArray[iObject].objectId + " | " + id);
            if(sceneList[iScene].sceneId === currentDoor.locationDst) {
                currentSound.pause();
                //currentSound.currentTime = 0;
                currentSound = dataGetFromArray(dataSoundList, currentDoor.locationDst) [2];
                currentSound.play();
                currentScene = sceneList[iScene];
                let charNaokiLast = charNaoki;

                charNaokiLast.objectVectorMovement[0] = 0;

                if(charNaokiAnim === 3) {
                    charNaokiAnim = 1;
                    charNaokiLast.objectAnimationCurrent = charNaokiLast.objectAnimationList[charNaokiAnim];
                    charNaokiLast.objectAnimationUpd = true;
                } else if(charNaokiAnim === 2) {
                    charNaokiAnim = 0;
                    charNaokiLast.objectAnimationCurrent = charNaokiLast.objectAnimationList[charNaokiAnim];
                    charNaokiLast.objectAnimationUpd = true;
                }

                charNaoki = currentScene.objectGet("naoki");

                charNaoki.objectAnimationUpd = charNaokiLast.objectAnimationUpd;
                charNaoki.objectAnimationCurrent = charNaokiLast.objectAnimationCurrent;

                charNaoki.objectPositionX = currentDoor.locationX;
                charNaoki.objectPositionY = currentDoor.locationY;}
        }
    }

    let obj_s = null;
    let obj_h = null;

    //console.log("you touched " + object.objectId);
    switch (object.objectId) {
        case "loc-00-hooker-h":
            //console.log("naoki_have_nark " + naoki_have_nark);
            if(naoki_have_nark === true) {
                obj_h = currentScene.objectGet("loc-00-hooker-h");
                obj_h.objectActive = false;
                obj_h.objectVisible = false;
                naoki_have_amulet = true;
                inventory.objectErase("nark");
                openDialogue("dia-02");
            } else {
                obj_h = currentScene.objectGet("loc-00-hooker-h");
                obj_h.objectActive = false;
                obj_h.objectVisible = false;
                openDialogue("dia-00");
            }
            break;
        case "loc-00-syringes-h":
            obj_s = currentScene.objectGet("loc-00-syringes");
            obj_h = currentScene.objectGet("loc-00-syringes-h");
            obj_s.objectVisible = false;
            obj_s.objectActive = false;
            obj_h.objectVisible = false;
            obj_h.objectActive = false;
            openDialogue("dia-f1");
            naoki_have_syringes = true;
            break;
        case "loc-00-paper-h":
            obj_s = currentScene.objectGet("loc-00-paper");
            obj_h = currentScene.objectGet("loc-00-paper-h");
            obj_s.objectVisible = false;
            obj_s.objectActive = false;
            obj_h.objectVisible = false;
            obj_h.objectActive = false;

            let diaX = jsScreen.width / 2 - dialogueImage.width / 2;
            let diaY = 25;

            screenContext.setTransform(1, 0, 0, 1, 0, 0);
            screenContext.drawImage(katanaImage, diaX+90, diaY, 350, 425);

            openDialogue("dia-30");
            break;
        case "loc-00-stripes-h":
            obj_h = currentScene.objectGet("loc-00-stripes-h");
            obj_h.objectVisible = false;
            obj_h.objectActive = false;
            openDialogue("dia-20");
            break;
        case "door-00-01-h":
            if (loc_01_is_visited === false) {
                loc_01_is_visited = true;
                drawCall();
                openDialogue("dia-40");}
            break;
        case "loc-01-car-h":
            if(naoki_have_syringes === true && naoki_have_clip === true) {
                obj_h = currentScene.objectGet("loc-01-car-h");
                obj_h.objectVisible = false;
                obj_h.objectActive = false;
                obj_h = sceneList[0].objectGet("loc-00-hooker-h");
                obj_h.objectVisible = false;
                obj_h.objectActive = true;
                naoki_have_nark = true;
                //console.log("naoki_have_nark" + naoki_have_nark);
                inventory.objectErase("syringes");
                inventory.objectErase("clip");
                openDialogue("dia-f3");
            }
            else {
                openDialogue("dia-50");
            }
            break;

        case "loc-02-homeless-h":
            obj_h = currentScene.objectGet("loc-02-homeless-h");
            obj_h.objectVisible = false;
            obj_h.objectActive = false;
            openDialogue("dia-70");
            break;

        case "loc-02-guard-h":
            if(naoki_talk_ab_yoshi === true) {
                openDialogue("dia-62");
            } else if(naoki_have_amulet === true) {
                obj_h = currentScene.objectGet("loc-02-guard-h");
                obj_h.objectVisible = false;
                obj_h.objectActive = false;

                obj_h = currentScene.objectGet("loc-02-door-h");
                obj_h.objectActive = true;
                inventory.objectErase("amulet");
                openDialogue("dia-61");
            } else {
                openDialogue("dia-60");
            }
            break;
        case "loc-03-vip-h": openDialogue("dia-51"); break;
        case "loc-03-barmen-h":
            if(naoki_talked_to_barmen === true) openDialogue("dia-82");
            else openDialogue("dia-80");
            break;

        case "loc-04-katana-guy-h":
            openDialogue("dia-90");
            break;

        case "loc-04-closed-door-h":
            openDialogue("dia-a0");
            break;

        case "loc-05-door-h":
            if(naoki_saw_door === true) ;
            else {
                openDialogue("dia-a1");
                naoki_saw_door = true;
            }
            break;

        case "loc-06-computer-h":
            openDialogue("dia-ff");
            break;
    }
}


function getRidOfOption(diaId, option) {
    let dia = null;
    let optid = 0;

    for(let iDia = 0; iDia < dialogueList.length; iDia++)
        if(dialogueList[iDia].dialogueId === diaId)
            dia = dialogueList[iDia];

    if(dia === null) return;

    for(let iDia = 0; iDia < dia.dialogueOptions.length; iDia++)
        if(dia.dialogueOptions[iDia].optionTarget === option)
            optid = iDia;

    dia.dialogueOptions.splice(optid,1);
}


function interactDialogue(mouX, mouY) {
    let diaOptI = 0;
    let currentOption = null;

    for(; diaOptI < currentDialogue.dialogueOptions.length; diaOptI++) {
        if( mouX > currentDialogue.dialogueOptions[diaOptI].optionLeft &&
            mouX < currentDialogue.dialogueOptions[diaOptI].optionWidth + currentDialogue.dialogueOptions[diaOptI].optionLeft &&
            mouY < currentDialogue.dialogueOptions[diaOptI].optionTop &&
            mouY > currentDialogue.dialogueOptions[diaOptI].optionTop - currentDialogue.dialogueOptions[diaOptI].optionHeight)
            currentOption = currentDialogue.dialogueOptions[diaOptI];
    }

    let obj = null;

    if(currentOption === null) return;
    switch(currentOption.optionTarget) {
        case "to-dia-f2": openDialogue("dia-f2"); break;
        case "to-dia-f4": openDialogue("dia-f4"); break;
        case "to-dia-f5": openDialogue("dia-f5"); break;
        case "to-dia-01": openDialogue("dia-01"); break;
        case "to-dia-71": openDialogue("dia-71"); break;
        case "to-dia-72": openDialogue("dia-72"); break;
        case "to-dia-73": openDialogue("dia-73"); break;
        case "to-dia-74": openDialogue("dia-74"); break;
        case "to-dia-75": openDialogue("dia-75"); naoki_have_clip = true; break;

        case "to-dia-81": openDialogue("dia-81");break;
        case "to-dia-83": openDialogue("dia-83"); getRidOfOption("dia-82", "to-dia-83"); naoki_talk_ab_stripes = true; break;
        case "to-dia-84": openDialogue("dia-84"); getRidOfOption("dia-82", "to-dia-84"); naoki_talk_ab_job = true; break;
        case "to-dia-85": openDialogue("dia-85"); getRidOfOption("dia-82", "to-dia-85"); naoki_talk_ab_bar = true; break;
        case "to-dia-86": openDialogue("dia-86");
            getRidOfOption("dia-82", "to-dia-86");
            naoki_talk_ab_yoshi = true;
            obj = sceneList[2].objectGet("loc-02-guard-h");
            obj.objectActive = true;
            break;
        case "to-dia-87": openDialogue("dia-87"); getRidOfOption("dia-82", "to-dia-87");  naoki_talk_ab_katana = true; break;
        case "to-dia-82":
            if( naoki_talk_ab_stripes === true &&
                naoki_talk_ab_job === true &&
                naoki_talk_ab_bar === true &&
                naoki_talk_ab_yoshi === true &&
                naoki_talk_ab_katana === true)
            {
                isDialogueDisplayed = false;
                obj = currentScene.objectGet("loc-03-barmen-h");
                obj.objectVisible = false;
                obj.objectActive = false;
            }
            else openDialogue("dia-82");
            break;

        case "to-dia-63": openDialogue("dia-63"); break;
        case "guard-dia-end":
            obj = sceneList[2].objectGet("loc-02-guard-h");
            obj.objectActive = false;
            obj.objectVisible = false;
            isDialogueDisplayed = false;
            obj = sceneList[0].objectGet("door-00-04");
            obj.objectVisible = true;
            obj.objectActive = true;
            obj = sceneList[0].objectGet("door-00-04-h");
            obj.objectVisible = false;
            obj.objectActive = true;
            break;

        case "to-dia-91": openDialogue("dia-91");break;
        case "to-dia-92": openDialogue("dia-92");break;
        case "to-dia-93": openDialogue("dia-93");break;
        case "to-dia-94": openDialogue("dia-94");break;
        case "to-dia-95": openDialogue("dia-95");break;
        case "to-dia-96": openDialogue("dia-96");break;
        case "to-dia-97": openDialogue("dia-97");break;
        case "to-dia-98": openDialogue("dia-98");break;
        case "to-dia-99": openDialogue("dia-99");break;
        case "to-dia-9a": openDialogue("dia-9a");break;
        case "katana-dia-end":
            obj = currentScene.objectGet("loc-04-katana-guy-h");
            obj.objectActive = false;
            obj.objectVisible = false;
            isDialogueDisplayed = false;
            obj = currentScene.objectGet("door-04-05");
            obj.objectVisible = true;
            obj.objectActive = true;
            obj = currentScene.objectGet("door-04-05-h");
            obj.objectVisible = false;
            obj.objectActive = true;
            break;

        case "dia-f1-get": inventory.objectAdd( new classInventoryObject(dataGetFromArray(dataImageList,"syringes"))); isDialogueDisplayed = false; break;
        case "dia-f2-get": inventory.objectAdd( new classInventoryObject(dataGetFromArray(dataImageList,"katana"))); isDialogueDisplayed = false; break;
        case "dia-f3-get": inventory.objectAdd( new classInventoryObject(dataGetFromArray(dataImageList,"nark"))); isDialogueDisplayed = false; break;
        case "dia-f4-get": inventory.objectAdd( new classInventoryObject(dataGetFromArray(dataImageList,"amulet"))); isDialogueDisplayed = false; break;
        case "dia-f5-get": inventory.objectAdd( new classInventoryObject(dataGetFromArray(dataImageList,"clip"))); isDialogueDisplayed = false; break;

        case "the-end": isDialogueDisplayed = false; showEndingClip(); break;
        default: isDialogueDisplayed = false; break;
    }
}


function showStartingClip() {
    jsVideo.style.display = "block";
    jsScreen.style.display = "none";
    isMenuDisplayed = false;
    isMainMenu = false;
    displayingVideo = true;
    jsVideo.src = localDataPath+"vid/example.mp4";
    jsVideo.onended = startGame;
    jsVideo.play();
}


function startGame() {
    displayingVideo = false;
    jsVideo.style.display = "none";
    jsScreen.style.display = "block";
    currentSound = dataGetFromArray(dataSoundList, "loc-00") [2];
    currentSound.play();
    currentScene = sceneList[0];
    charNaoki = currentScene.objectGet("naoki");
}


function showEndingClip() {
    jsVideo.style.display = "block";
    jsScreen.style.display = "none";
    displayingVideo = true;
    currentSound.pause();
    jsVideo.src = localDataPath+"vid/example.mp4";
    jsVideo.onended = endGame;
    jsVideo.play();
}


function endGame() {
    displayingVideo = false;
    currentSound.play();
    jsVideo.style.display = "none";
    jsScreen.style.display = "block";
}


function gameChain() {
    if(!displayingVideo) drawCall();
}


// when window onload fired then start to do stuff
window.onload = function(e) {
    jsScreen = document.getElementById("js-screen");
    jsVideo = document.getElementById("js-video");


    preloader = new Image();
    preloader.onload = preloaderOnLoad;
    preloader.src = localDataPath+"img/preloader(2).jpg";
    isPreloaderDisplayed = true;

    //show body
    document.body.style.display = "block";

    //init screen
    initScreen();
};


window.onresize = function(e) {
    resizeScreen();
    drawCall();
};

