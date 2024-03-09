import clearDom from '../../utils/clearDom';
import renderToDOM from '../../utils/renderToDom';
import selectTech from './selectLanguage';

const addVocabForm = (uid, obj = {}) => {
  clearDom();
  const domString = `
  <form id="${obj.firebaseKey ? `update-vocab--${obj.firebaseKey}` : 'submit-vocab'}" class="mb-4">
  <div class="form-group">
  <label for="title"></label>
  <input type="text" class="form-control" id="title" placeholder="Title" value="${obj.title || ''}" required>
  </div>
  <div class="form-group">
  <label for="definition"></label>
  <textarea class="form-control" placeholder="Definition" id="definition" style="height: 100px">${obj.definition || ''}</textarea>
  </div>
  <div class="form-group" id="select-tech">
  </div>
  <button type="submit" class="btn btn-primary">${obj.firebaseKey ? 'Update' : 'Submit'}</button>
  </form>`;
  renderToDOM('#form-container', domString);
  selectTech(`${obj.tech_id || ''}`, uid);
};
export default addVocabForm;
