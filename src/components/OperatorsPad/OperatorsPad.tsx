import React from 'react'
import './OperatorsPad.scss'
import Stack from 'react-bootstrap/Stack'
import PadElement from '../../UI/PadElement'

const OperatorsPad = () => {
  return (
    <Stack direction='horizontal' gap={3}>
      <PadElement text='/' />
      <PadElement text='x' />
      <PadElement text='-' />
      <PadElement text='+' />
    </Stack>
  )
}

export default OperatorsPad
