import React, { Component } from "react";

export default class Bubble extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      items: [
        // {
        //   id:0,
        //   x: 0,
        //   y: 0,
        // }
      ],
    };
  }
  
  handleClick(e) {
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    this.setState((prevState) => ({
      items: [
        ...prevState.items,
        {id: this.id, x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY, color: "#" + randomColor},
      ],
    }));

    this.setState({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });
    console.log({ x: this.state.x, y: this.state.y });
    console.log(this.state.items);
  
  }


  renderBox(){
    return this.state.items.map((item) =>(
      <span className="bubble box" style={{left: item.x + "px", top: item.y +"px", backgroundColor: item.color}}></span>
    ))
  }


  renderRows() {
   
    return this.state.items.map((item) => (
      <tr key={item.id}>
        <td>{item.id}</td>
        <td>{item.x}</td>
        <td>{item.y}</td>
        <td>{item.color}</td>
      </tr>
    ));
  }

  render() {
    return (
      <>
        <div className="container">
          <div id="box1" onClick={this.handleClick.bind(this)}>
            {this.renderBox()}
          </div>
          {/* <Application /> */}
          <table className="table table-striped table-dark">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">X</th>
                <th scope="col">Y</th>
                <th scope="col">Color</th>
              </tr>
            </thead>
            <tbody>
              {this.renderRows()}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}
