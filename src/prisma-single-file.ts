import { PrismaClient } from "@prisma/client";
import inquirer from "inquirer";

const prisma = new PrismaClient();

// === Fungsi-fungsi modular ===

async function createUser() {
  const newUser = await prisma.user.create({
    data: {
      name: "Budi Santoso",
      email: "budi@contoh.com",
    },
  });
  console.log("User baru:", newUser);
}

async function readUsers() {
  const users = await prisma.user.findMany();
  console.log("Semua user:", users);
}

async function updateUser() {
  const user = await prisma.user.findFirst({ where: { email: "budi@contoh.com" } });
  if (!user) return console.log("User tidak ditemukan!");

  const updated = await prisma.user.update({
    where: { id: user.id },
    data: { name: "Budi Updated" },
  });
  console.log("User diupdate:", updated);
}

async function createPost() {
  const user = await prisma.user.findFirst({ where: { email: "budi@contoh.com" } });
  if (!user) return console.log("User tidak ditemukan!");

  const post = await prisma.post.create({
    data: {
      title: "Post Pertama",
      content: "Ini adalah konten post",
      authorId: user.id,
    },
  });
  console.log("Post dibuat:", post);
}

async function getUserWithPosts() {
  const user = await prisma.user.findFirst({
    where: { email: "budi@contoh.com" },
    include: { posts: true },
  });
  if (!user) return console.log("User tidak ditemukan!");
  console.log("User dengan posts:", JSON.stringify(user, null, 2));
}

async function runTransaction() {
  const user = await prisma.user.findFirst({ where: { email: "budi@contoh.com" } });
  if (!user) return console.log("User tidak ditemukan!");

  const result = await prisma.$transaction([
    prisma.user.create({
      data: {
        name: "Alice",
        email: "alice@contoh.com",
      },
    }),
    prisma.post.create({
      data: {
        title: "Post dari Alice",
        content: "Ini post dalam transaksi",
        authorId: user.id,
      },
    }),
  ]);

  console.log("Hasil transaksi:", result);
}

async function cleanupData() {
  await prisma.post.deleteMany();
  await prisma.user.deleteMany();
  console.log("Semua data berhasil dihapus!");
}

// === MENU INTERAKTIF ===

async function mainMenu() {
  const answer = await inquirer.prompt([
    {
      type: "list",
      name: "action",
      message: "Pilih aksi yang ingin dijalankan:",
      choices: [
        { name: "1. Buat user", value: "create" },
        { name: "2. Lihat semua user", value: "read" },
        { name: "3. Update user", value: "update" },
        { name: "4. Buat post untuk user", value: "post" },
        { name: "5. Lihat user beserta post", value: "join" },
        { name: "6. Jalankan transaksi", value: "tx" },
        { name: "7. Hapus semua data", value: "cleanup" },
        { name: "Keluar", value: "exit" },
      ],
    },
  ]);

  switch (answer.action) {
    case "create":
      await createUser();
      break;
    case "read":
      await readUsers();
      break;
    case "update":
      await updateUser();
      break;
    case "post":
      await createPost();
      break;
    case "join":
      await getUserWithPosts();
      break;
    case "tx":
      await runTransaction();
      break;
    case "cleanup":
      await cleanupData();
      break;
    case "exit":
      console.log("Keluar...");
      await prisma.$disconnect();
      process.exit();
  }

  console.log("\n"); // Spasi antar aksi
  await mainMenu(); // Kembali ke menu
}

mainMenu().catch(async (err) => {
  console.error("Terjadi error:", err);
  await prisma.$disconnect();
});
