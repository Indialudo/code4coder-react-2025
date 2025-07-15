"use client";
import ReactStars from "react-stars";

export const Rating = ({ rating, students, classes }) => {
  return (
    <div className={`flex items-center md:gap-2 gap-1 flex-wrap ${classes}`}>
      <ReactStars
        count={5}
        value={rating}
        half={true}
        size={30}
        color1={"#808080"} // Set the color for unfilled stars
        color2={"#fea116"} // Set the color for filled stars
        edit={false}
      />
      {students ? (
        <p className="text-base md:text-lg">
          (<span style={{fontWeight:"bold"}}>{students}</span> <span style={{color:"red", fontWeight:"bold"}}>students & professionals</span>)
        </p>
      ) : (
        ""
      )}
    </div>
  );
};
