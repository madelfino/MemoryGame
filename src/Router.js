import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import MainMenu from './components/MainMenu';
import CardGrid from './components/CardGrid';
import CategoryList from './components/CategoryList';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene key="mainMenu" component={MainMenu} title="" initial />
        <Scene key="categoryList" component={CategoryList} title="Select Category" />
        <Scene key="game" component={CardGrid} title="Memory Game" />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
