import {useDispatch, useSelector} from 'react-redux';
import {getAuthorizationStatus} from '../store/user/selectors';
import {useHistory} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../const';
import {postFavorite} from '../store/api-actions';


const useFavoriteButton = (id, isFavorite, screen) => {
  const authorizationStatus = useSelector(getAuthorizationStatus);
  const history = useHistory();

  const dispatch = useDispatch();

  const onClickBookmarkBtn = () => {
    if (authorizationStatus !== AuthorizationStatus.AUTH) {
      history.push(AppRoute.LOGIN);
    } else {
      dispatch(postFavorite(id, +!isFavorite, screen));
    }
  };

  return onClickBookmarkBtn;
};


export default useFavoriteButton;
