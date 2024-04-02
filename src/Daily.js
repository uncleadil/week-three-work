import { Component } from "react";
class Daily extends Component {
  state = {
    userInput: "",
    userList: [],
  };

  onChange(e) {
    this.setState({ userInput: e });
  }

  onAdd(e) {
    if (e === "") {
      alert`please write any word!!!`;
    } else {
      let add = this.state.userList;
      add.push(e);
      this.setState({ userInput: "", userList: add });
      console.log(e);
    }
  }

  onClicked(e) {
    let click = e.target;
    click.classList.toggle("clicked");
  }

  onDelete() {
    let remove = [];
    this.setState({ userList: remove });
  }

  onSubmit(e) {
    e.preventDefault();
  }
  render() {
    return (
      <div className="first-component">
        <form onSubmit={this.onSubmit}>
          <input
            placeholder="write here..."
            value={this.state.userInput}
            onChange={(e) => this.onChange(e.target.value)}
            type="text"
          ></input>
          <button
            className="add"
            onClick={() => this.onAdd(this.state.userInput)}
          >
            Add
          </button>
          <ul>
            {this.state.userList.map((item, index) => (
              <li key={index} onClick={this.onClicked}>
                {item}
              </li>
            ))}
          </ul>
          <button className="remove" onClick={() => this.onDelete()}>
            Delete
          </button>
        </form>
      </div>
    );
  }
}

export default Daily;
