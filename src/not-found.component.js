import React from 'react';
import { texts } from 'styles';

export default function NotFound() {
	window.location.hash = '#/dashboard';
	return null;
}
