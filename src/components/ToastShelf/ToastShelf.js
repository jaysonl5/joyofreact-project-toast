import React from 'react';

import Toast from '../Toast';
import { ToastContext } from '../ToastProvider';
import styles from './ToastShelf.module.css';

function ToastShelf() {

  const {toasts, deleteToast} = React.useContext(ToastContext)
  return (
    <ol className={styles.wrapper} role="region" aria-live="polite" aria-label="Notification">
      {toasts.map(toast => 
      <li key={toast.id} className={styles.toastWrapper}>
        <Toast variant={toast.variant} message={toast.text} closeModal={() => deleteToast(toast.id)} />
      </li>
      )}
    </ol>
  );
}

export default ToastShelf;
