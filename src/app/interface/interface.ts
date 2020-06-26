import { AlertType } from '../enums/enum';

export interface Location {
  coordinates: Array<Number>;
}

export interface Customer {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNo: string;
  profileImage: string;
  location: Location;
}

export interface ShippingAddress {
  streetAddress: string;
  city: string;
  state: string;
  zipCode: number;
}

export interface Alert {
  title: string;
  message: string;
  type: AlertType;
}
