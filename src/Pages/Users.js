import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { useErrorHandler } from "react-error-boundary";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const handleError = useErrorHandler();

  const perPage = 5;

  const fetchdata = async () => {
    setLoading(true);
    try {
      const fetchMeData = await fetch(
        "https://randomuser.me/api/?page=3&results=50&seed=abc"
      );
      const readableData = await fetchMeData.json();
      setUsers(readableData.results);
      setLoading(false);
    } catch (err) {
      handleError(err);
    }
  };
  useEffect(() => {
    fetchdata();
  }, []);

  console.log(users);
  if (loading) {
    return <h3>Loading....</h3>;
  }
  return (
    <div>
      <p>users data</p>

      <div className='grid grid-cols-2 justify-center'>
        {users.slice((page - 1) * perPage, page * perPage).map((user, idx) => {
          return (
            <div key={idx}>
              <h3>
                {user.name.first} {user.name.last}
              </h3>
              <img src={user.picture.medium} alt='user' />
            </div>
          );
        })}
      </div>

      <button
        className='bg-red-500 p-[10px] text-white mr-[10px]'
        onClick={() => setPage((p) => p - 1)}
        disabled={page <= 1}
        style={
          page <= 1
            ? { backgroundColor: "grey", color: "rgba(0,0,0,0.2)" }
            : null
        }
      >
        Prev
      </button>
      <button
        disabled={page >= users.length / perPage}
        className='bg-red-500 p-[10px] text-white'
        onClick={() => setPage((p) => p + 1)}
        style={
          page >= users.length / perPage
            ? { backgroundColor: "grey", color: "rgba(0,0,0,0.2)" }
            : null
        }
      >
        Next
      </button>

      <h4>
        Page {page} of {users.length}
      </h4>
    </div>
  );
};

export default Users;
