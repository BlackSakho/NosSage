import { Sage } from '../types/sage';

export const sages: Sage[] = [
  {
    id: 'confucius',
    name: 'Confucius',
    period: '551-479 av. J.-C.',
    biography: 'Confucius était un philosophe chinois dont les enseignements ont profondément influencé la pensée et la vie est-asiatiques. Ses réflexions sur l\'éthique, la morale et la politique ont formé la base du confucianisme.',
    image: 'https://images.unsplash.com/photo-1614641837695-45f03f28c04f',
    quotes: [
      {
        id: 'c1',
        text: 'Choisissez un travail que vous aimez et vous n\'aurez pas à travailler un seul jour de votre vie.',
        source: 'Les Entretiens'
      },
      {
        id: 'c2',
        text: 'La vie est simple, mais nous insistons à la rendre compliquée.',
        source: 'Les Entretiens'
      }
    ],
    poems: [
      {
        id: 'p1',
        title: 'Le Livre des Odes',
        content: 'Les poèmes du Livre des Odes reflètent la sagesse ancienne...',
        year: '500 av. J.-C.'
      }
    ],
    gallery: [
      {
        id: 'g1',
        url: 'https://images.unsplash.com/photo-1599707367072-cd6ada2bc375',
        caption: 'Temple de Confucius à Qufu',
        type: 'location'
      }
    ]
  },
  {
    id: 'lao-tse',
    name: 'Lao Tseu',
    period: '6e siècle av. J.-C.',
    biography: 'Lao Tseu est le père fondateur du taoïsme philosophique. Son œuvre majeure, le Tao Te King, est un texte fondamental de la pensée chinoise.',
    image: 'https://images.unsplash.com/photo-1604431696980-07e518647bec',
    quotes: [
      {
        id: 'l1',
        text: 'Un voyage de mille lieues commence toujours par un premier pas.',
        source: 'Tao Te King'
      }
    ],
    poems: [
      {
        id: 'p2',
        title: 'Tao Te King',
        content: 'Le Tao qui peut être exprimé n\'est pas le Tao éternel...',
        year: '6e siècle av. J.-C.'
      }
    ],
    gallery: [
      {
        id: 'g2',
        url: 'https://images.unsplash.com/photo-1523731407965-2430cd12f5e4',
        caption: 'Montagnes Wudang',
        type: 'location'
      }
    ]
  },
  {
    id: 'bouddha',
    name: 'Bouddha',
    period: '563-483 av. J.-C.',
    biography: 'Siddhārtha Gautama, devenu le Bouddha, est le fondateur du bouddhisme. Son enseignement sur la voie du milieu et les quatre nobles vérités continue d\'influencer des millions de personnes.',
    image: 'https://images.unsplash.com/photo-1610498263193-633fb5e4c47d',
    quotes: [
      {
        id: 'b1',
        text: 'La paix vient de l\'intérieur. Ne la cherchez pas à l\'extérieur.',
        source: 'Dhammapada'
      }
    ],
    poems: [
      {
        id: 'p3',
        title: 'Dhammapada',
        content: 'Nous sommes ce que nous pensons. Tout ce que nous sommes naît avec nos pensées...',
        year: '5e siècle av. J.-C.'
      }
    ],
    gallery: [
      {
        id: 'g3',
        url: 'https://images.unsplash.com/photo-1627494113458-d7da925dd6b9',
        caption: 'Temple de Bodhgaya',
        type: 'location'
      }
    ]
  }
];