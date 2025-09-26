export interface Client {
  id: string;
  name: string;
  email: string;
  phone: string;
  createdAt: Date;
}

export interface ClientVehicle {
  id: string;
  clientId: string;
  carName: string;
  licensePlate: string;
  createdAt: Date;
}

export interface ClientWithVehicles extends Client {
  vehicles?: ClientVehicle[];
}
