import logo from './logo.svg';  /*  Императивный стиль */
import './App.css';

export const App = () => {

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
			<footer>
				<time className="today_year">
				  {new Date().getFullYear()}  {/*  Декларативный  стиль */}
				</time>
			</footer>
		</div>
	);
};


