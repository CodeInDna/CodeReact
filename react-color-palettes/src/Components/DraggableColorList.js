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
                         distance={20}  /*gives a distance to considered it as delete event (not dragging event)*/
          		/>
          	))}
		</div>
	)
})
export default DraggableColorList;
