export interface LoginData {
  userName: string;
  password: string;
}

export interface userLocation {
  latitude: number;
  longitude: number;
}

export interface Polygons {
  points: userLocation[];
}

export interface Place {
  idEstablishment: number;
  establishmentName: string;
  placeName: string;
  googleAddress: string;
  location: userLocation;
}

export interface UserInfo {
  username: string;
  email: string;
  identification: string;
  selectedPlace: Place;
  favPlaces: Place[];
}
