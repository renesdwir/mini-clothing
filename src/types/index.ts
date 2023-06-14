import { ReactNode } from "react";

export interface CategoryTypes {
  id: number;
  title: string;
  imageUrl: string;
}
export interface UserAuthTypes {
  uid: string;
  displayName: string | null;
  email: string | null;
}
export interface ProductTypes {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
}
export interface ProviderProps {
  children: ReactNode;
}
