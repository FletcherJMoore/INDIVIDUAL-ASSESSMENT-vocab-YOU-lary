import showVocab from '../../pages/vocab';
import { getVocab, updateVocab, createVocab } from '../../api/vocabularyData';

const formEvents = (uid) => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();
    // TODO: CLICK EVENT FOR SUBMITTING FORM FOR ADDING A BOOK
    if (e.target.id.includes('submit-vocab')) {
      const payload = {
        title: document.querySelector('#title').value,
        description: document.querySelector('#description').value,
        tech_id: document.querySelector('#tech_id').value,
        uid,
      };

      createVocab(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };

        updateVocab(patchPayload).then(() => {
          getVocab(uid).then(showVocab);
        });
      });
    }

    if (e.target.id.includes('edit-vocab')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        title: document.querySelector('#title').value,
        description: document.querySelector('#description').value,
        tech_id: document.querySelector('#tech_id').value,
        firebaseKey,
      };

      updateVocab(payload).then(() => {
        getVocab(uid).then(showVocab);
      });
    }
  });
};

export default formEvents;
