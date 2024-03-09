import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const emptyTech = () => {
  const domString = '<h1>No Tech</h1>';
  renderToDOM('#store', domString);
};

const showTech = (array) => {
  clearDom();

  let domString = '';
  array.forEach((item) => {
    domString += `
    <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${item.title}</h5>
      <h6 class="card-subtitle mb-2 text-muted">${item.definition}</h6>
      <hr>
      <p class="card-text bold">${item.private ? '<span class="badge badge-info lock-badge"><i aria-hidden="true"></i> Private</span>' : ''}</p>
      <hr>
      <i class="btn btn-info" id="update-tech--${item.firebaseKey}"><span class="fas fa-edit"></span></i>
      <i class="btn btn-danger" id="delete-tech-btn--${item.firebaseKey}"><span class="fas fa-trash-alt"></span></i>
    </div>
  </div>`;
  });
  renderToDOM('#store', domString);
};

export { showTech, emptyTech };
