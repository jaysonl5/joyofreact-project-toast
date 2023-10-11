import React, { useEffect } from 'react';

import Button from '../Button';

import styles from './ToastPlayground.module.css';
import ToastShelf from '../ToastShelf'

import { ToastContext } from '../ToastProvider'


const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {

  const {toastVariant, messageText, showToast, toasts, createToast, deleteToast, setMessageText, setToastVariant } = React.useContext(ToastContext);

  const handleTextChange = (e) => {
    setMessageText(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    createToast(e);
  }

  

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      {showToast && (
      <ToastShelf />
      )}

      <div className={styles.controlsWrapper}>
        <form onSubmit={(event) => handleSubmit(event)}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: 'baseline' }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea id="message" className={styles.messageInput} onChange={handleTextChange} value={messageText} />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            {VARIANT_OPTIONS.map((item) => {
              return(
              <label htmlFor={`variant-${item}`} key={item}>
                <input id={`variant-${item}`} type={"radio"} name={"variant"} value="notice" checked={toastVariant === `${item}`} onChange={() => setToastVariant(`${item}`)}/>
                {item}
              </label>
              )
            })}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            <Button>Pop Toast!</Button>
          </div>
        </div>
        </form>
      </div>
    </div>
  );
}

export default ToastPlayground;
