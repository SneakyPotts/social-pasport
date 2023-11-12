import '@/styles/styles.scss';

import {CreateStudent} from "@/components/CreateStudent";
// import prisma from "@/prisma";
const prisma = await getClient()

import moment from "moment";
import {DeleteButton} from "@UI/DeleteButton";
import {getClient} from "@/prisma";

export default async function Home() {
  const students = await prisma.student.findMany({
    orderBy: {
      name: 'asc'
    },
  })

  return (
    <main className='container'>
      <CreateStudent/>
      <ul className='table'>
        <li className='tableRow head'>
          <span className='tableCell'>{"Ім'я"}</span>
          <span className='tableCell'>{'д / н'}</span>
          <span className='tableCell'>{'Адреса'}</span>
          <span className='tableCell'>{'Телефон'}</span>
          <span className='tableCell'>{'Батько'}</span>
          <span className='tableCell'>{'Мати'}</span>
          <span className='tableCell'>{'Примітка'}</span>
          <span className='tableCell delete'></span>
        </li>
        {students.map(v => (
          <li key={v.id} className='tableRow'>
            <span className='tableCell'>{v?.name}</span>
            <span className='tableCell'>{moment(v?.born).format('DD.MM.YYYY')}</span>
            <span className='tableCell'>{v?.address || '-'}</span>
            <span className='tableCell'>{v?.phone  || '-'}</span>
            <span className='tableCell'>{v?.fatherName || '-'}</span>
            <span className='tableCell'>{v?.motherName || '-'}</span>
            <span className='tableCell'>{v?.description || '-'}</span>
            <DeleteButton
              type='button'
              className='tableCell delete'
              studentId={v.id}
            />
          </li>
        ))}
      </ul>
    </main>
  )
}
