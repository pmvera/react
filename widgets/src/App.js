import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';

const items = [
    {
        title: 'What is React',
        content: 'React is a front-end javascript framework'
    },
    {
        title: 'Why use React',
        content: 'React is a favourite library among engineers'
    },
    {
        title: 'How do you use React',
        content: 'you use React by creating components'
    }
];

const options = [
    {
        label: 'The color red',
        value: 'red'
    },
    {
        label: 'The color green',
        value: 'green'
    },
    {
        label: 'A shade of blue',
        value: 'blue'
    }
];

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    const [selected, setSelected] = useState(options[0]);

    return(
        <div>
            <Dropdown selected={selected} onSelectedChange={setSelected} options={options} />
        </div>
    );
}