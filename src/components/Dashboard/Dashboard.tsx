import React, { useState } from "react";
import { DragDropContext, type DropResult } from "@hello-pangea/dnd";
import { Layout } from "../Layout/Layout";
import { StrictModeDroppable } from "../Common/StrictModeDroppable";
import { DraggableWidget } from "./DraggableWidget";
import { WidgetRenderer } from "./WidgetRenderer";
import type { Widget } from "../../types";
import { defaultWidgets } from "../../data/mockData";

export const Dashboard: React.FC = () => {
  const [widgets, setWidgets] = useState<Widget[]>(defaultWidgets);

  const handleDragEnd = (result: DropResult): void => {
    if (!result.destination) return;

    const items: Widget[] = Array.from(widgets);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setWidgets(items);
  };

  return (
    <Layout>
      <DragDropContext onDragEnd={handleDragEnd}>
        <StrictModeDroppable droppableId="dashboard">
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="space-y-6"
            >
              {widgets.map((widget, index) => (
                <DraggableWidget key={widget.id} id={widget.id} index={index}>
                  <WidgetRenderer widget={widget} />
                </DraggableWidget>
              ))}
              {provided.placeholder}
            </div>
          )}
        </StrictModeDroppable>
      </DragDropContext>
    </Layout>
  );
};
