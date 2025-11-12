import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Starting seed...');

  // Eliminar datos existentes (opcional)
  await prisma.product.deleteMany();
  console.log('Deleted existing products');

  // Crear productos de ejemplo
  const products = await prisma.product.createMany({
    data: [
      {
        nombre: 'Laptop Dell XPS 15',
        costo: 1200.0,
        precio: 1599.99,
        stock: 15,
        status: true,
      },
      {
        nombre: 'Mouse Logitech MX Master 3',
        costo: 50.0,
        precio: 99.99,
        stock: 50,
        status: true,
      },
      {
        nombre: 'Teclado Mecánico Corsair K95',
        costo: 80.0,
        precio: 149.99,
        stock: 30,
        status: true,
      },
      {
        nombre: 'Monitor LG UltraWide 34"',
        costo: 400.0,
        precio: 699.99,
        stock: 20,
        status: true,
      },
      {
        nombre: 'Webcam Logitech C920',
        costo: 40.0,
        precio: 79.99,
        stock: 45,
        status: true,
      },
      {
        nombre: 'Auriculares Sony WH-1000XM4',
        costo: 200.0,
        precio: 349.99,
        stock: 25,
        status: true,
      },
      {
        nombre: 'SSD Samsung 970 EVO 1TB',
        costo: 100.0,
        precio: 159.99,
        stock: 60,
        status: true,
      },
      {
        nombre: 'Tablet iPad Air',
        costo: 450.0,
        precio: 599.99,
        stock: 18,
        status: true,
      },
      {
        nombre: 'Impresora HP LaserJet',
        costo: 180.0,
        precio: 299.99,
        stock: 12,
        status: false,
      },
      {
        nombre: 'Router TP-Link AX3000',
        costo: 60.0,
        precio: 119.99,
        stock: 35,
        status: true,
      },
    ],
  });

  console.log(`Created ${products.count} products`);
  console.log('Seed completed successfully!');
}

main()
  .catch((e) => {
    console.error('Error during seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
