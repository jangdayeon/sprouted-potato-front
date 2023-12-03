import React, { useEffect, useState } from "react";
import ItemsCarousel from 'react-items-carousel';
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

// const ListDiv = styled.div`
//     height : 200px;
//     background-color : gray;
// `

const SlideBtn = styled.button`
    background-color : white;
    color : black;
    border : 0;
    font-size : 2em;
    border-radius : 100%;
    cursor :pointer;
    opacity : 80%;
    &:hover {
        opacity : 100%;
    }
`

const BookListContainer = styled.div`

`;
const BookImage = styled.img`
  width: 100%;
  height: 12em;
  border-radius: 2px;
`;
const BookListContent = styled.div`
`;
const ContentTitleText = styled.div`
    font-size : 0.8em;
    font-weight : bold;
    overflow: hidden;
    width : inherit;  
    text-overflow : ellipsis;
    white-space:nowrap;
    text-align :center;
    margin-top : 0.5em;
`;
const ContentText = styled.p`
    font-size : 0.5em;
    font-weight : normal;
    overflow: hidden;
    width : inherit;  
    text-overflow : ellipsis;
    white-space:nowrap;
    text-align :center;
    margin-top : 0.5em;
`;
const BookDetailContainer = styled.div`
    padding: 0em 0.5em 0.5em 0em; 
`;

function ListSet(props) {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;

  const [bookListResponse, setBookListResponse] = useState([]);
  useEffect(() => {
    if (props.bookList !== bookListResponse) {
      setBookListResponse(props.bookList);
    }
  }, [props.bookList]);

  return (
    <div style={{ padding: `0 ${chevronWidth}px` }}>
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={6}
        gutter={20}
        leftChevron={<SlideBtn><FontAwesomeIcon icon={faAngleLeft} /></SlideBtn>}
        rightChevron={<SlideBtn><FontAwesomeIcon icon={faAngleRight} /></SlideBtn>}
        outsideChevron
        chevronWidth={chevronWidth}
      >
        {bookListResponse.map((book) => {
          return (
            <BookListContainer key={book.isbn}>
              <BookImage src={book.cover} alt="bookimg" />
              <BookDetailContainer>
                <BookListContent>
                  <ContentTitleText>{book.bookName}</ContentTitleText>
                  <ContentText>{book.bookAuthor}</ContentText>
                </BookListContent>
              </BookDetailContainer>
            </BookListContainer>
          );
        })}
      </ItemsCarousel>
    </div>
  );
};


export default ListSet;

