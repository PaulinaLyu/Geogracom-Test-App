import React from 'react';
import Table from 'react-bootstrap/Table';
import styled from 'styled-components';
import CollectionItem from './CollectionItem';

const CollectionStyled = styled.div`
	width: 100%;
	height: 100vh;
	position: relative;
`;

const CollectionInner = styled.div`
    margin: 0;
    position: absolute;
    top: 40%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%)
`;

export const Collection = ({ collection, deleteCollectionItem }) => {
	return (
		<CollectionStyled>
			<CollectionInner>
				<Table responsive  >
    				<thead>
      					<tr>
        					<th>ФИО</th>
        					<th>Телефон</th>
        					<th>Удалить</th>
      					</tr>
    				</thead>
					<tbody>
						{collection.map(item => <CollectionItem 
							id={item.get('id')}
							key={item.get('id')} 
							user={item.get('user')}
							numbers={item.get('numbers')}
							deleteCollectionItem={deleteCollectionItem} />)}
    				</tbody>
				</Table>
			</CollectionInner>
		</CollectionStyled>
	)
};

export default Collection;