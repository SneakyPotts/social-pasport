import { NextResponse } from 'next/server'

import ExtraActivities from '@/app/models/ExtraActivities'
import connect from '@/helpers/db'

export async function GET(request: Request) {
  try {
    await connect()

    const child = await ExtraActivities.find()

    return NextResponse.json(child, { status: 200 })
  } catch (error: any) {
    console.error(error) // log error on server side
    return NextResponse.json({ message: 'Database error' }, { status: 500 })
  }
}
