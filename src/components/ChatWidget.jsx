import { useState } from 'react';

export default function ChatAssistant() {
  // State to handle the visibility of the full chat assistant
  const [isExpanded, setIsExpanded] = useState(false);

  // Toggle function to expand/collapse the assistant
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      {/* Chat Assistant Button (Initially Shows a Small Icon) */}
      <div
        onClick={toggleExpand}
        className={`fixed bottom-5 right-5 p-3 bg-gradient-to-r from-purple-500 to-indigo-600 border-[1.5px] border-gray-300 dark:border-gray-600 shadow-lg rounded-full cursor-pointer z-50 transition-all duration-300 ${
          isExpanded ? 'h-[350px] w-[300px]' : 'h-[60px] w-[60px]'
        }`}
      >
        {/* AI Logo */}
        <div className="flex items-center justify-center">
          <div className="w-[50px] h-[50px] bg-gradient-to-r from-purple-400 to-indigo-600 rounded-full flex items-center justify-center text-white shadow-lg">
            <span className="text-[28px]">🤖</span>
          </div>
        </div>

        {/* Expand/Collapse Arrow */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-white">
          {isExpanded ? '↑' : '↓'}
        </div>
      </div>

      {/* Full Chat Assistant View (Appears on Expanding) */}
      {isExpanded && (
        <div className="fixed bottom-20 right-5 bg-white border-[1.5px] border-gray-300 dark:border-gray-600 shadow-xl p-4 rounded-lg w-[300px] chat-container z-50 transition-all duration-300">
          {/* AI Assist Title */}
          <div className="flex items-center gap-2 mb-3">
            <div className="w-[28px] h-[28px] bg-gradient-to-r from-purple-400 to-indigo-600 rounded-md flex items-center justify-center text-white">
              <span className="text-[16px]">🤖</span>
            </div>
            <h4 className="font-semibold text-[16px] text-gray-800">AI Assist</h4>
          </div>

          {/* Greeting message from Deevan */}
          <div className="p-3 bg-gray-100 rounded-md mb-4 text-sm text-gray-600">
            <p>I'm Deevan, how may I assist you today?</p>
          </div>

          {/* Message Input Box */}
          <div className="relative">
            <input
              type="text"
              className="w-full px-4 py-[10px] text-[14px] border border-gray-300 dark:border-gray-500 rounded-md bg-gray-50 dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400"
              placeholder="Type your message..."
            />

            {/* Send Button (Telegram-like) */}
            <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 shadow-lg">
              <span className="text-white text-xl">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                  <path d="M23.3 0l-10.5 10.5-2.4 8.7 8.6-2.3 10.5-10.5c.7-.7.4-1.8-.5-1.8-.1 0-.3 0-.5.1L16.7 14l-1.5-6.1L23.3 0z" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
