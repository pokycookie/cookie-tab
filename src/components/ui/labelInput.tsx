'use client'

import { ChangeEvent, HTMLInputTypeAttribute, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import styled from '@emotion/styled'

type TInputStatus = 'danger' | 'warning' | 'success'

export interface IInputInfo {
  status: TInputStatus
  message: string
}

interface IProps {
  lable: string
  type?: HTMLInputTypeAttribute
  value: string
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  info?: IInputInfo | null
}

export default function LabelInput(props: IProps) {
  const [onFill, setOnFill] = useState(false)

  const blurHandler = () => {
    if (props.value.trim() === '') setOnFill(false)
  }

  useEffect(() => {
    if (props.value.trim() !== '') setOnFill(true)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="w-full">
      <div className="relative">
        <motion.label
          className="absolute left-3"
          initial={{
            top: '50%',
            transform: 'translateY(-50%)',
            fontSize: '15px',
            color: zinc400,
          }}
          animate={{
            top: onFill ? 0 : '50%',
            transform: `translateY(${onFill ? '30%' : '-50%'})`,
            fontSize: onFill ? '11px' : '15px',
            color: onFill ? mainColor : zinc400,
          }}
        >
          {props.lable}
        </motion.label>
        <Input
          status={props.info?.status}
          type={props.type}
          onFocus={() => setOnFill(true)}
          onBlur={blurHandler}
          className="w-full p-3 pt-6 pb-2 text-sm font-medium border rounded-md text-zinc-800 focus:outline outline-1"
          value={props.value}
          onChange={props.onChange}
        />
      </div>
      {props.info ? (
        <InfoMessage className="pl-1 mt-2 text-sm" status={props.info.status}>
          {props.info.message}
        </InfoMessage>
      ) : null}
    </div>
  )
}

const red600 = '#dc2626'
const blue600 = '#2563eb'
const orange500 = '#f97316'
const zinc400 = '#a1a1aa'
const mainColor = '#2563eb'

const colorPicker = (status?: TInputStatus) => {
  switch (status) {
    case 'success':
      return blue600
    case 'warning':
      return orange500
    case 'danger':
      return red600
    default:
      return zinc400
  }
}

const InfoMessage = styled.p<Pick<IInputInfo, 'status'>>((props) => ({
  color: colorPicker(props.status),
}))

const Input = styled.input<Partial<Pick<IInputInfo, 'status'>>>((props) => ({
  borderColor: colorPicker(props.status),
  outlineColor: props.status ? colorPicker(props.status) : mainColor,
}))
