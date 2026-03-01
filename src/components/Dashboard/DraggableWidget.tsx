import React from "react";
import {
  Draggable,
  type DraggableProvided,
  type DraggableStateSnapshot,
} from "@hello-pangea/dnd";
import type { DraggableWidgetProps } from "../../types";

export const DraggableWidget: React.FC<DraggableWidgetProps> = ({
  id,
  index,
  children,
}) => (
  <Draggable draggableId={id} index={index}>
    {(provided: DraggableProvided, snapshot: DraggableStateSnapshot) => (
      <div
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        className={`transition-transform ${snapshot.isDragging ? "rotate-2 scale-105 z-50" : ""}`}
        style={{ ...provided.draggableProps.style }}
      >
        <div className="relative group cursor-move">
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-800 text-white text-xs px-2 py-1 rounded pointer-events-none whitespace-nowrap z-50">
            Drag to reorder
          </div>
          {children}
        </div>
      </div>
    )}
  </Draggable>
);
