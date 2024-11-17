import BaseCard from "../../components/BaseCard";
import styles from "./index.module.css";
import { useState } from "react";

const SubmitQuestions = () => {
  const [formData, setFormData] = useState({ question: "", answer: "" });

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    // -----
    // TODO: Integrate with remainder
    // -----
    event.preventDefault();
    console.log(
      "Form submitted:\n\tQuestion:",
      formData.question,
      "\n\tAnswer:",
      formData.answer
    );
  };

  return (
    <BaseCard
      sharedSpace={true}
      content={
        <div className={styles.contentContainer}>
          <h2 className={styles.title}>
            <span className={styles.yellow}>SUBMIT</span> QUESTION
          </h2>
          <form className={styles.form} id="form" onSubmit={handleSubmit}>
            <div className={styles.formComponent}>
              <label className={styles.qLabel} htmlFor="question">
                Question:
              </label>
              <textarea
                className={styles.qInput}
                id="question"
                name="question"
                value={formData.question}
                onChange={handleChange}
                maxLength={200}
              />
            </div>
            <div className={styles.formComponent}>
              <label className={styles.aLabel} htmlFor="answer">
                Answer:
              </label>
              <textarea
                className={styles.aInput}
                id="answer"
                name="answer"
                value={formData.answer}
                onChange={handleChange}
                maxLength={200}
              />
            </div>
          </form>
          <button className={styles.submit} form="form" type="submit">
            SUBMIT
          </button>
          {/* <p>Question: {formData.question}</p>
            <p>Answer: {formData.answer}</p> */}
        </div>
      }
    />
  );
};

export default SubmitQuestions;
