import type { Request, Response, NextFunction } from 'express';
import { prisma } from '../config/db';

export const login = async(req: Request, res: Response, next: NextFunction) => {
    try {
        //const { email, password } = req.body;
        console.log("asd");

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