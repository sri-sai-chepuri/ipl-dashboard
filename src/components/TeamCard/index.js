// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {teams} = props
  const {id, name, teamImageUrl} = teams

  return (
    <li className="list">
      <Link to={`/team-matches/${id}`}>
        <div className="team-con">
          <img src={teamImageUrl} alt={name} className="pic" />
          <p className="team-name">{name}</p>
        </div>
      </Link>
    </li>
  )
}

export default TeamCard
