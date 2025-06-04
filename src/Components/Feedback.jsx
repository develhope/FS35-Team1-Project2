import React, { useState } from 'react';

const Feedback = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [comment, setComment] = useState("");

  const handleSubmit = () => {
    const feedback = { rating, comment, date: new Date().toISOString() };
    localStorage.setItem("userFeedback", JSON.stringify(feedback));
    setIsOpen(false);
    setRating(0);
    setComment("");
    alert("Grazie per il tuo feedback!");
  };

  return (
    <>
      <p onClick={() => setIsOpen(true)} className="cursor-pointer hover:underline active:text-white">
        Feedback
      </p>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl max-w-md w-full shadow-2xl text-black">
            <h2 className="text-2xl font-semibold mb-4 text-center">Lascia una recensione</h2>
            
            <div className="flex justify-center mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg
                  key={star}
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHover(star)}
                  onMouseLeave={() => setHover(0)}
                  className={`w-8 h-8 cursor-pointer transition-colors ${
                    (hover || rating) >= star ? "text-yellow-400" : "text-gray-300"
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.3 3.993a1 1 0 00.95.69h4.2c.969 0 1.371 1.24.588 1.81l-3.4 2.466a1 1 0 00-.364 1.118l1.3 3.993c.3.921-.755 1.688-1.54 1.118l-3.4-2.466a1 1 0 00-1.175 0l-3.4 2.466c-.784.57-1.838-.197-1.54-1.118l1.3-3.993a1 1 0 00-.364-1.118L2.01 9.42c-.783-.57-.38-1.81.588-1.81h4.2a1 1 0 00.95-.69l1.3-3.993z" />
                </svg>
              ))}
            </div>

            <textarea
              className="w-full border border-gray-300 rounded-lg p-2 mb-4"
              rows="4"
              placeholder="Scrivi la tua recensione..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />

            <div className="flex justify-between">
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                Annulla
              </button>
              <button
                onClick={handleSubmit}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                disabled={rating === 0 || comment.trim() === ""}
              >
                Invia
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Feedback;
