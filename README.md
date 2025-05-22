# Review-ORM-dan-Active-Record
🔍 Demo penggunaan Prisma ORM untuk operasi database (PostgreSQL) dengan TypeScript.
📌 Fitur: CRUD, Relasi, Transaksi, Seeder, dan Raw Query.

📋 Persyaratan
Node.js v18+

PostgreSQL

Git (opsional)

🚀 Instalasi
1. Clone Repository
bash
git clone https://github.com/username/prisma-orm-demo.git
cd prisma-orm-demo
2. Install Dependencies
bash
npm install
3. Setup Database
Buat database di PostgreSQL

Konfigurasi koneksi di .env:

env
DATABASE_URL="postgresql://postgres:252005@localhost:5433/PostgreSQL"

🛠️ Penggunaan
1. Jalankan Migrasi Database
bash
npx prisma migrate dev --name init
2. Generate Prisma Client
bash
npx prisma generate
3. Isi Data Dummy (Seeder)
bash
npx ts-node src/seed.ts
4. Jalankan Program Utama
bash
npx ts-node src/index.ts
