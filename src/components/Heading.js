import sunIcon from '../images/icon-sun.svg'
import moonIcon from '../images/icon-moon.svg'

function Heading({ onChangeMode, mode}) {
	
	return (
		<div className="heading">
			<h1>todo</h1>
			<img
				className="change-mode"
				src={mode === 'dark' ? sunIcon : moonIcon}
				alt="sun icon"
				onClick={onChangeMode}></img>
		</div>
	)
}

export default Heading
