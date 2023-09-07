import React, {useState} from "react";
import opener from "../../assets/opener.png";
import styled from "styled-components";
import "./TextName.css"
import { Card, Input, Button } from 'antd';
import data from "../../constants/data.json"
import _ from 'lodash';
import {useHistory} from "react-router-dom";

export default function TextName() {
    const [inputName, setInputName] = useState("")
    const history = useHistory();
    const handleInputChange = (e) => {
        setInputName(e.target.value);
    };

    function isNullOrEmpty(value) {
        if (value === null || value === undefined) {
            return true;
        }

        if (typeof value === 'string' && value.trim() === '') {
            return true;
        }

        if (Array.isArray(value) && value.length === 0) {
            return true;
        }

        return false;
    }

    function handleKeyUp(event) {
        // Enter
        if (event.keyCode === 13 && (!isNullOrEmpty(inputName))) {
          handleButtonClick();
        }
      }

    const handleButtonClick = () => {
        const targetUser = _.find(data, {"user":`${inputName}`})
        if(targetUser==null){
            alert(`${inputName} thì lại éo có tuổi mất rồi, cay thế nhờ 😏`)
        }
        // else if(targetUser.user==='tiendh3'){
        //     alert(`Tiến à, Tiến thì ... lại éo có tuổi mất rồi, cay thế nhờ 😏`)
        // }
        else {
            history.push(`/invitation/${inputName}`)
        }
    };

    return (
        <Main id="opener">
            <Container className="container">
                <div className={"col-md-6 col-lg-4 col-6 col-sm-10"}>
                    <Card title="Cho xin cái quý danh Viettel phát">
                        <Input placeholder="Ví dụ: chiendd6" onChange={handleInputChange} onKeyUp={handleKeyUp}/>
                        <div className={"card-center"}>
                            <Button type="primary" onClick={handleButtonClick}>
                                Xong
                            </Button>
                        </div>
                    </Card>
                </div>
            </Container>
        </Main>
    );
}

const Main = styled.main`
  background-image: url(${opener});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  color: white;
`;
const Container = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
`;
