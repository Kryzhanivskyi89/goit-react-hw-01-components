import PropTypes from "prop-types";
import css from './FriendList.module.css';
import friends from './friends.json';
import clsx from "clsx";

export const FriendsList = () => {
    return (
        <ul  className={css.friend__list}>
        {friends.map(({id, avatar, name, isOnline, }) => {
            return (
                <Friends
                    key={id}
                    avatar={avatar}
                    name={name}
                    isOnline={isOnline}/>               
            )
        })} 
        </ul>
    )   
}

const Friends = ({avatar, name, isOnline, }) => {
        return (
            <li className={css.item} >
                <span className={clsx (css.status, !isOnline && css.offline)}></span>
                <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
                <p className={css.name}>{name}</p>
            </li>
        )
}

FriendsList.propTypes = {
    id: PropTypes.number,
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,    
};
