import prisma from "../lib/prisma";
import {
  defaultFooterContentEL,
  defaultFooterContentEN,
} from "../lib/footer-content";

const FOOTER_ID = "footer";

async function main() {
  const row = await prisma.siteFooter.upsert({
    where: { id: FOOTER_ID },
    create: {
      id: FOOTER_ID,
      contentEL: defaultFooterContentEL as object,
      contentEN: defaultFooterContentEN as object,
    },
    update: {
      contentEL: defaultFooterContentEL as object,
      contentEN: defaultFooterContentEN as object,
    },
  });

  console.log("Footer seeded:", row.id, "updated at", row.updatedAt);
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
