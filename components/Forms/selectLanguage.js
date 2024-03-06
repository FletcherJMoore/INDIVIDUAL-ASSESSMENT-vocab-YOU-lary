import getTech from '../../api/languageData';
import renderToDOM from '../../utils/renderToDom';

const selectTech = (techId, uid) => {
  let domString = `<label for="tech">Select a Language</label>
  <select class="form-control" id="language_id" required>
  <option value="">Select a Language</option>`;

  getTech(uid).then((techArray) => {
    techArray.forEach((tech) => {
      domString += `
      <option
       value="${tech.firebaseKey}"
       ${techId === tech.firebaseKey ? 'selected' : ''}>
       </option>`;
    });

    domString += '</select>';

    renderToDOM('#select-tech', domString);
  });
};

export default selectTech;
