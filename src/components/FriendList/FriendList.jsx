import PropTypes from "prop-types";
import css from './FriendList.module.css';
import friends from './friends.json';
import { FriendsItem } from "./FriendsItem";

export const FriendsList = () => {
    return <ul  className={css.friend__list}>
        {friends.map(({id, avatar, name, isOnline, }) => {
            return (
                <FriendsItem
                    key={id}
                    avatar={avatar}
                    name={name}
                    isOnline={isOnline}/>               
            )
        })} 
        </ul>
       
}


FriendsList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,    
        })
    )  
};
