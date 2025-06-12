Tentu! Berikut contoh `README.md` untuk proyek `prisma-menu` kamu yang berisi CLI interaktif untuk menjalankan operasi CRUD dan relasi menggunakan Prisma:

---

### 📄 `README.md`

```markdown
# Prisma CLI Menu - CRUD Interaktif

Proyek ini adalah contoh aplikasi Node.js menggunakan **Prisma ORM** dengan **CLI interaktif** berbasis `inquirer`. Aplikasi ini memungkinkan Anda memilih operasi database seperti **create**, **read**, **update**, **delete**, dan **relasi antar tabel** secara langsung melalui menu di terminal.

## 📦 Struktur Proyek

```

prisma-project/
├── prisma/
│   └── schema.prisma        # Skema Prisma (model User, Post, dll)
├── src/
│   └── prisma-menu.ts       # Program utama CLI interaktif
├── node\_modules/
├── package.json
└── README.md

````

## 🚀 Fitur Utama

- ✅ Create user
- 🔍 Read semua user
- ✏️ Update user
- 📝 Buat post untuk user
- 🔗 Lihat user beserta post-nya
- 🔁 Transaksi DB
- 🧹 Bersihkan seluruh data (delete)

## 📋 Prasyarat

Pastikan Anda sudah menginstal:

- [Node.js](https://nodejs.org/) v18 atau lebih baru
- [Prisma CLI](https://www.prisma.io/docs/getting-started)

## ⚙️ Instalasi

```bash
git clone https://github.com/username/prisma-menu.git
cd prisma-menu

npm install
````

Inisialisasi Prisma dan database:

```bash
npx prisma init
# Edit schema.prisma untuk model User dan Post
npx prisma migrate dev --name init
```

## 🧪 Menjalankan CLI

Jalankan aplikasi dengan:

```bash
npx ts-node src/prisma-menu.ts
```

Lalu pilih operasi yang ingin dijalankan dari daftar menu seperti:

```
? Pilih aksi yang ingin dijalankan:
  ❯ 1. Buat user
    2. Lihat semua user
    ...
```

## 🧱 Contoh Model `schema.prisma`

```prisma
model User {
  id     Int     @id @default(autoincrement())
  name   String
  email  String  @unique
  posts  Post[]
}

model Post {
  id        Int    @id @default(autoincrement())
  title     String
  content   String
  authorId  Int
  author    User   @relation(fields: [authorId], references: [id])
}
```

## 📚 Teknologi yang Digunakan

* [Prisma ORM](https://www.prisma.io/)
* [TypeScript](https://www.typescriptlang.org/)
* [Inquirer.js](https://www.npmjs.com/package/inquirer)
* SQLite (default) atau sesuaikan dengan database lain

## 📖 Lisensi

Proyek ini bebas digunakan untuk pembelajaran dan eksperimen. Silakan modifikasi sesuai kebutuhan Anda.

```

---

Kalau kamu ingin README ini dalam **bahasa Inggris**, atau ingin saya tambahkan contoh output terminal dan gambar (screenshot), tinggal bilang ya!
```
