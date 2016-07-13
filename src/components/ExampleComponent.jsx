import React from 'react';

const ExampleComponent = ({ children }) => (
  <div className="label">
    {children || 'No label'}
  </div>
);

ExampleComponent.propTypes = {
  children: React.PropTypes.string.isRequired,
};

export default ExampleComponent;
