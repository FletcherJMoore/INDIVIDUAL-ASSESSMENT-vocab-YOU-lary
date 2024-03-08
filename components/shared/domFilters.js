import renderToDOM from '../../utils/renderToDom';

const techOnDom = () => {
  const domString = `<div class="card" style="width: 18rem;">
    <div id="sorting-buttons">
      <button type="button" class="btn all-tech" id="allTech">All Tech</button>
      <button type="button" class="btn btnJavaScript" id="javascript">JavaScript</button>
      <button type="button" class="btn btnHTML" id="html">HTML</button>
      <button type="button" class="btn btnCSS" id="css">CSS</button>
     </div>`;
  renderToDOM('#view', domString);
};

export default techOnDom;
