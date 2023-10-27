import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { format } from 'path';

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  const [showAddFriend, setShowAddFriend] = useState(false);

  function handleShowAddFriend() {
    setShowAddFriend((showAddFriend) => !showAddFriend)
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList />
        {showAddFriend && <FormAddFriend />}

        <Button onClick={handleShowAddFriend}>{showAddFriend ? 'Close' : 'Add Friend'}</Button>

      </div>
      <FormSplitBill />

    </div>
  );
}


function FriendsList() {
  return (
    <ul>
      {initialFriends.map(f => (<Friend friend={f} />))}
    </ul>
  )
}

function Friend({ friend }: any) {
  return (
    <li>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance < 0 && (
        <p className='red'>You owe {friend.name} {Math.abs(friend.balance)}$</p>
      )}

      {friend.balance > 0 && (
        <p className='green'>{friend.name}  owes you {Math.abs(friend.balance)}$</p>
      )}

      {friend.balance === 0 && (
        <p>You and {friend.name} are even</p>
      )}

      <Button>Select</Button>
    </li>
  )
}


function Button({ children, onClick }: any) {
  return <button className='button' onClick={onClick}>{children}</button>
}
function FormAddFriend() {
  return (
    <form action="" className='form-add-friend'>

      <label htmlFor="name">👯‍♀️ Friend's Name</label>
      <input type="text" />

      <label htmlFor="name">📸 Image Url</label>
      <input type="text" />


      <Button>Add</Button>
    </form>
  )
}

function FormSplitBill() {
  return (
    <form action="" className='form-split-bill'>

      <h2>Split a bill with x</h2>

      <label htmlFor="billValue">💰 Bill Value</label>
      <input type="number" id="billValue" />

      <label htmlFor="yourExpenses">😁 Your Expenses</label>
      <input type="number" id="yourExpenses" />

      <label htmlFor="friendsExpenses">🙈 Friends Expenses</label>
      <input type="number" id="friendsExpenses" disabled />

      <label htmlFor="whoPays">🤑 Who is Paying the Bill</label>
      <select id="whoPays">
        <option value="user">You</option>
        <option value="friend">Friend</option>
      </select>

      <Button>Add</Button>
    </form>
  )
}