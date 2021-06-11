import React, { useState } from "react";
import './App.css';
import { CardItem } from "./components/cards/CardItem";
import { userData as userDataUnmuttable } from "./userData"
import Header from './components/partials/Header';
import Modal from "./components/partials/Modal";

const newUserDataArr = JSON.parse(JSON.stringify(userDataUnmuttable));

const App = () => {
    const [userData, setUserData] = useState(newUserDataArr);
    const [modalIsShown, setModalIsShown] = useState(false);
    const [modalContent, setModalContent] = useState(null);
    const handleSearch = e => {
        const { value } = e.target;
        const res = newUserDataArr.filter(el => {
            const { name } = el;
            return name.toLowerCase().includes(value.toLowerCase()) || !value;
        })
        setUserData(res);
    }
    const handleSelect = (e) => {
        const { value } = e.target;
        const users = [...newUserDataArr];
        let sortType;
        if (value === 'def') {
            return setUserData(users);
        }
        switch (value) {
            case 'desc': {
                sortType = (a, b) => b.age - a.age;
                break;
            }
            default: {
                sortType = (a, b) => a.age - b.age;
            }
        }
        setUserData(users.sort(sortType));
    }
    return (
        <>
            <Header onChange={handleSearch} onSelect={handleSelect} />
            <div className="items__container">
                {userData.map((el) =>
                    <CardItem
                        key={el._id}
                        setModalContent={setModalContent}
                        setModalIsShown={setModalIsShown}
                        data={el}
                    />
                )}
            </div>
            <Modal isShown={modalIsShown} content={modalContent}/>
        </>
    );
}

export default React.memo(App);
