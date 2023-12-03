import React, { useEffect, useState } from "react";
import ItemsCarousel from 'react-items-carousel';
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

const ListDiv = styled.div`
    height : 200px;
    background-color : gray;
`

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
function ListSet(){
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const chevronWidth = 40;
    return (
      <div style={{ padding: `0 ${chevronWidth}px` }}>
        <ItemsCarousel
          requestToChangeActive={setActiveItemIndex}
          activeItemIndex={activeItemIndex}
          numberOfCards={5}
          gutter={20}
          leftChevron={<SlideBtn><FontAwesomeIcon icon={faAngleLeft}/></SlideBtn>}
          rightChevron={<SlideBtn><FontAwesomeIcon icon={faAngleLeft} /></SlideBtn>}
          outsideChevron
          chevronWidth={chevronWidth}
        >
          <ListDiv>First card</ListDiv>
          <ListDiv>Second card</ListDiv>
          <ListDiv>Third card</ListDiv>
          <ListDiv>Fourth card</ListDiv>
          <ListDiv>First card</ListDiv>
          <ListDiv>Second card</ListDiv>
          <ListDiv>Third card</ListDiv>
          <ListDiv>Fourth card</ListDiv>
          <ListDiv>First card</ListDiv>
          <ListDiv>Second card</ListDiv>
          <ListDiv>Third card</ListDiv>
          <ListDiv>Fourth card</ListDiv>
        </ItemsCarousel>
      </div>
    );
};


export default ListSet;

