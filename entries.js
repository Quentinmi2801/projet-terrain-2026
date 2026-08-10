/*
  ENTRIES.JS — le seul fichier à modifier chaque semaine.
  10 semaines, du 22 juin au 27 août.

  Champs de base :
  - id        : numéro de la semaine (1 à 10)
  - unlock    : date AAAA-MM-JJ, fixée à la FIN de chaque semaine
  - title     : titre affiché — volontairement évocateur, jamais le format
  - teaser    : phrase courte visible même verrouillée — garde le mystère
  - type      : 'text' | 'audio' | 'video' | 'image' | 'path' | 'pending'
  - content   : selon le type (voir semaines précédentes pour les exemples)
  - intro     : optionnel — texte affiché AVANT le contenu principal (ex: mot d'accueil semaine 1)
  - bonus     : optionnel {type:'proverbe'|'devinette', text:'...'}

  Pour ajouter une semaine : copie un bloc, change id/unlock/type/content.
  Fichiers audio/vidéo/image à la racine du dépôt, à côté de ce fichier.
*/

const ENTRIES = [
  {
    id: 1,
    unlock: '2026-06-28',
    title: 'Semaine 1 · la première sans toi',
    teaser: 'Un mot, et ce qui s\'est passé cette semaine-là.',
    type: 'audio',
    content: 'semaine1.m4a',
    gallery: ['semaine1-photo1.jpg', 'semaine1-photo2.jpg', 'semaine1-photo3.jpg', 'semaine1-photo4.jpg', 'semaine1-photo5.jpg'],
    intro:
      "Bonjour à toi.\n\nCeci est notre carnet de bord, un endroit rien qu'à nous, pour tenir le coup pendant qu'on est loin l'un de l'autre. C'est simple : chaque semaine, une nouvelle case s'ouvre, avec un petit quelque chose dedans.\n\nTu trouveras aussi quelques photos de ce qu'on a déjà vécu ensemble à Roscoff, et un chat juste pour nous, en haut à droite.\n\nReviens quand tu veux, une nouvelle case t'attendra chaque semaine.",
    bonus: { type: 'devinette', text: "Je n'ai pas de bouche mais je te raconte ma semaine à l'oreille. Qui suis-je ?" }
  },
  {
    id: 2,
    unlock: '2026-07-05',
    title: 'Semaine 2 · notre année en une semaine',
    teaser: 'Sept jours, sept images, une année entière.',
    type: 'calendar',
    content: ['semaine2-jour1.jpg','semaine2-jour2.jpg','semaine2-jour3.jpg','semaine2-jour4.jpg','semaine2-jour5.jpg','semaine2-jour6.jpg','semaine2-jour7.jpg'],
    extraAudio: 'semaine2-audio.m4a',
    bonus: { type: 'proverbe', text: 'Loin des yeux, jamais loin du cœur.' }
  },
  {
    id: 3,
    unlock: '2026-07-12',
    title: 'Semaine 3 · cherche un peu',
    teaser: 'Une petite quête, à résoudre contre la montre.',
    type: 'escape',
    // Page dédiée : escape.html (pas le gabarit semaine.html). Contenu des épreuves à personnaliser dedans.
    content: null,
    bonus: { type: 'proverbe', text: "La distance est à l'amour ce que le vent est au feu : elle éteint les petits, elle attise les grands." }
  },
  {
    id: 4,
    unlock: '2026-07-19',
    title: 'Semaine 4 · devine un peu',
    teaser: "On parie sur ce que l'autre préfère.",
    type: 'pending',
    // EN ATTENTE : la liste de catégories (voir message du jour) + tes réponses réelles ET tes suppositions sur elle.
    content: "Le jeu des préférences arrive ici, dès que la liste est bouclée.",
    bonus: { type: 'proverbe', text: "On ne connaît vraiment quelqu'un que lorsqu'on est prêt à se tromper sur ses goûts." }
  },
  {
    id: 5,
    unlock: '2026-07-26',
    title: 'Semaine 5 · écoute ça',
    teaser: 'Une chanson, pour toi.',
    type: 'video',
    // À FOURNIR : la chanson interprétée (vidéo ou audio — change le type en 'audio' si besoin), une fois choisie.
    content: 'semaine5.mp4',
    bonus: { type: 'devinette', text: "Je n'ai pas d'image mais je te fais fermer les yeux. Qui suis-je ?" }
  },
  {
    id: 6,
    unlock: '2026-08-02',
    title: 'Semaine 6 · quelque chose arrive',
    teaser: 'Regarde plutôt du côté de ta boîte aux lettres.',
    type: 'text',
    content: "Cette semaine, la surprise n'est pas sur cet écran.\n\nElle est en route vers chez toi.",
    // À FOURNIR : le petit vocal expliquant le colis, une fois enregistré (semaine6-audio.m4a).
    extraAudio: 'semaine6-audio.m4a',
    bonus: { type: 'devinette', text: "On me donne, on me garde, on m'échange plus tard contre un moment rien qu'à deux. Qui suis-je ?" }
  },
  {
    id: 7,
    unlock: '2026-08-09',
    title: 'Semaine 7 · trois petits jeux',
    teaser: 'Une surprise à gratter, un portrait, une playlist.',
    type: 'triple',
    // Page dédiée : semaine7.html
    content: null,
    bonus: { type: 'proverbe', text: "Les grandes histoires se racontent souvent par petits bouts." }
  },
  {
    id: 8,
    unlock: '2026-08-16',
    title: 'Semaine 8 · un bout de ma semaine',
    teaser: 'Quelques jours de ma vie, filmés pour toi.',
    type: 'video',
    // À FOURNIR : les rushs bruts si tu veux qu'on t'aide au montage, ou la vidéo déjà montée.
    content: 'semaine8.mp4',
    bonus: { type: 'devinette', text: "Je ne pèse rien mais je porte une voix, un visage, un peu de toi en mouvement. Qui suis-je ?" }
  },
  {
    id: 9,
    unlock: '2026-07-01',
    title: 'Semaine 9 · à ton tour',
    teaser: 'Cette fois, c\'est toi qui déposes quelque chose.',
    type: 'her-turn',
    // Page dédiée : semaine9.html. Se débloque en même temps que la semaine 8.
    // Ma révélation à moi n'apparaît que le 23 août, quoi qu'elle dépose et quand.
    content: null,
    bonus: null
  },
  {
    id: 10,
    unlock: '2026-08-26',
    title: 'Semaine 10 · presque',
    teaser: 'Les dernières heures, comptées une par une.',
    type: 'text',
    // Le compte à rebours en heures (vers 20h le 27 août) est géré à part dans index/semaine —
    // à coder une fois cette semaine ouverte. La lettre viendra plus tard, pas urgent.
    content: "Encore quelques heures.\n\nDepuis le 21 juin, chaque case de ce carnet a compté les jours dans l'autre sens. Bientôt, il n'y en aura plus.\n\nÀ ce soir, à Roscoff.",
    bonus: null
  }
];
