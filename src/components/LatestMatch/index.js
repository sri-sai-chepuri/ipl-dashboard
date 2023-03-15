// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const updated = {
    competingTeam: latestMatchDetails.competing_team,
    competingTeamLogo: latestMatchDetails.competing_team_logo,
    date: latestMatchDetails.date,
    firstInnings: latestMatchDetails.first_innings,
    id: latestMatchDetails.id,
    manOfTheMatch: latestMatchDetails.man_of_the_match,
    matchStatus: latestMatchDetails.match_status,
    result: latestMatchDetails.result,
    secondInnings: latestMatchDetails.second_innings,
    umpires: latestMatchDetails.umpires,
    venue: latestMatchDetails.venue,
  }
  const {
    competingTeam,
    competingTeamLogo,
    date,
    venue,
    secondInnings,
    matchStatus,
    firstInnings,
    manOfTheMatch,
    result,
    umpires,
  } = updated

  return (
    <div className="con2">
      <div className="con0">
        <div>
          <p>{competingTeam}</p>
          <p>{date}</p>
          <p>{venue}</p>
        </div>

        <img src={competingTeamLogo} alt={competingTeam} className="pic52" />
      </div>

      <hr className="line" />
      <h4>First Innings</h4>
      <p>{firstInnings}</p>
      <h4>Second Innings</h4>
      <p>{secondInnings}</p>
      <p>{manOfTheMatch}</p>
      <p>{umpires}</p>
    </div>
  )
}

export default LatestMatch
