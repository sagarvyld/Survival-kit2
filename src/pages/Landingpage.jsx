import React from "react";
import GuessBox from "../components/GuessBox";
import { useState, useEffect } from "react";
import Confetti from "react-confetti";
import stringSimilarity from "string-similarity";
import profile from "../assets/Profile.png";
import EmojiKeyboard from "../components/EmojiKeyboard";
const Landingpage = ({ skip, setskip }) => {
    const [focus,setfocus]=useState(false);
  const [word, setword] = useState("");
  const [right, setright] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [cursorPosition, setCursorPosition] = useState(null);
  const [textAreaValue, setTextAreaValue] = useState('');
  const [emojis ,setEmojis]=useState([  '🌸', '🌼', '🌷', '🌹', '🌺', '🌻',
    '🌞', '🌝', '🌛', '🌜', '🌚', '🌕',
    '🌖', '🌗', '🌘', '🌑', '🌙', '🌟',
    '📱','🌪️', '🌫️', '🌊', '🌋', '⛱️', 
    '🏜️', '💦', '🏞️', '🗻', '🌄', '🌅',
    '🤐', '😯', '😪', '😫', '😴', '😌',
    '🤹', '🛹', '🛼', '🏆', '🎯', '🎳'
    ]);
  const handleEmojiClick = (emoji) => {
    setword((prevAnswer) => prevAnswer + emoji);
};

useEffect(() => {
    if (cursorPosition !== null && contentEditableRef.current) {
        const range = document.createRange();
        const selection = window.getSelection();
        const content = contentEditableRef.current.textContent;
        if (cursorPosition > content.length) {
            setCursorPosition(content.length);
        }
        const childNodes = contentEditableRef.current.childNodes;
        if (childNodes.length > 0) {
            const node = childNodes[0];
            range.setStart(node, cursorPosition);
            range.collapse(true);
            selection.removeAllRanges();
            selection.addRange(range);
            contentEditableRef.current.focus();
        } else {
            console.warn("No child nodes found in contentEditable element");
        }
    }
}, [textAreaValue, cursorPosition]);
const removeLast = () => {
    setword((prevAnswer) => prevAnswer.slice(0, -2));
};

  const [message, setmessage] = useState(
    "Wow !! that’s a tough one and I have managed something let’s see if you get it"
  );
  const [Question, setQuestion] = useState("What would you carry with you if you get stranded at a");
  const [Answer, setAnswer] = useState("⛱️  💦 📱");
  useEffect(()=>{
    if(word===""){
        setIsEmpty(true);
    }else{
        setIsEmpty(false);
    }
  },[word])
  const backward = () => {
    if(send==true){
        setsend(false);
        setIsEmpty(true);
        setfocus(false);
        setword("");
    }else{
        setIsEmpty(true);
        setfocus(false);
        setword("");
    }
    
  };
  const triggerConfetti = () => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 5000);
  };

//   useEffect(() => {
//     const urlParams = new URLSearchParams(window.location.search);
//     const url = "https://vyld-cb-dev-api.vyld.io/api/v1/activity-games/game";
//     const params = new URLSearchParams({
//       activityId: urlParams.get("activityId"),
//     });
//     fetch(`${url}?${params}`, {
//       method: "GET",
//       headers: {},
//     })
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }
//         return response.json();
//       })
//       .then((data) => {
//         const Data_coming = data.data;
//         setQuestion(Data_coming.reqD[0].DCQues);
//         setAnswer(Data_coming.reqD[0].DCSenAns);
//         setmessage(Data_coming.message);
//       })
//       .catch((error) => {
//         console.error("Error:", error);
//       });
//   }, []);

  const [isEmpty, setIsEmpty] = useState(true);
  const [style, setstyle] = useState({});
  const [send, setsend] = useState(false);

  useEffect(() => {
    if (right && send) {
      triggerConfetti();
    }
  }, [right, send]);
  const forward = () => {
    // console.log("forward");
    if (!isEmpty) {
      const matching = stringSimilarity.compareTwoStrings(
        word.toLowerCase(),
        Answer.toLowerCase()
      );
      if (matching > 0.8) {
        setright(true);
      } else {
        setright(false);
      }
     setsend(true);
    }
  };
  useEffect(() => {
    if (!send) {
      setword("");
    }else{
        setfocus(false)
    }
   
  }, [send]);
  useEffect(() => {
    if (isEmpty) {
      setstyle({ opacity: 0.5 });
    } else {
      setstyle({});
    }
  }, [isEmpty, send]);
  return (
    <div className="app_container_survival">
      {showConfetti && <Confetti />}
      {
        <div className="background_svg_survival">
          <svg
            width="360"
            height="180"
            viewBox="0 0 360 180"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M388 -167C359.667 -165.333 238.407 19.8627 281 -7.5C363.5 -60.5 381.5 10.5 332.5 38.5C268 75.3571 157.755 170 232 170C281 170 263 67.5 184.5 89.5C106 111.5 62.613 155.588 39.5 102.5C7.5 29 118.5 -18 65 -93C15.3856 -162.553 -12 -102 -12 -69.5"
              stroke="#1D2939"
              stroke-width="19"
            />
          </svg>
        </div>
      }
    
        <div className="upper_buttons_survival">
          <button className="back_button" onClick={() => backward()}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M13.165 11.9934L13.1634 11.6393C13.1513 10.2348 13.0666 8.98174 12.9206 8.18763C12.9206 8.17331 12.7613 7.38572 12.6599 7.12355C12.5006 6.74463 12.2126 6.42299 11.8515 6.2192C11.5624 6.0738 11.2592 6 10.9417 6C10.6922 6.01157 10.2806 6.13714 9.98692 6.24242L9.74283 6.33596C8.12612 6.97815 5.03561 9.07656 3.85199 10.3598L3.76473 10.4495L3.37527 10.8698C3.12982 11.1915 3 11.5847 3 12.0077C3 12.3866 3.11563 12.7656 3.3469 13.0718C3.41614 13.171 3.52766 13.2983 3.62693 13.4058L4.006 13.8026C5.31046 15.1243 8.13485 16.9782 9.59883 17.5924C9.59883 17.6057 10.5086 17.9857 10.9417 18H10.9995C11.6639 18 12.2846 17.6211 12.6021 17.0086C12.6888 16.8412 12.772 16.5132 12.8352 16.2252L12.949 15.6813C13.0788 14.8067 13.165 13.465 13.165 11.9934ZM19.4967 13.5183C20.3269 13.5183 21 12.8387 21 12.0004C21 11.1622 20.3269 10.4825 19.4967 10.4825L15.7975 10.8097C15.1463 10.8097 14.6183 11.3417 14.6183 12.0004C14.6183 12.6581 15.1463 13.1912 15.7975 13.1912L19.4967 13.5183Z"
                fill="white"
              />
            </svg>
          </button>
          <button className="skip_button" onClick={() => setskip(true)}>
            Skip
          </button>
        </div>
      
      {!focus &&<div className="heading_above_survival">
        <p className="you_got_a_survival">You Got a</p>
        <p className="Survival_Kit">Survival Kit</p>
      </div>}
      <GuessBox
      setfocus={setfocus}
      focus={focus}
        Answer={Answer}
        Question={Question}
        isEmpty={isEmpty}
        send={send}
        forward={forward}
        setword={setword}
        setIsEmpty={setIsEmpty}
        right={setright}
        word={word}
      />
       {focus &&<EmojiKeyboard onEmojiClick={handleEmojiClick} removeLast={removeLast} emojis={emojis.slice(0, 30)} remEmoji={emojis.slice(30, 32)} />}
      {!send && !focus && message !== "" && (
        <div className="Lie_Information_survival">
          <div className="User_picture_survival">
            <img src={profile} alt="User" />
          </div>
          <div className="User_text_survival">{message}</div>
        </div>
      )}

      {!send && (
        <button
          className={`SpotPage_Submit ${focus && 'survival-bottom'}`}
          onClick={() => {
            forward();
          }}
        >
          <p style={style}>Reveal</p>
        </button>
      )}
    </div>
  );
};

export default Landingpage;