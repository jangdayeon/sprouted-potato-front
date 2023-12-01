import { React, useState, useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo, faFolder } from "@fortawesome/free-solid-svg-icons";

const BookInfoOutDiv = styled.div`
    width: 45%;
`

const BookImgTitleOutDiv = styled.div`
    display: flex;
    margin-bottom: 25px;
`

const BookImg = styled.img`
    width: 25%;
    border-radius: 7px;
`

const BookTitleAuthorOutDiv = styled.div`
    margin-top: 3px;
    margin-left: 10px;
`

const BookTitle = styled.div`
    font-weight: bold;
    font-size: 19px;
    line-height: normal;
    margin-bottom: 5px;
`

const BookAuthor = styled.div`
    font-size: 15px;
    margin-bottom: 3px;
`

const BookPublisher = styled.div`
    font-size: 15px;
    line-height: normal;
`

const CategoryName = styled.div`
    font-size: 19px;
    margin-bottom: 10px;
    font-weight: bold;
    >svg {
        width: 18px;
        height: 18px;
        margin-right: 10px;
    }
`

const BookCategory = styled.div`
    font-size: 18px;
    margin-bottom: 20px;
`

const DescriptionName = styled.div`
    font-size: 19px;
    font-weight: bold;
    margin-bottom: 10px;
    color: ${(props) => ((props.isInfoExpanded) ? "#8C3839" : "black")};
    >svg {
        width: 18px;
        height: 18px;
        margin-right: 10px;
    }
    &:hover {
        cursor: pointer;
    }
`

const BookDescription = styled.div`
    font-size: 18px;
    line-height: normal;
`


function BookInfo() {
    const [bookInfo, setBookInfo] = useState({
        isbn: "9791171710102",
        title: "전지적 푸바오 시점 - 판다월드의 작은할부지 송바오가 전하는 푸바오의 뚠빵한 하루",
        author: "송영관(에버랜드 동물원) (지은이), 송영관(에버랜드 동물원), 류정훈(에버랜드 커뮤니케이션 그룹) (사진)",
        publisher: "위즈덤하우스",
        bookimg: "https://image.aladin.co.kr/product/32806/58/cover/k832936705_1.jpg",
        category: "국내도서>에세이>사진/그림 에세이",
        description: "푸바오의 작은할부지 송바오가 전하는 판다월드 바오패밀리의 귀엽고 사랑스러운 일상 포토에세이. 20년차 사육사이자 푸바오의 영원한 작은할부지 ‘송바오’ 송영관 작가는 푸바오를 향한 애정에 보답하고, 푸바오와 판다월드의 이야기를 전하고자 《전지적 푸바오 시점》을 출간한다."
    });
    const [isInfoExpanded, setIsInfoExpanded] = useState(false);

    return (
        <BookInfoOutDiv>
            <BookImgTitleOutDiv>
                <BookImg src={bookInfo.bookimg}></BookImg>
                <BookTitleAuthorOutDiv>
                    <BookTitle>{bookInfo.title}</BookTitle>
                    <BookAuthor>{bookInfo.author}</BookAuthor>
                    <BookPublisher>{bookInfo.publisher}</BookPublisher>
                </BookTitleAuthorOutDiv>
            </BookImgTitleOutDiv>
            <CategoryName><FontAwesomeIcon icon={faFolder} />카테고리</CategoryName>
            <BookCategory>{bookInfo.category}</BookCategory>
            <DescriptionName onClick={() => setIsInfoExpanded(!isInfoExpanded)} isInfoExpanded={isInfoExpanded}><FontAwesomeIcon icon={faCircleInfo} />책 정보</DescriptionName>
            {isInfoExpanded && <BookDescription>{bookInfo.description}</BookDescription>}
        </BookInfoOutDiv>
    )
}

export default BookInfo;