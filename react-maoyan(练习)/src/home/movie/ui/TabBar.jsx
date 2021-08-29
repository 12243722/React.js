import React, { Component } from 'react';
import { TarBarStyle } from '../styled.js';
import { NavLink } from 'react-router-dom';

class TabBar extends Component {
  state = {
    tarList: [
      {
        tiltle: '热映',
        path: '/hot'
      },
      {
        tiltle: '影院',
        path: '/cinema'
      },
      {
        tiltle: '待映',
        path: '/wait'
      },
      {
        tiltle: '经典电影',
        path: '/classic'
      }
    ]
  }
  render() {
    return (
      <TarBarStyle>
        <div className="city">
          <span style={{fontSize: '18px',marginRight: '10px'}}>南京</span> 
          <span className="iconfont icon-ai-arrow-down"></span>
        </div>
        <ul>
         {
           this.state.tarList.map(item =>{
             return (
             <li key={item.tiltle}>
               <NavLink to={ item.path }>
               { item.tiltle }
               </NavLink>
               </li>
             )
           })
         }
        </ul>
        <div className="icon">
        <span className="iconfont icon-fangdajing"></span>
        </div>
      </TarBarStyle>
    );
  }
}

export default TabBar;