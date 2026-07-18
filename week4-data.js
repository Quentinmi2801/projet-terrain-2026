/*
  WEEK4-DATA.JS — le jeu des préférences (semaine 4)

  Pour chaque question, TES deux réponses sont déjà remplies :
  - hisReal          : ta vraie réponse
  - hisGuessAboutHer : ce que tu penses qu'elle répondrait, elle

  Elle, en direct sur le site, ne remplit qu'une chose par question :
  sa supposition sur ta réponse. Ensuite le jeu révèle ta vraie réponse
  (pour voir si elle avait deviné juste), puis ce que toi tu avais deviné
  sur elle — et elle valide (vrai) ou corrige (faux + sa vraie réponse).
*/

const QUESTIONS = [
  { id: 1,  text: "Quel est mon jour de la semaine préféré, à ton avis ?", hisReal: "vendredi", hisGuessAboutHer: "samedi" },
  { id: 2,  text: "Quel est mon animal préféré ?", hisReal: "le chien", hisGuessAboutHer: "le chien" },
  { id: 3,  text: "Quel est mon plat préféré ?", hisReal: "les pâtes à la carbonara", hisGuessAboutHer: "les moules" },
  { id: 4,  text: "Quelle est ma saison préférée ?", hisReal: "l'été", hisGuessAboutHer: "l'été" },
  { id: 5,  text: "Quel est mon dessert préféré ?", hisReal: "l'éclair au chocolat", hisGuessAboutHer: "le banana bread" },
  { id: 6,  text: "Quel est mon film préféré ?", hisReal: "Alice au pays des merveilles", hisGuessAboutHer: "un des Pirates des Caraïbes" },
  { id: 7,  text: "Quelle est ma couleur préférée ?", hisReal: "le bleu", hisGuessAboutHer: "le bleu" },
  { id: 8,  text: "Combien j'ai de frères et sœurs ?", hisReal: "aucun", hisGuessAboutHer: "elle a une sœur" },
  { id: 9,  text: "Quel super-pouvoir je choisirais ?", hisReal: "voler", hisGuessAboutHer: "voler" },
  { id: 10, text: "Quelle est ma chanson préférée en ce moment ?", hisReal: "Love Me Not, de Ravyn Lenae", hisGuessAboutHer: "aucune idée, je donne ma langue au chat" },
  { id: 11, text: "Quel est mon petit plaisir coupable ?", hisReal: "manger du chocolat", hisGuessAboutHer: "me taquiner, m'embêter un peu" },
  { id: 12, text: "Quel pays je rêve de visiter ?", hisReal: "l'île de la Réunion", hisGuessAboutHer: "la Norvège" },
  { id: 13, text: "Quelle est ma plus grande peur (une légère, pas lourde) ?", hisReal: "la claustrophobie", hisGuessAboutHer: "l'échec, ne pas réussir" },
  { id: 14, text: "Quel est mon film d'animation préféré ?", hisReal: "Monstres et Cie", hisGuessAboutHer: "Toy Story" },
  { id: 15, text: "Quel sport je préfère regarder ou pratiquer ?", hisReal: "le rugby", hisGuessAboutHer: "la natation" },
  { id: 16, text: "Quelle est ma boisson préférée ?", hisReal: "l'Ice Tea", hisGuessAboutHer: "l'alcool" },
  { id: 17, text: "Quel métier je ferais si je changeais tout ?", hisReal: "organisateur d'événements (mariages, etc.)", hisGuessAboutHer: "aucune idée, je donne ma langue au chat" },
  { id: 18, text: "Quel est mon souvenir préféré de nous deux cette année ?", hisReal: "nos tout débuts, le tout premier flirt", hisGuessAboutHer: "pareil, le tout premier flirt" },
  { id: 19, text: "Si je gagnais au loto, la première chose que j'achète ?", hisReal: "un voyage", hisGuessAboutHer: "une maison" },
  { id: 20, text: "Quel est mon juron ou mon expression fétiche ?", hisReal: "ta mère", hisGuessAboutHer: "caca" }
];
