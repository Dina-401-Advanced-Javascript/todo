import React from 'react';

export const AppSettingsContext = React.createContext();

class AppSettings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemsPerPage: 3,
      sortBy: 'difficulty',
      showComplete: true,
      currentPageNumber: 0,

    }
  }

  render() {
    return (
      <AppSettingsContext.Provider value={this.state}>
        {this.props.children}
      </AppSettingsContext.Provider>
    )
  }
}

export default AppSettings;