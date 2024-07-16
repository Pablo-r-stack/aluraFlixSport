import React from 'react';

export default function OptionList(props) {
    const { categories } = props; // Destructura categories desde props correctamente
    const handleChange = (e) => {
        props.setNewVideo(prevState => ({
            ...prevState,
            category: e.target.value,
        }));
    };
    return (
        <div className="flex flex-col gap-3">
            <label className='text-white'>Categoria</label>
            <select className='cursor-pointer p-3 rounded-lg' value={props.value} onChange={handleChange}>
                <option value="" disabled hidden>Seleccionar Categoria</option>
                {categories.map((category, index) => (
                    <option key={index} value={category.title}>{category.title}</option>
                ))}
            </select>
        </div>
    );
}