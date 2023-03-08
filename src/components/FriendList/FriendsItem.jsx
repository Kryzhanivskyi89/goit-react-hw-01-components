import PropTypes from "prop-types";
import css from './FriendList.module.css';
import clsx from "clsx";

export const FriendsItem = ({avatar, name, isOnline, }) => {
        return (
            <li className={css.item} >
                <span className={clsx (css.status, !isOnline && css.offline)}></span>
                <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
                <p className={css.name}>{name}</p>
            </li>
        )
}

FriendsItem.propTypes = {    
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};