import React from "react";

interface LayoutDefaultProps {
  component: React.FC;
}

const LayoutDefault: React.FC<LayoutDefaultProps> = ({ component }) => {
  return (
    <React.Fragment>
      <h1>Growdev</h1>
    </React.Fragment>
  );
};

export default LayoutDefault;
