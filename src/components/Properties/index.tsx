import React from 'react'
import Highlight from '../Highlight'

const users: Record<string, Object> = {
  CiRmZDA2MTRkMy1jMzlhLTQ3ODEtYjdiZC04Yjk2ZjVhNTEwMGQSBWxvY2Fs: {
    id: 'rick@the-citadel.com',
    name: 'Rick Sanchez',
    email: 'rick@the-citadel.com',
    roles: ['admin', 'evil_genius'],
  },
  'rick@the-citadel.com': {
    id: 'rick@the-citadel.com',
    name: 'Rick Sanchez',
    email: 'rick@the-citadel.com',
    roles: ['admin', 'evil_genius'],
  },
  CiRmZDM2MTRkMy1jMzlhLTQ3ODEtYjdiZC04Yjk2ZjVhNTEwMGQSBWxvY2Fs: {
    id: 'beth@the-smiths.com',
    name: 'Beth Smith',
    email: 'beth@the-smiths.com',
    roles: ['viewer'],
  },
  'beth@the-smiths.com': {
    id: 'beth@the-smiths.com',
    name: 'Beth Smith',
    email: 'beth@the-smiths.com',
    roles: ['viewer'],
  },
  CiRmZDE2MTRkMy1jMzlhLTQ3ODEtYjdiZC04Yjk2ZjVhNTEwMGQSBWxvY2Fs: {
    id: 'morty@the-citadel.com',
    name: 'Morty Smith',
    email: 'morty@the-citadel.com',
    roles: ['editor'],
  },
  'morty@the-citadel.com': {
    id: 'morty@the-citadel.com',
    name: 'Morty Smith',
    email: 'morty@the-citadel.com',
    roles: ['editor'],
  },
  CiRmZDI2MTRkMy1jMzlhLTQ3ODEtYjdiZC04Yjk2ZjVhNTEwMGQSBWxvY2Fs: {
    id: 'summer@the-smiths.com',
    name: 'Summer Smith',
    email: 'summer@the-smiths.com',
    roles: ['editor'],
  },
  'summer@the-smiths.com': {
    id: 'summer@the-smiths.com',
    name: 'Summer Smith',
    email: 'summer@the-smiths.com',
    roles: ['editor'],
  },
  CiRmZDQ2MTRkMy1jMzlhLTQ3ODEtYjdiZC04Yjk2ZjVhNTEwMGQSBWxvY2Fs: {
    id: 'jerry@the-smiths.com',
    name: 'Jerry Smith',
    email: 'jerry@the-smiths.com',
    roles: ['viewer'],
  },
  'jerry@the-smiths.com': {
    id: 'jerry@the-smiths.com',
    name: 'Jerry Smith',
    email: 'jerry@the-smiths.com',
    roles: ['viewer'],
  },
}

const Properties = ({ user }: { user: string }) => {
  const json = JSON.stringify(users[user], null, 2)
  return (
    <Highlight language="rego" fontSize="12px">
      {json || ''}
    </Highlight>
  )
}

export default Properties
