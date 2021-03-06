import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const main = async() => {
    const allUsers = await prisma.user.findMany()
  console.log(allUsers)
} 

main()
  .catch((e) => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })