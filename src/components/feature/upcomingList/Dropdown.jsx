import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getSelect, delSelect } from "app/slices/selectSlice";
import { MAIN_COLOR } from "styles/colorPalette";
import styled from "styled-components";

const Dropdown = ({ arr, name, selectedData }) => {
  const dispatch = useDispatch();
  const [newArr, setNewArr] = useState(arr);
  const [isDrop, setIsDrop] = useState(false);

  const handleClickDrop = () => {
    setIsDrop((prev) => !prev);
  };

  const handleClickItem = (item) => {
    dispatch(getSelect({ name, item }));
    setNewArr((prev) => prev.filter((value) => value !== item));
    setIsDrop((prev) => !prev);
  };

  const handleCancelItem = (item) => {
    dispatch(delSelect({ name, item }));
    setNewArr(arr.filter((value) => value === item || !selectedData.includes(value)));
    setIsDrop(true);
  };

  return (
    <S.DropdownContainer>
      <S.Input onClick={handleClickDrop}>
        {selectedData.length ? (
          <S.SelectedItem>
            {selectedData.map((item) => (
              <div key={item}>
                {item} <span onClick={() => handleCancelItem(item)}>❌</span>
              </div>
            ))}
          </S.SelectedItem>
        ) : (
          <span>{name} 선택</span>
        )}
        <span>↓</span>
      </S.Input>

      {isDrop && (
        <S.Menu>
          {newArr.map((item) => (
            <li key={item} onClick={() => handleClickItem(item)}>
              {item}
            </li>
          ))}
        </S.Menu>
      )}
    </S.DropdownContainer>
  );
};

const S = {
  DropdownContainer: styled.div`
    position: relative;
    width: 100%;
  `,

  Input: styled.div`
    display: grid;
    grid-template-columns: auto 3.6rem;
    align-items: center;

    width: 100%;
    min-height: 3.6rem;
    padding: 0.7rem 0 0.7rem 1rem;

    border: 1px solid ${MAIN_COLOR.gray1};
    border-radius: 1rem;

    cursor: pointer;

    &:hover {
      border: 1px solid ${MAIN_COLOR.gray2};
    }

    span {
      font-size: 1.2rem;
      color: ${MAIN_COLOR.gray2};
    }

    > span:nth-child(2) {
      display: flex;
      justify-content: center;
      align-items: center;

      height: 100%;
      border-left: 1px solid ${MAIN_COLOR.gray1};
    }
  `,

  SelectedItem: styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;

    > div {
      font-size: 1.3rem;
    }
  `,

  Menu: styled.ul`
    position: absolute;
    top: 4rem;

    width: 100%;
    max-height: 30rem;
    padding: 0.5rem 0;
    background-color: ${MAIN_COLOR.white};

    border: 1px solid ${MAIN_COLOR.gray1};
    border-radius: 0.5rem;

    overflow-y: scroll;

    z-index: 99;

    cursor: pointer;

    li {
      display: flex;
      align-items: center;

      height: 3.6rem;
      padding: 0 1rem;

      font-size: 1.3rem;

      &:hover {
        background-color: ${MAIN_COLOR.hover};
      }
    }
  `,
};

export default Dropdown;
