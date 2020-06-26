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

export interface Product {
  _id: string;
  name: string;
  description: string;
  productImage: string;
  price: number;
}

export interface Alert {
  title: string;
  message: string;
  type: AlertType;
}

export interface Order {
  _id: string;
  products?: Array<Product>;
  customer?: Customer;
  shippingAddress?: ShippingAddress;
  total?: Number;
  createdAt?: Date;
}
