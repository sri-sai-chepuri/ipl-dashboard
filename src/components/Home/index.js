// Write your code here
import {Component} from 'react'
import Loader from 'react-js-loader'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {details: [], isLoading: true}

  componentDidMount = () => {
    this.getDetails()
  }

  getDetails = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()

    const updatedData = data.teams.map(each => ({
      id: each.id,
      teamImageUrl: each.team_image_url,
      name: each.name,
    }))
    this.setState({details: updatedData, isLoading: false})
  }

  render() {
    const {details, isLoading} = this.state

    return (
      <div className="app-container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="spinner-cub" />
          </div>
        ) : (
          <div>
            <div className="ipl">
              <img
                src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
                alt="ipl logo"
                className="logo"
              />
              <h1>IPL Dashboard </h1>
            </div>
            <ul className="list-con">
              {details.map(each => (
                <TeamCard key={each.id} teams={each} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default Home
