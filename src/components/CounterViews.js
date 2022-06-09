import React from 'react';



function CounterViews() {
    const countEl = document.getElementById("count");

     const myCount=fetch("https://api.countapi.xyz/update/biketrace/bikeblog/?amount=1")
      .then((res) => res.json())
      .then(data =>{
          countEl.innerHTML = data.value
          
      });
    

  return (
    <div id="views">
      <h1 className="views_header">Number of visitors</h1>
      <div className="views_card">
        <h2 className="view_number">The total number of visitors</h2>
        <h2 id="count">0</h2>
      </div>
    </div>
  );
}

export default CounterViews