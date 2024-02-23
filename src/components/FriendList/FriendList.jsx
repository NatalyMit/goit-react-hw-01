import FriendListItem from '../FriendListItem/FriendListItem';

const FriendList = ({ friends }) => {
  return (
    <>
      <h2>Список друзів</h2>
      <div>
        <ul>
          {friends.map(friend => (
            <li key={friend.id}>
              <FriendListItem {...friend} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default FriendList;
