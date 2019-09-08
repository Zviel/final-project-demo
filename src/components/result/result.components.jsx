import React from 'react';
import PropTypes from 'prop-types'

import './result.styles.scss'

function Result(props) {
    return (
        <div className="result">
            <strong>{props.quizResult}</strong>!
        </div>
    );
}
Result.propTypes = {
    quizResult: PropTypes.string.isRequired,
};
export default Result;