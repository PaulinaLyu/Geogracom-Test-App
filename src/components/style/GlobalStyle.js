import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
	html {
		box-sizing: border-box;
	}

	*,
	*:before,
	*:after {
		box-sizing: inherit;
	}

	body {
		margin: 0;
		font-size: 15px;
		font-weight: normal;
		color: #000;
		overflow: hidden;
	}
	  	
	a {
		text-decoration: none;
		color: inherit;

		&:hover {
			text-decoration: none;
			cursor: pointer;
		}
	}

	h1,h2,h3,h4 {
		padding: 0;
		margin: 0;
		font-weight: bold;
	}

	button, input {
        cursor: pointer;
		font: inherit;
		border: 0;
		background-color: transparent;

		:focus {
			outline: none;
		}
	}

	input, label {
		display: block;
	}

	input {
		width: 200px;
		padding: 7px;
		margin-top: 5px;
		border: 2px solid #E7E7E7;
		border-radius: 5px;
		font-size: 13px;
		font-weight: normal;
	}

	.active {
		background-color: #E7E7E7;
	}
`;