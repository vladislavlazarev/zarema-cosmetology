// Услуги и прайс — редактируется в одном месте.
// Прайс синхронизирован с PDF-листом. Где есть две цены, `price` — у врача,
// `priceMain` — у главного врача. Если `priceMain` не задан, цена общая.

// Each service id MUST match a PRICING group id below — that's how the
// service card opens the right accordion section.
export const SERVICES = [
  {
    id: 'lips',
    icon: 'needle',
    title: 'Контурная пластика',
    desc: 'Объём губ и моделирование подбородка — Stylage, Belotero, Juvederm, Neauvia. Естественный результат.',
    priceFrom: 18000,
  },
  {
    id: 'wrinkles',
    icon: 'drop',
    title: 'Бланширование морщин',
    desc: 'Тонкая работа с морщинами и кольцами Венеры — Belotero, Aliaxin, Regenyal, Viscoderm.',
    priceFrom: 18500,
  },
  {
    id: 'botox',
    icon: 'spark',
    title: 'Ботулинотерапия',
    desc: 'Релатокс, Ксеомин, Миотокс — расслабление мимики, лечение гипергидроза. Коррекция бесплатно.',
    priceFrom: 400,
  },
  {
    id: 'biorevital',
    icon: 'leaf',
    title: 'Биоревитализация и мезотерапия',
    desc: 'Revi, Filorga NCTF, Profhilo, Meso-Wharton, Citocare, Novacutan — увлажнение и обновление кожи.',
    priceFrom: 7500,
  },
  {
    id: 'plasma',
    icon: 'hand',
    title: 'Плазмотерапия и трихология',
    desc: 'Plasmolifting лица и головы, HairX, Pluryal Hair, Eldermafill — рост и плотность волос.',
    priceFrom: 5500,
  },
  {
    id: 'cleansing',
    icon: 'sun',
    title: 'Чистка, пилинги и аппаратная',
    desc: 'Комбинированная и дерматологическая чистка, Enerpeel, BioRe Peel, Dermapen, ФДТ.',
    priceFrom: 3000,
  },
];

export const PRICING = [
  {
    id: 'lips',
    group: 'Контурная пластика губ',
    items: [
      { name: 'Stylage M', desc: '1 мл', price: 22500, priceMain: 27000 },
      { name: 'Stylage S', desc: '0,8 мл', price: 20500, priceMain: 24500 },
      { name: 'Stylage Special Lips', desc: '1 мл', price: 22500, priceMain: 27000 },
      { name: 'Hydro Max — увлажнение губ', desc: '1 мл', price: 18000, priceMain: 23500 },
      { name: 'Belotero Lips Shape', desc: '0,6 мл', price: 20500, priceMain: 24500 },
      { name: 'Belotero Balance', desc: '1 мл', price: 22500, priceMain: 27000 },
      { name: 'Belotero Lips Contour', desc: '0,6 мл', price: 20500, priceMain: 24500 },
      { name: 'Juvederm Smile', desc: '0,55 мл', price: 22500, priceMain: 25000 },
      { name: 'Juvederm Ultra 3', desc: '1 мл', price: 25000, priceMain: 28000 },
      { name: 'Neauvia Intense Lips', desc: '1 мл', price: 22500, priceMain: 27000 },
      { name: 'Выведение филлера', price: 10000, priceMain: 15000 },
    ],
  },
  {
    id: 'chin',
    group: 'Контурная пластика подбородка',
    items: [
      { name: 'Stylage L', desc: '1 мл', price: 23500, priceMain: 27000 },
      { name: 'Neauvia Intense', desc: '1 мл', price: 22500, priceMain: 27000 },
      { name: 'Neauvia Intense LV', desc: '1 мл', price: 22500, priceMain: 27000 },
    ],
  },
  {
    id: 'wrinkles',
    group: 'Бланширование морщин и колец Венеры',
    items: [
      { name: 'Belotero Soft', desc: '1 мл', price: 21500 },
      { name: 'Belotero Balance', desc: '1 мл', price: 21500 },
      { name: 'Belotero Revive', desc: '1 мл', price: 20500 },
      { name: 'Aliaxin SR', desc: '1 мл', price: 20500 },
      { name: 'Regenyal Idea Bio-expander', desc: '1,1 мл', price: 18500 },
      { name: 'Viscoderm Hydrobooster', desc: '1,1 мл', price: 21500 },
    ],
  },
  {
    id: 'botox',
    group: 'Ботулинотерапия',
    items: [
      { name: 'Релатокс / Ксеомин / Миотокс', desc: 'цена за 1 единицу', price: 400 },
      { name: 'Full face', desc: 'коррекция бесплатная', price: 50000 },
      { name: 'Глаза + лоб + межбровье', desc: 'от 20.000 до 25.000 ₽ · коррекция бесплатная', price: 20000 },
      { name: 'Лоб + брови + межбровье + глаза + нос', desc: 'от 25.000 до 30.000 ₽ · коррекция бесплатная', price: 25000 },
      { name: 'Жевательные мышцы', desc: 'от 15.000 до 19.000 ₽', price: 15000 },
      { name: 'Лечение десневой (гингивальной) улыбки', price: 4000 },
      { name: 'Лечение гипергидроза', desc: 'повышенное потоотделение · от 25.000 до 30.000 ₽', price: 25000 },
      { name: 'Устранение гипертонуса круговой мышцы рта', price: 3500, priceMain: 5000 },
    ],
  },
  {
    id: 'biorevital',
    group: 'Биоревитализация и мезотерапия',
    items: [
      { name: 'Revi Eye', desc: '1 мл', price: 14000 },
      { name: 'Revi Style', desc: '1 мл / 2 мл — 14.000 / 17.500 ₽', price: 14000 },
      { name: 'Revi Silk', desc: '1 мл / 2 мл — 14.500 / 18.500 ₽', price: 14500 },
      { name: 'Revi Strong', desc: '1 мл / 2 мл — 15.000 / 20.500 ₽', price: 15000 },
      { name: 'Meso-Xanthin', desc: '1,5 мл', price: 20500 },
      { name: 'Meso-Wharton', desc: '1,5 мл', price: 20500 },
      { name: 'MesoEye', desc: '1 мл', price: 20500 },
      { name: 'Монако', desc: 'от 20.500 ₽', price: 20500 },
      { name: 'Profhilo', desc: '2 мл', price: 24500 },
      { name: 'Filorga NCTF 135 HA', desc: '3 мл', price: 13500 },
      { name: 'Welle Gold', desc: '2 мл', price: 22500 },
      { name: 'Novacutan SBio / Ybio', desc: '2 мл', price: 18500 },
      { name: 'Bioregen', desc: '1 мл', price: 12000 },
      { name: 'Ialsystem', desc: '1,1 мл', price: 14000 },
      { name: 'Ialest', desc: '2 мл', price: 17000 },
      { name: 'Stylage Hydro Max', desc: '1 мл', price: 19000 },
      { name: 'Atlantis Lift', desc: '2,2 мл', price: 17000 },
      { name: 'Atlantis Classic', desc: '2,2 мл', price: 17000 },
      { name: 'Plinest Fast', desc: '2 мл', price: 20500 },
      { name: 'Plinest', desc: '2 мл', price: 20500 },
      { name: 'Micro Collost', price: 22500 },
      { name: 'Micro Collost + NCTF', price: 30500 },
      { name: 'Collost 7%', desc: '1,5 мл', price: 21500 },
      { name: 'Citocare S Line', desc: '3 мл', price: 22500 },
      { name: 'Hyalrepair', desc: '8.000 — 13.500 ₽', price: 8000 },
      { name: 'Viscoderm Skinko / Skinko E', price: 9500 },
      { name: 'Pink Glow', price: 7500 },
      { name: 'Nucleoform', price: 22500 },
      { name: 'Препараты Veronica', desc: 'от 15.000 до 20.000 ₽', price: 15000 },
      { name: 'Neauvia Hydro Deluxe', desc: '2,5 мл', price: 19500 },
      { name: 'Novacutan Prima', desc: '2 мл', price: 22500 },
      { name: 'Novacutan Eye', desc: '2 мл', price: 21500 },
      { name: 'Novacutan Bio Pro', desc: '2 мл', price: 22500 },
      { name: 'Novacutan Master', desc: '2 мл', price: 22500 },
    ],
  },
  {
    id: 'plasma',
    group: 'Плазмотерапия лица и головы',
    items: [
      { name: 'Плазмотерапия лица Plasmolifting', desc: 'от', price: 5500 },
      { name: 'Плазмотерапия головы Plasmolifting', desc: 'от', price: 5500 },
    ],
  },
  {
    id: 'mesohair',
    group: 'Мезотерапия головы',
    items: [
      { name: 'HairX VitalineB+', price: 7500 },
      { name: 'Pluryal Hair', desc: '2,5 мл', price: 7500 },
      { name: 'HairX Peptide', price: 12000 },
      { name: 'Eldermafill Hair Forest', price: 8500 },
    ],
  },
  {
    id: 'cleansing',
    group: 'Чистка лица',
    items: [
      { name: 'Online / Offline консультация', price: 7000 },
      { name: 'Повторная консультация', price: 3000 },
      { name: 'Первичный приём', desc: 'консультация, подбор домашнего ухода + чистка', price: 10500 },
      { name: 'Первичный приём расширенный', desc: 'консультация, подбор ухода + чистка + пилинг', price: 12750 },
      { name: 'Комбинированная чистка', desc: 'распаривание и УЗ', price: 7500 },
      { name: 'Дерматологическая чистка', price: 7500 },
      { name: 'Чистка спины', desc: 'от', price: 7000 },
    ],
  },
  {
    id: 'hardware',
    group: 'Аппаратная косметология',
    items: [
      { name: 'Dermapen', desc: 'фракционная мезотерапия', price: 18000 },
      { name: 'ФДТ', desc: 'с использованием фотосенсибилизатора', price: 6000 },
      { name: 'ФБМ', desc: 'без использования фотосенсибилизатора', price: 3000 },
    ],
  },
  {
    id: 'peels',
    group: 'Пилинги',
    items: [
      { name: 'AKN PEEL', price: 5500 },
      { name: 'BioRe Peel — лицо', price: 5500 },
      { name: 'BioRe Peel — лицо и шея', price: 7500 },
      { name: 'BioRe Peel — лицо, шея и декольте', price: 10500 },
      { name: 'Джесснер Enerpeel', price: 6000 },
      { name: 'Миндальный Enerpeel', price: 6000 },
      { name: 'Салициловый Enerpeel', price: 6000 },
      { name: 'Redness PEEL', price: 5000 },
    ],
  },
  {
    id: 'consult',
    group: 'Консультация',
    items: [
      { name: 'Полная диагностика', desc: 'старение, активность мышц, план процедур, подбор ухода', price: 5000, priceMain: 7000 },
      { name: 'Консультация по процедуре', desc: 'определённая зона', price: 3000, priceMain: 5000 },
    ],
  },
];

export const ADVANTAGES = [
  {
    title: 'Сертифицированные специалисты',
    text: 'Главный врач и врачи-косметологи с медицинским образованием и подтверждённой квалификацией.',
  },
  {
    title: 'Оригинальные препараты',
    text: 'Stylage, Belotero, Juvederm, Neauvia, Filorga, Profhilo, Revi, Novacutan — только сертифицированные бренды.',
  },
  {
    title: 'Индивидуальный подход',
    text: 'Полная диагностика, план процедур и подбор домашнего ухода. В день процедуры консультация бесплатна.',
  },
  {
    title: 'Стерильность и безопасность',
    text: 'Одноразовые расходные материалы, медицинский класс асептики, инъекции — только сертифицированные препараты.',
  },
];
