import { Component } from 'react';
import Toolbar from '../toolbar/Toolbar';
import Sauces from '../sauces/Sauces';
import './Saucepan.css';

export default class Saucepan extends Component {

	render() {
		return (
			<div>
				<Toolbar title={"Saucepan"}/>
				<Sauces/>
			</div>
		);
	}
}
