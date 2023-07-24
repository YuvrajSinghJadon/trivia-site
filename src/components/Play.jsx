import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getRandomQuestion,
  getQuestionsByCategory,
  getQuestionsByType,
} from "../services";
import he from "he"; // Import the 'he' library

const Play = () => {
  const { category, number, difficulty, type } = useParams();
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [shuffledOptions, setShuffledOptions] = useState([]);

  useEffect(() => {
    if (category && number && difficulty && type) {
      fetchParticularType(category, number, difficulty, type);
    } else if (category) {
      fetchCategoryQuestions(category);
    } else {
      fetchRandomQuestions();
    }
  }, []);

  // Function to shuffle the options randomly and store them in the state
  const shuffleOptions = (options) => {
    setShuffledOptions(options.sort(() => Math.random() - 0.5));
  };

  // Function to handle user's answer selection
  const handleOptionSelect = (selected) => {
    setSelectedOption(selected);
  };

  // Function to handle checking the user's answer and moving to the next question
  const handleNextQuestion = () => {
    // Check if the selected option is correct
    if (selectedOption === questions[currentQuestionIndex].correct_answer) {
      // Increase the score if the answer is correct
      setScore((prevScore) => prevScore + 1);
    }

    // Move to the next question
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setSelectedOption(""); // Clear the selected option for the next question
      shuffleOptions([
        ...questions[currentQuestionIndex + 1].incorrect_answers,
        questions[currentQuestionIndex + 1].correct_answer,
      ]);
    } else {
      // If all questions are answered, show the final score
      console.log("Quiz completed! Your score:", score);
    }
  };
  // Function to handle playing the quiz again
  const handlePlayAgain = () => {
    // Reset all state values to their initial values to start a new quiz
    setQuestions([]);
    setCurrentQuestionIndex(0);
    setScore(0);
    setSelectedOption("");
    setShuffledOptions([]);
    // Fetch new questions based on the URL parameters
    if (category && number && difficulty && type) {
      fetchParticularType(category, number, difficulty, type);
    } else if (category) {
      fetchCategoryQuestions(category);
    } else {
      fetchRandomQuestions();
    }
  };
  const fetchRandomQuestions = () => {
    getRandomQuestion()
      .then((result) => {
        const data = result.data.results;
        setQuestions(data);
        shuffleOptions([
          ...data[currentQuestionIndex].incorrect_answers,
          data[currentQuestionIndex].correct_answer,
        ]);
      })
      .catch((error) => {
        console.error("Error fetching random questions:", error);
      });
  };

  const fetchCategoryQuestions = (categoryId) => {
    getQuestionsByCategory(categoryId)
      .then((result) => {
        const data = result.data.results;
        setQuestions(data);
        shuffleOptions([
          ...data[currentQuestionIndex].incorrect_answers,
          data[currentQuestionIndex].correct_answer,
        ]);
      })
      .catch((error) => {
        console.error(
          `Error fetching questions for category ${categoryId}:`,
          error
        );
      });
  };
  const fetchParticularType = (categoryId, number, difficulty, type) => {
    getQuestionsByType(categoryId, number, difficulty, type)
      .then((result) => {
        const data = result.data.results;
        setQuestions(data);
        shuffleOptions([
          ...data[currentQuestionIndex].incorrect_answers,
          data[currentQuestionIndex].correct_answer,
        ]);
      })
      .catch((error) => {
        console.error(
          `Error fetching questions for category ${categoryId}:`,
          error
        );
      });
  };
  // Define the variable 'allQuestionsAnswered' to check if all questions are answered (last question is displayed)
  const allQuestionsAnswered = currentQuestionIndex === questions.length;

  return (
    <section className="py-6 h-screen ">
      <div className="container mx-auto flex flex-col items-center justify-center p-4 space-y-8 md:p-10 md:px-24 xl:px-48">
        {/* Display the current score or quiz completed message */}
        <p className="text-2xl font-semibold">
          {allQuestionsAnswered
            ? `Quiz completed! Your final score: ${score}`
            : `Your Score: ${score}`}
        </p>

        {/* Display the current question and its options or "Play Again" button */}
        {allQuestionsAnswered ? (
          <button
            onClick={handlePlayAgain}
            className="px-8 py-3 text-lg font-semibold rounded bg-indigo-400 dark:bg-gray-900 text-white hover:bg-white hover:text-gray-900"
          >
            Play Again
          </button>
        ) : (
          <div className="flex flex-col space-y-4">
            {/* Use 'he' library to decode the question */}
            <h1 className="text-5xl font-bold leadi text-center text-rose-50">
              Question {currentQuestionIndex + 1}:{" "}
              {he.decode(questions[currentQuestionIndex].question)}
            </h1>
            {/* Rest of your question options and "Next Question" button */}
            <div className="flex flex-col space-y-4">
              {shuffledOptions.map((option, optionIndex) => (
                <button
                  key={optionIndex}
                  onClick={() => handleOptionSelect(option)}
                  className={`px-8 py-3 text-lg font-semibold rounded ${
                    selectedOption === option
                      ? "bg-purple-500 text-gray-900"
                      : "bg-purple-600"
                  } hover:bg-purple-500`}
                >
                  {/* Use 'he' library to decode the option */}
                  {he.decode(option)}
                </button>
              ))}
            </div>
            <button
              onClick={handleNextQuestion}
              disabled={!selectedOption}
              className="px-8 py-3 text-lg text-font-semibold rounded bg-indigo-400 dark:bg-gray-900 text-white hover:bg-white hover:text-gray-900"
            >
              Next Question
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Play;
