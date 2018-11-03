/*Render an instance of the ReturnTempPassword component in the parent
 component ResetPassword. Here, give ReturnTempPassword a prop of
  tempPassword and assign it a value of a string that is at least 8 
  characters long. Within the child, ReturnTempPassword, access the
   tempPassword prop within the strong tags to make sure the user 
   sees the temporary password.*/



class ReturnTempPassword extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
        <div>
          
            <p>Your temporary password is: <strong>{this.props.tempPassword}</strong></p>
             
        </div>
    );
  }
};

class ResetPassword extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
        <div>
          <h2>Reset Password</h2>
          <h3>We've generated a new temporary password for you.</h3>
          <h3>Please reset this password from your account settings ASAP.</h3>
          
         <ReturnTempPassword
         tempPassword="xxxxxxxx"/>
         
        </div>
    );
  }
};


/*React: Review Using Props with Stateless Functional Components*/
/*The code editor has a CampSite component that renders a Camper
 component as a child. Define the Camper component and assign it
  default props of { name: 'CamperBot' }. Inside the Camper component, 
  render any code that you want, but make sure to have one p element
   that includes only the name value that is passed in as a prop. 
   Finally, define propTypes
   on the Camper component to require name to be 
   provided as a prop and verify that it is of type string.

    Hints
A functional(a.k.a. stateless) component is just a plain javascript function which takes props as an argument and returns a react element.
Use Component.defaultProps to set default props.
Use Component.propTypes to set props types.
   */

   class CampSite extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Camper/>
      </div>
    );
  }
};
// change code below this line
const Camper = props => (<p>{props.name}</p>);

Camper.defaultProps = {
  name: 'CamperBot'
};

Camper.propTypes = {
  name: PropTypes.string.isRequired
};


//React: Create a Stateful Component

//There is a component in the code editor that is trying to render a name
// property from its state. However, there is no state defined.
 //Initialize the component with state in the constructor
 // and assign your name to a property of name.

 class StatefulComponent extends React.Component {
  constructor(props) {
    super(props);
    // initialize state here
    this.state={
      name:"me"
    }
  }
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
};


//In the code editor, MyComponent is already stateful.
// Define an h1 tag in the component's render method 
//which renders the value of name from the component's state.

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'freeCodeCamp'
    }
  }
  render() {
    return (
      <div>
       
           <h1>{this.state.name}</h1>
      
      </div>
    );
  }
};

/*In the MyComponent render method, define a const called name and set it equal 
to the name value in the component's state. Because you can write JavaScript 
directly in this part of the code, you don't have to enclose this
 reference in curly braces.

Next, in the return statement, render this value in an h1 tag using 
the variable name. Remember, you need to use the JSX syntax (curly braces for JavaScript) 
in the return statement.*/

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'freeCodeCamp'
    }
  }
  render() {
    // change code below this line
     const name= this.state.name
    // change code above this line
    return (
      <div>
       
         <h1>{name}</h1>
      
      </div>
    );
  }
};

/*There is a button element in the code editor which has an onClick() handler.
 This handler is triggered when the button receives a click event in the browser,
  and runs the handleClick method defined on MyComponent. 
  Within the handleClick method, update the component state using this.setState(). 
  Set the name property in state to equal the string React Rocks!.

Click the button and watch the rendered state update.
 Don't worry if you don't fully understand how the click handler 
 code works at this point. It's covered in upcoming challenges.*/

 class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Initial State'
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    // change code below this line
     this.setState({name:"React Rocks!"})
    // change code above this line
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click Me</button>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
};


//React: Bind 'this' to a Class Method

/*The code editor has a component
 with a state that keeps track of an item count. It also has a method which allows you 
 to increment this item count. However, the method doesn't work because it's using the
  this keyword that is undefined. Fix it by explicitly binding this to the addItem() 
  method in the component's constructor.

Next, add a click handler to the button element in the render method. It should 
trigger the addItem() method when the button receives a click event. Remember that
 the method you pass to the onClick handler needs curly braces because it should be
  interpreted directly as JavaScript.

Once you complete the above steps you should be able to click the button and see the
 item count increment in the HTML.*/

 class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemCount: 0
    }
   
    // change code below this line
     this.addItem=this.addItem.bind(this);
    // change code above this line
  }
  addItem() {
    this.setState({
      itemCount: this.state.itemCount + 1
    });
  }
  render() {
    return (
      <div>
       
        <button onClick={this.addItem}
        >Click Me</button>
       
        <h1>Current Item Count:{this.state.itemCount}</h1>
      </div>
    );
  }
};


