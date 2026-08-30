import type { Request, Response, NextFunction } from 'express';
import { prisma } from '@/config/db';
import { User } from '@/types/user';

export const user = async(req: Request, res: Response, next: NextFunction) => {
    try {
        //const { email, password } = req.body;
        const user: User = req.body;

        /*const newUser = await prisma.user.create({
            data: {
                name: "Alice",
                email: "alic1e@prisma.io",
            },
        });*/

        const users = await prisma.user.findMany();

        res.status(200).json({ token:  users });

    } catch (error) {
        next(error);
    }
}
