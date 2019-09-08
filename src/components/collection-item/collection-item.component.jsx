import React from 'react';
import {withRouter} from 'react-router-dom';
import './collection-item.styles.scss';

const CollectionItem = ({id,name,time,imageUrl,history,linkUrl,match}) => (
    <div className='collection-item' onClick={() => history.push(`${match.url}${linkUrl}`)}>
        <div className='image'
        style = {{
            backgroundImage: `url(${imageUrl})`
        }}/>
            <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='time'>{time}</span>
            </div>

    </div>
);

export default withRouter(CollectionItem)