import { Request, Response, Router } from 'express'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
export const UserRoutes = Router()

UserRoutes.get('/', async(req: Request, res: Response) => {
    const users = await prisma.user.findMany()
    return res.send(JSON.stringify(users))
})