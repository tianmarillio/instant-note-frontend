import React, { useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import BodyTextArea from '../../components/BodyTextArea';
import axios from '../../api/axios';
import Header from '../../components/Header';
import useAuthContext from '../../hooks/useAuthContext';

export default function NoteCreate() {
  const navigate = useNavigate();
  const title = useRef();
  const body = useRef();
  const { userToken } = useAuthContext();

  const postNote = async (url, payload) => {
    await axios.post(url, payload, {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = '/i-note';
    await postNote(url, {
      title: title.current.value,
      body: title.current.value,
    });
    navigate('/');
  };

  return (
    <div className="h-screen flex flex-col">
      <div className="flex-1">
        <Header />
      </div>
      <form
        className="flex-[17] flex flex-col bg-red-300 h-full items-center"
        onSubmit={handleSubmit}
      >
        <div className="flex-[1] bg-blue-200 w-full p-2">
          <input
            type="text"
            className="px-4 py-2 rounded w-full h-full"
            placeholder="Title"
            ref={title}
          />
        </div>
        <div className="flex-[11] w-full p-2">
          <BodyTextArea bodyRef={body} />
        </div>
        <div className="bg-blue-300 w-full flex">
          <button type="submit" className="px-4 py-2 bg-slate-500 text-slate-200 w-full flex-[6]">Save</button>
          <Link
            to="/"
            type="button"
            className="px-4 py-2 text-slate-200 w-full flex-1 bg-yellow-200"
          >
            Back
          </Link>
        </div>
      </form>
    </div>
  );
}
