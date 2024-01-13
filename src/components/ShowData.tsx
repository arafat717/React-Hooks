import React from "react";

const ShowData = ({ item, error, loading }) => {
  console.log(item);
  if (loading && !error) {
    return <p>Loading....</p>;
  }

  console.log(loading);

  if (error) {
    return <p>something went wrong</p>;
  }
  console.log(error);
  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{item.email}</h2>
          <p>{item.name}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">{item.username}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowData;
