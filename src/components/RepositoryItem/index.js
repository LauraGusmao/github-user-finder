import React from 'react';

function RepositoryItem({ name, fullname, linkToRepo }) {
  return (
    <div>
      <h2>{ name }</h2>
      <h4>Fullname:</h4>
      <a href={ linkToRepo } target="_blank" rel="noreferrer">{ fullname }</a>
    </div>
  );
}

export default RepositoryItem;
