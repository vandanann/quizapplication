import React, { useEffect, useState } from 'react';
export default function App() {
	const questions = [
		{
			questionText: 'Lowest layer of atmosphere is called ?',
			answerOptions: [
				{ answerText: 'Thermosphere', isCorrect: false },
				{ answerText: 'Stratosphere', isCorrect: false },
				{ answerText: 'Troposphere', isCorrect: true },
				{ answerText: 'Mesosphere', isCorrect: false },
			],
		},
		{
			questionText: 'Most stable ecosystem is ?',
			answerOptions: [
				{ answerText: 'Ocean', isCorrect: false },
				{ answerText: 'Forest', isCorrect: true },
				{ answerText: 'Mountain', isCorrect: false },
				{ answerText: 'Desert', isCorrect: false },
			],
		},
		{
			questionText: 'Nutrients are recycled into ecosystem by ?',
			answerOptions: [
				{ answerText: 'Biogeochemical cycle', isCorrect: true },
				{ answerText: 'Energy flow', isCorrect: false },
				{ answerText: 'Producers', isCorrect: false },
				{ answerText: 'Consumers', isCorrect: false },
			],
		},
		{
			questionText: 'Region where fresh water meets salt water is ?',
			answerOptions: [
				{ answerText: 'Sea', isCorrect: false },
				{ answerText: 'Lake', isCorrect: false },
				{ answerText: 'River', isCorrect: false },
				{ answerText: 'Estuarine', isCorrect: true },
			],
		},
    {
			questionText: 'Minerals associated with granite and igneous rocks are ?',
			answerOptions: [
				{ answerText: 'Gold , Silver etc', isCorrect: true },
				{ answerText: 'Maganese , Lead etc', isCorrect: false },
				{ answerText: 'Iron ore and zinc etc', isCorrect: false },
				{ answerText: 'Copper and lead', isCorrect: false },
			],
		},
    {
			questionText: 'The eclipse of sun takes place  ?',
			answerOptions: [
				{ answerText: 'When moon passes through sun and earth ', isCorrect: true },
				{ answerText: 'Once every five years', isCorrect: false },
				{ answerText: 'When the moon is full', isCorrect: false},
				{ answerText: 'When earth comes in between sun and moon', isCorrect: false },
			],
		},
    {
			questionText: 'Light years measure which of the following ?',
			answerOptions: [
				{ answerText: 'Intensity of light', isCorrect: false },
				{ answerText: 'Time', isCorrect: false },
				{ answerText: 'Mass', isCorrect: false },
				{ answerText: 'Distance', isCorrect: true },
			],
		},
    {
			questionText: 'On the planet earth, there is no centrifugal force ?',
			answerOptions: [
				{ answerText: 'Equator', isCorrect: false },
				{ answerText: 'Poles', isCorrect: true },
				{ answerText: 'Tropic of cancer', isCorrect: false },
				{ answerText: 'Tropic of capricon', isCorrect: false },
			],
		},
    {
			questionText: 'The deep crack on earth surface is called a  ?',
			answerOptions: [
				{ answerText: 'Magma pool', isCorrect: false },
				{ answerText: 'Lava dome', isCorrect: false },
				{ answerText: 'Hotspot', isCorrect: true },
				{ answerText: 'Magma score', isCorrect: false },
			],
		},
	];
	const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);
	const [counter, setCounter] = React.useState(60);
	const [isActive, setIsActive] = useState(true);
    const handleAnswerOptionClick = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    };


	

    return (


		<div>
			<br/>
          <strong>MSQ on Environment and Resources </strong>
		   <br/>
		   <br/>
		   
            {showScore ? (
                <div className='score-section'>
                    You scored {score} out of {questions.length} 
                </div>
			): (
                <>
                
                            <span>Question {currentQuestion + 1}</span>/{questions.length} &nbsp; 
							<br/>
							<br/>
                        
							 {questions[currentQuestion].questionText}
                        
                        { questions[currentQuestion].answerOptions.map((answerOption) => (
                           <ul><li><button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button></li></ul> 
                        ))}
						
               </>
           ) }
        </div>

    );
}
	
