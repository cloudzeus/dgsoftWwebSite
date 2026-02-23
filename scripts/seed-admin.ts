import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
    const email = 'gkozyris@i4ria.com'
    const textPassword = '1f1femsk'
    const hashedPassword = await bcrypt.hash(textPassword, 10)

    const admin = await prisma.user.upsert({
        where: { email },
        update: {
            password: hashedPassword,
            role: 'ADMIN',
        },
        create: {
            email,
            password: hashedPassword,
            role: 'ADMIN',
            name: 'Admin',
        },
    })

    console.log('Admin user seeded:', admin.email)
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
