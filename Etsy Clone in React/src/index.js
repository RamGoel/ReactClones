import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'tachyons';
import Top from './Top';
import List from './List';
import Bread from './Bread';
import Prod from './Prod';
import './Web.css'
import Card from './Card';
import Bun from './Bun';
import Lab from './Lab';
import 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'

import { Route, Switch } from 'react-router';
ReactDOM.render(
  <div className="w-100" >
  <div className="shadow-2 pb1">
  <Top />
  <List />
  
  </div>
  <Bread />
  <h1 className="tc ">Discover unique hand-picked items</h1>
  <List />
  <Prod />
  <div className="pt2 ">
  <div className="flex-l dib-ns ma3 row">
    <p className=" tc b i d6 col-l ">Shop our selections</p>
    <p className=" i d6 tc col">Items hand-picked by our editors</p>
  </div>
  
  <div className="block-ns flex-l ma2">
  <Card />
  <Card />
  <Card />
  <Card />
  <Card />
  <Card />
  </div>
  </div>

  <Bun />
  <Lab />
  </div>
  ,
  document.getElementById('root')
);



