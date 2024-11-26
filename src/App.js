import logo from './logo.svg';  /*  Императивный стиль */
import './App.css';
import React from 'react';


export const App = () => {
  return React.createElement(
    "div",
    {
      className: "App"
    },
    React.createElement(
      "header",
      {
        className: "App-header"
      },
      React.createElement("img", {
        src: logo,
        className: "App-logo",
        alt: "logo"
      }),
      React.createElement(
        "p",
        null,
        "Edit ",
        React.createElement("code", null, "src/App.js"),
        " and save to reload."
      ),
      React.createElement(
        "a",
        {
          className: "App-link",
          href: "https://reactjs.org",
          target: "_blank",
          rel: "noopener noreferrer"
        },
        "Learn React"
      )
    ),
    React.createElement(
      "footer",
      null,
      React.createElement(
        "time",
        {
          className: "today_year"
        },
        new Date().getFullYear(),
        "  "
      )
    )
  );
};







/*

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
				  {new Date().getFullYear()}    Декларативный  стиль
				</time>
			</footer>
		</div>
	);
};


 */
