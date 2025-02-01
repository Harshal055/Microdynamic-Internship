import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { languageQuestions } from "../Questions/index";

const Quiz = () => {
  const { language } = useParams();
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState(0);
  const [showCompletionModal, setShowCompletionModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [showResultsBeforeExit, setShowResultsBeforeExit] = useState(false);

  useEffect(() => {
    const loadQuestions = () => {
      try {
        if (!language || !languageQuestions[language.toLowerCase()]) {
          navigate("/");
          return;
        }

        const allQuestions = [
          ...languageQuestions[language.toLowerCase()].easy.map((q) => ({ ...q, difficulty: "easy" })),
          ...languageQuestions[language.toLowerCase()].medium.map((q) => ({ ...q, difficulty: "medium" })),
          ...languageQuestions[language.toLowerCase()].difficult.map((q) => ({ ...q, difficulty: "hard" })),
        ];

        setQuestions(allQuestions);
        setLoading(false);
      } catch (error) {
        console.error("Error loading questions:", error);
        navigate("/");
      }
    };

    loadQuestions();
  }, [language, navigate]);

  const handleAnswerClick = (option) => {
    setSelectedAnswer(option);
    setShowResult(true);

    if (option === questions[currentQuestionIndex].answer) {
      const pointsToAdd = questions[currentQuestionIndex].points || 10;
      setScore((prevScore) => prevScore + pointsToAdd);
      setCorrectAnswers((prev) => prev + 1);
    } else {
      setWrongAnswers((prev) => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      const percentage = (correctAnswers / questions.length) * 100;
      if (percentage >= 60) {
        setShowCompletionModal(true);
      }
      setTimeout(() => {
        navigate("/results", {
          state: {
            score,
            correctAnswers,
            wrongAnswers,
            totalQuestions: questions.length,
          },
        });
      }, 3000);
    }
  };

  // Function to get difficulty badge color
  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case "easy":
        return "bg-gradient-to-r from-green-400 to-green-600";
      case "medium":
        return "bg-gradient-to-r from-yellow-400 to-yellow-600";
      case "hard":
        return "bg-gradient-to-r from-red-400 to-red-600";
      default:
        return "bg-gray-500";
    }
  };

  // Handle back button click
  const handleBackButtonClick = () => {
    const confirmExit = window.confirm("Are you sure you want to exit the quiz?");
    if (confirmExit) {
      setShowResultsBeforeExit(true); // Show results before exiting
    }
  };

  // Handle navigation after showing results
  useEffect(() => {
    if (showResultsBeforeExit) {
      setTimeout(() => {
        navigate(-1); // Navigate back after showing results
      }, 3000); // Show results for 3 seconds
    }
  }, [showResultsBeforeExit, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black flex items-center justify-center">
        <div className="text-white text-xl animate-pulse">Loading questions...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-12 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Header Section */}
        <div className="flex justify-between mb-8">
          <div className="text-white text-xl font-semibold">
            Question {currentQuestionIndex + 1}/{questions.length}
          </div>
          <div className="flex gap-4">
            <button
              onClick={handleBackButtonClick}
              className="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition duration-300"
            >
              Back
            </button>
            <span className="text-green-400 font-semibold">Correct: {correctAnswers}</span>
            <span className="text-red-400 font-semibold">Wrong: {wrongAnswers}</span>
            <span className="text-white font-semibold">Score: {score}</span>
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-gray-800 rounded-xl shadow-2xl p-7 md:p-20 relative">
          {/* Difficulty Badge (Moved to the left corner) */}
          <div
            className={`absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-semibold text-white ${getDifficultyColor(
              questions[currentQuestionIndex].difficulty
            )}`}
          >
            {questions[currentQuestionIndex].difficulty}
          </div>

          <h2 className="text-2xl font-bold text-white mb-8">
            {questions[currentQuestionIndex].question}
          </h2>

          {/* Options */}
          <div className="space-y-4">
            {questions[currentQuestionIndex].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerClick(option)}
                disabled={showResult}
                className={`w-full text-left p-4 rounded-lg text-white transition-all duration-300 ${
                  showResult
                    ? option === questions[currentQuestionIndex].answer
                      ? "bg-gradient-to-r from-green-500 to-green-700"
                      : option === selectedAnswer
                      ? "bg-gradient-to-r from-red-500 to-red-700"
                      : "bg-gray-700"
                    : "bg-gray-700 hover:bg-gray-600"
                }`}
              >
                {option}
              </button>
            ))}
          </div>

          {/* Result and Next Button */}
          {showResult && (
            <div className="mt-8 text-center">
              <p
                className={`text-xl mb-4 font-semibold ${
                  selectedAnswer === questions[currentQuestionIndex].answer
                    ? "text-green-400"
                    : "text-red-400"
                }`}
              >
                {selectedAnswer === questions[currentQuestionIndex].answer
                  ? `Correct! +${questions[currentQuestionIndex].points || 10} points`
                  : "Incorrect!"}
              </p>
              <button
                onClick={handleNextQuestion}
                className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 py-2 rounded-lg hover:from-blue-600 hover:to-blue-800 transition-all duration-300"
              >
                {currentQuestionIndex === questions.length - 1
                  ? "Finish Quiz"
                  : "Next Question"}
              </button>
            </div>
          )}
        </div>

        {/* Completion Modal */}
        {showCompletionModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-gray-800 p-8 rounded-xl shadow-2xl text-center">
              <h2 className="text-3xl text-green-400 font-bold mb-4">
                Congratulations! 🎉
              </h2>
              <p className="text-white text-xl mb-4">
                You've completed the quiz with{" "}
                <span className="font-semibold">
                  {((correctAnswers / questions.length) * 100).toFixed(1)}%
                </span>
              </p>
              <p className="text-white">
                Correct Answers: <span className="text-green-400">{correctAnswers}</span> | Wrong Answers:{" "}
                <span className="text-red-400">{wrongAnswers}</span>
              </p>
            </div>
          </div>
        )}

        {/* Results Before Exit Modal */}
        {showResultsBeforeExit && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-gray-800 p-8 rounded-xl shadow-2xl text-center">
              <h2 className="text-3xl text-yellow-400 font-bold mb-4">
                Quiz Exited Early
              </h2>
              <p className="text-white text-xl mb-4">
                Here are your results so far:
              </p>
              <p className="text-white">
                Correct Answers: <span className="text-green-400">{correctAnswers}</span> | Wrong Answers:{" "}
                <span className="text-red-400">{wrongAnswers}</span>
              </p>
              <p className="text-white">
                Total Score: <span className="text-blue-400">{score}</span>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;