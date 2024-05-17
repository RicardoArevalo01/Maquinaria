import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '..';

export const useAppStore = () => {
  const auth = useSelector((store: RootState) => store.auth);
  const connection = useSelector((store: RootState) => store.connection);
  const permission = useSelector((store: RootState) => store.permission);
  const theme = useSelector((store: RootState) => store.theme);
  const dispatch = useDispatch<AppDispatch>();
  return {auth, connection, permission, theme, dispatch};
};
