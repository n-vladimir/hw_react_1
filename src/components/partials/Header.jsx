import React from 'react';
import Select from '../form/Select';

const Header = (props) => {
    const {
        onChange = (e) => {},
        onSelect = (e) => {},
    } = props;
    return (
        <header className="header__container">
            <input type="text" onChange={(e) => onChange(e)}/>
            <Select value={onSelect} onSelect={onSelect} />
            <button className="btnReset" onClick={(e = '') => onChange(e) && onSelect('def')}>Reset</button>
        </header>
    );
}

export default React.memo(Header);

