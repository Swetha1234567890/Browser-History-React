import {Component} from 'react'
import BrowserItem from '../BrowserItem'
import './index.css'

const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

class BrowserHistory extends Component {
  state = {
    searchInput: '',
    searchResults: initialHistoryList,
  }

  onClickDelete = id => {
    const {searchResults} = this.state
    const filteredData = searchResults.filter(each => each.id !== id)
    this.setState({searchResults: filteredData})
  }

  noHistoryView = () => (
    <div className="history-container">
      <p className="empty">There is no history to show</p>
    </div>
  )

  searchBrowserItem = () => {
    const {searchInput, searchResults} = this.state
    const newResults = searchResults.filter(each =>
      each.title.toLowerCase().includes(searchInput.toLowerCase()),
    )
    if (newResults.length === 0) {
      this.noHistoryView()
    }
    return (
      <ul className="history-cont">
        {newResults.map(each => (
          <BrowserItem
            key={each.id}
            historyDetails={each}
            onClickDelete={this.onClickDelete}
          />
        ))}
      </ul>
    )
  }

  onChangeEvent = event => {
    this.setState({searchInput: event.target.value})
    this.searchBrowserItem()
  }

  render() {
    const {searchInput, searchResults} = this.state
    const newResults = searchResults.filter(each =>
      each.title.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="browser-app">
        <div className="browser-header">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
            className="history"
          />
          <div className="search-cont">
            <button className="search-btn" type="button" data-testid="search">
              <img
                src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                alt="search"
                className="search"
              />
            </button>
            <input
              type="search"
              className="search-input"
              placeholder="Search history"
              onChange={this.onChangeEvent}
            />
          </div>
        </div>
        {newResults.length === 0
          ? this.noHistoryView()
          : this.searchBrowserItem()}
      </div>
    )
  }
}

export default BrowserHistory
