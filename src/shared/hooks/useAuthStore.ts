import {checking, startChecking, startLogOut, startSignIn} from '../auth';
import {useAppStore} from './useAppStore';

export const useAuthStore = () => {
  const {auth, dispatch} = useAppStore();
  const signIn = async (email: string, password: string) =>
    dispatch(startSignIn(email, password));
  const logOut = async () => dispatch(startLogOut());
  const checkingAuth = async () => dispatch(startChecking());
  return {auth, signIn, logOut, checkingAuth};
};
