import React from 'react';
import area from '/share/area';

export default class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			message: 'hello fis3 react',
			count: 0
		}
	}

	componentDidMount() {
		setInterval(() => {
			this.setState({
				count: this.state.count + 1
			});
		}, 1e3);
	}

	render() {
		return <div>{this.state.message}, {this.state.count}
			{area.map(a => {
				return <p key={a.name}>{a.name}</p>
			})}
		</div>;
	}
}