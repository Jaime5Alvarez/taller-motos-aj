export type VehicleStatus = "available" | "sold";

export interface Vehicle {
  id: string;
  name: string;
  description: string;
  price: number;
  mileage: number;
  year: number;
  fuel: string;
  status: VehicleStatus;
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
  order: number;
  createdAt: Date;
}

export interface VehicleWithDetails extends Vehicle {
  features: VehicleFeature[];
  images: VehicleImage[];
}
