import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import App from '../../components/App';
import { AppState } from '../../store';
import { getTopPosts as getTopPostsAction } from '../../actions';

const mapStateToProps = (state: AppState) => {
  const { posts } = state;
  return { ...posts };
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getTopPosts: () => getTopPostsAction(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
