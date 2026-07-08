/*
  ENTRIES.JS — le seul fichier à modifier chaque semaine.

  Chaque objet = une capsule. Champs :
  - id        : numéro (ne pas changer une fois publié)
  - unlock    : date AAAA-MM-JJ à partir de laquelle la capsule est ouvrable
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
  Mets les fichiers audio/vidéo/image dans le dossier  à côté de ce fichier.
*/

const ENTRIES = [
  {
    id: 0,
    unlock: '2026-06-21',
    title: 'Semaine 0 — le jour où tu ouvres ce lien',
    teaser: 'Le début du carnet.',
    type: 'text',
    content:
      "[Remplace ce texte par ton mot d'ouverture : pourquoi ce carnet, ce que tu veux qu'elle ressente en l'ouvrant pour la première fois.]\n\n[Deuxième paragraphe si besoin.]"
  },
  {
    id: 1,
    unlock: '2026-06-28',
    title: 'Semaine 1',
    teaser: 'Un bruit que tu reconnaîtras peut-être.',
    type: 'audio',
    content: 'semaine1.mp3'
  },
  {
    id: 2,
    unlock: '2026-07-05',
    title: 'Semaine 2',
    teaser: 'Une image de la semaine.',
    type: 'image',
    content: 'semaine2.jpg'
  },
  {
    id: 3,
    unlock: '2026-07-12',
    title: 'Semaine 3',
    teaser: 'Quelques lignes.',
    type: 'text',
    content: "[Texte de la semaine 3.]"
  },
  {
    id: 4,
    unlock: '2026-07-19',
    title: 'Semaine 4',
    teaser: 'Une vidéo courte.',
    type: 'video',
    content: 'semaine4.mp4'
  },
  {
    id: 5,
    unlock: '2026-07-26',
    title: 'Semaine 5',
    teaser: '...',
    type: 'text',
    content: "[Texte de la semaine 5.]"
  },
  {
    id: 6,
    unlock: '2026-08-02',
    title: 'Semaine 6',
    teaser: '...',
    type: 'audio',
    content: 'semaine6.mp3'
  },
  {
    id: 7,
    unlock: '2026-08-09',
    title: 'Semaine 7',
    teaser: '...',
    type: 'text',
    content: "[Texte de la semaine 7.]"
  },
  {
    id: 8,
    unlock: '2026-08-16',
    title: 'Semaine 8',
    teaser: '...',
    type: 'video',
    content: 'semaine8.mp4'
  },
  {
    id: 9,
    unlock: '2026-08-23',
    title: 'Dernière semaine — bientôt',
    teaser: 'Le compte à rebours final.',
    type: 'text',
    content: "[Dernier mot avant de la retrouver le 27 au soir.]"
  }
];
