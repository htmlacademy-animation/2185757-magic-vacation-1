// modules
import handlePageLoad from './modules/handle-page-load.js';
import mobileHeight from './modules/mobile-height-adjust.js';
import slider from './modules/slider.js';
import menu from './modules/menu.js';
import footer from './modules/footer.js';
import chat from './modules/chat.js';
import result from './modules/result.js';
import form from './modules/form.js';
import social from './modules/social.js';
import FullPageScroll from './modules/full-page-scroll';
import {slideTextBottom} from './utils/slide-text-bottom';
import {initGame} from './modules/game.js';

// init modules
handlePageLoad();
mobileHeight();
slider();
menu();
footer();
chat();
result();
form();
social();
initGame();

const fullPageScroll = new FullPageScroll();
fullPageScroll.init();

slideTextBottom(`.intro__title`, 500, `transform`);
slideTextBottom(`.intro__date`, 500, `transform`);
slideTextBottom(`.slider__item-title`, 500, `transform`);
slideTextBottom(`.prizes__title`, 500, `transform`);
