import BaseCard from "../../components/BaseCard";
import styles from "./index.module.css";
import { useState } from "react";

const SubmitQuestions = () => {
  const [formData, setFormData] = useState({ question: "", answer: "" });

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!formData.question || !formData.answer) {
      alert("Please fill out both fields!");
      return;
    }

    try {
      const apiEndpoint = import.meta.env.VITE_API_URL + "upload_data";
      const payload = {
        question: formData.question,
        answer: formData.answer,
      };

      console.log("Payload being sent:", payload);

      const response = await fetch(apiEndpoint, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      // Handle the response
      if (response.ok) {
        const data = await response.json();
        console.log("Response from API:", data);
        alert("Question submitted successfully!");
        setFormData({ question: "", answer: "" }); // Reset form
      } else {
        console.error("Failed to submit question:", response.statusText);
        alert("Failed to submit the question. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting question:", error);
      alert("An error occurred. Please try again later.");
    }

    console.log(
      "Form submitted:\n\tQuestion:",
      formData.question,
      "\n\tAnswer:",
      formData.answer
    );

    // console.log(JSON.stringify(formData));
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
