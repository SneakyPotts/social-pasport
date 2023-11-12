'use server'

// import prisma from "@/prisma";
import {revalidatePath} from "next/cache";
import {getClient} from "@/prisma";

interface Student {
  name: string
  born: string
  address?: string
  phone: string
  fatherName?: string
  motherName?: string
  description?: string
}

export async function createStudentAction(data: Student) {
  const prisma = await getClient()

  const reqData = {...data, born: new Date(data.born.toString())}

  await prisma.student.create({
    data: reqData
  })

  revalidatePath('/')
}

export async function removeStudentAction(id: number) {
  const prisma = await getClient()

  if (!id) {
    throw new Error('Error deleteStudentAction, required ID')
  }

  await prisma.student.delete({
    where: {
      id
    }
  })

  revalidatePath('/')
}
