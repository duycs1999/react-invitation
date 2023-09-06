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

    const handleButtonClick = () => {
        const targetUser = _.find(data, {"user":`${inputName}`})
        if(targetUser!=null){
            history.push(`/invitation/${inputName}`)
        }else {
            alert(`${inputName} thì lại éo có tuổi mất rồi, cay thế nhờ 😏`)
        }
    };

    return (
        <Main id="opener">
            <Container className="container">
                <div className={"col-md-6 col-lg-4 col-6 col-sm-10"}>
                    <Card title="Cho xin cái quý danh nhớ" >
                        <Input placeholder="Ví dụ: chiendd6" onChange={handleInputChange} />
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
