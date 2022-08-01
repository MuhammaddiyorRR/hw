// import React from "react";

// export default class DynamicTable extends React.Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     message: "",
  //     items: [],
  //   };
  // }

  // // updateMessage(event) {
  // //   this.setState({
  // //     message: event.target.value,
  // //   });
  // // }

  // handleClick() {
  //   var items = this.state.items;

  //   items.push(this.state.message);

  //   this.setState({
  //     items: items,
  //     message: "",
  //   });
  // }

//   handleItemChanged(i, event) {
//     var items = this.state.items;
//     items[i] = event.target.value;

//     this.setState({
//       items: items,
//     });
//   }

//   handleItemDeleted(i) {
//     var items = this.state.items;

//     items.splice(i, 1);

//     this.setState({
//       items: items,
//     });
//   }

//   renderRows() {
//     var context = this;

//     return this.state.items.map(function (o, i) {
//       return (
//         <tr key={"item-" + i}>
//           <td>
//             <input
//               type="text"
//               value={o}
//               onChange={context.handleItemChanged.bind(context, i)}
//             />
//           </td>
//           <td>
//             <button onClick={context.handleItemDeleted.bind(context, i)}>
//               Delete
//             </button>
//           </td>
//         </tr>
//       );
//     });
//   }

//   render() {
//     return (
//       <div>
//         <table className="">
//           <thead>
//             <tr>
//               <th>Item</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>{this.renderRows()}</tbody>
//         </table>
//         <hr />
//         <input
//           type="text"
//           value={this.state.message}
//           onChange={this.updateMessage.bind(this)}
//         />
//         <button onClick={this.handleClick.bind(this)}>Add Item</button>
//       </div>
//     );
//   }
// }






import React, { Component } from 'react'
import { Button,Container } from 'bootstrap';
// import Row from './add-rows';
// const tbody = document.querySelector("tbody");
// const Container = document.querySelector(".container");

// document.body.style.backgroundColor = "lightblue";

//  let count = 0;
 
 
 // import { useState } from 'react';
export default class Bubble extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "",
      items: [],
    };
        this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log("Hello World!");

    // let b1 = document.createElement("span");
    //     b1.className = "bubble box";
    //     let xPosition = 100 - b1.clientWidth;
    //     let yPosition = 100 - b1.clientHeight;
    //     b1.style.left = xPosition + "px";
    //     b1.style.top = yPosition + "px";
    //     // b1.style.backgroundColor = "#" + randomColor;
    //     document.getElementById("box1").appendChild(b1);


    let items = this.state.items;

    items.push(this.state.message);

    this.setState({
      items: items,
      message: "",
    });
  }

  // renderRows() {
  //   var context = this;

  //   return this.state.items.map(function (o, i) {
  //     return (
  //       <tr key={"item-" + i}>
  //         <td>
  //           <input
  //             type="text"
  //             value={o}
  //             onChange={context.handleItemChanged.bind(context, i)}
  //           />
  //         </td>
  //         <td>
  //           <button onClick={context.handleItemDeleted.bind(context, i)}>
  //             Delete
  //           </button>
  //         </td>
  //       </tr>
  //     );
  //   });
  // }

  //     let count = 0;
  //     document.getElementById("box1").addEventListener("click", function (event) {

  //       count++;
  //       const randomColor = Math.floor(Math.random() * 16777215).toString(16);

  //       const rowX = document.createElement("tr");
  //       rowX.className = "info";
  //       rowX.innerHTML = `<th scope='row'>${count}</th> <th scope='row'>${
  //         event.clientX
  //       }</th> <td scope='row'>${event.clientY}</td> <td scope='col'>${
  //         "#" + randomColor
  //       }</td>`;
  //       tbody.appendChild(rowX);

  //       let b1 = document.createElement("span");
  //       b1.className = "bubble box";
  //       let xPosition = event.clientX - b1.clientWidth;
  //       let yPosition = event.clientY - b1.clientHeight;
  //       b1.style.left = xPosition + "px";
  //       b1.style.top = yPosition + "px";
  //       b1.style.backgroundColor = "#" + randomColor;
  //       document.getElementById("box1").appendChild(b1);
  //     });
  render() {
    const { rows, handleClick } = this.props;

    return (
      <div className="container">
        <div id="box1" onClick={this.handleClick}>
          <span className="bubble box"></span>
        </div>
        <table className="table table-striped table-dark">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">X</th>
              <th scope="col">Y</th>
              <th scope="col">Color</th> 
              <button type="button" onClick={this.handleClick}>Save</button>
            </tr>
          </thead>
          <tbody>
            {/* <div className="p-3">
              {rows.map((row) => (
                <Row key={row.id} handleClick={handleClick} row={row} />
              ))}
             </div>  */}
          </tbody>
        </table>
      </div>
    );
  }
}
// document.getElementById("box1").addEventListener("click", handleClick())





// class Counters extends Component {
//   constructor() {
//     super();
//     console.log("Counters Constructor");
//   }

//   componentDidMount() {
//     console.log("Counters Did Mount");
//   }

//   render() {
//     console.log("Counters Render");

//     const { rows, handleClick } = this.props;
//     return (
//       <div className="p-3">
//         {rows.map((row) => (
//           <row
//             key={row.id}
//             handleClick={handleClick}
//             row={row}
//           />
//         ))}
//       </div>
//     );
//   }
// }
