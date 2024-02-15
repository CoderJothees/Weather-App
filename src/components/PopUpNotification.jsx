import React from 'react'
import '../Styles/alertStyling.scss';

function PopUpNotification({ ErrMsg, setErrNotification }) {
  return (
    <div className='PopNotification'>
      <div className="alert alert-error">
        <div className="icon__wrapper">
          <span className="mdi mdi-alert-outline"></span>
        </div>
        <p>{ErrMsg}</p>
        <span className="mdi mdi-open-in-new open"></span>
        <span className="mdi mdi-close close" onClick={() => setErrNotification({
          isError: false
        })}></span>
      </div>
    </div>

  )
}

export default PopUpNotification