import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const emptyVocab = () => {
  const domString = '<h1>No Cards</h1>';
  renderToDOM('#store', domString);
};

const showVocab = (array) => {
  clearDom();

  let domString = '';
  array.forEach((item) => {
    domString += `
      <div class="card">
      <div></div>
        <div class="card-body" style="height: 325px;">
          <h5 class="card-title">${item.title}</h5>
          <h6 class="card-title">Language: ${item.category} </h6>
            <p class="card-text bold">${item.definition}</p>
            <h6 class="card-text">${item.timeSubmitted}</h6>
            <hr>
            <i class="btn btn-success" id="view-vocab-btn--${item.firebaseKey}"><span class="fas fa-eye"></span></i>
            <i id="edit-vocab-btn --${item.firebaseKey}" class="btn btn-info"><span class="fas fa-edit"></span></i>
            <i id="delete-vocab-btn--${item.firebaseKey}" class="btn btn-danger"><span class="fas fa-trash-alt"></span></i>
        </div>
      </div>`;
  });
  renderToDOM('#store', domString);
};

export { showVocab, emptyVocab };
