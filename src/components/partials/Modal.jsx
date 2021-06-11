import React from "react";

const Modal = (props) => {
    const {
        isShown,
        content,
    } = props;
    if (!isShown) {
        return null;
    }
    return (
        <div className="modal__container">
            <div className="modal">
                { content }
                {/* items card*/}
            </div>
        </div>
    );
}

export default React.memo(Modal);
