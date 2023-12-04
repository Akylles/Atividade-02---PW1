import Prisma from "../database/PrismaClient";

const save = async (name: string, username: string) => await Prisma.user.create({
    data: {
        name,
        username
    }
})

const findAll = async () => await Prisma.user.findMany()

const findById = async (id: string) => await Prisma.user.findUnique({
    where: {
        id: id
    }
})

const findByUsername = async (username: string) => await Prisma.user.findFirst({
    where: {
        username: username,
    },
})

const serviceUser = {
    save,
    findAll,
    findById,
    findByUsername
}

export default serviceUser