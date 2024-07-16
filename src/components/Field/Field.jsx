import React from 'react'

export default function Field(props) {
    const modifiedPlaceholder = `${props.placeholder}...`
    const { type = "text" } = props;
    const handleChange = (e) => {
        props.setNewVideo(prevState => ({
            ...prevState,
            [props.name]: e.target.value,
        }));
    };
    return (
        <div className='container flex flex-col gap-2'>
            <label className='text-white'>{props.title}</label>
            <input className='rounded-xl outline-2 drop-shadow-lg p-3 outline-gray-600'
                placeholder={modifiedPlaceholder}
                required={props.required}
                value={props.value}
                onChange={handleChange}
                type={type}
            />
        </div>
    )
}
