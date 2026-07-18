/*
  WEEK4-DATA.JS — le jeu des préférences (semaine 4)

  Pour chaque question, remplis TES deux réponses :
  - hisReal          : ta vraie réponse
  - hisGuessAboutHer : ce que tu PENSES qu'elle répondrait, elle

  Elle, en direct sur le site, ne remplit qu'une chose par question :
  sa supposition sur TA réponse. Ensuite le jeu révèle ta vraie réponse
  (pour voir si elle avait deviné juste), puis ce que TOI tu avais deviné
  sur elle — et elle valide (vrai) ou corrige (faux + sa vraie réponse).

  Laisse hisReal / hisGuessAboutHer vides tant que tu n'as pas rempli —
  le jeu affichera "(pas encore rempli)" à la place, donc complète avant
  de laisser la semaine se débloquer.
*/

const QUESTIONS = [
  { id: 1,  text: "Quel est ton jour de la semaine préféré ?", hisReal: "", hisGuessAboutHer: "" },
  { id: 2,  text: "Quel est ton animal préféré ?", hisReal: "", hisGuessAboutHer: "" },
  { id: 3,  text: "Quel est ton plat préféré ?", hisReal: "", hisGuessAboutHer: "" },
  { id: 4,  text: "Quelle est ta saison préférée ?", hisReal: "", hisGuessAboutHer: "" },
  { id: 5,  text: "Quel est ton dessert préféré ?", hisReal: "", hisGuessAboutHer: "" },
  { id: 6,  text: "Quel est ton film préféré ?", hisReal: "", hisGuessAboutHer: "" },
  { id: 7,  text: "Quelle est ta couleur préférée ?", hisReal: "", hisGuessAboutHer: "" },
  { id: 8,  text: "Combien j'ai de frères et sœurs ?", hisReal: "", hisGuessAboutHer: "" },
  { id: 9,  text: "Quel super-pouvoir je choisirais ?", hisReal: "", hisGuessAboutHer: "" },
  { id: 10, text: "Quelle est ma chanson préférée en ce moment ?", hisReal: "", hisGuessAboutHer: "" },
  { id: 11, text: "Quel est mon petit plaisir coupable ?", hisReal: "", hisGuessAboutHer: "" },
  { id: 12, text: "Quel pays je rêve de visiter ?", hisReal: "", hisGuessAboutHer: "" },
  { id: 13, text: "Quelle est ma plus grande peur (une légère, pas lourde) ?", hisReal: "", hisGuessAboutHer: "" },
  { id: 14, text: "Quel est mon film d'animation préféré ?", hisReal: "", hisGuessAboutHer: "" },
  { id: 15, text: "Quel sport je préfère regarder ou pratiquer ?", hisReal: "", hisGuessAboutHer: "" },
  { id: 16, text: "Quelle est ma boisson préférée ?", hisReal: "", hisGuessAboutHer: "" },
  { id: 17, text: "Quel métier je ferais si je changeais tout ?", hisReal: "", hisGuessAboutHer: "" },
  { id: 18, text: "Quel est mon souvenir préféré de nous deux cette année ?", hisReal: "", hisGuessAboutHer: "" },
  { id: 19, text: "Si je gagnais au loto, la première chose que j'achète ?", hisReal: "", hisGuessAboutHer: "" },
  { id: 20, text: "Quel est mon juron ou mon expression fétiche ?", hisReal: "", hisGuessAboutHer: "" }
];
