export type AuthStatusType = 'checking' | 'not-authenticated' | 'authenticated';

export interface JWTInfo {
  token: string;
  role: string;
  expiracion: string;
  ambiente: string;
  baseDatos: string;
  firstName: string;
  lastName: string;
  userName: string;
}

export interface AuthInfo {
  jwtInfo: JWTInfo;
  status: AuthStatusType;
}
