import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient }

// const prisma =
//   globalForPrisma.prisma || new PrismaClient()
const prisma = globalForPrisma.prisma || new PrismaClient({
  log: ['query', 'info', 'warn', 'error'],  // Logs Prisma queries and errors
});


if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma


export default prisma;