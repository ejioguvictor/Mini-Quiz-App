import React, { useState } from 'react';

export default function App() {
	const questions = [
		{
			questionText: 'Total number of states in United States of America',
			answerOptions: [
				{ answerText: '48', isCorrect: false },
				{ answerText: '49', isCorrect: false },
				{ answerText: '50', isCorrect: true },
				{ answerText: '51', isCorrect: false }
			],
		},
		{
			questionText: 'Which one is the largest state by area wise in USA ?',
			answerOptions: [
				{ answerText: 'Alaska', isCorrect: true },
				{ answerText: 'Texas', isCorrect: false },
				{ answerText: 'California', isCorrect: false },
				{ answerText: 'New Mexico', isCorrect: false },
			],
		},
		{
			questionText: 'In which year, Christopher Columbus discover America ?',
			answerOptions: [
				{ answerText: '1456', isCorrect: false },
				{ answerText: '1462', isCorrect: false },
				{ answerText: '1483', isCorrect: false },
				{ answerText: '1492', isCorrect: true },
			],
		},
		{
			questionText: 'Which one is the official bird emblem of the United States of America',
			answerOptions: [
				{ answerText: 'Dove', isCorrect: false },
				{ answerText: 'Hawks', isCorrect: false },
				{ answerText: 'Sea Eagle', isCorrect: false },
				{ answerText: 'Bald Eagle', isCorrect: true },
			],
		},
		{
			questionText: 'Which one is the largest city by population in USA ?',
			answerOptions: [
				{ answerText: 'New York', isCorrect: true },
				{ answerText: 'Los Angeles', isCorrect: false },
				{ answerText: 'Chicago', isCorrect: false },
				{ answerText: 'Phoenix', isCorrect: false },
			],
		},
		{
			questionText: 'The Grand Canyon National Park is located in ',
			answerOptions: [
				{ answerText: 'Alaska', isCorrect: false },
				{ answerText: 'Nevada', isCorrect: false },
				{ answerText: 'Arizona', isCorrect: true },
				{ answerText: 'Colorado', isCorrect: false },
			],
		},
		{
			questionText: 'Total number of stripes in the US Flag is ____',
			answerOptions: [
				{ answerText: '6', isCorrect: false },
				{ answerText: '9', isCorrect: false },
				{ answerText: '11', isCorrect: false },
				{ answerText: '13', isCorrect: true },
			],
		},
	];


	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [Score, setScore] = useState(0);
	const [PreviousScore, setPreviousScore] = useState(0);
	const [showPreviousScore, setShowPreviousScore] = useState(false);

	const handleAnswerButtonClick = (isCorrect) => {

		if (isCorrect) {
			setScore(Score + 1);
		}
		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		}
		else {
			setShowScore(true);
		}
	}

	const handleQuizReset = () => {
		setShowPreviousScore(true);
		setPreviousScore(Score);
		setCurrentQuestion(0);
		setShowScore(false);
		setScore(0);
	}

	return (
		<div className='app'>
			{/* HINT: replace "false" with logic to display the 
      score when the user has answered all the questions */}
			{showScore ? (
				<div className='score-section'>
					You scored {Score} out of {questions.length}
					<button className='score-section-button' onClick={handleQuizReset}>Restart Quiz</button>
				</div>
			) : (
				showPreviousScore ? (
					<>
						<div className='previous-score-container'>
							You scored {PreviousScore} out of {questions.length} in your previous attempt.
						</div>
						<button>
							<div className='question-section'>
								<div className='question-count'>
									<span>Question {currentQuestion + 1}</span>/{questions.length}
								</div>
								<div className='question-text'>{questions[currentQuestion].questionText}</div>
							</div>
							<div className='answer-section'>
								{questions[currentQuestion].answerOptions.map((answerOption) => <button onClick={() => handleAnswerButtonClick(answerOption.isCorrect)}>
									{answerOption.answerText}
								</button>)}
							</div>
						</button>
					</>) : (
					<button>
						<div className='question-section'>
							<div className='question-count'>
								<span>Question {currentQuestion + 1} / {questions.length}</span>
							</div>
							<div className='question-text'>{questions[currentQuestion].questionText}</div>
						</div>
						<div className='answer-section'>
							{questions[currentQuestion].answerOptions.map((answerOption) => <button onClick={() => handleAnswerButtonClick(answerOption.isCorrect)}>
								{answerOption.answerText}
							</button>)}
						</div>
					</button>)
			)}
		</div >
	);
}
