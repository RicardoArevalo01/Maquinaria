//Api Login

export interface TokenResponse {
  token: string;
  role: string;
  expiracion: string;
  ambiente: string;
  baseDatos: string;
  firstName: string;
  lastName: string;
  userName: string;
}

//ApirError

export interface ApiErrorResponse {
  Message: string;
  error_description: string;
}
