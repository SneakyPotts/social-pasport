import { NextResponse } from 'next/server'

import Child from '@/app/models/Child'
import connect from '@/helpers/db'

export async function GET(request: Request) {
  try {
    await connect()

    const child = await Child.find()

    return NextResponse.json(child, { status: 200 })
  } catch (error: any) {
    console.error(error) // log error on server side
    return NextResponse.json({ message: 'Database error' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    await connect()

    const { name, born, address, phone, father, mother, description } = await request.json()
    const child = new Child({ name, born, address, phone, father, mother, description })

    await child.save()

    return NextResponse.json({ message: 'Child data saved successfully' }, { status: 201 })
  } catch (error: any) {
    console.error(error) // log error on server side
    return NextResponse.json({ message: 'Create child - database error' }, { status: 500 })
  }
}
