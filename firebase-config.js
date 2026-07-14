/*
  FIREBASE-CONFIG.JS

  Remplace les valeurs ci-dessous par celles que Firebase t'a données
  (Paramètres du projet → tes applications → l'app web que tu as créée).
  Ce sont des identifiants publics, pas des mots de passe : aucun risque
  à les laisser dans un fichier même si le dépôt est public.
*/

const firebaseConfig = {
  apiKey: "AIzaSyAmtnlgQgqrZWbF2ydUn7vGUmQ-Jw1sAA4",
  authDomain: "carnet-de-bord-8751f.firebaseapp.com",
  projectId: "carnet-de-bord-8751f",
  storageBucket: "carnet-de-bord-8751f.firebasestorage.app",
  messagingSenderId: "1095012484176",
  appId: "1:1095012484176:web:b1fd3980f474c3179d7d55"
};

// Petit mot de passe partagé, utilisé pour limiter qui peut écrire dans la base.
// Change-le si tu veux, mais garde-le identique ici et dans les règles Firestore.
const SHARED_KEY = "roscoff2026";
