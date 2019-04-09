/* DashBoardComponent is a class component which has five states in the constructor:
1- userList which is an array and every item in it is an object.
2- newuserList which is an array, and every item in it is an object.
3- a value that respects the value of the input field in the form.
4-color which we use to change the colour of the text in the user list.
5-isActiveBtn which we use to change the colour of button (Show Inactive).
the component has also five methods.
1-handleChange: To control and change the value of the input field in the form by using setState.
2-addUserName: To add the value of the input field as an item into the userList array.
3-removUserName: To remove an item from the userList array.
4-toggleColor: To change the colour of the text of the user by changing the state of the colour
from true to false or vice versa by using setState.
5-showActiveUsers: To change the colour of the background of the button by changing the state of the isActiveBtn
from true till false or vice versa by using setState.
And this method also tests if the isActiveBtn is true so we make a filter in the userList and show the users
who are active and if the isActiveBtn is false to show the users who are not active.
*/
import React, { Component , Fragment} from 'react';
import UserListComponent from '../components/UserListComponent';
import CardComponent from '../components/CardComponent';
import {Container,Row,Col,Button,Form,ListGroup} from 'react-bootstrap';
import PropTypes from 'prop-types';
/* We import UniqueId to create a unique id automatically. */
//import UniqueId from 'react-html-id';

class DashBoardComponent extends Component {
  constructor(props) {
    super(props);
    //  UniqueId.enableUniqueIds(this);
        this.state ={
              userList:[
                {id:1, name: 'Mimmi', isActive: true},
                {id:2, name: 'Kalle', isActive: false},
                {id:3, name: 'Klara', isActive: true},
                {id:4, name: 'John', isActive: true},
                {id:5, name: 'Stina', isActive: false}
                    ],
              newuserList:[
                {id:1, name: 'Mimmi', isActive: true},
                {id:2, name: 'Kalle', isActive: false},
                {id:3, name: 'Klara', isActive: true},
                {id:4, name: 'John', isActive: true},
                {id:5, name: 'Stina', isActive: false}
                      ],
             value: '',
             color:true,
             isActiveBtn:true
          };
      this.handleChange = this.handleChange.bind(this);
      this.addUserName = this.addUserName.bind(this);
    }

  static propTypes = {
      /* user is an array and evry item is an object, so they have propTypes as shape.*/
      user: PropTypes.shape({
                          id: PropTypes.number,// throws a warning if the id is not a string.
                          name: PropTypes.string,// throws a warning if the name is not a string.
                          isActive:PropTypes.bool,// throws a warning if the isActive is not a boolean.
                          }),


    color: PropTypes.bool,//throws a warning if the color is not a boolean.
  }

/*A method which controls and changes the value of the input field in the form by using setState */
  handleChange(event) {
    this.setState({value: event.target.value});
  }

/*A method which adds item which is an object to userList array,
 without mutating it by using concat  method .
 Item in userlist {
 id: add new uniqueid,
 name : the value of the input field,
 isActive: set to true.
}*/
  addUserName(event) {
  //  UniqueId.enableUniqueIds(this);
    //const newUser=this.state.userList.concat([{id:this.nextUniqueId(), name: this.state.value, isActive: true}]);
    const newUser=this.state.userList.concat([{id:this.state.userList.length+1, name: this.state.value, isActive: true}]);
    this.setState({userList: newUser});
    this.setState({newuserList: newUser});
    event.preventDefault();
  }
  /*A method which remove an item from userList . */
  removUserName = (e) => {
       const removeUser=this.state.userList.slice(0,-1);
       this.setState({userList: removeUser});
    }

  /*A method which changes the color of the text of user by change the state of the color
  from true till false or vice versa by using setState. */
  toggleColor = (e) => {
       this.setState({
         color: !this.state.color
       })
    }

  /* A method which changes the colour of the background of the button by changing the state of the isActiveBtn
    from true till false or vice versa by using setState.
    And this method also tests if the isActiveBtn is true so we make a filter in the userList and save the result
    in newuserList becuse we don't want to mutate userList.
    If (this.state.isActiveBtn) is true so show the users who are active.
    If (!this.state.isActiveBtn) is false so show the users who are not active. */
  showActiveUsers = (e) => {

      this.setState({
        isActiveBtn: !this.state.isActiveBtn,
      })

      if(this.state.isActiveBtn){
        const activeUsers = this.state.userList.filter(function(user){
          if(user.isActive){
            return user;
          }
          return null;
        })
          this.setState({newuserList: activeUsers});
      }

      if(!this.state.isActiveBtn){
        const notactiveUsers = this.state.userList.filter(function(user){
          if(!user.isActive){
            return user;
          }
          return null;
        })
         this.setState({newuserList: notactiveUsers});
      }

  }


/*We render two card's components*/
  render(){
    return (
      <Fragment>
        <Container>
          <Row>
            <Col  lg="6">
              <div >
                <CardComponent >
                  {/*We test the poperty of the background, if it is true so the color will be blue and if it is false the color will be black.*/}
                  {/*We call showActiveUsers method when we click the button .*/}
                  <Button className="isActiveBtn"  style={{background: this.state.isActiveBtn ? "#000000" : "#0000ff"}}
                  onClick={() =>this.showActiveUsers(this.state.isActiveBtn)}>Show Inactive</Button>
                  <br />
                  <ListGroup>
                    {/*We render the newuserList array by using map method and we use (user.id) as a key.*/}
                    {this.state.newuserList.map((user) =>
                    <UserListComponent key={user.id} color={this.state.color} user={user} />
                    )}
                </ListGroup>
                <div>
                {/*We call toggleColor method when we click the button .*/}
                <Button variant="warning" onClick={() =>this.toggleColor(this.state.color)}>Toggle color</Button>
                </div>
                <br />
              </CardComponent>
            </div>
          </Col>

          <Col  lg="6">
            <div >
              <CardComponent >
                <Form onSubmit={this.addUserName}>
                  <Form.Control className="inputForm" size="lg" type="text" placeholder="User Name" value={this.state.value}  onChange={this.handleChange} />
                  <br />
                  {/*We call addUserName method when we click the submit button in the form .*/}
                  <Button variant="success" type="submit">  Add user name</Button>
                </Form>
                <br />
                <div>
                {/*We call removUserName method when we click the button .*/}
                <Button variant="danger" onClick={this.removUserName}>Remove user name</Button>
                </div>
                <br />
            </CardComponent>
          </div>
        </Col>
      </Row>
    </Container>
  </Fragment>
    );
  }
}

export default DashBoardComponent;
