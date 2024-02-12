import {Component} from 'react'

import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {
    balance: 2000,
  }

  updatedBalance = value => {
    this.setState(prevState => ({
      balance: prevState.balance - value,
    }))
  }

  render() {
    const {denominationsList} = this.props
    const {balance} = this.state
    const name = 'Sarah Williams'
    const initial = name.slice(0, 1)

    return (
      <div className="app-container">
        <div className="cashwithdraw-container">
          <div className="initial-container">
            <div className="name-container">
              <p className="initial">{initial}</p>
            </div>
            <p className="name">{name}</p>
          </div>
          <div className="balance-container">
            <p className="balance">Your Balance</p>
            <p className="available-bal">
              {balance}
              <br />
              <span className="span">In Rupees</span>
            </p>
          </div>
          <p className="heading">Withdraw</p>
          <p className="desc">CHOOSE SUM (IN RUPEES)</p>

          <ul className="list-container">
            {denominationsList.map(eachItem => (
              <DenominationItem
                denominationDetails={eachItem}
                key={eachItem.id}
                updatedBalance={this.updatedBalance}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default CashWithdrawal
