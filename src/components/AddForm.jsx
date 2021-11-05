// import React, { Component } from "react";
// import axios from "axios";

// export class AddForm extends Component {
//   state = {
//     title: "",
//     description: "",
//     doBefore: "",
//   };
//   //method we'll use every time we have onChange , that the value
//   //is coming from state, and that the name matches
//   //updating what we want to change with the new value entered.
//   //the event target's name. what is the target of the event (button, etc.)?
//   //the name
//   //whenever we sent an event listener, the target will be the whole
//   //dom element that will actually triggering that event if button and
//   // click, the target will be whole button dom element. internally you
//   //can navigate through attributes
//   //when working with input field, .name is a property
//   handleChange = (event) => {
//     this.setState({ [event.target.name]: event.target.value });
//   };

//   handleSubmit = (event) => {
//     event.preventDefault();
//     const { title, description, doBefore } = this.state;
//     axios
//       .post(`${process.env.REACT_APP_SERVER_API}/todos/create`, {
//         title,
//         description,
//         doBefore,
//       })
//       .then((data) => {
//         this.props.history.push("/");
//       })
//       .catch((err) => {
//         this.props.history.push("/500");
//       });
//   };

//   render() {
//     const { title, description, doBefore } = this.state;

//     return (
//       <div>
//         <form onSubmit={this.handleSubmit}>
//           <label htmlFor="title">Title</label>
//           <input
//             onChange={this.handleChange}
//             type="text"
//             name="title"
//             value={title}
//           />
//           <br />
//           <label htmlFor="description">Description</label>
//           <input
//             onChange={this.handleChange}
//             type="text"
//             name="description"
//             value={description}
//           />
//           <br />
//           <label htmlFor="doBefore">Do Before</label>
//           <input
//             onChange={this.handleChange}
//             type="date"
//             name="doBefore"
//             value={doBefore}
//           />
//           <br />
//           <button type="submit">Add</button>
//         </form>
//       </div>
//     );
//   }
// }

// export default AddForm;
