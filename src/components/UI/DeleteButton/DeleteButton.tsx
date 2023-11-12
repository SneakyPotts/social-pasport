'use client'

import { DeleteIcon } from '@chakra-ui/icons'

import React from 'react'

import type { DeleteButtonProps } from './DeleteButton.props'
import {removeStudentAction} from "@/actions/student";


export function DeleteButton({studentId, ...props}: DeleteButtonProps) {
  return (
    <button {...props} onClick={() => removeStudentAction(studentId)}>
      <DeleteIcon w={5} h={5} color={'red.500'}/>
    </button>
  )
}
