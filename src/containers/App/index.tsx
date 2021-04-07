import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import App from '../../components/App';
import { AppState } from '../../store';
import {
  getCommentsFromIds as getCommentsFromIdsAction,
  getTopStories as getTopStoriesAction,
} from '../../actions';

const mapStateToProps = (state: AppState) => {
  const { posts } = state;
  return { ...posts };
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getCommentsFromIds: (ids: Array<number>) => getCommentsFromIdsAction(dispatch, ids),
  getTopStories: () => getTopStoriesAction(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
