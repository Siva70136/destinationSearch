// Write your code here

import './index.css'

const DestinationItem = props => {
  const {item} = props
  const {name, imgUrl} = item
  return (
    <li className="item">
      <img src={imgUrl} alt={name} className="img" />
      <p className="head">{name}</p>
    </li>
  )
}

export default DestinationItem
