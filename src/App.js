import React from 'react';
import Button from './components/Button/Button'

function App() {
  return (
    <div> 
        <Button 
            title="Click Me" 
            type="success" 
            onClick={() => console.log('hi')}
            key="btn1"
      
        />

        <Button 
            title="Click Me"  
            onClick={() => console.log('hi')}
            key="btn2"
        />

        <Button 
            disabled
            title="Click Me"  
            onClick={() => console.log('hi')}
            key="btn3"
        />
   </div>
  );
}

export default App;
