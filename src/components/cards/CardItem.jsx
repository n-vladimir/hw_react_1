export const CardItem = props => {
    const { data, setModalContent, setModalIsShown } = props;
    const modalContent = (
        <div className="card-modal-content">
            <h5>Name: {data.name}</h5>
            <img src={data.picture} alt="img"/>
            <p>Age: {data.age}</p>
        </div>
    );

    const onCardClick = () => {
        setModalContent(modalContent);
        setModalIsShown(true);
    }

    return (
        <div className="titleCardUser" onClick={onCardClick}>
            <h5>Name: {data.name}</h5>
            <img src={data.picture} alt="img"/>
            <p>Age: {data.age}</p>
            <p>Gender: {data.gender}</p>
            <p>Balance: {data.balance}</p>
        </div>
    );
}
