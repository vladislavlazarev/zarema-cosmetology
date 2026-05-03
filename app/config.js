// Easy-to-edit site config — change these to retune the salon details.

export const SITE = {
  brand: 'lumi',
  brandFull: 'Lumi Beauty Space',
  tagline: 'Косметология · Эстетика · Уход',
  city: 'Москва',
  address: 'ул. Самаринская, 1',
  phone: '8 (903) 233-59-59',
  phoneHref: '+79032335959',
  whatsapp: 'https://wa.me/79032335959',
  instagram: 'https://instagram.com/lumi_beauty_space',
  instagramHandle: 'lumi_beauty_space',
  hours: 'Пн–Сб · 10:00–20:00 · Вс — выходной',
  // Yandex map embed src — open yandex.ru/map-widget/v1/, find your address, copy the iframe src
  mapEmbed:
    'https://yandex.ru/map-widget/v1/?text=Москва%2C%20Самаринская%201&z=16',
  currency: '₽',

  // Photos. Локальные файлы кладите в /public, ссылайтесь как '/hero.jpg'.
  // Пропорции — hero ~16/9 (горизонтальная), about ~5/6 (вертикальная).
  images: {
    // Hero — фотография косметологической процедуры (нанесение маски кистью).
    // Сохраните вашу картинку как /public/hero.jpg рядом с этим файлом.
    hero: '/hero.jpg',
    // About — side-profile девушки в полотенце на нейтральном фоне.
    about: 'https://images.unsplash.com/photo-1544717304-a2db4a7b16ee?auto=format&fit=crop&w=1200&q=85',
  },
};
