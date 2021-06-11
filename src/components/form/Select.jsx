import React from 'react';

const Select = (props) => {
    const {
        onSelect = () => {}
    } = props;
    return (
        <select id="selectAge" className="selectOptionValue" onChange={onSelect}>
            <option value="def">default</option>
            <option value="asc">asc</option>
            <option value="desc">desc</option>
        </select>
    );
}

export default React.memo(Select);
