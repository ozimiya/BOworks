import 'babel-polyfill';

import accordion from '../../src/components/accordion.js';

global.test = () => {
	accordion({ openTrigger: 'jsc-open-btn', closeTrigger: 'jsc-close-btn', target: 'jsc-modal-body' });
};