import React from 'react';
import { NavBar } from 'antd-mobile';

// import { NavLink } from 'react-router-dom'; 

const MovieNavBar = () => {
    return (
      <NavBar
          mode="dark"
          style={{ background: '#e54847'}}
          rightContent={[
            <span
             key="0"
             className="iconfont icon-mulu-">
             </span>
          ]}
        >猫眼电影</NavBar>
    );
  }

export default MovieNavBar;