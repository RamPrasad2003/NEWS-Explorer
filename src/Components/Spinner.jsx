import React,{Component} from 'react'
import loading from './loading.gif'
export default class Spinner extends Component {
  render() {
    return (
      <div>
        <center>
          <img src={loading} alt="loading" srcSet="" style={{ width: "100px", height: "100px" }} />
        </center>
      </div>
    )
  }
}
