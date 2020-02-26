import React from 'react';
import { values } from './contextApi';

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      values,
      data: [],
      arr: [],
      enableList: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleName(i, event) {
    let values = [...this.state.values];
    values[i].name = event.target.value;
    this.setState({ values, enableList: false });
  }

  handleAge(i, event) {
    let values = [...this.state.values];
    values[i].age = event.target.value;
    this.setState({ values,enableList: false });
    // console.log(i);
    // console.log(event.target.value);
  }

  addClick() {
    //this.setState(prevState => ({ values: [...prevState.values, '']}))
    var value = {
      id: this.state.values.length + 1,
      name: "",
      age: 0,
    }
    var data = this.state.values;
    data.push(value);
    //console.log(JSON.stringify(data));
    this.setState({ values: data })
  }

  removeClick(i) {
    let values = [...this.state.values];
    values.splice(i, 1);
    this.setState({ values });
  }
  editClick(i) {
    let values = [...this.state.values];
    values.splice(i, 1);
    this.setState({ values });
  }

  handleSubmit(event) {
    //let arr = this.state.values;
    event.preventDefault();
    // var myArray = this.state.data;
    this.setState({ enableList: true })
    // console.log(arr);
    // alert(JSON.stringify(arr));
  }


  render() {
    //console.log(JSON.stringify(this.state.values));
    let listing = this.state.values.map((item) => <tr key={item.id}><td>{item.name}</td>&nbsp;<td>{item.age}</td></tr>)
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {/* {this.createUI()}      */}
          <table>
            <tbody>
              {this.state.values.map((el, i) =>
                <tr key={el.id}>
                  <td> <input type="text" value={el.name} onChange={this.handleName.bind(this, i)} />  </td>
                  <td> <input type="text" value={el.age} onChange={this.handleAge.bind(this, i)} />  </td>
                  {/* <td><input type='button' value='edit' onClick={this.editClick.bind(this, i)} />  </td> */}
                  <td><input type='button' value='remove' onClick={this.removeClick.bind(this, i)} />  </td>
                </tr>
              )}
              <td><input type='button' value='add more' onClick={this.addClick.bind(this)} /></td>
              <td><input type="submit" value="Submit" /></td>
              <td><input type="button" value="dummy button" /><input type="button" value="dummy button" /></td>
            </tbody>
          </table>

          {/* {this.state.values.map((el, i) =>
          <table className="tble">
          <tr key={i}>
         <td> <label>{el.name}&nbsp;&nbsp;</label></td>
         <td> <label>{el.age}</label></td>
          </tr></table>
        )} */}


        </form>
        {this.state.enableList ? <table className="data_table">{listing}</table> : ''}
      </div>
    );
  }
}
export default About;

