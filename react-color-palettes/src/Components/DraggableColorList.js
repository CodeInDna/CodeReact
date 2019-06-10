import React from 'react';
import {SortableContainer} from 'react-sortable-hoc';
import DraggableColorBoxes from './DraggableColorBoxes';
const DraggableColorList = SortableContainer(({colors, deleteColorBox}) => {
	return (
		<div style={{height: "100%"}}>
			{colors.map((color, index) => (
          		<DraggableColorBoxes 
          			key={color.name} 
          			index={index}
          			color={color.color} 
          			name={color.name} 
          			deleteColorBox={() => deleteColorBox(color.name)}
          		/>
          	))}
		</div>
	)
})
export default DraggableColorList;
