import React from 'react';
import DATA_STRUCTURE_A from './data-structure-a-course-data';
import CollectionPreview from'../../components/collection-preview/collection-preview.component'

class DataStructureA extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            collections : DATA_STRUCTURE_A
        }
    }
    render() {
        const {collections} = this.state;
        return (<div className='page-settings'>{
                collections.map(({id, ...otherCollectionProps}) => (
                    <CollectionPreview key={id} {...otherCollectionProps}/>
                ))
            }
            </div>
        );
    }
}
export default DataStructureA