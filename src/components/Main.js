import React from 'react';

const Main = (props) => {


    return (
<div>
<main>
      <h1>{ props.name }</h1>
      <h3>{ props.location }</h3>
    </main>
</div>
    )
}

export default Main