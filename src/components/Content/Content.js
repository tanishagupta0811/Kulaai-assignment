import React, { useRef }  from "react";
import Card from "../Card";
import "./Content.scss";


const Content =({value})=>{
const Videoplay=useRef(null);
return(
    <div className="Content-container">
        <div className="Content-info">
        {value?.texts?.map((item,index)=>{
      return(
        <Card 
          key={item.heading}
          cur_item={index}
          videoref={Videoplay}
          item={item} />


      );
    })}
  </div>
  <div className="content-video-container">
        <video
          ref={Videoplay}
          className="video-repeat"
          autoPlay
          muted
          loop
        />
      </div>
    </div>
           
);

};
export default Content;