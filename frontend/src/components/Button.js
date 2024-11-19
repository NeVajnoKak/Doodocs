import React from 'react'

const Button = ({ name }) => {
  return (
    <div>   
      <button 
        style={{
          backgroundColor: '#F5F5F5',  // Зеленый фон (можно поменять на любой цвет)
          border: '1px solid #EDEDEC',     // Обводка 1px
          borderRadius: '4px',          // Радиус 4 пикселя
          color: '#282A2F',               // Цвет текста белый
          padding: '10px 20px',         // Отступы внутри кнопки
          fontSize: '16px',             // Размер шрифта
          cursor: 'pointer',           // Курсор в виде указателя при наведении
          outline: 'none',              // Убираем контур по умолчанию
          transition: 'background-color 0.3s',  // Плавный переход для фона
        }}
      >
        {name}
      </button>
    </div>
  )
}

export default Button
