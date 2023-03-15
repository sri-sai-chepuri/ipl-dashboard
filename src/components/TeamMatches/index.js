// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {teams: {}, isLoading: true}

  componentDidMount = () => {
    this.getTeams()
  }

  getTeams = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()

    const updatedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
    }
    this.setState({teams: updatedData, isLoading: false})
  }

  render() {
    const {teams, isLoading} = this.state
    const {teamBannerUrl, latestMatchDetails, recentMatches} = teams

    return (
      <div className="con">
        {isLoading ? (
          <Loader type="RevolvingDot" />
        ) : (
          <>
            <div className="img-con">
              <img src={teamBannerUrl} alt="banner" className="pic1" />
            </div>
            <ul>
              <li className="list5">
                <LatestMatch latestMatchDetails={latestMatchDetails} />
              </li>
              <li className="list6">
                {recentMatches.map(each => (
                  <MatchCard key={each.id} details={each} />
                ))}
              </li>
            </ul>
          </>
        )}
      </div>
    )
  }
}

export default TeamMatches
