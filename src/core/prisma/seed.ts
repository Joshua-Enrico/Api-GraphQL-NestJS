import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function seed(){
    await prisma.user.create({
        data: {
            name: "Admin",
            email: "joshuaenrico123@gmail.com",
            password: "123456"
        }
    }
    );
}

seed()
    .catch(e => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    })
