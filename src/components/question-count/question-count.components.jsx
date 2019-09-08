import React from 'react';
import PropTypes from 'prop-types'

import './question-count.styles.scss'

function QuestionCount(props) {
    return (
        <div className="questionCount">
            שאלה <span>{props.counter}</span> מתוך <span>{props.total}</span>
        </div>
    );
}
QuestionCount.propTypes = {
    counter: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired
};
export default QuestionCount;