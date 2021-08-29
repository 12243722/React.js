import React, { Component, lazy, Suspense } from 'react';

// import Movie from './movie/Index';
// import Video from './video/Index';
// import Show from './show/Index';
// import Mine from './mine/Index';

import { TabBar } from 'antd-mobile';

const Movie = lazy(() => import('./movie/Index'));
const Video = lazy(() => import('./video/Index'));
const Show = lazy(() => import('./show/Index'));
const Mine = lazy(() => import('./mine/Index'));

class Index extends Component {

  state = {
    selectedTab: 'movie',
    fullScreen: true
  };
  render() {
    return (
     
      <>
       <div style={this.state.fullScreen ? 
        { position: 'fixed', height: '100%', width: '100%', top: 0 } 
        : { height: 400 }}>
       <TabBar
          unselectedTintColor="#949494"
          tintColor="#f03d37"
          barTintColor="white"
        >
          <TabBar.Item
            title="电影/影院" 
            key="movie"
            icon={<span className="iconfont icon-dianying" ></span>}
            selectedIcon={<span className="iconfont icon-dianying" ></span>}
            selected={this.state.selectedTab === 'movie'}
            onPress={() => {
              this.setState({
                selectedTab: 'movie',
              });
            }}
            data-seed="logId"
          >
           <Suspense fallback={<div>loading...</div>}>
             <Movie />
           </Suspense>
          </TabBar.Item>
          <TabBar.Item
            icon={<span className="iconfont icon-shipin"></span>}
            selectedIcon={<span className="iconfont icon-shipin"></span>}
            title="视频"
            key="video"
            selected={this.state.selectedTab === 'video'}
            onPress={() => {
              this.setState({
                selectedTab: 'video',
              });
            }}
            data-seed="logId1"
          >   
           <Suspense fallback={<div>loading...</div>}>
             <Video />
           </Suspense>
          </TabBar.Item>
          <TabBar.Item
            icon={<span className="iconfont icon-xiaoshipin" ></span>}
            selectedIcon={<span className="iconfont icon-xiaoshipin" ></span>}
            title="小视频"
            key="smvideo"
            selected={this.state.selectedTab === 'smvideo'}
            onPress={() => {
              this.setState({
                selectedTab: 'smvideo',
              });
            }}
            data-seed="logId1"
          >   
            <div>小视频</div>
          </TabBar.Item>
          <TabBar.Item
            icon={<span className="iconfont icon-yanchu"></span>}
            selectedIcon={<span className="iconfont icon-yanchu"></span>}
            title="演出"
            key="show"
            selected={this.state.selectedTab === 'show'}
            onPress={() => {
              this.setState({
                selectedTab: 'show',
              });
            }}
            data-seed="logId1"
          > 
           <Suspense fallback={<div>loading...</div>}>
             <Show />
           </Suspense>  
          </TabBar.Item>
          <TabBar.Item
            icon={<span className="iconfont icon-wode"></span>}
            selectedIcon={<span className="iconfont icon-wode"></span>}
            title="我的"
            key="mine"
            selected={this.state.selectedTab === 'mine'}
            onPress={() => {
              this.setState({
                selectedTab: 'mine',
              });
            }}
            data-seed="logId1"
          > 
           <Suspense fallback={<div>loading...</div>}>
             <Mine />
           </Suspense>  
            
          </TabBar.Item>
        </TabBar>
      </div>
      </>
    
    );
  }
}

export default Index;