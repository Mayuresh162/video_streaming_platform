import React from 'react';

const Button = ({ elem }) => {
    return (
        <div>
          <button className="px-5 py-2 m-2 bg-gray-200 rounded-lg">{elem}</button>
        </div>
    );
}

export default Button