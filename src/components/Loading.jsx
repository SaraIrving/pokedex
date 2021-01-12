import React from 'react';

// This component is a cute pokemon gif that shows up before the LandingCard component is rendered due to the delay in fetching information from the api

export default function Loading() {
  return (
    <div className="loading">
      <img src="https://i.gifer.com/5Q0v.gif"></img>
    </div>
  );
}