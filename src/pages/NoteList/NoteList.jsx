import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Item from './Item';
import useAuthContext from '../../hooks/useAuthContext';

import axios from '../../api/axios';
import Header from '../../components/Header';

export default function NoteList() {
  const { userToken } = useAuthContext();
  const [items, setItems] = useState([]);

  const getNotes = async () => {
    if (!userToken) return;

    const url = '/i-note';
    const { data } = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    });
    setItems(data?.iNotes || []);
  };

  useEffect(() => {
    if (!userToken) return;
    getNotes();
  }, [userToken]);

  return (
    <div className="h-screen flex flex-col">
      <div className="flex-1">
        <Header hideHome />
      </div>
      <div className="p-2 bg-blue-200 h-screen flex flex-col flex-[17]">
        <div className="flex-[11]">
          {items.map((item) => (
            <Item key={item.id} title={item.title} noteId={item.id} />
          ))}
        </div>
        <div className="flex-[1] flex justify-center">
          <Link to="/create" className="w-full">
            <button type="button" className="px-4 py-2 rounded w-full bg-green-200 h-full">
              Create New Note
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
