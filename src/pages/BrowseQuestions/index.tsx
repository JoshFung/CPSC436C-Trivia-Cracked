import BaseCard from "../../components/BaseCard";
import TriviaEntry from "../../components/TriviaEntry";
import styles from "./index.module.css";
import { useState } from "react";
import TriviaEntryInterface from "../../ts/interfaces/TriviaEntryInterface";

// TODO Debug: Test data
const testTriviaData: TriviaEntryInterface[] = [
  {
    question: "Which famous play features a character named Romeo?",
    answer: "Romeo and Juliet",
    category: "Arts",
  },
  {
    question: "What is the capital of France?",
    answer: "Paris",
    category: "Geography",
  },
  {
    question: "What is the largest mammal in the world?",
    answer: "Blue whale",
    category: "Science",
  },
  {
    question: "What is the largest planet in our solar system?",
    answer: "Jupiter",
    category: "Science",
  },
  {
    question:
      "Who is known as the “Father of the United States” and the first President of the country?",
    answer: "George Washington",
    category: "History",
  },
  {
    question: "In the story of Snow White, how many dwarfs are there?",
    answer: "Seven",
    category: "Arts",
  },
  {
    question: "Which planet is known as the “Blue Planet”? ",
    answer: "Earth",
    category: "Science",
  },
  {
    question: "What is the largest ocean on Earth?",
    answer: "Pacific Ocean",
    category: "Geography",
  },
  {
    question:
      "Which geometric shape has four equal sides and four right angles?",
    answer: "Square",
    category: "Math",
  },
  {
    question: "What is the rarest blood type among humans?",
    answer: "AB-Negative",
    category: "Science",
  },
  {
    question: "How many wives did King Henry VIII have?",
    answer: "Six",
    category: "History",
  },
  {
    question: "What is the capital city of Mongolia?",
    answer: "Ulaanbaatar",
    category: "Geography",
  },
  {
    question:
      "What is the specific term used to describe a type of sandstorm characterized by strong winds carrying a wall of dust and sand, reducing visibility and causing hazardous conditions?",
    answer: "Haboob",
    category: "Science",
  },
  {
    question:
      "Before founding Facebook, Mark Zuckerberg created a website that allowed users to compare the attractiveness of two people side by side. What was the name of this website?",
    answer: "Facemash",
    category: "History",
  },
  {
    question: "What is the capital city of Bhutan?",
    answer: "Thimphu",
    category: "Geography",
  },
  {
    question: "What is the chemical symbol for the element mercury?",
    answer: "Hg",
    category: "Science",
  },
  {
    question: "In what year did the Berlin Wall fall?",
    answer: "1989",
    category: "History",
  },
  {
    question: "What is the capital city of the United Arab Emirates?",
    answer: "Abu Dhabi",
    category: "Geography",
  },
  {
    question: "Which mountain range is the longest in the world?",
    answer: "Andes",
    category: "Geography",
  },
];

const BrowseQuestions = () => {
  const [searchInput, setSearchInput] = useState("");

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
            {testTriviaData.map((entry, index) => (
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
