import prisma from "../lib/prisma";
import {
  defaultHomeContentEL,
  defaultHomeContentEN,
} from "../lib/home-content";

const PAGE_ID = "home";

async function main() {
  const row = await prisma.homePage.upsert({
    where: { id: PAGE_ID },
    create: {
      id: PAGE_ID,
      contentEL: defaultHomeContentEL as object,
      contentEN: defaultHomeContentEN as object,
    },
    update: {
      contentEL: defaultHomeContentEL as object,
      contentEN: defaultHomeContentEN as object,
    },
  });

  console.log("Home page seeded:", row.id, "updated at", row.updatedAt);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
