import BaseCard from "../../components/BaseCard";
import TriviaEntry from "../../components/TriviaEntry";
import styles from "./index.module.css";
import { useEffect, useState } from "react";
import TriviaEntryInterface from "../../ts/interfaces/TriviaEntryInterface";

const BrowseQuestions = () => {
  const [triviaData, setTriviaData] = useState<TriviaEntryInterface[]>([]);
  const [searchInput, setSearchInput] = useState("");

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

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = event.target.value;
    console.log("Search term:", searchTerm);
    setSearchInput(searchTerm);
  };

  return (
    <BaseCard
      sharedSpace={true}
      content={
        <div className={styles.contentContainer}>
          <h2 className={styles.title}>
            <span className={styles.yellow}>BROWSE</span> QUESTIONS
          </h2>
          <input
            className={styles.searchBar}
            value={searchInput}
            onChange={handleSearchChange}
            placeholder="Search..."
          />
          {/* TODO: Filter */}
          <div className={styles.triviaList}>
            {triviaData.length > 0 &&
              triviaData.map((entry, index) => (
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
