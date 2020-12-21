import { Component } from 'react';
import i18n from 'i18next';
import Toolbar from '../toolbar/Toolbar';
import Sauces from '../sauces/Sauces';
import './Saucepan.css';

export default class Saucepan extends Component {

	render() {
		return (
			<div>
				<Toolbar title={ i18n.t("app_name") }/>
				<Sauces/>
			</div>
		);
	}
}
