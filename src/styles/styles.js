import * as boxes from './box.styles.js';
import * as colors from './colors.styles.js';
import * as texts from './text.styles.js';
import { css, StyleSheet } from 'aphrodite';

export default {
	texts,
	boxes,
	colors,
	toClass(style) {
		return css(StyleSheet.create(style));
	}
}
