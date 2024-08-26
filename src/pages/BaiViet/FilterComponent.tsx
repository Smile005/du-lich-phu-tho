import { BellFilled, BulbFilled } from "@ant-design/icons";
import React, { useState } from "react";
import styled from "styled-components";

const FilterContainer = styled.div`
position: absolute;
width: 362px;
height: 1028px;
flex-shrink: 0;
border-radius: 12px;
background: rgba(255, 255, 255, 0.70);
box-shadow: 0px 2px 20px 0px rgba(0, 0, 0, 0.10);
backdrop-filter: blur(7.5px);
`
const FilterTitle = styled.div`
display: flex;
width: 319px;
height: 56px;
padding: 16px 24px;
justify-content: center;
align-items: center;
flex-shrink: 0;

color: var(--blue-primary-500, #0054A6);
text-align: center;
font-family: Philosopher;
font-size: 24px;
font-style: normal;
font-weight: 700;
line-height: normal;
text-transform: uppercase;
`
const FilterItem = styled.div<ChuDeProps>`
  display: flex;
  width: 322px;
  padding: 20px;
  align-items: center;
  gap: 12px;
  border-radius: 8px;
  background: ${(props) => (props.isActive ? 'var(--blue-primary-500, #0054A6)' : '#FFF')};
  cursor: pointer;

     color: ${(props) => (props.isActive ? '#FFF' : 'var(--blue-primary-300, #6698CA)')};
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

`;

const FilterMain = styled.div`
 display: inline-flex;
flex-direction: column;
align-items: flex-start;
gap: 20px;
`;

interface ChuDeProps {
    isActive: boolean;
}

const FilterComponent: React.FC = () => {
    const [gioiThieu, setgioiThieu] = useState(false);
    const [tinTuc, setTintuc] = useState(false);
    const [suKien, setSuKien] = useState(false);
    const [thongBao, setthongBao] = useState(false);
    const [coDong, setCoDong] = useState(false);
    const [doanThe, setDoanThe] = useState(false);

    const handleClick = (setStateFunction: React.Dispatch<React.SetStateAction<boolean>>) => {
        setStateFunction(prevState => !prevState);
    };

    return (
        <FilterContainer>
            <FilterTitle>Chủ đề bài viết</FilterTitle>
            <FilterMain>
                <FilterItem isActive={gioiThieu} onClick={() => handleClick(setgioiThieu)}>
                    <BulbFilled /> Giới thiệu
                </FilterItem>
                <FilterItem isActive={tinTuc} onClick={() => handleClick(setTintuc)}>
                    <BulbFilled /> Tin tức
                </FilterItem>
                <FilterItem isActive={suKien} onClick={() => handleClick(setSuKien)}>
                    <BulbFilled /> Sự kiện
                </FilterItem>
                <FilterItem isActive={thongBao} onClick={() => handleClick(setthongBao)}>
                    <BellFilled /> Thông báo
                </FilterItem>
                <FilterItem isActive={coDong} onClick={() => handleClick(setCoDong)}>
                    <BulbFilled /> Tin cổ đông
                </FilterItem>
                <FilterItem isActive={doanThe} onClick={() => handleClick(setDoanThe)}>
                    <BulbFilled /> Hoạt động đoàn thể
                </FilterItem>
            </FilterMain>
        </FilterContainer >
    )
}

export default FilterComponent;