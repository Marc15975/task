"use client"
import React from 'react'
import {  useSession ,signOut} from "next-auth/react"

const page = () => {
  const { data: session, status } = useSession();
  return (
    <div>{JSON.stringify(session, null,2)}


    {JSON.stringify(status, null,2)}


        <button onClick={() => signOut()}>Sign out</button>
    </div>
  )
}

export default page
