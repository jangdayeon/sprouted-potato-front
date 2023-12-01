import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';
import { SearchResult } from "../components/search/SearchData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const SearchPageOutDiv = styled.div`
    background-color: white;
    width: 53%;
    border-radius: 20px;
    box-shadow: 1px 1px 1px 1px rgba(0,0,0,0.16);
    margin: 0 auto;
    padding: 20px 50px;
`

const SearchMent = styled.div`
    font-size: 19px;
    margin: 0 auto;
    padding-top: 30px;
    padding-bottom: 30px;
    width: max-content;
    >svg {
        width: 17px;
        height: 17px;
        margin-right: 10px;
    }
    >span {
        font-weight: bold;
    }
`

const SearchListDiv = styled.div`
    display: flex;
    padding: 20px;
    border-bottom: 1px solid #D6D6D6;

    &:hover {
        background-color: #EFEFEF;
        cursor: pointer;
        border-radius: 20px;
    }
`
const SearchImg = styled.img`
    width: 15%;
    border-radius: 7px;
    margin-right: 20px;
`

const SearchTitleAuthorOutDiv = styled.div`
    margin-top: 3px;
`

const SearchTitle = styled.div`
    margin-bottom: 8px;
    font-weight: bold;
    font-size: 17px;
    width: 40rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    word-break: break-all;
`

const SearchAuthor = styled.div`
    margin-bottom: 3px;
    width: 40rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    word-break: break-all;
`

const SearchPublisher = styled.div``

function SearchPage() {
    const [SearchValue, setSearchValue] = useState('푸바오');
    const navigate = useNavigate();
    
    const goBookDetailPage = (isbn) => {
        navigate(`/bookdetail/${isbn}`);
    }

    return (
        <SearchPageOutDiv>
            <SearchMent><FontAwesomeIcon icon={faMagnifyingGlass} />검색하신 '<span>{SearchValue}</span>'에 관한 검색 결과입니다. </SearchMent>
            {SearchResult.map((book) => {
                return (
                    <SearchListDiv onClick={() => goBookDetailPage(book.isbn)}>
                        <SearchImg src={book.bookimg}></SearchImg>
                        <SearchTitleAuthorOutDiv>
                            <SearchTitle>{book.title}</SearchTitle>
                            <SearchAuthor>{book.author}</SearchAuthor>
                            <SearchPublisher>{book.publisher}</SearchPublisher>
                        </SearchTitleAuthorOutDiv>
                    </SearchListDiv>
                )
            })}
        </SearchPageOutDiv>
    )
}

export default SearchPage;