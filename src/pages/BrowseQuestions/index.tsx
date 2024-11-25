import BaseCard from "../../components/BaseCard";
import TriviaEntry from "../../components/TriviaEntry";
import styles from "./index.module.css";
import { useEffect, useState } from "react";
import TriviaEntryInterface from "../../ts/interfaces/TriviaEntryInterface";

const BrowseQuestions = () => {
  const [triviaData, setTriviaData] = useState<TriviaEntryInterface[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const categories = Array.from(
    new Set(triviaData.map((entry) => entry.category))
  );

  const handleCheckboxChange = (category: string) => {
    setSelectedCategories((prevSelected) =>
      prevSelected.includes(category)
        ? prevSelected.filter((c) => c !== category)
        : [...prevSelected, category]
    );
  };

  const filteredTrivia = triviaData.filter((entry) =>
    selectedCategories.length === 0
      ? true
      : selectedCategories.includes(entry.category)
  );

  const fetchQuestions = async () => {
    try {
      const apiEndpoint = import.meta.env.VITE_API_URL + "get_data";
      const response = await fetch(apiEndpoint);

      if (!response.ok) {
        console.error("Failed to fetch questions:", response.statusText);
        return;
      }

      const data = await response.json();
      console.log("Questions fetched:", data);
      setTriviaData(data);
    } catch (err) {
      console.error("Error fetching questions:", err);
    }
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  return (
    <BaseCard
      sharedSpace={true}
      content={
        <div className={styles.contentContainer}>
          <h2 className={styles.title}>
            <span className={styles.yellow}>BROWSE</span> QUESTIONS
          </h2>
          <div className={styles.filterContainer}>
            {categories.map((category) => (
              <label key={category} className={styles.checkboxLabel}>
                <input
                  type="checkbox"
                  value={category}
                  checked={selectedCategories.includes(category)}
                  onChange={() => handleCheckboxChange(category)}
                />
                {category}
              </label>
            ))}
          </div>
          <div className={styles.triviaList}>
            {filteredTrivia.length > 0 &&
              filteredTrivia.map((entry, index) => (
                <TriviaEntry
                  key={index}
                  question={entry.question}
                  answer={entry.answer}
                  category={entry.category}
                />
              ))}
          </div>
        </div>
      }
    />
  );
};

export default BrowseQuestions;
