export interface Vehicle {
  id: string;
  name: string;
  description: string;
  price: number;
  mileage: number;
  year: number;
  fuel: string;
  createdAt: Date;
}

export interface VehicleFeature {
  id: string;
  vehiculeId: string;
  feature: string;
  createdAt: Date;
}

export interface VehicleImage {
  id: string;
  vehiculeId: string;
  imageUrl: string;
  createdAt: Date;
}

export interface VehicleWithDetails extends Vehicle {
  features: VehicleFeature[];
  images: VehicleImage[];
}
