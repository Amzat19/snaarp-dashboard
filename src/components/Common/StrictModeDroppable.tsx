import React, { useState, useEffect } from "react";
import { Droppable, type DroppableProvided } from "@hello-pangea/dnd";

interface Props {
  children: (provided: DroppableProvided) => React.ReactNode;
  droppableId: string;
}

export const StrictModeDroppable: React.FC<Props> = ({
  children,
  droppableId,
}) => {
  const [enabled, setEnabled] = useState<boolean>(false);

  useEffect(() => {
    const animation = requestAnimationFrame(() => setEnabled(true));
    return () => {
      cancelAnimationFrame(animation);
      setEnabled(false);
    };
  }, []);

  if (!enabled) {
    return null;
  }

  return (
    <Droppable droppableId={droppableId}>
      {(provided) => children(provided)}
    </Droppable>
  );
};
