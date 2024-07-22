import React from 'react';
import {ReactComponent as Logo} from './images/DQS_logo.svg';

const Header = () => {
	return (
		<header>
			<Logo className='nav-logo' />
			<p className='header-title'>Key Master Application&trade;</p>
		</header>
	)
}

export default Header