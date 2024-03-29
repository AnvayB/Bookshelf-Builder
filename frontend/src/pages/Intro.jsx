
import { Link } from "react-router-dom"
 import './Intro.css'

function Intro() {

  return (
    <div className='intro'>

      <Link to={'/home'}>
        <button className='view'><p>View Books</p></button>
      </Link>
    </div>
  )
}

export default Intro

// Homepage Slide Up Code - not working

// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import './Intro.css';

// function Intro() {
//   const [redirect, setRedirect] = useState(false);

//   const handleClick = () => {
//     setRedirect(true); // Set redirect to true when button is clicked
//   };

//   return (
//     <div className={`intro ${redirect ? 'slide-up' : ''}`}>
//       {redirect && <Link to="/home" />} {/* Redirect to "/home" if redirect is true */}
//       <button className="view" onClick={handleClick}>
//         <p>View Books</p>
//       </button>
//     </div>
//   );
// }

// export default Intro;
