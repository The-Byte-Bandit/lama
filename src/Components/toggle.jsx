import React, { useState } from 'react';
import Switch from 'react-switch';

function ToggleWithSwitch() {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <Switch
      checked={isToggled}
      onChange={setIsToggled}
      onColor="#375DFB"
      onHandleColor="#2693e6"
      handleDiameter={16}
      uncheckedIcon={false}
      checkedIcon={false}
      boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
      activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
      height={15}
      width={30}
    />
  );
}

export default ToggleWithSwitch;
