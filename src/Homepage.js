import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from './Nav-Component/Navigation';

ReactDOM.render(<Component />, document.getElementById('root'));


const Homepage = () => {
    return ( 
        <div> 
            ReactDOM.render(<Navigation />,
            document.getElementById('root'));
             <Navigation/>
        </div>  


     

     );
   
}
 
export default Homepage;