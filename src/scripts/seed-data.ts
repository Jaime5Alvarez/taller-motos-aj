import { CreateDBClient } from "@/modules/shared/database/factories/CreateDBClient";
import {
  clients,
  clientVehicle,
  vehicles,
} from "@/modules/shared/database/infrastructure/drizzle/schema";

async function seedData() {
  const db = CreateDBClient();

  console.log("🌱 Seeding database...");

  // Seed vehicles
  const vehicleData = [
    {
      id: crypto.randomUUID(),
      name: "Honda CBR 600RR",
      description: "Motocicleta deportiva en excelente estado",
      price: 8500,
      mileage: 15000,
      year: 2020,
      fuel: "gasolina",
      createdAt: new Date("2024-01-15"),
    },
    {
      id: crypto.randomUUID(),
      name: "Yamaha MT-07",
      description: "Naked bike perfecta para ciudad",
      price: 6200,
      mileage: 22000,
      year: 2019,
      fuel: "gasolina",
      createdAt: new Date("2024-02-10"),
    },
    {
      id: crypto.randomUUID(),
      name: "BMW R1250GS",
      description: "Adventure bike con muchos extras",
      price: 15000,
      mileage: 8000,
      year: 2022,
      fuel: "gasolina",
      createdAt: new Date("2024-03-05"),
    },
    {
      id: crypto.randomUUID(),
      name: "Harley Davidson Street 750",
      description: "Cruiser americana clásica",
      price: 7800,
      mileage: 18000,
      year: 2018,
      fuel: "gasolina",
      createdAt: new Date("2024-01-28"),
    },
    {
      id: crypto.randomUUID(),
      name: "Ducati Monster 821",
      description: "Naked italiana con carácter",
      price: 9500,
      mileage: 12000,
      year: 2021,
      fuel: "gasolina",
      createdAt: new Date("2024-02-20"),
    },
  ];

  // Seed clients
  const clientData = [
    {
      id: crypto.randomUUID(),
      name: "Juan Carlos Martínez",
      email: "juan.martinez@email.com",
      phone: "+34 612 345 678",
      createdAt: new Date("2024-01-15"),
    },
    {
      id: crypto.randomUUID(),
      name: "María González López",
      email: "maria.gonzalez@email.com",
      phone: "+34 687 123 456",
      createdAt: new Date("2024-02-10"),
    },
    {
      id: crypto.randomUUID(),
      name: "Pedro Sánchez Ruiz",
      email: "pedro.sanchez@email.com",
      phone: "+34 654 987 321",
      createdAt: new Date("2024-03-05"),
    },
    {
      id: crypto.randomUUID(),
      name: "Ana Fernández Castro",
      email: "ana.fernandez@email.com",
      phone: "+34 623 456 789",
      createdAt: new Date("2024-01-28"),
    },
    {
      id: crypto.randomUUID(),
      name: "Carlos Rodríguez Vega",
      email: "carlos.rodriguez@email.com",
      phone: "+34 698 765 432",
      createdAt: new Date("2024-02-20"),
    },
  ];

  try {
    // Insert vehicles
    await db.insert(vehicles).values(vehicleData);
    console.log("✅ Vehicles seeded successfully");

    // Insert clients
    await db.insert(clients).values(clientData);
    console.log("✅ Clients seeded successfully");

    // Add some client vehicles
    const clientVehicleData = [
      {
        id: crypto.randomUUID(),
        clientId: clientData[0].id,
        carName: "Toyota Corolla",
        licensePlate: "1234-ABC",
        createdAt: new Date(),
      },
      {
        id: crypto.randomUUID(),
        clientId: clientData[1].id,
        carName: "Honda Civic",
        licensePlate: "5678-DEF",
        createdAt: new Date(),
      },
      {
        id: crypto.randomUUID(),
        clientId: clientData[0].id,
        carName: "BMW X3",
        licensePlate: "9012-GHI",
        createdAt: new Date(),
      },
    ];

    await db.insert(clientVehicle).values(clientVehicleData);
    console.log("✅ Client vehicles seeded successfully");

    console.log("🎉 Database seeding completed!");
  } catch (error) {
    console.error("❌ Error seeding database:", error);
    throw error;
  }
}

// Run the seeding function
seedData()
  .then(() => {
    console.log("Seeding process completed");
    process.exit(0);
  })
  .catch((error) => {
    console.error("Seeding process failed:", error);
    process.exit(1);
  });
