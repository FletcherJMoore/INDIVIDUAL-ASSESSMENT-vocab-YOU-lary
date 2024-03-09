import { getVocab } from '../../api/vocabularyData';
import { signOut } from '../../utils/auth';
import { showVocab } from '../../pages/vocab';
import addVocabForm from '../Forms/addVocabularyForm';
import { showTech } from '../../pages/language';
import { getTech } from '../../api/languageData';

// navigation events
const navigationEvents = (uid) => {
// LOGOUT BUTTON
  document.querySelector('#logout-button').addEventListener('click', signOut);

  document.querySelector('#add-btn').addEventListener('click', () => {
    console.warn('CREATE FORM');
    addVocabForm(uid);
  });

  document.querySelector('#vocabBtn').addEventListener('click', () => {
    console.warn('VOCABULARY BTN');
    getVocab(uid).then(showVocab);
  });

  document.querySelector('#techBtn').addEventListener('click', () => {
    console.warn('TECH BTN');
    getTech(uid).then(showTech);
  });
};

export default navigationEvents;
