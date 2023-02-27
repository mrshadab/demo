import styles from "./profileCard.module.css";
export function ProfileCard() {
  return (
    <div className={styles.cardsParentDiv}>
      <label className={styles.container}>
        One
        <input type="radio" checked="checked" name="radio" />
        <span className={styles.checkmark}></span>
      </label>
      <label className={styles.container}>
        Two
        <input type="radio" name="radio" />
        <span className={styles.checkmark}></span>
      </label>
      <label className={styles.container}>
        Three
        <input type="radio" name="radio" />
        <span className={styles.checkmark}></span>
      </label>
    </div>
  );
}
