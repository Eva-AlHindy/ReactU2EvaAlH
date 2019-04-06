/*
UserListComponent (UserComponent) is a function component which we use to show the user's data.
*/
import React from 'react';
import {ListGroup} from 'react-bootstrap';
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';

/* we definde two color red and green to toggle the text of  the user's data
(whish is: props.user from DashBoardComponent)  between them.*/

const redColor = '#DC2601';
const greenColor = '#26B001';

  function UserListComponent(props){
  /*We test the poperty of the color, if it is true so the color will be red and if it is false the color will be green.*/
    return  (
      <ListGroup.Item className="userListItem" >
        <Link style={{color: props.color ? redColor : greenColor}} to={"/user/"+props.user.name}>
          {props.user.id+ ":  " + props.user.name}
          {props.user.isActive ? <div>User is : Active</div> :  <div>User is : not Active</div>}
        </Link>
      </ListGroup.Item>)
  }
/* userList is an array and evry item is an object, so it has propTypes as shape.*/
  UserListComponent.propTypes = {
      user: PropTypes.PropTypes.shape({
                            id: PropTypes.string,// throws a warning if the id is not a string.
                            name: PropTypes.string,// throws a warning if the name is not a string.
                            isActive:PropTypes.bool,// throws a warning if the isActive is not a boolean.
                            }),
      color: PropTypes.bool
  };
export default UserListComponent;
