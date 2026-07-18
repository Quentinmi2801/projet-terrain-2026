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
    title: 'Semaine 1 — la première sans toi',
    teaser: 'Un mot, et ce qui s\'est passé cette semaine-là.',
    type: 'audio',
    // À FOURNIR : le fichier audio racontant la première semaine sans elle.
    content: 'semaine1.mp3',
    intro:
      "Bonjour à toi.\n\nCeci est notre carnet de bord — un endroit rien qu'à nous, pour tenir le coup pendant qu'on est loin l'un de l'autre. C'est simple : chaque semaine, une nouvelle case s'ouvre, avec un petit quelque chose dedans.\n\nTu trouveras aussi quelques photos de ce qu'on a déjà vécu ensemble à Roscoff, et un chat juste pour nous, en haut à droite.\n\nReviens quand tu veux — une nouvelle case t'attendra chaque semaine.",
    bonus: { type: 'devinette', text: "Je n'ai pas de bouche mais je te raconte ma semaine à l'oreille. Qui suis-je ?" }
  },
  {
    id: 2,
    unlock: '2026-07-05',
    title: 'Semaine 2 — un chemin qui continue',
    teaser: 'Sept jours, sept images.',
    type: 'path',
    // À FOURNIR : 7 photos (une par jour), pas forcément de cet été. Légende courte pour chacune.
    content: [
      { src: 'semaine2-jour1.jpg', caption: '[jour 1]' },
      { src: 'semaine2-jour2.jpg', caption: '[jour 2]' },
      { src: 'semaine2-jour3.jpg', caption: '[jour 3]' },
      { src: 'semaine2-jour4.jpg', caption: '[jour 4]' },
      { src: 'semaine2-jour5.jpg', caption: '[jour 5]' },
      { src: 'semaine2-jour6.jpg', caption: '[jour 6]' },
      { src: 'semaine2-jour7.jpg', caption: '[jour 7]' }
    ],
    bonus: { type: 'proverbe', text: 'Loin des yeux, jamais loin du cœur.' }
  },
  {
    id: 3,
    unlock: '2026-07-12',
    title: 'Semaine 3 — cherche un peu',
    teaser: 'Un indice, une récompense cachée derrière.',
    type: 'text',
    // À DÉCIDER ENSEMBLE : rébus visuel / texte à trous / énigme géographique. Contenu à écrire une fois choisi.
    content: "[Énigme de la semaine 3 — format à finaliser ensemble.]",
    bonus: { type: 'proverbe', text: "La distance est à l'amour ce que le vent est au feu : elle éteint les petits, elle attise les grands." }
  },
  {
    id: 4,
    unlock: '2026-07-19',
    title: 'Semaine 4 — regarde-moi',
    teaser: 'Une vidéo courte.',
    type: 'video',
    // À FOURNIR : la vidéo.
    content: 'semaine4.mp4',
    bonus: { type: 'devinette', text: "Je ne pèse rien mais je porte une voix, un visage, un peu de toi en mouvement. Qui suis-je ?" }
  },
  {
    id: 5,
    unlock: '2026-07-26',
    title: 'Semaine 5 — devine un peu',
    teaser: 'Elle répond, on compare.',
    type: 'pending',
    // EN ATTENTE : tes réponses aux catégories (plat, couleur, animal, saison, film, un rêve à deux...)
    // pour coder le jeu de comparaison (tes réponses fixes + les siennes en direct via Firebase).
    content: "Le jeu arrive ici — dès que j'ai tes réponses, ce sera prêt.",
    bonus: { type: 'proverbe', text: "On ne connaît vraiment quelqu'un que lorsqu'on est prêt à se tromper sur ses goûts." }
  },
  {
    id: 6,
    unlock: '2026-08-02',
    title: 'Semaine 6 — quelque chose arrive',
    teaser: 'Regarde plutôt du côté de ta boîte aux lettres.',
    type: 'text',
    // Colis fait main envoyé par la poste cette semaine-là — le site ne fait qu'annoncer, pas de fichier.
    content: "Cette semaine, la surprise n'est pas sur cet écran.\n\nElle est en route vers chez toi.",
    bonus: { type: 'devinette', text: "On me donne, on me garde, on m'échange plus tard contre un moment rien qu'à deux. Qui suis-je ?" }
  },
  {
    id: 7,
    unlock: '2026-08-09',
    title: 'Semaine 7 — à ton tour',
    teaser: 'Des questions, à deux, en direct.',
    type: 'pending',
    // EN ATTENTE : liste de questions ouvertes + construction du module Firebase (réponses des deux côtés).
    content: "Les flashcards arrivent ici, avec vos réponses à tous les deux.",
    bonus: { type: 'proverbe', text: "Les grandes histoires se racontent souvent par petits bouts." }
  },
  {
    id: 8,
    unlock: '2026-08-16',
    title: 'Semaine 8 — écoute ça',
    teaser: 'Moi, une chanson, pour toi.',
    type: 'video',
    // À FOURNIR : toi qui chantes (vidéo ou juste audio — change le type en 'audio' si besoin).
    content: 'semaine8.mp4',
    bonus: { type: 'devinette', text: "Je n'ai pas d'image mais je te fais fermer les yeux. Qui suis-je ?" }
  },
  {
    id: 9,
    unlock: '2026-08-23',
    title: 'Semaine 9 — encore un peu',
    teaser: '...',
    type: 'pending',
    // OUVERT : à définir ensemble — voir les 3 pistes proposées dans le message.
    content: "Cette semaine est encore à inventer.",
    bonus: { type: 'proverbe', text: "Le plus dur d'un chemin, ce sont souvent les derniers pas." }
  },
  {
    id: 10,
    unlock: '2026-08-26',
    title: 'Semaine 10 — presque',
    teaser: 'Le compte à rebours final.',
    type: 'text',
    content: "Encore une nuit.\n\nDepuis le 21 juin, chaque case de ce carnet a compté les jours dans l'autre sens. Ce soir, il n'y en a plus.\n\nDemain, à Roscoff, je te retrouve.\n\nMerci d'avoir tenu ce fil avec moi, semaine après semaine. On continue maintenant, pour de vrai, dans la même pièce."
  }
];
