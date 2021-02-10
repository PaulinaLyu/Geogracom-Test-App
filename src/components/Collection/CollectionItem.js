import React from 'react';

const CollectionItem = (props) => {
    console.log (props)
        return (
            <tr>
                <td className="pr-5">{props.user}</td>
                <td className="pr-5">{props.numbers}</td>
                <td><button onClick={() => props.deleteCollectionItem(props.id)}>X</button></td>
            </tr>
        )
    }
export default CollectionItem;
// { id, user, numbers, deleteCollectionItem }