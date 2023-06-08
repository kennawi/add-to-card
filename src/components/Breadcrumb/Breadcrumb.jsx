import "./_breadcrumb.scss";
import PropTypes from "prop-types";

const Breadcrumb = ({ breadcrumbItems }) => {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        {breadcrumbItems.map((item, index) => (
          <li className="breadcrumb__item" key={index}>
            <a href="/">{item}</a>
            {index !== breadcrumbItems.length - 1 && (
              <span className="breadcrumb__slash">/</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

Breadcrumb.propTypes = {
  breadcrumbItems: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string,
    })
  ).isRequired,
};

export default Breadcrumb;
