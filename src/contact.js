import React from 'react';
import { values } from './contextApi2';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      values,
      data: [],
      arr: [],
      enableList: true
    };
    this.handleName = this.handleName.bind(this);
    
  }
  
  handleName(event) {
    //let values = [...this.state.values];
    // values.name = event.target.value;
    // this.setState({ values, enableList: true });
    var updatedList = this.state.values;
    updatedList = values.filter(function(item){
      return item.toLowerCase().search(
        event.target.value.toLowerCase()) !== -1;
    });
    this.setState({values: updatedList, enableList: true});
  }
  componentShouldUpdate(e){
    var updatedList = this.state.values;
    this.setState({values: updatedList, enableList: true});
    console.log(JSON.stringify(this.state.values));
  }

  render() {
    //console.log(JSON.stringify(this.state.values));
    let listing = this.state.values.map((item) => <tr key={item}><td>{item}</td></tr>)
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {/* {this.createUI()}      */}
          <table>
            <tbody>
                <h2 className="filter_label">Filter Items</h2><br/>
                <input type="text" placeholder="Search" onChange={this.handleName.bind(this)} /> 
            </tbody>
          </table>
        </form>
        {this.state.enableList ? <table className="">{listing}</table> : ''}
      </div>
    );
  }
}
export default Contact;
// const rootElement = document.getElementById("root");
// ReactDOM.render(<IncorporationForm />, rootElement);
