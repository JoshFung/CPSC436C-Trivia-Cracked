import CategoryColourEnum from "../enums/CategoryColourEnum";

interface TriviaEntryInterface {
  question: string;
  answer: string;
  category: keyof typeof CategoryColourEnum;
}

export default TriviaEntryInterface;