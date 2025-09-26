import { auth } from "@/lib/auth";
import { parseArgs } from "util";

// Parsear argumentos de línea de comandos
const { values } = parseArgs({
    args: Bun.argv,
    options: {
        name: {
            type: 'string',
            short: 'n'
        },
        email: {
            type: 'string',
            short: 'e'
        },
        password: {
            type: 'string',
            short: 'p'
        }
    },
    strict: true,
    allowPositionals: true,
});

// Validar argumentos requeridos
if (!values.name || !values.email || !values.password) {
    console.error("❌ Error: Los argumentos --name, --email y --password son requeridos");
    console.log("\n📝 Uso:");
    console.log("bun run src/scripts/create-user.tsx --name 'Juan Pérez' --email juan@example.com --password miPassword123 [--image url] [--callbackURL url]");
    console.log("\n📝 Uso con flags cortos:");
    console.log("bun run src/scripts/create-user.tsx -n 'Juan Pérez' -e juan@example.com -p miPassword123 [-i url] [-c url]");
    process.exit(1);
}

console.log("🚀 Creando usuario con los siguientes datos:");
console.log(`👤 Nombre: ${values.name}`);
console.log(`📧 Email: ${values.email}`);
console.log(`🔒 Password: ${'*'.repeat(values.password.length)}`);

const data = await auth.api.signUpEmail({
    body: {
        name: values.name,
        email: values.email,
        password: values.password,
    },
});

console.log("✅ Usuario creado exitosamente:");
console.log(data);