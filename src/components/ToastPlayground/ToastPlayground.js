import React from "react";

import Button from "../Button";

import styles from "./ToastPlayground.module.css";
// import Toast from "../Toast"
import ToastShelf from "../ToastShelf/ToastShelf";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const [toasts, setToasts] = React.useState([])
  const [message, setMessage] = React.useState("");
  const [variant, setVarient] = React.useState(VARIANT_OPTIONS[0]);

  function handleCreateToasts(event) {
    event.preventDefault()
    const nextToasts = [
      ...toasts,
      {
        id: crypto.randomUUID(),
        message, 
        variant,
      }
    ]
    setToasts(nextToasts)

    setMessage('')
    setVarient(VARIANT_OPTIONS[0])
  }

  function handleDismiss(id) {
    const nextToasts = toasts.filter(toast => {
      return toast.id !== id
    })

    setToasts(nextToasts);
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>



<ToastShelf toasts={toasts} handleDismiss={handleDismiss}/>

      <form className={styles.controlsWrapper} handleCreateToasts={handleCreateToasts}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: "baseline" }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
              id="message"
              className={styles.messageInput}
              value={message}
              onChange={(event) => {
                setMessage(event.target.value);
              }}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            {VARIANT_OPTIONS.map((option) => {
              const id = `varient-${option}`;
              return (
                <label htmlFor={id} key={id}>
                  <input
                    id={id}
                    type="radio"
                    name="variant"
                    value={option}
                    checked={option === variant}
                    onChange={(event) => {
                      setVarient(event.target.value);
                    }}
                  />
                  {option}
                </label>
              );
            })}

            {/* TODO Other Variant radio buttons here */}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button
              onClick={handleCreateToasts}
              
            >
              Pop Toast!
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
