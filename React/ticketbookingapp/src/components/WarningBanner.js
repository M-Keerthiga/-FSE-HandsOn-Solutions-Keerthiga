import React from 'react';

// This component demonstrates PREVENTING A COMPONENT FROM RENDERING.
// If the "warn" prop is false (or not passed), the function returns
// null. Returning null from a component's render output means React
// renders nothing for it -- no DOM node is created at all.
function WarningBanner(props) {
  if (!props.warn) {
    return null; // <-- prevents this component from rendering anything
  }

  return (
    <div className="warning-banner">
      Warning: You are browsing as a Guest. Please log in to book tickets.
    </div>
  );
}

export default WarningBanner;
