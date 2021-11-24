import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router'

export default function MatchDetail() {
  const [match, setMatch] = useState()
  const { matchId } = useParams()

  useEffect(() => {
    const match = {
      method: 'GET',
      url: `http://api.football-data.org/v2/matches/${matchId}`,
      headers: {
        'X-Auth-Token': 'ea0130e692a3472889646ef54e20b7e3',
      },
    }

    axios
      .request(match)
      .then(function (response) {
        console.log(response.data.match)
        setMatch(response.data.match)
      })
      .catch(function (error) {
        console.error(error)
        // setHasError(true)
      })
  }, [matchId])

  const scoreHomeTeam =
    match === undefined
      ? 'Loading..'
      : match.score.fullTime.homeTeam === 0
      ? '0'
      : match.score.fullTime.homeTeam
  const scoreAwayTeam =
    match === undefined
      ? 'Loading..'
      : match.score.fullTime.awayTeam === 0
      ? '0'
      : match.score.fullTime.awayTeam

  return (
    <div>
      {match === undefined ? (
        'Wait a moment'
      ) : (
        <div>
          <h1>{match.competition.name}</h1>
          <h2>Matchday {match.matchday}</h2>
          <h3>
            {match.homeTeam.name}{' '}
            <span>
              {scoreHomeTeam} - {scoreAwayTeam}
            </span>{' '}
            {match.awayTeam.name}
          </h3>
          <p>
            <strong>Stadium: </strong> {match.venue}
          </p>
          <p>
            <strong>Referees: </strong>
          </p>
          {match.referees.map((r) => {
            return (
              <p key={r.id}>
                {r.name} from {r.nationality}
              </p>
            )
          })}
        </div>
      )}
    </div>
  )
}
