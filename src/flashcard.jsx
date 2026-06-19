function flashcard({question, answer, isFlipped, onFlip}){
    return(
        <div className="card-container" onClick={onFlip}>
            <div className={`card-inner ${isFlipped ? "flipped" : ""}`}>
                <div className="card-front">
                    <p>{question}</p>
                </div>

                <div className="card-back">
                    <p>{answer}</p>
                </div>
                
            </div>
        </div>
    );
}

export default flashcard;