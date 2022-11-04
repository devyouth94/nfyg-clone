import React, { useState } from "react";
import { useQueryContext } from "contexts/QueryContext";
import styled from "styled-components";

const Dropdown = ({ arr, name }) => {
  const { handleGetQuery, handleDelQuery } = useQueryContext();
  const [selectedItem, setSelectedItem] = useState([]);
  const [newArr, setNewArr] = useState(arr);
  const [isDrop, setIsDrop] = useState(false);

  const handleClickDrop = () => {
    setIsDrop((prev) => !prev);
  };

  const handleClickItem = (item) => {
    handleGetQuery(name, item);
    setSelectedItem((prev) => [...prev, item]);
    setNewArr((prev) => prev.filter((value) => value !== item));
    setIsDrop((prev) => !prev);
  };

  const handleCancelItem = (item) => {
    handleDelQuery(name, item);
    setSelectedItem((prev) => prev.filter((value) => value !== item));
    setNewArr(arr.filter((value) => value === item || !selectedItem.includes(value)));
    setIsDrop(true);
  };

  return (
    <SDropdownContainer>
      <SDropdown onClick={handleClickDrop}>
        {selectedItem.length ? (
          <SSelectedItem>
            {selectedItem.map((item) => (
              <div key={item}>
                {item} <span onClick={() => handleCancelItem(item)}>❌</span>
              </div>
            ))}
          </SSelectedItem>
        ) : (
          <span>{name} 선택</span>
        )}
        <span>↓</span>
      </SDropdown>

      {isDrop && (
        <SDropDownMenu>
          {newArr.map((item) => (
            <li key={item} onClick={() => handleClickItem(item)}>
              {item}
            </li>
          ))}
        </SDropDownMenu>
      )}
    </SDropdownContainer>
  );
};

const SDropdownContainer = styled.div`
  position: relative;
  width: 100%;
`;

const SDropdown = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  min-height: 3.6rem;
  padding: 0.7rem 0 0.7rem 1rem;

  border: 1px solid #dadce0;
  border-radius: 1rem;

  &:hover {
    border: 1px solid #aaa;
  }

  span {
    font-size: 1.2rem;
    color: #aaa;
  }

  > span:nth-child(2) {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 3.6rem;
    height: 100%;
    border-left: 1px solid #dadce0;
  }
`;

const SSelectedItem = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  > div {
    font-size: 1.3rem;
  }
`;

const SDropDownMenu = styled.ul`
  position: absolute;
  top: 4rem;

  width: 100%;
  max-height: 30rem;
  padding: 0.5rem 0;
  background-color: #fff;

  border: 1px solid #dadce0;
  border-radius: 0.5rem;

  overflow-y: scroll;

  z-index: 99;

  li {
    display: flex;
    align-items: center;

    height: 3.6rem;
    padding: 0 1rem;

    font-size: 1.3rem;

    &:hover {
      background-color: aliceblue;
    }
  }
`;

export default Dropdown;
