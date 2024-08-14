import React from 'react';
import './EmojiKeyboard.css';

const EmojiKeyboard = ({ onEmojiClick , removeLast, emojis ,remEmoji}) => {

    return (
        <div className="emoji-keyboard-survival2">
            <div className="emoji-grid-survival2">
                {emojis.map((emoji, index) => (
                    <div 
                        key={index} 
                        className="emoji-item-survival2"
                        onClick={() => onEmojiClick(emoji)}
                    >
                        {emoji}
                    </div>
                ))}
            </div>
            <div className="emoji-grid2-survival2">
                <div 
                    key={31} 
                    className="emoji-item-survival2"
                    onClick={() => onEmojiClick(remEmoji[0])}
                >
                    {remEmoji[0]}
                </div>
                <div 
                    key={32} 
                    className="emoji-item-survival2"
                    onClick={() => onEmojiClick(remEmoji[1])}
                >
                    {remEmoji[1]}
                </div>
                <button 
                    className="emoji-space-survival2"
                    onClick={() => onEmojiClick('  ')}
                >
                    <span className='emoji-sc-content-survival2'>Space</span>
                </button>
                <button 
                    className="emoji-clear-survival2"
                    onClick={removeLast}
                >
                    <span style={{fontSize:"1.8rem"}} className='emoji-sc-content-survival2'>⌫</span>
                </button>
            </div>
        </div>
    );
};

export default EmojiKeyboard;