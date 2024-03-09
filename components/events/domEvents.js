import { getVocab, getSingleVocab, deleteVocab } from '../../api/vocabularyData';
import { showVocab } from '../../pages/vocab';
import addVocabForm from '../Forms/addVocabularyForm';

const domEvents = (uid) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    // CLICK EVENT FOR DELETING A VOCAB
    if (e.target.id.includes('delete-vocab-btn')) {
      console.warn('DELETE');
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        const [, firebaseKey] = e.target.id.split('--');

        deleteVocab(firebaseKey).then(() => {
          getVocab(uid).then(showVocab);
        });
      }
    }
    // CLICK EVENT FOR ADDING A VOCAB
    if (e.target.id.includes('add-vocab-btn')) {
      addVocabForm(uid);
    }

    // CLICK EVENT FOR EDITING A VOCAB
    if (e.target.id.includes('edit-vocab-btn')) {
      console.warn('EDIT BTN');
      const [, firebaseKey] = e.target.id.split('--');

      getSingleVocab(firebaseKey).then((vocabObj) => addVocabForm(vocabObj));
    }
  });
};

export default domEvents;
