import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import './App.scss';

function useQuery() {
	return new URLSearchParams(useLocation().search);
}

const App = () => {
	const [fullName, setFullName] = useState('');
	const query = useQuery();
	const middleName = query.get('midname');

	useEffect(() => {
		axios
			.get(`/fullname${middleName ? `?midname=${middleName}` : ``}`)
			.then((res) => {
				setFullName(res.data);
			})
			.catch((err) => {
				console.error(err);
			});
	}, []);

	return (
			<div className='App'>
				<header className='App-header'>
					<h2>Front & Back Side Deploy</h2>
					<h4>{fullName}</h4>
					<a
						className='App-link'
						href='https://github.com/tkcwebdev/frontandbacksidedeploy'
						target='_blank'
						rel='noopener noreferrer'
					>
						Github Repo
					</a>
					<a
						className='App-link'
						href='https://nameless-sierra-32717.herokuapp.com/sample-route?midname=Johnson'
						target='_blank'
						rel='noopener noreferrer'
					>
						Heroku Link
					</a>
				</header>
			</div>
	);
};

export default App;
