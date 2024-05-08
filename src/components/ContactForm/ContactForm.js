import React, { useState } from "react";
import styles from "./ContactForm.module.css";

const ContactForm = () => {
  const initialValues = { name: "", mailAddress: "", content: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  //Stateの更新
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    // console.log(formValues);
  };

  //バリデーションチェック
  const validate = (values) => {
    const _errors = {};
    const regex =
      /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!values.name) {
      _errors.name = "お名前は必須です。";
    } else if (values.name.length > 30) {
      _errors.name = "お名前は30文字以内で入力してください。";
    }
    if (!values.mailAddress) {
      _errors.mailAddress = "メールアドレスは必須です。";
    } else if (!regex.test(values.mailAddress)) {
      _errors.mailAddress = "正しいメールアドレスを入力してください。";
    }
    if (!values.content) {
      _errors.content = "本文は必須です。";
    } else if (values.content.length > 500) {
      _errors.content = "本文は500文字以内で入力してください。";
    }

    setErrors(_errors);

    if (Object.keys(_errors).length === 0) return true;

    return false;
  };

  //送信ボタンをおしたとき
  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(validate(formValues));
    if (!validate(formValues)) return;

    //送信ボタンを無効に
    setIsSubmitting(true);
    await fetch(
      "https://1hmfpsvto6.execute-api.ap-northeast-1.amazonaws.com/dev/contacts",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formValues.name,
          email: formValues.mailAddress,
          message: formValues.content,
        }),
      }
    );

    alert("送信しました。");
    //内容を初期化
    setFormValues(initialValues);
    //送信ボタンを有効に
    setIsSubmitting(false);
  };

  //クリアボタンで内容を初期化
  const handleClear = () => {
    setFormValues(initialValues);
  };

  return (
    <div className={styles.formContainer}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formTitle}>問合わせフォーム</div>
        {/* 名前 */}
        <div className={styles.formField}>
          <label htmlFor="name" className={styles.label}>
            お名前
          </label>
          <div className={styles.inputAndError}>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              value={formValues.name}
              className={styles.input}
            ></input>
            <p className={styles.errorMessage}>{errors.name}</p>
          </div>
        </div>

        {/* メールアドレス */}
        <div className={styles.formField}>
          <label htmlFor="mailAddress" className={styles.label}>
            メールアドレス
          </label>
          <div className={styles.inputAndError}>
            <input
              type="email"
              name="mailAddress"
              onChange={handleChange}
              value={formValues.mailAddress}
              className={styles.input}
            ></input>
            <p className={styles.errorMessage}>{errors.mailAddress}</p>
          </div>
        </div>

        {/* 本文 */}
        <div className={styles.contentField}>
          <label htmlFor="content" className={styles.label}>
            本文
          </label>
          <div className={styles.inputAndError}>
            <textarea
              type="text"
              name="content"
              onChange={handleChange}
              value={formValues.content}
              className={styles.textarea}
            ></textarea>
            <p className={styles.errorMessage}>{errors.content}</p>
          </div>
        </div>
        <div className={styles.buttonGroup}>
          <button
            className={styles.submitButton}
            type="submit"
            disabled={isSubmitting}
          >
            送信
          </button>
          <button
            className={styles.clearButton}
            type="button"
            onClick={handleClear}
          >
            クリア
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
