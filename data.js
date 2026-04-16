const SECTIONS = [
    {
        id: 1,
        title: 'Механика',
        formulas: [
            // Кинематика
            { id: 1,  kim: 1, раздел: 'Кинематика', prompt: 'Скорость при равномерном движении.',                                                    image: 'mechanics/kinematics/1.png' },
            { id: 2,  kim: 1, раздел: 'Кинематика', prompt: 'Путь при равномерном движении.',                                                        image: 'mechanics/kinematics/2.png' },
            { id: 3,  kim: 1, раздел: 'Кинематика', prompt: 'Координата при равномерном движении. Закон движения.',                                   image: 'mechanics/kinematics/3.png' },
            { id: 4,  kim: 1, раздел: 'Кинематика', prompt: 'Скорость при равноускоренном движении.',                                                 image: 'mechanics/kinematics/4.png' },
            { id: 5,  kim: 1, раздел: 'Кинематика', prompt: 'Ускорение при равноускоренном движении.',                                                image: 'mechanics/kinematics/5.png' },
            { id: 6,  kim: 1, раздел: 'Кинематика', prompt: 'Средняя скорость при равноускоренном движении?',                                         image: 'mechanics/kinematics/6.png' },
            { id: 7,  kim: 1, раздел: 'Кинематика', prompt: 'Путь при равноускоренном движении.',                                                     image: 'mechanics/kinematics/7.png' },
            { id: 8,  kim: 1, раздел: 'Кинематика', prompt: 'Перемещение при равноускоренном движении.',                                              image: 'mechanics/kinematics/8.png' },
            { id: 9,  kim: 1, раздел: 'Кинематика', prompt: 'Координата при равноускоренном движении? Закон движения.',                               image: 'mechanics/kinematics/9.png' },
            { id: 10, kim: 1, раздел: 'Кинематика', prompt: 'Путь при равноускоренном движении. Через скорость и ускорение.',                         image: 'mechanics/kinematics/10.png' },
            { id: 11, kim: 1, раздел: 'Кинематика', prompt: 'Период движения по окружности.',                                                         image: 'mechanics/kinematics/11.png' },
            { id: 12, kim: 1, раздел: 'Кинематика', prompt: 'Частота.',                                                                               image: 'mechanics/kinematics/12.png' },
            { id: 13, kim: 1, раздел: 'Кинематика', prompt: 'Ускорение при движении по окружности.',                                                  image: 'mechanics/kinematics/13.png' },
            { id: 14, kim: 1, раздел: 'Кинематика', prompt: 'Угловая скорость при движении по окружности. Через период.',                             image: 'mechanics/kinematics/14.png' },
            { id: 15, kim: 1, раздел: 'Кинематика', prompt: 'Линейная скорость при движении по окружности. Через угловую скорость.',                  image: 'mechanics/kinematics/15.png' },
            // Динамика
            { id: 16, kim: 2, раздел: 'Динамика', prompt: 'Второй закон Ньютона.',                                                                    image: 'mechanics/dynamics/16.png' },
            { id: 17, kim: 2, раздел: 'Динамика', prompt: 'Сила упругости. Закон Гука.',                                                              image: 'mechanics/dynamics/17.png' },
            { id: 18, kim: 2, раздел: 'Динамика', prompt: 'Сила притяжения. Закон всемирного тяготения.',                                             image: 'mechanics/dynamics/18.png' },
            { id: 19, kim: 2, раздел: 'Динамика', prompt: 'Скорость спутника на орбите.',                                                             image: 'mechanics/dynamics/19.png' },
            { id: 20, kim: 2, раздел: 'Динамика', prompt: 'Период обращения спутника.',                                                               image: 'mechanics/dynamics/20.png' },
            { id: 21, kim: 2, раздел: 'Динамика', prompt: 'Сила реакции опоры. Нормаль.',                                                             image: 'mechanics/dynamics/21.png' },
            { id: 22, kim: 2, раздел: 'Динамика', prompt: 'Сила трения скольжения.',                                                                  image: 'mechanics/dynamics/22.png' },
            { id: 23, kim: 2, раздел: 'Динамика', prompt: 'Жёсткость системы двух параллельно соединённых пружин.',                                   image: 'mechanics/dynamics/23.png' },
            { id: 24, kim: 2, раздел: 'Динамика', prompt: 'Жёсткость системы двух последовательно соединённых пружин.',                               image: 'mechanics/dynamics/24.png' },
            // Законы сохранения
            { id: 25, kim: 3, раздел: 'Законы сохранения', prompt: 'Импульс тела.',                                                                   image: 'mechanics/conservationOfEnergy/25.png' },
            { id: 26, kim: 3, раздел: 'Законы сохранения', prompt: 'Закон сохранения импульса.',                                                      image: 'mechanics/conservationOfEnergy/26.png' },
            { id: 27, kim: 3, раздел: 'Законы сохранения', prompt: 'Импульс силы. Изменение импульса при влиянии силы.',                              image: 'mechanics/conservationOfEnergy/27.png' },
            { id: 28, kim: 3, раздел: 'Законы сохранения', prompt: 'Механическая работа. Общая формула.',                                             image: 'mechanics/conservationOfEnergy/28.png' },
            { id: 29, kim: 3, раздел: 'Законы сохранения', prompt: 'Мощность.',                                                                       image: 'mechanics/conservationOfEnergy/29.png' },
            { id: 30, kim: 3, раздел: 'Законы сохранения', prompt: 'Мощность при равномерном движении без ускорения.',                                image: 'mechanics/conservationOfEnergy/30.png' },
            { id: 31, kim: 3, раздел: 'Законы сохранения', prompt: 'Кинетическая энергия.',                                                           image: 'mechanics/conservationOfEnergy/31.png' },
            { id: 32, kim: 3, раздел: 'Законы сохранения', prompt: 'Изменение кинетической энергии за счёт работы.',                                  image: 'mechanics/conservationOfEnergy/32.png' },
            { id: 33, kim: 3, раздел: 'Законы сохранения', prompt: 'Потенциальная энергия тела на высоте.',                                           image: 'mechanics/conservationOfEnergy/33.png' },
            { id: 34, kim: 3, раздел: 'Законы сохранения', prompt: 'Потенциальная энергия деформированной пружины.',                                  image: 'mechanics/conservationOfEnergy/34.png' },
            { id: 35, kim: 3, раздел: 'Законы сохранения', prompt: 'Полная механическая энергия.',                                                    image: 'mechanics/conservationOfEnergy/35.png' },
            { id: 36, kim: 3, раздел: 'Законы сохранения', prompt: 'Закон сохранения полной механической энергии.',                                   image: 'mechanics/conservationOfEnergy/36.png' },
            // Статика
            { id: 37, kim: 4, раздел: 'Статика', prompt: 'Момент силы.',                                                                              image: 'mechanics/statics/37.png' },
            { id: 38, kim: 4, раздел: 'Статика', prompt: 'Условие равновесия рычага.',                                                                image: 'mechanics/statics/38.png' },
            { id: 39, kim: 4, раздел: 'Статика', prompt: 'Давление. Общая формула.',                                                                  image: 'mechanics/statics/39.png' },
            { id: 40, kim: 4, раздел: 'Статика', prompt: 'Давление водяного столба.',                                                                 image: 'mechanics/statics/40.png' },
            { id: 41, kim: 4, раздел: 'Статика', prompt: 'Сила Архимеда.',                                                                            image: 'mechanics/statics/41.png' },
            { id: 42, kim: 4, раздел: 'Статика', prompt: 'Условие плавания тела.',                                                                    image: 'mechanics/statics/42.png' },
        ]
    },
    {
        id: 2,
        title: 'Молекулярная физика',
        formulas: [
            { id: 43, title: 'Количество теплоты', prompt: 'Как найти количество теплоты при нагревании?', image: null },
            { id: 44, title: 'Плавление', prompt: 'Как определить теплоту плавления вещества?', image: null },
            { id: 45, title: 'Парообразование', prompt: 'Как вычислить теплоту парообразования жидкости?', image: null },
            { id: 46, title: 'Уравнение состояния газа', prompt: 'Как связаны давление, объём и температура газа?', image: null },
        ]
    },
    {
        id: 3,
        title: 'Электростатика',
        formulas: [
            { id: 47, title: 'Закон Кулона', prompt: 'Как найти силу взаимодействия двух зарядов?', image: null },
            { id: 48, title: 'Напряжённость поля', prompt: 'Как определить напряжённость электрического поля?', image: null },
            { id: 49, title: 'Потенциал', prompt: 'Чему равен потенциал точечного заряда?', image: null },
        ]
    },
    {
        id: 4,
        title: 'Электродинамика',
        formulas: [
            { id: 50, title: 'Закон Ома', prompt: 'Как связаны напряжение, ток и сопротивление?', image: null },
            { id: 51, title: 'Электрическая мощность', prompt: 'Как найти мощность участка цепи?', image: null },
            { id: 52, title: 'Работа тока', prompt: 'Как определить работу электрического тока за время t?', image: null },
        ]
    },
    {
        id: 5,
        title: 'Колебания и волны',
        formulas: [
            { id: 53, title: 'Период колебаний', prompt: 'Как связаны период и частота колебаний?', image: null },
            { id: 54, title: 'Математический маятник', prompt: 'Как найти период математического маятника?', image: null },
            { id: 55, title: 'Скорость волны', prompt: 'Как связаны скорость, длина волны и частота?', image: null },
        ]
    },
    {
        id: 6,
        title: 'Оптика',
        formulas: [
            { id: 56, title: 'Закон преломления', prompt: 'Как связаны углы падения и преломления?', image: null },
            { id: 57, title: 'Формула тонкой линзы', prompt: 'Как найти положение изображения в линзе?', image: null },
        ]
    },
    {
        id: 7,
        title: 'Теория относительности и квантовая физика',
        formulas: [
            { id: 58, title: 'Энергия фотона', prompt: 'Чему равна энергия фотона?', image: null },
            { id: 59, title: 'Формула Эйнштейна', prompt: 'Как связаны масса и энергия?', image: null },
            { id: 60, title: 'Длина волны де Бройля', prompt: 'Как найти длину волны частицы?', image: null },
        ]
    },
];