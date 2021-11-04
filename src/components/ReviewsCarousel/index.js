// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {activeIndex: 0}

  onClickLeftArrow = () => {
    const {activeIndex} = this.state

    const lengthOfList = 0
    console.log(lengthOfList)
    const newIndex = activeIndex - 1
    if (newIndex >= lengthOfList) {
      this.setState(preState => ({activeIndex: preState.activeIndex - 1}))
    }
  }

  onClickRightArrow = () => {
    const {activeIndex} = this.state
    const {reviewsList} = this.props
    const lengthOfList = reviewsList.length
    console.log(lengthOfList)
    const newIndex = activeIndex + 1
    if (newIndex < lengthOfList) {
      this.setState(preState => ({activeIndex: preState.activeIndex + 1}))
    }
  }

  render() {
    const {activeIndex} = this.state
    const {reviewsList} = this.props
    const {imgUrl, username, companyName, description} = reviewsList[
      activeIndex
    ]

    return (
      <div className="mainContainer">
        <h1>Reviews</h1>

        <div className="buttonReviewCont">
          <button
            type="button"
            className="arrowButtons"
            testid="leftArrow"
            onClick={this.onClickLeftArrow}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>
          <div className="reviewContentDetails">
            <img src={imgUrl} alt={username} />
            <p>{username}</p>
            <p>{companyName}</p>
            <p className="description">{description}</p>
          </div>

          <button
            type="button"
            className="arrowButtons"
            testid="rightArrow"
            onClick={this.onClickRightArrow}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}
export default ReviewsCarousel
