import React from 'react';

const CollectionItem = ({user, numbers, id, deleteCollectionItem }) => {
        return (
            <tr>
                <td className="pr-5">{user}</td>
                <td className="pr-5">{numbers}</td>
                <td><button onClick={() => deleteCollectionItem(id)}>X</button></td>
            </tr>
        )
    }
<<<<<<< HEAD
=======

>>>>>>> part-2
export default CollectionItem;