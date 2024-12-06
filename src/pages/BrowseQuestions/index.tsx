import BaseCard from "../../components/BaseCard";
import TriviaEntry from "../../components/TriviaEntry";
import styles from "./index.module.css";
import { useEffect, useState } from "react";
import TriviaEntryInterface from "../../ts/interfaces/TriviaEntryInterface";
import CategoryColourEnum from "../../ts/enums/CategoryColourEnum";

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
      // console.log("Questions fetched:", data);
      setTriviaData(data);
    } catch (err) {
      console.error("Error fetching questions:", err);
    }
  };

  useEffect(() => {
    fetchQuestions();
    // console.log(triviaData);
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
              <button
                key={category}
                className={`${styles.categoryButton} ${
                  selectedCategories.includes(category) ? styles.selected : ""
                }`}
                style={{
                  border: `4px solid ${CategoryColourEnum[category]}`,
                  backgroundColor: `${
                    selectedCategories.includes(category)
                      ? CategoryColourEnum[category]
                      : "transparent"
                  }`,
                }}
                onClick={() => handleCheckboxChange(category)}
              >
                {category}
              </button>
            ))}
          </div>
          <div className={styles.triviaList}>
            {filteredTrivia.length > 0 &&
              filteredTrivia.map((entry, index) => (
                <TriviaEntry
                  // We can use `${entry.question}-${Math.random()}` as key if we want questions hidden every time categories changes
                  key={`${entry.question}`}
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
