import React from "react";

type Props = {
  spinnerContainerClass?: string;
}

const Spinner = ({spinnerContainerClass = 'spinner-container'}: Props) => {

  return (
    <div className={spinnerContainerClass}>
      <div className="spinner"></div>
    </div>
  );
};

export default React.memo(Spinner);
