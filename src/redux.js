import React from 'react';

import { connect } from 'react-redux';

import { activateGeod, closeGeod } from './redux2';

// App.js
export class Apps extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.geod.title || 'Hello Ravi!'}</h1>

        {this.props.geod.title ? (
          <button onClick={this.props.closeGeod}>Exit Geod</button>
        ) : (
          <button onClick={() =>
              this.props.activateGeod({ title: 'Hello dude!' }) }> Click Me!</button>
        )}
      </div>
    );
  }
}

// AppContainer.js
const mapStateToProps = state => ({
  geod: state.geod,
});

const mapDispatchToProps = {
  activateGeod,
  closeGeod,
};

// const AppContainer = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Apps);

// export default AppContainer;
export default connect( mapStateToProps,mapDispatchToProps)(Apps);