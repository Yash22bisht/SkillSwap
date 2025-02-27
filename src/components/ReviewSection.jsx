import ProfileIcon from "../assets/profileIcon.png";
import starIcon from "../assets/starIcon.png";
import ReviewCard from "./reviewCard";

const reviews = [
  {
    name: "Aarav Singh",
    time: "~ 2 hours ago",
    message: "Great learning experience! The content was well-explained and easy to understand.",
    tutor: "Nisha Patel - JavaScript",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    time: "~ 1 day ago",
    message: "I enjoyed the session thoroughly. The instructor was patient and knowledgeable.",
    tutor: "Kunal Gupta - ReactJS",
    rating: 4,
  },
  {
    name: "Raj Patel",
    time: "~ 3 days ago",
    message: "This was incredibly helpful. I finally understand the concepts I struggled with.",
    tutor: "Meera Iyer - NodeJS",
    rating: 5,
  },
  {
    name: "Ananya Kapoor",
    time: "~ 4 days ago",
    message: "The cooking class was fantastic! I learned so many new recipes and techniques.",
    tutor: "Chef Raghav - Italian Cooking",
    rating: 5,
  },
  {
    name: "Amit Verma",
    time: "~ 1 week ago",
    message: "This photography workshop was insightful. I finally understand lighting and composition.",
    tutor: "Sonia Mehta - Portrait Photography",
    rating: 4,
  },
  {
    name: "Neha Joshi",
    time: "~ 3 days ago",
    message: "The yoga session helped me improve my flexibility and mindfulness.",
    tutor: "Yogi Arun - Yoga for Beginners",
    rating: 5,
  },
  {
    name: "Rohan Desai",
    time: "~ 2 weeks ago",
    message: "The music class was engaging and fun. I can now play a full song on the guitar!",
    tutor: "Sarah Fernandez - Guitar Basics",
    rating: 4,
  },
  {
    name: "Sanya Mehta",
    time: "~ 5 days ago",
    message: "I gained a solid understanding of watercolor techniques in this art class.",
    tutor: "Ankit Rao - Watercolor Painting",
    rating: 5,
  },
  {
    name: "Aditya Khanna",
    time: "~ 6 days ago",
    message: "This fitness boot camp pushed me to my limits and improved my stamina.",
    tutor: "Trainer Ayesha - Fitness Training",
    rating: 4,
  },
  {
    name: "Pooja Reddy",
    time: "~ 2 weeks ago",
    message: "The public speaking workshop gave me confidence and practical tips.",
    tutor: "Rahul Sharma - Public Speaking",
    rating: 5,
  },
  {
    name: "Kabir Malhotra",
    time: "~ 3 weeks ago",
    message: "The gardening class taught me how to care for plants and grow my own vegetables.",
    tutor: "Mrs. Kapoor - Home Gardening",
    rating: 4,
  },
];



const ReviewSection = () => {
  return (
    <div id="reviewSection" className="ReviewSection w-screen px-10 py-14 bg-[#E0F7F5] ">
      <div className="reviews flex items-center">
        <h1 className="heading font-Luckiest text-5xl text-teal-600 mb-10 ">
          Recent Reviews :
        </h1>
        <div className="reviewConatainer w-full whitespace-nowrap flex gap-8 overflow-x-scroll scrollbar-hide ">
          {reviews.map((review, index) => (
            <ReviewCard
              key = {index}
              username={review.name}
              time={review.time}
              message={review.message}
              tutor={review.tutor}
              rating={review.rating}
            />
          ))}

          {/* <ReviewCard username ="yash" time ="~ 3 days ago" message="This was incredibly helpful. I finally understand the concepts I struggled with." tutor= "Raj - NodeJS"/> 
          <div className="review w-[20vw] h-[28vh] bg-amber-100 p-3 space-y-2 whitespace-normal flex-shrink-0 rounded-3xl">
            <div className="UserDetails flex items-center gap-2">
              <img src={ProfileIcon} className="profileIcon w-10 h-10" alt="" />
              <div className="NameTime ">
                <h4 className="UserName  font-bold ">Yash Bisht</h4>
                <p className="timeOfReview text-sm text-gray-600">
                  ~ 5 minutes ago{" "}
                </p>
              </div>
            </div>
            <div className="stars flex gap-1 ">
              <img src={starIcon} alt="" />
              <img src={starIcon} alt="" />
              <img src={starIcon} alt="" />
              <img src={starIcon} alt="" />
              <img src={starIcon} alt="" />
            </div>
            <p
              className="msg font-semibold w-full h-[4.5rem] overflow-hidden  "
              style={{
                display: "-webkit-box",
                WebkitLineClamp: 3, // Limit to 2 lines
                WebkitBoxOrient: "vertical",
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
              eaque Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Ducimus, in? Sint eaque tenetur magni explicabo itaque nemo
              laboriosam eum molestiae quod? Corrupti perspiciatis nesciunt
              voluptas tempore, quibusdam quasi distinctio eveniet.
            </p>
            <div className="tutor">
              <a href="/" className="tutor text-red-600 font-bold text">
                Yash - WebDev
              </a>
            </div>
          </div>
          <div className="review w-[20vw] h-[28vh] bg-amber-100 p-3 space-y-2">
            <div className="UserDetails flex items-center gap-2">
              <img src={ProfileIcon} className="profileIcon w-10 h-10" alt="" />
              <div className="NameTime ">
                <h4 className="UserName  font-bold ">Yash Bisht</h4>
                <p className="timeOfReview text-sm text-gray-600">
                  ~ 5 minutes ago{" "}
                </p>
              </div>
            </div>
            <div className="stars flex gap-1 ">
              <img src={starIcon} alt="" />
              <img src={starIcon} alt="" />
              <img src={starIcon} alt="" />
              <img src={starIcon} alt="" />
              <img src={starIcon} alt="" />
            </div>
            <p
              className="msg font-semibold w-full h-[4.5rem] overflow-hidden  "
              style={{
                display: "-webkit-box",
                WebkitLineClamp: 3, // Limit to 2 lines
                WebkitBoxOrient: "vertical",
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
              eaque Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Ducimus, in? Sint eaque tenetur magni explicabo itaque nemo
              laboriosam eum molestiae quod? Corrupti perspiciatis nesciunt
              voluptas tempore, quibusdam quasi distinctio eveniet.
            </p>
            <div className="tutor">
              <a href="/" className="tutor text-blue-600 font-bold text">
                Yash - WebDev
              </a>
            </div>
          </div>
          <div className="review w-[20vw] h-[28vh] bg-amber-100 p-3 space-y-2">
            <div className="UserDetails flex items-center gap-2">
              <img src={ProfileIcon} className="profileIcon w-10 h-10" alt="" />
              <div className="NameTime ">
                <h4 className="UserName  font-bold ">Yash Bisht</h4>
                <p className="timeOfReview text-sm text-gray-600">
                  ~ 5 minutes ago{" "}
                </p>
              </div>
            </div>
            <div className="stars flex gap-1 ">
              <img src={starIcon} alt="" />
              <img src={starIcon} alt="" />
              <img src={starIcon} alt="" />
              <img src={starIcon} alt="" />
              <img src={starIcon} alt="" />
            </div>
            <p
              className="msg font-semibold w-full h-[4.5rem] overflow-hidden  "
              style={{
                display: "-webkit-box",
                WebkitLineClamp: 3, // Limit to 2 lines
                WebkitBoxOrient: "vertical",
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
              eaque Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Ducimus, in? Sint eaque tenetur magni explicabo itaque nemo
              laboriosam eum molestiae quod? Corrupti perspiciatis nesciunt
              voluptas tempore, quibusdam quasi distinctio eveniet.
            </p>
            <div className="tutor">
              <a href="/" className="tutor text-blue-600 font-bold text">
                Yash - WebDev
              </a>
            </div>
          </div>
          <div className="review w-[20vw] h-[28vh] bg-amber-100 p-3 space-y-2">
            <div className="UserDetails flex items-center gap-2">
              <img src={ProfileIcon} className="profileIcon w-10 h-10" alt="" />
              <div className="NameTime ">
                <h4 className="UserName  font-bold ">Yash Bisht</h4>
                <p className="timeOfReview text-sm text-gray-600">
                  ~ 5 minutes ago{" "}
                </p>
              </div>
            </div>
            <div className="stars flex gap-1 ">
              <img src={starIcon} alt="" />
              <img src={starIcon} alt="" />
              <img src={starIcon} alt="" />
              <img src={starIcon} alt="" />
              <img src={starIcon} alt="" />
            </div>
            <p
              className="msg font-semibold w-full h-[4.5rem] overflow-hidden  "
              style={{
                display: "-webkit-box",
                WebkitLineClamp: 3, // Limit to 2 lines
                WebkitBoxOrient: "vertical",
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
              eaque Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Ducimus, in? Sint eaque tenetur magni explicabo itaque nemo
              laboriosam eum molestiae quod? Corrupti perspiciatis nesciunt
              voluptas tempore, quibusdam quasi distinctio eveniet.
            </p>
            <div className="tutor">
              <a href="/" className="tutor text-blue-600 font-bold text">
                Yash - WebDev
              </a>
            </div>
          </div>
          <div className="review w-[20vw] h-[28vh] bg-amber-100 p-3 space-y-2">
            <div className="UserDetails flex items-center gap-2">
              <img src={ProfileIcon} className="profileIcon w-10 h-10" alt="" />
              <div className="NameTime ">
                <h4 className="UserName  font-bold ">Yash Bisht</h4>
                <p className="timeOfReview text-sm text-gray-600">
                  ~ 5 minutes ago{" "}
                </p>
              </div>
            </div>
            <div className="stars flex gap-1 ">
              <img src={starIcon} alt="" />
              <img src={starIcon} alt="" />
              <img src={starIcon} alt="" />
              <img src={starIcon} alt="" />
              <img src={starIcon} alt="" />
            </div>
            <p
              className="msg font-semibold w-full h-[4.5rem] overflow-hidden  "
              style={{
                display: "-webkit-box",
                WebkitLineClamp: 3, // Limit to 2 lines
                WebkitBoxOrient: "vertical",
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
              eaque Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Ducimus, in? Sint eaque tenetur magni explicabo itaque nemo
              laboriosam eum molestiae quod? Corrupti perspiciatis nesciunt
              voluptas tempore, quibusdam quasi distinctio eveniet.
            </p>
            <div className="tutor">
              <a href="/" className="tutor text-blue-600 font-bold text">
                Yash - WebDev
              </a>
            </div>
          </div> */}
          {/* <div className="review w-[20vw] h-[28vh] bg-amber-100 p-3 space-y-2 ">
            <div className="UserDetails flex items-center gap-2">
              <img src={ProfileIcon} className="profileIcon w-10 h-10" alt="" />
              <div className="NameTime ">
                <h4 className="UserName  font-bold ">Yash Bisht</h4>
                <p className="timeOfReview text-sm text-gray-600">
                  ~ 5 minutes ago{" "}
                </p>
              </div>
            </div>
            <div className="stars flex gap-1 ">
              <img src={starIcon} alt="" />
              <img src={starIcon} alt="" />
              <img src={starIcon} alt="" />
              <img src={starIcon} alt="" />
              <img src={starIcon} alt="" />
            </div>
            <p
              className="msg font-semibold w-full h-[4.5rem] overflow-hidden  "
              style={{
                display: "-webkit-box",
                WebkitLineClamp: 3, // Limit to 2 lines
                WebkitBoxOrient: "vertical",
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
              eaque Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Ducimus, in? Sint eaque tenetur magni explicabo itaque nemo
              laboriosam eum molestiae quod? Corrupti perspiciatis nesciunt
              voluptas tempore, quibusdam quasi distinctio eveniet.
            </p>
            <div className="tutor">
              <a href="/" className="tutor text-blue-600 font-bold text">
                Yash - WebDev
              </a>
            </div>
          </div> */}
          {/* <div className="review w-[20vw] h-[28vh] bg-amber-100 p-3 space-y-2">
            <div className="UserDetails flex items-center gap-2">
              <img src={ProfileIcon} className="profileIcon w-10 h-10" alt="" />
              <div className="NameTime ">
                <h4 className="UserName  font-bold ">Yash Bisht</h4>
                <p className="timeOfReview text-sm text-gray-600">
                  ~ 5 minutes ago{" "}
                </p>
              </div>
            </div>
            <div className="stars flex gap-1 ">
              <img src={starIcon} alt="" />
              <img src={starIcon} alt="" />
              <img src={starIcon} alt="" />
              <img src={starIcon} alt="" />
              <img src={starIcon} alt="" />
            </div>
            <p
              className="msg font-semibold w-full h-[4.5rem] overflow-hidden  "
              style={{
                display: "-webkit-box",
                WebkitLineClamp: 3, // Limit to 2 lines
                WebkitBoxOrient: "vertical",
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
              eaque Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Ducimus, in? Sint eaque tenetur magni explicabo itaque nemo
              laboriosam eum molestiae quod? Corrupti perspiciatis nesciunt
              voluptas tempore, quibusdam quasi distinctio eveniet.
            </p>
            <div className="tutor">
              <a href="/" className="tutor text-blue-600 font-bold text">
                Yash - WebDev
              </a>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ReviewSection;
