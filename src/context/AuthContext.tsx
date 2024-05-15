import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from 'react';
import {LoginData, Place, UserInfo} from '../interfaces/UserInterface';
import {sleep} from '../helpers/sleep';
import {useStorage} from '../data/useStorage';
import {useRequest} from '../api/useRequest';
import {TokenResponse} from '../interfaces/BaseApiInterface';
import {ApiEndpoints} from '../api/routes';
import {authReducer} from './AuthReducer';

const initialUserInfo: UserInfo = {
  username: '',
  email: '',
  identification: '',
  selectedPlace: {
    idEstablishment: 0,
    establishmentName: '',
    placeName: '',
    googleAddress: '',
    location: {
      latitude: 0,
      longitude: 0,
    },
  },
  favPlaces: [],
};

type AuthContextProps = {
  status: StatusTypes;
  //signUp: (obj: CreateUser, pass: string) => Promise<void>;
  signIn: (obj: LoginData) => Promise<void>;
  logOut: () => void;
  JWTInfo: TokenResponse;
};

type StatusTypes = 'checking' | 'authenticated' | 'notauthenticated';

export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({children}: any) => {
  const {SaveJWTInfo, GetJWTInfo, CheckJWTInfo, RemoveAllData} = useStorage();
  const {postRequest} = useRequest();
  const [status, setstatus] = useState<StatusTypes>('checking');
  const [JWTInfo, setJWTInfo] = useState<TokenResponse>({} as TokenResponse);
  //const [userInfo, dispatch] = useReducer(authReducer, initialUserInfo);

  useEffect(() => {
    checkToken();
  }, []);

  /**
   * Checks if there is a token in local storage and attempts to authenticate with it
   * @returns void
   */

  //#region Authentication

  const checkToken = async (): Promise<void> =>
    await sleep(2).then(
      async () =>
        await CheckJWTInfo().then(async check =>
          check
            ? await GetJWTInfo().then(jwtInfo => {
                setJWTInfo(jwtInfo);
                setstatus('authenticated');
              })
            : setstatus('notauthenticated'),
        ),
    );

  const signIn = async ({userName, password}: LoginData) => {
    console.log('sign in');
    setstatus('authenticated');
    return;
    // Function to login
    await postRequest<TokenResponse>(ApiEndpoints.Security.login, {
      userName,
      password,
    })
      .then(async jwtInfo => {
        await SaveJWTInfo(jwtInfo); // Save token in asyncstorage
        setJWTInfo(jwtInfo); // Set token in context
        setstatus('authenticated');
      })
      .catch(() => {});
  };

  const logOut = async () => {
    await RemoveAllData();
    //closeConnection();
    setstatus('notauthenticated');
  };
  //#endregion

  /* const selectPlace = (place: Place) => {
    dispatch({
      type: 'SELECTED_PLACE',
      selectedPlace: place,
    });
  }; */

  //#region UserInformation

  //#endregion
  ///holi como estamos muchachos

  return (
    <AuthContext.Provider
      value={{
        status,
        JWTInfo,
        signIn,
        logOut,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
