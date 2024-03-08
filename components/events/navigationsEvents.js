import { getVocab } from '../../api/vocabularyData';
import { signOut } from '../../utils/auth';
import showVocab from '../../pages/vocab';

// navigation events
const navigationEvents = (uid) => {
// LOGOUT BUTTON
  document.querySelector('#logout-button').addEventListener('click', signOut);

  document.querySelector('#vocabBtn').addEventListener('click', () => {
    getVocab(uid).then(showVocab);
  });
};

export default navigationEvents;
