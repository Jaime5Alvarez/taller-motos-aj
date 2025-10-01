import { auth } from "@/lib/auth";

// Parsear argumentos de línea de comandos
const name = process.argv[2];
const email = process.argv[3];
const password = process.argv[4];

// Validar argumentos requeridos
if (!name || !email || !password) {
  console.error(
    "❌ Error: Los argumentos --name, --email y --password son requeridos",
  );
  console.log("\n📝 Uso:");
  console.log(
    "bun run src/scripts/create-user.tsx 'Juan Pérez' juan@example.com miPassword123",
  );
  console.log("\n📝 Uso con flags cortos:");
  console.log(
    "bun run src/scripts/create-user.tsx -n 'Juan Pérez' -e juan@example.com -p miPassword123 [-i url] [-c url]",
  );
  process.exit(1);
}

console.log("🚀 Creando usuario con los siguientes datos:");
console.log(`👤 Nombre: ${name}`);
console.log(`📧 Email: ${email}`);
console.log(`🔒 Password: ${"*".repeat(password.length)}`);

const data = await auth.api.signUpEmail({
  body: {
    name: name,
    email: email,
    password: password,
  },
});

console.log("✅ Usuario creado exitosamente:");
console.log(data);
