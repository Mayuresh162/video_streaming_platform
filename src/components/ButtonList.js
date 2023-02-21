import Button from './Button';
import React from 'react';
import { SHORTCUT_BUTTON as shortcuts } from '../utils/data';

const ButtonList = () => {
  return (
    <div className='flex sticky top-0 bg-white px-5'>
        {
            shortcuts.map((elem, index) => (
                <Button elem={elem} key={index}/>
            ))
        }
    </div>
  )
}

export default ButtonList