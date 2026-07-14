/*
  ENTRIES.JS — le seul fichier à modifier chaque semaine.

  Champs de base (tous les types) :
  - id        : numéro (ne pas changer une fois publié)
  - unlock    : date AAAA-MM-JJ, fixée à la FIN de chaque semaine
  - title     : titre affiché sur la carte
  - teaser    : phrase courte visible même verrouillée
  - type      : 'text' | 'audio' | 'video' | 'image' | 'path' | 'pending'
  - content   : selon le type —
      text    -> texte, paragraphes séparés par \n\n
      audio   -> chemin vers le fichier, ex: 'semaine1.mp3'
      video   -> chemin vers le fichier, ex: 'semaine4.mp4'
      image   -> chemin vers le fichier
      path    -> tableau [{src:'fichier.jpg', caption:'...'}, ...] pour un "chemin" de photos
      pending -> texte expliquant que ce module arrive (utilisé pour les modules pas encore codés :
                 Couple Game, coupons, flashcards — en attente du contenu / du code dédié)

  - bonus     : optionnel {type:'proverbe'|'devinette', text:'...'} — révélé en même temps
                que le contenu principal, affiché à part sur la page de la semaine.

  Pour ajouter une semaine : copie un bloc, change id/unlock/type/content.
  Fichiers audio/vidéo/image à la racine du dépôt, à côté de ce fichier.
*/

const ENTRIES = [
  {
    id: 0,
    unlock: '2026-06-27',
    title: 'Semaine 0 — le jour où tu ouvres ce lien',
    teaser: 'Le début du carnet.',
    type: 'text',
    content:
      "Bonjour toi.\n\nÇa, c'est notre carnet de bord — un endroit rien qu'à nous, pour tenir le coup pendant qu'on est loin l'un de l'autre. L'idée est simple : chaque semaine, une nouvelle case s'ouvre, avec un petit quelque chose dedans — une photo, un son, un mot, parfois un jeu, parfois une question. Rien d'énorme, juste de quoi garder le fil.\n\nTu trouveras aussi tout ce qu'on a déjà vécu ensemble à Roscoff, et un compte à rebours jusqu'au 27 août.\n\nMode d'emploi, en bref :\n🔓 une nouvelle case chaque dimanche soir\n📸 parfois une photo, un son, une vidéo\n🧩 parfois une énigme ou un jeu à faire toi-même\n💬 un chat, juste pour nous, en haut à droite\n🌊 une jauge qui monte doucement jusqu'au 27 août\n\nReviens quand tu veux. Je serai toujours en train d'ajouter quelque chose."
  },
  {
    id: 1,
    unlock: '2026-07-04',
    title: 'Semaine 1',
    teaser: 'Un bruit que tu reconnaîtras peut-être.',
    type: 'audio',
    content: 'semaine1.mp3',
    bonus: { type: 'devinette', text: "Je n'ai pas de bouche mais je te chante quelque chose à l'oreille. Qui suis-je ?" }
  },
  {
    id: 2,
    unlock: '2026-07-11',
    title: 'Semaine 2 — le chemin',
    teaser: 'Une photo par jour, un chemin pour toute la semaine.',
    type: 'path',
    // À COMPLÉTER : 7 photos (une par jour), pas forcément prises cet été.
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
    unlock: '2026-07-18',
    title: 'Semaine 3 — énigme',
    teaser: 'Un indice, une récompense cachée derrière.',
    type: 'text',
    // À DÉCIDER ENSEMBLE : rébus visuel / texte à trous / énigme géographique. Contenu à écrire une fois choisi.
    content: "[Énigme de la semaine 3 — format à finaliser ensemble.]",
    bonus: { type: 'proverbe', text: "La distance est à l'amour ce que le vent est au feu : elle éteint les petits, elle attise les grands." }
  },
  {
    id: 4,
    unlock: '2026-07-25',
    title: 'Semaine 4',
    teaser: 'Une vidéo courte.',
    type: 'video',
    content: 'semaine4.mp4',
    bonus: { type: 'devinette', text: "Je ne pèse rien mais je porte une voix, un visage, un peu de toi en mouvement. Qui suis-je ?" }
  },
  {
    id: 5,
    unlock: '2026-08-01',
    title: 'Semaine 5 — Couple Game',
    teaser: 'Elle répond, on compare.',
    type: 'pending',
    // EN ATTENTE : tes réponses aux catégories (plat, couleur, animal, saison, film, un rêve à deux...)
    // pour coder le jeu de comparaison (tes réponses fixes + les siennes en direct via Firebase).
    content: "Le Couple Game arrive ici — dès que j'ai tes réponses, ce sera prêt.",
    bonus: { type: 'proverbe', text: "On ne connaît vraiment quelqu'un que lorsqu'on est prêt à se tromper sur ses goûts." }
  },
  {
    id: 6,
    unlock: '2026-08-08',
    title: 'Semaine 6 — carnet de coupons',
    teaser: 'Des bons à échanger une fois réunis.',
    type: 'pending',
    // EN ATTENTE : 5 à 8 idées de coupons ("Bon pour...") de ta part.
    content: "Les coupons arrivent ici — donne-moi tes idées et je les mets en forme.",
    bonus: { type: 'devinette', text: "On me donne, on me garde, on m'échange plus tard contre un moment rien qu'à deux. Qui suis-je ?" }
  },
  {
    id: 7,
    unlock: '2026-08-15',
    title: 'Semaine 7 — flashcards',
    teaser: 'Des questions, à deux, en direct.',
    type: 'pending',
    // EN ATTENTE : liste de questions ouvertes + construction du module Firebase (réponses des deux côtés).
    content: "Les flashcards arrivent ici, avec vos réponses à tous les deux.",
    bonus: { type: 'proverbe', text: "Les grandes histoires se racontent souvent par petits bouts." }
  },
  {
    id: 8,
    unlock: '2026-08-22',
    title: 'Semaine 8 — une chanson',
    teaser: 'Moi, une chanson, pour toi.',
    type: 'video',
    // Toi qui chantes, filmé ou juste en audio (change le type en 'audio' si pas de vidéo).
    content: 'semaine8.mp4',
    bonus: { type: 'devinette', text: "Je n'ai pas d'image mais je te fais fermer les yeux. Qui suis-je ?" }
  },
  {
    id: 9,
    unlock: '2026-08-26',
    title: 'Dernière semaine — bientôt',
    teaser: 'Le compte à rebours final.',
    type: 'text',
    content: "Encore une nuit.\n\nDepuis le 21 juin, chaque case de ce carnet a compté les jours dans l'autre sens. Ce soir, il n'y en a plus.\n\nDemain, à Roscoff, je te retrouve.\n\nMerci d'avoir tenu ce fil avec moi, semaine après semaine. On continue maintenant, pour de vrai, dans la même pièce."
  }
];
