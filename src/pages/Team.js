import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router'

export default function Team() {
  const [team, setTeam] = useState()
  const { teamId } = useParams()

  useEffect(() => {
    const options = {
      method: 'GET',
      url: `http://api.football-data.org/v2/teams/${teamId}`,
      headers: {
        'X-Auth-Token': 'ea0130e692a3472889646ef54e20b7e3',
      },
    }

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data)
        setTeam(response.data)
      })
      .catch(function (error) {
        console.error(error)
      })
  }, [teamId])

  console.log(team)

  return (
    <div>
      {team === undefined ? (
        'Wait a moment'
      ) : (
        <div>
          <img src={team.crestUrl} alt={`${team.name} emblem`} />
          <h1>{team.name}</h1>
          <div>
            <p>
              <strong>Founded:</strong> {team.founded}
            </p>
            <p>
              <strong>Stadium:</strong> {team.venue}
            </p>
            <p>
              <strong>Address:</strong> {team.address}
            </p>
            <p>
              <strong>Active competitions:</strong>
            </p>
            <ul>
              {team.activeCompetitions.map((c) => {
                return <li key={c.id}>{c.name}</li>
              })}
            </ul>
            <p>
              <strong>Squad:</strong>
            </p>
            <ul>
              {team.squad.map((s) => {
                return <li key={s.id}>{s.name}</li>
              })}
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}
