import React from "react";
import './user-card.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";


const UserCard = (props) => {
  const{first_name,last_name, img, url, id} = props.p;
  const {removeUser, editing, host} = props;
   return <a href={url}>
       <div className="card  card-user" style={{width: "9rem"}}>
         <div className="card-body d-flex flex-column">
             <div className="d-flex ">

                 <Link to={`/users/${id}`}><img src={img} /></Link>
                 {(!host && editing)  ?
                     <FontAwesomeIcon icon={faTimes} onClick={(e) =>

                     {e.preventDefault();
                       removeUser(id)}}/> :
                     null
                 }

             </div>
        <div className=" card-name-container m-auto ">
            <p  className="card-title">{first_name} {last_name}</p>
            {host ? <p className="w-50 m-auto">Host</p> : null}
        </div>
    </div>
   </div></a>

}

export default UserCard;
