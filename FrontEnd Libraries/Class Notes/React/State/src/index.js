// // index.js
// import React from 'react'
// import ReactDOM from 'react-dom'
// class App extends React.Component {
//   // declaring state
//   state = {
//     count: 0,
//   }
//   render() {
//     // accessing the state value
//     const count = this.state.count
//     return (
//       <div className='App'>
//         <h1>{count} </h1>
//         <button onClick={() => this.setState({ count: this.state.count + 1 })}>
//           Add One
//         </button>
//         <button onClick={() => this.setState({ count: this.state.count - 1 })}>
//           Subtract One
//         </button>
//         <button onClick={() => this.setState({ count: this.state.count ** 2 })}>
//           Power two
//         </button>
//       </div>
//     )
//   }
// }
// const rootElement = document.getElementById('root')
// ReactDOM.render(<App />, rootElement)


//////////////////////////////////////////////////////////////////////////////////////////////
// Make a single page application which changes the body of the background based on the season of the year(Autumn, Winter, Spring, Summer)
// import React, { Component } from "react"
// import ReactDOM from "react-dom"


// class App extends Component{

//     constructor(props){
//         super(props)
//         this.state={
//             season:this.getSeason()
//         } 
//         this.handleChangeSeason=this.handleChangeSeason.bind(this)
//     }

//     getSeason(){
//         const month =new Date().getMonth();
//         if(month >=2 && month <=4){
//             return "spring"
//         } else if(month>=5 && month <=7){
//             return "summer"
//         }else if (month>=8 && month <=10){
//             return"Autmun"
//         }else{
//             return "Winter"
//         }
//     }

//     getBackgroundColor(){
//         const {season}=this.state;
//         switch(season){
//             case "Spring":
//                 return "#a8e6cf";
//             case "Summer":
//                 return "#ffd700"
//             case "Autumn":
//                 return "#ff8c00"
//             case "Winter":
//                 return "#add8e6"
//             default:
//                 return "#ffffff"

//         }
//     }

//     handleChangeSeason(newSeason){
//         this.setState({season:newSeason})
//     }

//     render(){
//         const {season}=this.state
//         const backgroundColor=this.getBackgroundColor()
//         return(
//             <div style={{
//                 backgroundColor, 
//                 height:"100vh",
//                 display:"flex",
//                 flexDirection:"column",
//                 justifyContent:"center",
//                 alignItems:"center",
//                 transition: "background-color 0.5s ease-in-out"
//             }}>
//                 <h1> Its {season}!</h1>
//                 <div>
//                     <button onClick={()=>this.handleChangeSeason("Spring")}>Spring</button>
//                     <button onClick={()=>this.handleChangeSeason("Summer")}>Summer</button>
//                     <button onClick={()=>this.handleChangeSeason("Autmun")}>Autumn</button>
//                     <button onClick={()=>this.handleChangeSeason("Winter")}>Winter</button>
//                 </div>
//             </div>
//         )


//     }
// }

// const rootElement=document.getElementById("root")
// ReactDOM.render( <App/>, rootElement)





// Make a single page application which change the body of the background based on the time of the day(Morning, Noon, Evening, Night)


