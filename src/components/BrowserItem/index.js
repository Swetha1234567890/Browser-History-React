import './index.css'

const BrowserItem = props => {
  const {historyDetails, onClickDelete} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyDetails

  const onClickDeleteBtn = () => {
    onClickDelete(id)
  }

  return (
    <li className="list-item-container">
      <p className="time">{timeAccessed}</p>
      <img src={logoUrl} className="logo" alt="domain logo" />
      <p className="title">{title}</p>
      <p className="domain">{domainUrl}</p>
      <div className="btn-container">
        <button
          className="delete-btn"
          type="button"
          data-testid="delete"
          onClick={onClickDeleteBtn}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            className="delete-icon"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default BrowserItem
