import { React, useState, useEffect } from 'react';
import styled from 'styled-components';
import { CommentList } from "./CommentData"

const CommentCardOutDiv = styled.div`
    margin-top: 40px;
`

const ReviewerNameButtonOutDiv = styled.div`
    display: flex;
    justify-content: space-between;
`

const ReviewerName = styled.div`
    font-size: 18px;
    font-weight: bold;
    height: 29px;
    line-height: 29px;
    padding-left: 10px;
`

const PwdNameOutDiv = styled.div`
    display: flex;
    align-items: center;
    padding-right: 6px;
`

const PwdName = styled.div`
    width: 25%;
    height: 70%;
    margin-right: 5px;
`

const PwdInput = styled.input`
    width: 45%;
    height: 18px;
    border: 1px solid #D2D2D2;
    border-radius: 6px;
    padding: 5px;
    margin-right: 5px;
`

const EditButton = styled.div`
    width: 20%;
    height: 28px;
    border: 1px solid #D2D2D2;
    border-radius: 5px;
    text-align: center;
    line-height: 28px;
    margin-right: 5px;
`

const DeleteButton = styled.div`
    width: 20%;
    height: 28px;
    border: 1px solid #D2D2D2;
    border-radius: 5px;
    text-align: center;
    line-height: 28px;
`

const CommentBox = styled.div`
    width: 95%;
    border: 1px solid #D2D2D2;
    border-radius: 8px;
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    padding: 20px 30px;
`

const CommentContent = styled.div``

const CommentEmojiAIOutDiv = styled.div`
    display: flex;
`

const CommentEmojiBox = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid #D2D2D2;
    border-radius: 8px;
    text-align: center;
    justify-content: center;
    padding: 10px 20px;
`

const CommentEmojiName = styled.div`
    font-size: 15px;
`

const CommentEmoji = styled.div`
    margin-top: 8px;
    font-size: 20px;
`

const CommentAIBox = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid #D2D2D2;
    border-radius: 8px;
    text-align: center;
    justify-content: center;
    padding: 10px 20px;
    margin-left: 10px;
`

const CommentAIName = styled.div`
    font-size: 15px;
`

const CommentAIResult = styled.div`
    margin-top: 8px;
    font-size: 17px;
`


function BookCommentList() {
    return (
        CommentList.map((comment) => {
            return (
                <CommentCardOutDiv>
                <ReviewerNameButtonOutDiv>
                    <ReviewerName>{comment.reviewer} 님</ReviewerName>
                    <PwdNameOutDiv>
                        <PwdName>비밀번호</PwdName>
                        <PwdInput type='password' value={comment.pwd}></PwdInput>
                        <EditButton>수정</EditButton>
                        <DeleteButton>삭제</DeleteButton>
                    </PwdNameOutDiv>
                </ReviewerNameButtonOutDiv>
                <CommentBox>
                    <CommentContent>{comment.contents}</CommentContent>
                    <CommentEmojiAIOutDiv>
                        <CommentEmojiBox>
                            <CommentEmojiName>이모티콘 리뷰</CommentEmojiName>
                            <CommentEmoji>{comment.emoji}</CommentEmoji>
                        </CommentEmojiBox>
                        <CommentAIBox>
                            <CommentAIName>AI가 분석한 리뷰</CommentAIName>
                            <CommentAIResult>{comment.ai}</CommentAIResult>
                        </CommentAIBox>
                    </CommentEmojiAIOutDiv>
                </CommentBox>
            </CommentCardOutDiv>
            )
        })
    )
}

export default BookCommentList;