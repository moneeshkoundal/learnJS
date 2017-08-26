/**
 * Created by hussain on 26/8/17.
 */
import React, {Component} from 'react';
import Title from './header/title'

class Header extends Component {
  render(){
    console.log(this.props);
    return (
      <div>
        <Title title={this.props.title} />
      </div>
    )
  }
}

export default Header;