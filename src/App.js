import React from 'react';
import Button from './components/Button/Button'

function App() {
  return (
    <div> 
        <Button 
            title="Click Me" 
            type="success" 
            onClick={() => console.log('hi')}
        />

        <Button 
            title="Click Me"  
            onClick={() => console.log('hi')}
        />

        <Button 
            disabled
            title="Click Me"  
            onClick={() => console.log('hi')}
        />
   </div>
  );
}

export default App;
