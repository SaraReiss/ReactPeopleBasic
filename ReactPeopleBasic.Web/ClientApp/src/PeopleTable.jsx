import React from "react";
import PersonForm from "./PersonForm";
import PeopleRows from "./PeopleRows"
class PeopleList extends React.Component {

    state = {
        currentFirstName: '',
        currentLastName: '',
        currentAge: '',
        people: []
    }
   
    onFirstNameTextboxChange = (e) => {
        this.setState({ currentFirstName: e.target.value } );

    }
    onLastNameTextboxChange = (e) => {
        this.setState({ currentLastName: e.target.value } );
    }
    onAgeTextboxChange = (e) => {
        this.setState( { currentAge: e.target.value });
    }
    onClearClick = () =>{
        this.setState({people:[],currentFirstName:'', currentLastName:'',currentAge:''});
       
    }
    tableOrMessage = () => {
        if (this.state.people.length === 0) {
            return <h3>No people added yet! Add people..</h3>
        }
     else {

    return <>
    <table className="table table-hover table-bordered mt-5">
    <thead>
           <tr>
               <th>First Name</th>
               <th>Last Name</th>
               <th>Age</th>
           </tr>
   </thead>
  
               <tbody>
                   <PeopleRows people={this.state.people} />
               </tbody>
           </table>
      
    </> 

    }
}
       
    
    onAddClick = (e) =>{
        const copy = [...this.state.people];
        const person = {
            firstName: this.state.currentFirstName,
            lastName: this.state.currentLastName,
            age: this.state.currentAge
        }
        copy.push(person);
        this.setState({people:copy, currentFirstName:'',currentLastName:'',currentAge:''});
    
    }


    render()
    { 
        return (
            <>
        
            <div className="container">
                <div className='container mt-5'>
                <PersonForm currentFirstName={this.state.currentFirstName} 
                currentLastName={this.state.currentLastName} 
                currentAge={this.state.currentAge} 
                onFirstNameTextboxChange={this.onFirstNameTextboxChange}
                onLastNameTextboxChange={this.onLastNameTextboxChange}
                onAgeTextboxChange={this.onAgeTextboxChange}
                onClearClick={this.onClearClick} 
                onAddClick={this.onAddClick}/>
                
                {this.tableOrMessage()}
                 </div>
                </div>
                
                  
        </>);
    };
};


export default PeopleList;