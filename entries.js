/*
  ENTRIES.JS — le seul fichier à modifier chaque semaine.

  Chaque objet = une capsule. Champs :
  - id        : numéro (ne pas changer une fois publié)
  - unlock    : date AAAA-MM-JJ à partir de laquelle la capsule est ouvrable
                (fixée à la FIN de chaque semaine, pas au début — tu as toute la semaine pour l'ajouter)
  - title     : titre affiché sur la carte (ex: "Semaine 3")
  - teaser    : une phrase courte visible même verrouillée
  - type      : 'text' | 'audio' | 'video' | 'image' | 'embed'
  - content   : selon le type —
      text   -> le texte lui-même (peut contenir plusieurs paragraphes séparés par \n\n)
      audio  -> chemin vers le fichier, ex: 'semaine1.mp3'
      video  -> chemin vers le fichier, ex: 'semaine1.mp4'
      image  -> chemin vers le fichier, ex: 'semaine1.jpg'
      embed  -> URL à intégrer en iframe (ex: une page, une carte, un lien Spotify)

  Pour ajouter une semaine : copie un bloc, change id/unlock/type/content, ajoute une virgule.
  Mets les fichiers audio/vidéo/image à côté de ce fichier, à la racine du dépôt.
*/

const ENTRIES = [
  {
    id: 0,
    unlock: '2026-06-27',
    title: 'Semaine 0 — le jour où tu ouvres ce lien',
    teaser: 'Le début du carnet.',
    type: 'text',
    content:
      "Bonjour toi.\n\nÇa, c'est notre carnet de bord — un endroit rien qu'à nous, pour tenir le coup pendant qu'on est loin l'un de l'autre. L'idée est simple : chaque semaine, une nouvelle case s'ouvre, avec un petit quelque chose dedans — une photo, un son, un mot, parfois un jeu, parfois une question. Rien d'énorme, juste de quoi garder le fil.\n\nTu trouveras aussi tout ce qu'on a déjà vécu ensemble à Roscoff, et un compte à rebours jusqu'au 27 août.\n\nReviens quand tu veux. Je serai toujours en train d'ajouter quelque chose."
  },
  {
    id: 1,
    unlock: '2026-07-04',
    title: 'Semaine 1',
    teaser: 'Un bruit que tu reconnaîtras peut-être.',
    type: 'audio',
    content: 'semaine1.mp3'
  },
  {
    id: 2,
    unlock: '2026-07-11',
    title: 'Semaine 2',
    teaser: 'Une image de la semaine.',
    type: 'image',
    content: 'semaine2.jpg'
  },
  {
    id: 3,
    unlock: '2026-07-18',
    title: 'Semaine 3',
    teaser: 'Quelques lignes.',
    type: 'text',
    content: "[Texte de la semaine 3.]"
  },
  {
    id: 4,
    unlock: '2026-07-25',
    title: 'Semaine 4',
    teaser: 'Une vidéo courte.',
    type: 'video',
    content: 'semaine4.mp4'
  },
  {
    id: 5,
    unlock: '2026-08-01',
    title: 'Semaine 5',
    teaser: '...',
    type: 'text',
    content: "[Texte de la semaine 5.]"
  },
  {
    id: 6,
    unlock: '2026-08-08',
    title: 'Semaine 6',
    teaser: '...',
    type: 'audio',
    content: 'semaine6.mp3'
  },
  {
    id: 7,
    unlock: '2026-08-15',
    title: 'Semaine 7',
    teaser: '...',
    type: 'text',
    content: "[Texte de la semaine 7.]"
  },
  {
    id: 8,
    unlock: '2026-08-22',
    title: 'Semaine 8',
    teaser: '...',
    type: 'video',
    content: 'semaine8.mp4'
  },
  {
    id: 9,
    unlock: '2026-08-26',
    title: 'Dernière semaine — bientôt',
    teaser: 'Le compte à rebours final.',
    type: 'text',
    content: "[Dernier mot avant de la retrouver le 27 au soir.]"
  }
];
