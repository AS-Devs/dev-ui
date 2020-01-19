import { configure, addDecorator, addParameters } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import '../assets/font.css';

// init viewport config
const newViewports = {
	kindleFire2: {
		name: 'Kindle Fire 2',
		styles: {
			width: '600px',
			height: '963px',
		},
	},
	kindleFireHD: {
		name: 'Kindle Fire HD',
		styles: {
			width: '533px',
			height: '801px',
		},
	},
};

addParameters({
	viewport: {
		viewports: {
			...INITIAL_VIEWPORTS,
			...newViewports,
		},
	},
});

// init decorator as the first decorator
addDecorator(withInfo);

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
