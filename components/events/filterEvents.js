import {
  getCSS, getHTML, getJava, getVocab
} from '../../api/vocabularyData';
import { showVocab } from '../../pages/vocab';

const filterEvents = (uid) => {
  document.querySelector('#all-cards').addEventListener('click', () => {
    getVocab(uid).then(showVocab);
  });
  // FILTER EVENT FOR SHOWING JAVA CARDS
  document.querySelector('#js-filter').addEventListener('click', () => {
    console.warn('CLICKED JS FILTER!');
    getJava(uid).then(showVocab);
  });
  // FILTER EVENT FOR SHOWING CSS CARDS
  document.querySelector('#css-filter').addEventListener('click', () => {
    console.warn('CLICKED CSS FILTER!');
    getCSS(uid).then(showVocab);
  });
  // FILTER EVENT FOR SHOWING HTML CARDS
  document.querySelector('#html-filter').addEventListener('click', () => {
    console.warn('CLICKED HTML FILTER!');
    getHTML(uid).then(showVocab);
  });
};

export default filterEvents;
