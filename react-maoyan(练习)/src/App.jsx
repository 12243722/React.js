import React, { useState, useMemo } from 'react';


// import { Button } from 'antd-mobile';


// import Home from './search/Index';
const Example = (props) => {
  const [fitertext, setFitertext] = useState("");
  const [show, setShow] = useState(false);
  const filter = useMemo((list, fitertext) => {
    console.log("我被重新计算了")
    return list.filter((item) => {
      item = item.toUpperCase()
      fitertext = fitertext.toUpperCase()
      return item.includes(fitertext)
     }) 
    },[fitertext])
  


  const handleChange = event => {
    setFitertext(() => event.target.value);
  };
  const handleClick = event => {
    setShow((show) => true)
  };
  const fitertext2 = filter(props.list, fitertext)

  return (
    <>
      <input onChange={handleChange} value={fitertext} />
      <ul> {fitertext2.map(item => <li key={item}>{item}</li>)}</ul>
      <button onClick={handleClick}>按钮</button>

    </>

  );
}


const App = () => {
  const [list, setList] = useState(['Alice', 'Bob', 'Chris', 'David', 'Eva'])
  return (
    <Example list={list}></Example>
  )
}

export default App;
// import React, { Component } from 'react';
// import memoize from 'memoize-one';

// class Example extends Component {

//   state = {
//     fitertext:"",show: false
//   };

//   filter = memoize(
//     (list, fitertext) => {
//       console.log("我被重新计算了")
//       return list.filter((item) =>

//      {
//        item = item.toUpperCase()
//        fitertext = fitertext.toUpperCase()
//       return item.includes(fitertext)
//        }  )
//     }
//   );
//   handleChange = event => {
//    this.setState({
//     fitertext: event.target.value
//    });
//   };
//   handleClick = event => {
//    this.setState({
//     show: true
//    });
//   };
//     render() {
//       const  fitertext = this.filter(this.props.list, this.state.fitertext)

//       return (
//         <>
//           <input onChange= {this.handleChange} value={this.state.fitertext} />
//           <ul> { fitertext.map(item => <li key= {item}>{item}</li>)}</ul>
//           <button onClick={this.handleClick}>按钮</button>

//         </>
//       );

//   };
// }
//  class App extends Component {
//    state = { list:['Alice', 'Bob', 'Chris', 'David', 'Eva'] }
//    render() {
//      return (
//        <Example list={this.state.list}></Example>
//      );
//    }
//  }

//  export default App;




