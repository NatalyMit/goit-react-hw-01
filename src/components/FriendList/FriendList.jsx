import FriendListItem from '../FriendListItem/FriendListItem';
import css from './FriendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <>
      <h2>Список друзів</h2>
      <div>
        <ul className={css.friendBoxList}>
          {friends.map(friend => (
            <li className={css.friendBoxItem} key={friend.id}>
              <FriendListItem {...friend} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default FriendList;
