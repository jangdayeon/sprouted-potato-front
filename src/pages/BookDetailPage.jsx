import { React, useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';
import BookInfo from '../components/bookdetail/BookInfo';
import ReviewStatistics from "../components/bookdetail/ReviewStatistics";
import CommentCard from "../components/bookdetail/CommentCard";
import BookCommentList from '../components/bookdetail/BookCommentList';

const BookDetailOutDiv = styled.div`
    width: 78%;
    background-color: white;
    margin: 0 auto;
    border-radius: 20px;
    box-shadow: 1px 1px 1px 1px rgba(0,0,0,0.16);
    padding: 42px 50px;
`

const BookInfoStatisticsOutDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`

function BookDetailPage() {
    const [commentList, setCommentList] = useState([]);

    return (
        <>
        <BookDetailOutDiv>
            <BookInfoStatisticsOutDiv>
                <BookInfo />
                <ReviewStatistics />
            </BookInfoStatisticsOutDiv>
            <CommentCard setCommentList={setCommentList}  />
            <BookCommentList commentList={commentList} setCommentList={setCommentList}/>
        </BookDetailOutDiv>
        </>
    )
}

export default BookDetailPage;