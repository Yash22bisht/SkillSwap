import ProfileIcon from "../assets/profileIcon.png";
import starIcon from "../assets/starIcon.png";
import emptyStar from "../assets/emptyStar.png";

const ReviewCard = (props) => {

  const renderStars =  (rating) => {
    let star = [];
    for(let i=0;i<5;i++){
      if(i<rating){
        star.push(<img key={i} src={starIcon} alt="Star" />)
      }
      else{
        star.push(<img key={i} src={emptyStar} alt="" />);
      }
    }
    return star ;
  }
  return (
    <div className="review w-[20vw] h-[28vh] bg-amber-50 p-3 space-y-2 whitespace-normal flex-shrink-0 rounded-3xl">
      <div className="UserDetails flex items-center gap-2">
        <img src={ProfileIcon} className="profileIcon w-10 h-10" alt="" />
        <div className="NameTime ">
          <h4 className="UserName  font-bold "><a href="/">{props.username}</a></h4>
          <p className="timeOfReview text-sm text-gray-600">{props.time}</p>
        </div>
      </div>
      <div className="stars flex gap-1 "> {renderStars(props.rating)} </div>
      <p
        className="msg font-semibold w-full h-[4.5rem] overflow-hidden  "
        style={{
          display: "-webkit-box",
          WebkitLineClamp: 3, // Limit to 3 lines
          WebkitBoxOrient: "vertical",
        }}
      >
        {props.message}
      </p>
      <div className="tutor">
        <a href="/" className="tutor text-red-600 font-bold text">
          {props.tutor}
        </a>
      </div>
    </div>
  );
};

export default ReviewCard;
