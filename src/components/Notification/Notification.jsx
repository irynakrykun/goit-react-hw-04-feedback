import PropTypes from 'prop-types';
import css from '../Notification/Notification.module.css';
const Notification = ({ message }) => {
    return (
        <p className={css.notification__message}>{message}</p>
    )
};

Notification.propTypes = {
    message: PropTypes.string.isRequired
};

export default Notification;