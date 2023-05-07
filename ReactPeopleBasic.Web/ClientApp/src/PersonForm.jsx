import React from "react";

class PersonForm extends React.Component {
    
    render() { 
        return (
                 <div className='row'>
               <div className='col-md-3'>
                    <input value={this.props.currentFirstName} onChange={this.props.onFirstNameTextboxChange} type='text' placeholder='FirstName' className='form-control' />
                </div>
                <div className='col-md-3'>
                    <input value={this.props.currentLastName}onChange={this.props.onLastNameTextboxChange} type='text' placeholder='LastName' className='form-control' />
                </div>
                <div className='col-md-3'>
                    <input value={this.props.currentAge}onChange={this.props.onAgeTextboxChange} type='text' placeholder='Age' className='form-control' />
                </div>
                <div className='col-md-1'>
                    <button onClick={this.props.onAddClick} className='btn btn-dark w-100'>Add</button>

                </div>
                <div className='col-md-2'>
                    <button onClick={this.props.onClearClick} className='btn btn-warning w-100'>Clear All</button>
                </div>

            </div>

        );
    }
}
 
export default PersonForm;