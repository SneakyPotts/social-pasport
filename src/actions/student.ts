'use server'

// import prisma from "@/prisma";
import {revalidatePath} from "next/cache";
import {getClient} from "@/prisma";

const prisma = await getClient()

export async function createStudentAction(data: FormData) {
  const name = data.get('name')
  const born = data.get('born')
  const phone = data.get('phone')

  if (!name || !born || !phone) {
    throw new Error('Error createStudentAction, empty required fields')
  }

  const reqData = {
    name: name.toString(),
    born: new Date(born.toString()),
    address: data.get('address')?.toString(),
    phone: phone.toString(),
    fatherName: data.get('fatherName')?.toString(),
    motherName: data.get('motherName')?.toString(),
    description: data.get('description')?.toString(),
  }

  console.log('reqData',reqData)

  await prisma.student.create({
    data: reqData
  })

  revalidatePath('/')
}

export async function removeStudentAction(id: number) {
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
