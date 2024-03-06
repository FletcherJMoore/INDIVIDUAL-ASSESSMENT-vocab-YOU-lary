import logoutButton from '../components/buttons/logoutButton';
import domBuilder from '../components/shared/domBuilder';
import navBar from '../components/shared/navBar';
import navigationEvents from '../components/events/navigationsEvents';
import { getVocab } from '../api/vocabularyData';
import formEvents from '../components/events/formEvents';
import showVocab from '../pages/vocab';

const startApp = (uid) => {
  domBuilder(uid); // BUILD THE DOM
  formEvents(uid);
  navBar(); // DYNAMICALLY ADD THE NAV
  logoutButton(); // ADD THE LOGOUT BUTTON COMPONENT
  navigationEvents(uid); // ATTACH THE EVENT LISTENERS TO THE NAVBAR

  // Put all vocabulary on the DOM on App load
  getVocab(uid).then((vocab) => showVocab(vocab));
};

export default startApp;
