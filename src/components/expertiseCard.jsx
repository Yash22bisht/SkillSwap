import starIcon from "../assets/starIcon.png";
import emptyStar from "../assets/emptyStar.png";

const ExpertiseCard = (props) => {

    const renderStars =  (rating) => {
        let star = [];
        for(let i=0;i<3;i++){
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
        <div className="expertiseCard w-[100%]  border-2 border-transparent hover:border-green-500 h-20 bg-green-100 rounded-lg p-4 flex justify-between items-center">
            <h1 className="expertiseName text-lg font-semibold text-gray-700">{props.skill}</h1>
            <div className="experience flex gap-2">
                {renderStars(props.rating)}
            </div>
        </div>
    )
}

export default ExpertiseCard
