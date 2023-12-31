// Write your code here
import {Component} from 'react'
import {format} from 'date-fns'
import './index.css'

class AppointmentItem extends Component {
  render() {
    const {details, markAsStar} = this.props
    const {id, title, date, isFav} = details
    const dd = format(new Date(date), 'dd MMMM yyyy, EEEE')
    const urll = isFav
      ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'
    const onstar = () => {
      markAsStar(id)
    }
    return (
      <li className="app-cont">
        <div className="app-hed-cont">
          <h1 className="hed-app">{title}</h1>
          <button
            type="button"
            className="but-star"
            onClick={onstar}
            data-testid="star"
          >
            <img src={urll} alt="star" />
          </button>
        </div>
        <p>{dd}</p>
      </li>
    )
  }
}

export default AppointmentItem
