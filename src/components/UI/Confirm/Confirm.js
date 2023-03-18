import React from 'react'
import Backdrop from '../Backdrop/Backdrop'
import classes from './Confirm.module.css'

export default function Confirm(props) {
  return (
    <Backdrop className={classes.backdropOuter}>
      <div className={classes.confirm}>
        <p className={classes.confirmText}>{props.confirmText}</p>
        <div>
          <button className={classes.cancel} onClick={() => props.onCancel()}>
            取消
          </button>
          <button className={classes.ok} onClick={() => props.onOk()}>
            确认
          </button>
        </div>
      </div>
    </Backdrop>
  );
}
