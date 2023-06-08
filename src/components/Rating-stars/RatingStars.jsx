import { LuStar } from "react-icons/lu";
import PropTypes from "prop-types";

const RatingStars = ({ rating }) => {
  const renderStars = () => {
    const stars = [];

    for (let i = 1; i <= 5; i++) {
      const starProps = {
        fill: i <= rating ? "#FFB900" : "none",
        color: "black",
        stroke: "#E09B00",
        strokeWidth: 2,
        width: "20px",
        height: "20px",
      };

      stars.push(<LuStar key={i} style={starProps} />);
    }

    return stars;
  };

  return <div className="rating-stars">{renderStars()}</div>;
};

RatingStars.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default RatingStars;
