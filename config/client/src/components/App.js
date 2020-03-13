import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchUser }  from '../actions'

import Header from './Header'

const Dashboard = () => <div>Dashboard</div>;
const SurveyNew = () => <div>SurveyNew</div>;
const Landing = () => <div>Landing</div>;

class App extends React.Component {

	componentDidMount () {
		this.props.fetchUser();
	}

	render() {
		return (
			<div>
				  <BrowserRouter>
					<div>
						<Header />
						<Route exact path="/" component={Landing}/>
						<Route exact path="/surveys" component={Dashboard}/>
						<Route path="/surveys/new" component={SurveyNew}/>
					</div>
				  </BrowserRouter>
			</div>
		)
	}
}

export default connect(null, { fetchUser } )(App);
