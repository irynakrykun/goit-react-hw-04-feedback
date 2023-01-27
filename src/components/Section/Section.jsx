import PropTypes from 'prop-types';
import css from '../Section/Section.module.css';

const Section = ({ title, children }) => {
  return (
    <>
      <h2 className={css.title}>{title}</h2>
      {children}
    </>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.object,
};
export default Section;
