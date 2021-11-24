import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router'

export default function Team() {
  const [team, setTeam] = useState()
  const { teamId } = useParams()
  return (
    <div>
      <h1>club</h1>
    </div>
  )
}
