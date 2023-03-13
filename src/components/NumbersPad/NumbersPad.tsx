import React from 'react'
import './NumbersPad.scss'
import PadElement from '../../UI/PadElement'
import Stack from 'react-bootstrap/Stack'

const NumbersPad = () => {
  return (
    <Stack gap={2} className='operator-pad'>
      <Stack direction='horizontal' gap={2}>
        <PadElement size='md' text={7} />
        <PadElement size='md' text={8} />
        <PadElement size='md' text={9} />
      </Stack>
      <Stack direction='horizontal' gap={2}>
        <PadElement size='md' text={4} />
        <PadElement size='md' text={5} />
        <PadElement size='md' text={6} />
      </Stack>
      <Stack direction='horizontal' gap={2}>
        <PadElement size='md' text={1} />
        <PadElement size='md' text={2} />
        <PadElement size='md' text={3} />
      </Stack>
      <Stack direction='horizontal' gap={2}>
        <PadElement size='lg' text={0} />
        <PadElement size='md' text=',' />
      </Stack>
    </Stack>
  )
}

export default NumbersPad
