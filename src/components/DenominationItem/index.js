const DenominationItem = props => {
  const {denominationDetails, updatedBalance} = props

  const {value} = denominationDetails

  const onChangeValue = () => {
    updatedBalance(value)
  }

  return (
    <li className="list-item">
      <button className="value" type="button" onClick={onChangeValue}>
        {value} 
      </button>
    </li>
  )
}
export default DenominationItem
