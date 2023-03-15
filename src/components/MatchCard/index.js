// Write your code here
import './index.css'

const MatchCard = props => {
  const {details} = props
  const updatedD = {
    competingTeam: details.competing_team,
    matchStatus: details.match_status,
    competingTeamLogo: details.competing_team_logo,
    result: details.result,
  }
  const {competingTeam, matchStatus, competingTeamLogo, result} = updatedD

  return (
    <div className="card">
      <img src={competingTeamLogo} className="pic9" alt={competingTeam} />
      <p>{competingTeam}</p>
      <p>{result}</p>

      <p className="lost">{matchStatus}</p>
    </div>
  )
}

export default MatchCard
