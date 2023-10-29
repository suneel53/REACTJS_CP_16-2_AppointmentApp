// Write your code here
import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import AppointmentItem from '../AppointmentItem/index'

import './index.css'

const initialappointmentList = []

class Appointments extends Component {
  state = {
    title: '',
    date: '',
    apList: initialappointmentList,
  }

  changeTitle = event => {
    this.setState({title: event.target.value})
  }

  chnageDate = event => {
    this.setState({date: event.target.value})
  }

  addAppointment = event => {
    event.preventDefault()
    const {title, date} = this.state
    const newApp = {
      id: uuidv4(),
      title,
      date,
      isFav: false,
    }
    this.setState(prevState => ({
      apList: [...prevState.apList, newApp],
      title: '',
      date: '',
    }))
  }

  markAsStar = id => {
    this.setState(prevState => ({
      appList: prevState.appList.map(each => {
        if (id === each.id) {
          return {...each, isFav: !each.isFav}
        }
        return each
      }),
    }))
  }

  getstaredapp = () => {
    this.setState(prevState => ({
      appList: prevState.appList.filter(each => each.isFav === true),
    }))
  }

  render() {
    const {title, date, apList} = this.state
    return (
      <div className="bg-cont">
        <div className="cont">
          <div className="form-cont">
            <div>
              <h1>Add Appointment</h1>
              <form className="form" onSubmit={this.addAppointment}>
                <label htmlFor="title">TITLE</label>
                <input
                  type="text"
                  className="input"
                  value={title}
                  onChange={this.changeTitle}
                  placeholder="Title"
                />
                <label htmlFor="date">DATE</label>
                <input
                  type="date"
                  value={date}
                  onChange={this.chnageDate}
                  className="date"
                />
                <button type="submit" className="but">
                  Add
                </button>
              </form>
            </div>

            <img
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
              alt="appointments"
              className="formbeside-image"
            />
          </div>
          <hr className="seperatot" />
          <div className="appoitmenthed-cont">
            <h1>Appoitments</h1>
            <button
              type="button"
              onClick={this.getstaredapp}
              className="but-starred"
            >
              Starred
            </button>
          </div>
          <ul>
            {apList.map(eachapp => (
              <AppointmentItem
                details={eachapp}
                markAsStar={this.markAsStar}
                key={eachapp.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Appointments
