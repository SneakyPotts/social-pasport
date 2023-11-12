import type { NextApiResponse } from 'next'
import {getClient} from "@/prisma";
// import prisma from "@/prisma";

const prisma = await getClient()

export const POST = async (
  req: Request,
  res: NextApiResponse,
) => {
  // const studentData = req.body;

  const data = await req.formData()

  const name = data.get('name')
  const born = data.get('born')
  const phone = data.get('phone')

  if (!name || !born || !phone) {
    return
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

  try {
    const result = await prisma.student.create({
      data: {
        ...reqData,
      },
    })

    return res.status(201).json(result)
  } catch (error) {
    console.error(error);
    return res.status(500).send({ error: 'Failed to create student.' })
  }
}
