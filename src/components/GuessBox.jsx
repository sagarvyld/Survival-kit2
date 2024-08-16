import React, { useEffect } from "react";
import { useRef } from "react";
import Lock_i from "../assets/Lock.png";
import Profile from "../assets/Profile.png";
import Profile2 from "../assets/Profile2.png";
const GuessBox = ({
    Island,
    focus,
    setfocus,
  setword,
  setIsEmpty,
  Empty,
  forward,
  send,
  right,
  word,
  Question,
  Answer,
}) => {
  const textareaRef = useRef(null);
  const handleChange = (event) => {
    setword(event.target.value);

    if(event.target.value===""){
        setIsEmpty(true);
    }else{
        setIsEmpty(false);
    }
  };
  const handleFocus = () => {
    setfocus(true);
    if (textareaRef.current) {
      textareaRef.current.setAttribute("inputmode", "text");
      textareaRef.current.setAttribute("enterkeyhint", "done");
    }
  };
  const handleBlur = () => {
    setfocus(false)
    if (textareaRef.current) {
      textareaRef.current.removeAttribute("inputmode");
      textareaRef.current.removeAttribute("enterkeyhint");
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      if (textareaRef.current) {
        textareaRef.current.blur();
      }
    }
  };
  

  return (
    <div className={`guess_main_container_survival  `}>
      <div className={`guess_svg_survival `}>
        <div
          className={`_real_svg_survival _notsend_width_survival ${
            send ? "new-width" : ""
          }`}
        >
          <svg
            width="83"
            height="84"
            viewBox="0 0 83 84"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M-21.9606 77.4657L-21.9609 77.4655C-29.0356 72.3462 -30.6243 62.436 -25.5155 55.3706L-25.3499 55.1416L-25.3445 55.1307L-12.1163 36.9523L-9.27861 33.0527L-13.8658 31.5639L-35.4331 24.5639C-35.4768 24.5476 -35.5278 24.5294 -35.5841 24.5111C-43.88 21.7793 -48.4186 12.8419 -45.7198 4.56438L-45.7198 4.56431C-43.0282 -3.69155 -34.1199 -8.26846 -25.8073 -5.66068C-25.7222 -5.63029 -25.6342 -5.60238 -25.5436 -5.57747C-25.5362 -5.57544 -25.5286 -5.57335 -25.5207 -5.57122L-4.00485 1.38045L0.567101 2.85763L0.571213 -1.94704L0.590626 -24.6413C0.590626 -24.6414 0.590626 -24.6414 0.590626 -24.6415C0.598667 -33.3773 7.7324 -40.5 16.5047 -40.5C25.2781 -40.5 32.4109 -33.3761 32.4193 -24.6508L32.429 -1.93887L32.431 2.86798L37.0051 1.39011L58.6613 -5.60699L58.6614 -5.60703C67.0171 -8.30711 76.0112 -3.72547 78.7196 4.57432L78.7197 4.57444C81.4266 12.8687 76.8535 21.8419 68.5129 24.5476L69.5929 27.8768L68.5128 24.5476L46.8561 31.5734L42.268 33.0618L45.1061 36.9619L58.45 55.2993L58.4515 55.3017L58.5137 55.3878C63.6167 62.4561 62.0334 72.3574 54.9608 77.4752L54.9592 77.4764C47.8926 82.5961 37.9587 81.0541 32.7852 74.0593C32.7616 74.0265 32.7321 73.9864 32.6977 73.942L19.3223 55.6116L16.495 51.7368L13.6676 55.6116L0.356163 73.8544L0.345715 73.8648L0.189606 74.0756C-2.90312 78.2505 -7.71855 80.4886 -12.6263 80.4886C-15.8768 80.4886 -19.1428 79.5052 -21.9606 77.4657ZM51.438 33.7665L50.7661 32.8432L47.9361 34.9026L49.0161 38.2318L50.1023 37.8794L61.3029 53.2714C61.3098 53.2783 61.3155 53.285 61.3208 53.2921C61.3265 53.2998 61.3318 53.3081 61.3377 53.3175L61.3514 53.3391C67.5836 61.9714 65.652 74.0592 57.0127 80.3107C48.3831 86.5628 36.2589 84.6758 29.9491 76.1106C29.9428 76.1015 29.9371 76.0935 29.9308 76.0856L51.438 33.7665ZM58.3946 55.2119L58.3971 55.2158C58.3862 55.199 58.3788 55.1871 58.375 55.1809L58.3769 55.184L58.3809 55.1903L58.3946 55.2119Z"
              stroke="#0E1928"
              stroke-opacity="0.1"
              stroke-width="7"
            />
          </svg>
  
      <svg width="69" height={`${send?'48':'42'}`} className="atkins" viewBox="0 0 69 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M28.2685 39.6749L15.8339 16.1652L45.8299 0.291756L58.2881 23.7891L72.4303 1.27302L101.185 19.3142L87.0651 41.8441L113.642 42.8379L112.401 76.7524L85.8226 75.785L98.2575 99.2949L68.2613 115.168L55.8032 91.671L41.661 114.187L12.9061 96.1459L27.0262 73.616L0.449028 72.6221L1.69046 38.7077L28.2685 39.6749Z" fill="#0E1928" fill-opacity="0.1"/>
</svg>


        </div>
      </div>
      <div className="guess_text_survival">{Question}</div>
      <p className="Island">{Island}</p>
      <div className="Lie_Information_survival_2">
        <div className="User_picture_survival_2">
          <img src={Profile} alt="User" />
        </div>
        <div className={`User_text_survival_2 ${!send ? "backgorund_blur_d" : ""}`}>
          {Answer}
        </div>
        {!send && <img src={Lock_i} className="Lock_img" />}
      </div>
      <div className="guess_symbol_survival">
        <div className="emoji-container_survival"></div>
      </div>
      <div className="guess_answer_survival">
        <textarea
        value={word}
          ref={textareaRef}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          readOnly={send}
          inputMode="text"
          enterKeyHint="done"
          placeholder="Add your answer here"
          className={`${send ? "border_op" : ""}`}
        ></textarea>
        <img src={Profile2} className={`Profile2_survival `} />
      </div>
      {!send && (
        <div className="guessbox_text_d2">
          <p>Answers are revealed when you both answer</p>
        </div>
      )}

    </div>
  );
};

export default GuessBox;