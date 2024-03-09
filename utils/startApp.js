import logoutButton from '../components/buttons/logoutButton';
import domBuilder from '../components/shared/domBuilder';
import navBar from '../components/shared/navBar';
import navigationEvents from '../components/events/navigationsEvents';
import { getVocab } from '../api/vocabularyData';
import formEvents from '../components/events/formEvents';
import { showVocab } from '../pages/vocab';
import cardFilters from '../pages/filters';
import domEvents from '../components/events/domEvents';
import filterEvents from '../components/events/filterEvents';

const startApp = (uid) => {
  domBuilder(); // BUILD THE DOM
  domEvents(uid); // ADD THE EVENT LISTENTERS TO THE DOM
  formEvents(uid); // ADD FORM EVENT LISTENTERS TO THE DOM
  navBar(); // DYNAMICALLY ADD THE NAV
  logoutButton(); // ADD THE LOGOUT BUTTON COMPONENT
  cardFilters();
  filterEvents(uid);
  navigationEvents(uid); // ATTACH THE EVENT LISTENERS TO THE NAVBAR

  // Put all vocabulary on the DOM on App load
  getVocab(uid).then(showVocab);
};

export default startApp;
