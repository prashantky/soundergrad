import React, { useState } from "react";
function Slides({ slides }) {
  const [count, setCount] = useState(0);
  const data2 = slides[count];
  console.log(">>>>>>>>>>>>>>>>>>", data2);
  const onPrev = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  const onNext = () => {
    if (count < slides.length - 1) {
      console.log(count);
      setCount(count + 1);
    }
  };
  const onRestart = () => {
    setCount(0);
  };

  return (
    <div>
        <div className="header">
            <div className="header-sub" style={{color:"green"}}>
            <h1 >Hi</h1>
            </div>
       <div className="header-sub" ><h4>SlideShow App</h4></div>
        </div>
      <div id="navigation" className="text-center">
        <button
          data-testid="button-restart"
          className="small outlined"
          onClick={onRestart}
          disabled={count === 0 ? true : false}
        >
          Restart
        </button>
        <button
          data-testid="button-prev"
          className="small"
          onClick={onPrev}
          disabled={count === 0 ? true : false}
        >
          Prev
        </button>{" "}
        <button
          data-testid="button-next"
          className="small"
          onClick={onNext}
          disabled={count >= slides.length - 1 ? true : false}
        >
          Next
        </button>{" "}
      </div>
      <div id="slide" className="card text-center">
        <h1 data-testid="title">{data2.title}</h1>
        <p data-testid="text">{data2.text}</p>
      </div>
    </div>
  );
}

export default Slides;
