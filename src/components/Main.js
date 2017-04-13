require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import Abc from 'components/List'



class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
              
      	<Abc />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
