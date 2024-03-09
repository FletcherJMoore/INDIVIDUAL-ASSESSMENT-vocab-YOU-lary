import renderToDOM from '../utils/renderToDom';

const cardFilters = () => {
  const domString = `
  <div id="card-filters">
  <button type=button class=" btn btn-primary" id="all-cards">All Cards</button>
  <button type=button class=" btn btn-primary" id="js-filter">JavaScript</button>
  <button type=button class=" btn btn-primary" id="html-filter">HTML</button>
  <button type=button class=" btn btn-primary" id="css-filter">CSS</button>
  </div>`;
  renderToDOM('#filter-container', domString);
};

export default cardFilters;
