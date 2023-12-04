import Prisma from "../database/PrismaClient";

const save = async (title: string, deadline: string, username: string) => await Prisma.technology.create({
    data:{
        title: title,
        deadline: new Date(deadline),
        user: {
            connect: {
                username: username
            }
        }
    }
})

const findById = async (id: string) => await Prisma.technology.findUnique({
    where: {
        id: id
    }
})

const findByUsername = async (username: string) => await Prisma.user.findUnique({
    where: {
        username: username
    },
    select: {
        technologies: true
    }
})

const updateById = async (id: string, title: string, deadline: string) => await Prisma.technology.update({
    where: {
        id: id
    },
    data: {
        title: title,
        deadline: new Date(deadline)
    }
})

const updateStudiedPropertyById = async (id: string, studied: boolean) => await Prisma.technology.update({
    where: {
        id: id
    },
    data: {
        studied: studied
    }
})

const deleteById = async (id: string) => await Prisma.technology.delete({
    where: {
        id: id
    }
})

const serviceTechnology = {
    save,
    findByUsername,
    findById,
    updateById,
    updateStudiedPropertyById,
    deleteById
}

export default serviceTechnology