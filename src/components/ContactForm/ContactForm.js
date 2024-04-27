import React, { useState } from 'react';
import styles from './ContactForm.module.css';

const ContactForm = () => {
  const initialValues = {name: "", mailAddress: "", content: ""};
  const [formValues, setFormValues] = useState(initialValues);

  //Stateの更新
  const handleChange = e => {
    const {name, value} = e.target;
    setFormValues({...formValues, [name]: value});
    // console.log(formValues);
  };

  //バリデーション
  

  //クリアボタンで内容を初期化
  const handleClear = () => {
    setFormValues(initialValues)
  }

  return (
    <div className={styles.formContainer}>
      <form className={styles.form}>
        <div className={styles.formTitle}>問合わせフォーム</div>
        <div className={styles.formField}>
          <label htmlFor='name' className={styles.label}>お名前</label>
          <input type="text" name="name" onChange={handleChange} value={formValues.name} className={styles.input}></input>
        </div>
        <div className={styles.formField}>
          <label htmlFor='mailAddress' className={styles.label}>メールアドレス</label>
          <input type="text" name="mailAddress" onChange={handleChange} value={formValues.mailAddress} className={styles.input}></input>
        </div>
        <div className={styles.contentField}>
          <label htmlFor='content' className={styles.label}>本文</label>
          <textarea type="text" name="content" onChange={handleChange} value={formValues.content} className={styles.textarea}></textarea>
        </div>
        <div className={styles.buttonGroup}>
          <button className={styles.submitButton} type="submit">送信</button>
          <button className={styles.clearButton} type="button" onClick={handleClear}>クリア</button>
        </div>
        
      </form>
    </div>
  )
}

export default ContactForm;