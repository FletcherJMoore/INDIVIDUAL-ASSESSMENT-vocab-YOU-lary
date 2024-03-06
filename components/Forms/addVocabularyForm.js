import clearDom from '../../utils/clearDom';
import renderToDOM from '../../utils/renderToDom';
import selectTech from './selectLanguage';

const addVocabForm = (uid, obj = {}) => {
  clearDom();
  const domString = `
  <form id="${obj.firebaseKey ? `update-vocabuary--${obj.firebaseKey}` : 'submit-vocab'}" class="mb-4">
  <div class="form-group">
  <label for="title">Title</label>
  <input type="text" class="form-control" id="title" aria-descibedby="vocabTitle" placehilder="Enter Title" value="${obj.title || ''}" required>
  </div>
  <div class="form-group">
  <label for="description">Description</label>
  <textarea class="form-control" placeholder="Tech Description" id="description" style="height: 100px">${obj.description || ''}</textarea>
  </div>
  <div class="form-group" id="select-tech">
  </form>`;
  renderToDOM('#form-container', domString);
  selectTech(`${obj.author_id || ''}`, uid);
};
export default addVocabForm;
