import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import emoji1 from '../../assets/emoji_angry.png';
import emoji2 from '../../assets/emoji_boring.png';
import emoji3 from '../../assets/emoji_disappointed.png';
import emoji4 from '../../assets/emoji_good.png';
import emoji5 from '../../assets/emoji_impressed.png';
import emoji6 from '../../assets/emoji_sad.png';
import emoji7 from '../../assets/emoji_touched.png';


const EmojiReviewOutDiv = styled.div`
    width: 100%;
    height: 500px;
    background-color: white;
`

const ImageOutDiv = styled.div`
    width: 100%;
    height : 5em;
    text-align : center;
`

const ImagePreview = styled.img`
    width: 3em;
    height : 3em;
    opacity : 50%;
    padding : 1em 0.5em 1em 0.5em;
    &:hover {
        cursor: pointer;
        opacity : 100%;
    }

`

function EmojiReview() {

    function emojiClicked(emoji){
        
    }

    return (
        <EmojiReviewOutDiv>
            <ImageOutDiv>
                        <ImagePreview src={emoji1} alt="emoji1" onClick={emojiClicked(1)}/>
                        <ImagePreview src={emoji2} alt="emoji2" onClick={emojiClicked(2)}/>
                        <ImagePreview src={emoji3} alt="emoji3" onClick={emojiClicked(3)}/>
                        <ImagePreview src={emoji4} alt="emoji4" onClick={emojiClicked(4)}/>
                        <ImagePreview src={emoji5} alt="emoji5" onClick={emojiClicked(5)}/>
                        <ImagePreview src={emoji6} alt="emoji6" onClick={emojiClicked(6)}/>
                        <ImagePreview src={emoji7} alt="emoji7" onClick={emojiClicked(7)}/>
                    </ImageOutDiv>
        </EmojiReviewOutDiv>
    )
}

export default EmojiReview;