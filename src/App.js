import React, { Component } from 'react';
import { Menubar, ActionBar, PageContent } from './components'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: [
        'Iste Natus',
        'Explicabo',
        'Omnis',
        'Ipsa quae',
        'Perspiciatis Unde'].map((text, id) => ({ text, id, isActive: false })),
      profileName: 'Veris Veritatis',
      dropdownOptions: [
        {
          text: 'Accusantium doloremque laudant',
          id: 0,
        },
        {
          text: 'Achitecto beatae vitae',
          id: 1,
        }, {
          text: 'Achitecto beatae vitae',
          id: 2,
        }, {
          text: 'Achitecto beatae vitae',
          id: 3,
        }, {
          text: 'Achitecto beatae vitae',
          id: 4,
        }, {
          text: 'Achitecto beatae vitae',
          id: 5,
        }, {
          text: 'Achitecto beatae vitae',
          id: 6,
        }, {
          text: 'Achitecto beatae vitae',
          id: 7,
        },
      ]
    }
  }

  menuClickHandler = (id) => {
    // only one menuLink can be active at the time

    const newState = this.state.menu.map(menuItem => (
      menuItem.id !== id && menuItem.isActive
        ? ({ ...menuItem, isActive: !menuItem.isActive })
        : menuItem.id !== id || (menuItem.id === id && menuItem.isActive)
          ? menuItem
          : ({ ...menuItem, isActive: !menuItem.isActive })
    ));
    this.setState({ menu: newState })
  }

  render() {
    const { menu, profileName, dropdownOptions } = this.state;
    return (
      <div className="App">
        <Menubar
          menu={menu}
          profileName={profileName}
          onClick={this.menuClickHandler}
        />
        <ActionBar />
        <PageContent
          dropdownOptions={dropdownOptions}
        />
      </div>
    )
  }
};

export default App;
