import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getSelect, delSelect, resetSelect } from "app/slices/selectSlice";
import { MAIN_COLOR } from "styles/colorPalette";
import { HiChevronDown as IconArrowDown } from "react-icons/hi";
import { IoCloseCircle as IconCancel } from "react-icons/io5";
import { IoClose as IconClose } from "react-icons/io5";
import styled from "styled-components";

const Dropdown = ({ arr, name, selectedData, dropdown }) => {
  const dispatch = useDispatch();
  const [newArr, setNewArr] = useState(arr);

  const handleClickItem = (item) => {
    dispatch(getSelect({ name, item }));
    setNewArr((prev) => prev.filter((value) => value !== item));
  };

  const handleCancelItem = (item) => {
    dispatch(delSelect({ name, item }));
    setNewArr(arr.filter((value) => value === item || !selectedData.includes(value)));
  };

  const handleResetItem = () => {
    dispatch(resetSelect({ name }));
    setNewArr(arr);
  };

  return (
    <S.DropdownContainer>
      <S.Input onClick={dropdown.handleClick} ref={dropdown.dropRef}>
        {selectedData.length ? (
          <S.SelectedItem>
            {selectedData.map((item) => (
              <div key={item}>
                {item} <S.IconCancel onClick={() => handleCancelItem(item)} />
              </div>
            ))}
            <S.IconClose onClick={handleResetItem} />
          </S.SelectedItem>
        ) : (
          <span>{name} 선택</span>
        )}
        <span>
          <IconArrowDown />
        </span>
      </S.Input>

      {dropdown.isOpen && (
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
    grid-template-columns: auto 3.5rem;
    align-items: center;

    width: 100%;
    min-height: 3.6rem;
    padding: 0.7rem 0 0.7rem 1rem;

    border: 1px solid ${MAIN_COLOR.gray1};
    border-radius: 1rem;

    cursor: pointer;
    transition-duration: 0.3s;

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
    position: relative;

    display: flex;
    flex-wrap: wrap;
    gap: 1rem;

    padding-right: 2rem;

    > div {
      display: flex;
      align-items: center;
      gap: 0.3rem;

      font-size: 1.2rem;
    }
  `,

  IconClose: styled(IconClose)`
    position: absolute;
    top: 50%;
    right: 1rem;
    transform: translateY(-50%);

    color: ${MAIN_COLOR.gray2};
    transition-duration: 0.3s;

    &:hover {
      color: ${MAIN_COLOR.black};
    }
  `,

  IconCancel: styled(IconCancel)`
    color: ${MAIN_COLOR.gray2};
    transition-duration: 0.3s;

    &:hover {
      color: ${MAIN_COLOR.black};
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

    z-index: 999;

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
