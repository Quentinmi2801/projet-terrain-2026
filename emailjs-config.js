/*
  EMAILJS-CONFIG.JS — pour les notifications par e-mail.

  1. Crée un compte gratuit sur emailjs.com (aucune carte requise)
  2. Email Services -> Add new service -> connecte ton Gmail
  3. Email Templates -> crée un template avec au moins ces variables :
     {{to_email}}, {{from_name}}, {{message}}
     Objet suggéré : "Notre carnet de bord"
     Corps suggéré : "{{from_name}} vient d'ajouter quelque chose : {{message}}"
  4. Account -> General -> copie ta Public Key
  5. Remplis les 3 valeurs ci-dessous, plus vos deux adresses e-mail
*/

const EMAILJS_PUBLIC_KEY = "QaOBweACQNlD8YRg0";
const EMAILJS_SERVICE_ID = "service_pgfyp6y";
const EMAILJS_TEMPLATE_ID = "template_08fww4b";

const NOTIFY_EMAILS = {
  Quentin: "quentin.mi2801@gmail.com",
  Arwen: "arwendarzacq@gmail.com"
};

function notifyOther(from, message){
  if(typeof emailjs === 'undefined') return;
  if(EMAILJS_PUBLIC_KEY === "COLLE_ICI") return; // pas encore configuré
  const to = from === 'Quentin' ? NOTIFY_EMAILS.Arwen : NOTIFY_EMAILS.Quentin;
  if(!to || to.startsWith('EMAIL_')) return;
  emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
    to_email: to,
    from_name: from,
    message: message
  }).catch(() => {});
}
