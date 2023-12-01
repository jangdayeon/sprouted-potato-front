import { React, useState, useEffect } from 'react';
import styled from 'styled-components';
import writeHand from "../../assets/write-hand.png";

const BookReviewNameOutDiv = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 17px;
    margin-top: 50px;
    padding-top: 35px;
    border-top: 1px solid #D2D2D2
`

const WriteHandImg = styled.img`
    width: 2%;
    margin-right: 10px;
`

const BookReviewName = styled.div`
    font-size: 19px;
    font-weight: bold;
`

const BookReviewButtonOutDiv = styled.div`
    display: flex;
`

const ReviewBox = styled.div`
    width: 75%;
    height: 150px;
    border: 1px solid #D2D2D2;
    border-radius: 8px;
    padding: 20px 30px;
`

const ReviewerNameEmojiOutDiv = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
`

const ReviewerName = styled.div`
    font-size: 18px;
    font-weight: bold;
`

const ReviewerEmoji = styled.div`
    font-size: 25px;
    opacity: 0.5;
    >span {
        margin-right: 10px;
    }
    &:hover {
        cursor: pointer;
    }
`

const ReviewerInput = styled.textarea`
    width: 96%;
    height: 53%;
    resize: none;
    border: 1px solid #D2D2D2;
    border-radius: 8px;
    padding: 15px;
    font-size: 15px;
    font-family: "Pretendard-Regular";
`

const ReviewButtonOutDiv = styled.div`
    margin-left: 20px;
    padding-top: 7px;
`

const PasswordOutDiv = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
`

const PasswordName = styled.div`
    margin-right: 10px;
`

const PasswordInput = styled.input`
    width: 64%;
    height: 20px;
    border: 1px solid #D2D2D2;
    border-radius: 5px;
    padding: 5px;
`

const DoneButton = styled.div`
    border: 1px solid #D2D2D2;
    border-radius: 5px;
    width: 96%;
    height: 50px;
    text-align: center;
    line-height: 50px;
    font-family: "Pretendard-Regular";
    font-size: 17px;

    &:hover {
        cursor: pointer;
        background-color: #FDF6C2;
        font-weight: bold;
    }
`


function CommentCard() {
    const [reviewerName, setReviewerName] = useState("독서하는 감자");

    return (
        <>
            <BookReviewNameOutDiv>
                <WriteHandImg src={writeHand}></WriteHandImg>
                <BookReviewName>도서 리뷰</BookReviewName>
            </BookReviewNameOutDiv>
            <BookReviewButtonOutDiv>
                <ReviewBox>
                    <ReviewerNameEmojiOutDiv>
                        <ReviewerName>{reviewerName}</ReviewerName>
                        <ReviewerEmoji>
                            <span>😄</span>
                            <span>😭</span>
                            <span>🥹</span>
                            <span>🥱</span>
                            <span>😡</span>
                            <span>😔</span>
                            <span>😍</span>
                        </ReviewerEmoji>
                    </ReviewerNameEmojiOutDiv>
                    <ReviewerInput></ReviewerInput>
                </ReviewBox>
                <ReviewButtonOutDiv>
                    <PasswordOutDiv>
                        <PasswordName>비밀번호</PasswordName>
                        <PasswordInput type='password'></PasswordInput>
                    </PasswordOutDiv>
                    <DoneButton>작성 완료!</DoneButton>
                </ReviewButtonOutDiv>
            </BookReviewButtonOutDiv>
        </>
    )
}

export default CommentCard;