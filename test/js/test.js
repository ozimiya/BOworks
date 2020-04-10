import 'babel-polyfill';

import accordion from '../../src/components/accordion2.js';
import test from '../../src/components/test.js';

global.test = () => {
    console.log('start test.js');
	accordion({ openTrigger: 'jsc-open-btn', closeTrigger: 'jsc-close-btn', target: 'jsc-modal-body' });
	// test({ maList : 'jsc-body', maHead: 'jsc-head' })
};