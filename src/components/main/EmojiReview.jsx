import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import ListSet from '../main/ListSet'

const EmojiReviewOutDiv = styled.div`
    width: 100%;
    height: 500px;
    background-color: white;
`

const ImageOutDiv = styled.div`
    width: 100%;
    height : default;
    text-align : center;
`

const ImagePreview = styled.div`
    font-size : 2.3em;
    padding :0.3em 0.2em 0.2em;
    

`
const Imageinput = styled.input`
    display:none;
    &:checked + label{
        opacity : 100%;
    }

`
const Imagelabel = styled.label`
display : inline-block;
height: 10px;
font-size : 1.0em;
opacity : 50%;
padding :1em 0.2em;
cursor: pointer;
`
const Listname = styled.div`
    font-size : 1.3em;
    font-family: "Pretendard-Regular";
    padding : 0.2em 0em 0.4em 0.9em;
`
const ListBr = styled.hr`
    background-color : gray;
    border : 0;
    width : 95%;
    height : 0.2em;
    margin : 1.5em auto;
`
function EmojiReview() {
    const [radioClicked, setRadioClicked] = useState("😄");
    const [radioTextClicked, setRadioTextClicked] = useState("재밌어요");

    const handleChange = (e) => {
        // console.log(`*****handleChange*****`);
        // console.log(`선택한 값 : ${e.target.value}`);
        setRadioClicked(e.target.value);
      };
    
    useEffect(()=>{
        switch(radioClicked){
            case "😄": setRadioTextClicked("재밌어요");break;
            case "😭": setRadioTextClicked("슬퍼요");break;
            case "🥹": setRadioTextClicked("감동이에요");break;
            case "🥱": setRadioTextClicked("지루해요");break;
            case "😡": setRadioTextClicked("화나요");break;
            case "😔": setRadioTextClicked("실망이에요");break;
            case "😍" : setRadioTextClicked("반했어요");break;
        }
    },[radioClicked]);

    return (
        <EmojiReviewOutDiv>
            <ImageOutDiv>
                        <ImagePreview alt="emoji1">
                            <Imageinput type="radio" id="😄" name="emoji" value="😄" 
                            checked={radioClicked==="😄"} onChange={handleChange}/>
                            <Imagelabel for="😄">😄</Imagelabel>

                            <Imageinput type="radio" id="😭" name="emoji" value="😭" 
                            checked={radioClicked==="😭"} onChange={handleChange}/>
                            <Imagelabel for="😭">😭</Imagelabel>
                        
                            <Imageinput type="radio" id="🥹" name="emoji" value="🥹" 
                            checked={radioClicked==="🥹"} onChange={handleChange}/>
                            <Imagelabel for="🥹">🥹</Imagelabel>
                        
                            <Imageinput type="radio" id="🥱" name="emoji" value="🥱" 
                            checked={radioClicked==="🥱"} onChange={handleChange}/>
                            <Imagelabel for="🥱">🥱</Imagelabel>
                        
                            <Imageinput type="radio" id="😡" name="emoji" value="😡" 
                            checked={radioClicked==="😡"} onChange={handleChange}/>
                            <Imagelabel for="😡">😡</Imagelabel>
                        
                            <Imageinput type="radio" id="😔" name="emoji" value="😔" 
                            checked={radioClicked==="😔"} onChange={handleChange}/>
                            <Imagelabel for="😔">😔</Imagelabel>
                        
                            <Imageinput type="radio" id="😍" name="emoji" value="😍" 
                            checked={radioClicked==="😍"} onChange={handleChange}/>
                            <Imagelabel for="😍">😍</Imagelabel>
                        </ImagePreview>
            </ImageOutDiv>
            <Listname>{radioClicked} '{radioTextClicked}'가 많은 순</Listname>
            <ListSet/>
            <ListBr/>
        </EmojiReviewOutDiv>
    )
}

export default EmojiReview;