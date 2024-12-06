import BaseCard from "../../components/BaseCard";
import styles from "./index.module.css";
import { useEffect, useState } from "react";
import TriviaEntryInterface from "../../ts/interfaces/TriviaEntryInterface";
import { PieChart } from "../../components/PieChart";

const DataCharts = () => {
  const [triviaData, setTriviaData] = useState<TriviaEntryInterface[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const categories = Array.from(
    new Set(triviaData.map((entry) => entry.category))
  );

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
            <span className={styles.yellow}>DATA CHARTS</span>
          </h2>
          <PieChart width={500} height={500} data={filteredTrivia} />
        </div>
      }
    />
  );
};

export default DataCharts;
