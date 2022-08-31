import styles from './FriendList.module.css';
import FriendListItem from '../FriendListItem/FriendListItem';

const FriendLisl = ({ friends }) => {
  return (
    <ul className={styles.friendList}>
      {friends.map(el => {
        return (
          <FriendListItem
            key={el.id}
            avatar={el.avatar}
            name={el.name}
            isOnline={el.isOnline}
            id={el.id}
          />
        );
      })}
    </ul>
  );
};

export default FriendLisl;
