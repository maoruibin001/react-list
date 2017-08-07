import {connect} from 'react-redux';
import Link from '../components/Link';
import {setVisibilityFilter} from '../actions'


const mapStateToProps = (state, ownProps) => {
	return {
		active: state.visibleFilter === ownProps.filter
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		onClick: () => {
			dispatch(setVisibilityFilter(ownProps.filter));
		}
	}
}

const FooterLink = connect(
		mapStateToProps,
		mapDispatchToProps
	)(Link);
export  default FooterLink;