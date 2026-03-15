import React from 'react'

// ប្តូរពី imaSrc មកជា image ឱ្យដូចអ្វីដែលយើងបោះមកពី App.js
function Body({ image, title, text, price }) {
    return (
        <div>
            <section className='card-box'>
                <div className='box-image'>
                    {/* ប្រើ image ដែលជាឈ្មោះ prop ត្រឹមត្រូវ */}
                    <img src={image} alt={title} /> 
                </div>
                <div className='box-title'>
                    <h3 className='title'>{title}</h3>
                    <p className='text'>{text}</p>
                    <p className='price'>{price}</p>
                </div>
            </section>
        </div>
    )
}

export default Body