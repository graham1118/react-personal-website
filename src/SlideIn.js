import './slide.css';

const SlideIn = ({children, startAnimation}) => {
	const transitionProperties = startAnimation ? {left: '18px'} : {};
	return <div className="slide-in" style={transitionProperties}>{children}</div>;
};

export default SlideIn;



