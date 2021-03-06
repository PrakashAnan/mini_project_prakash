import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="mt-1">
      
<nav class="navbar navbar-expand-lg navbar-light bg-danger">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
      Fees Application
    </a>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <NavLink className="nav-link active" aria-current="page" to="/home">
          Home
        </NavLink>
        

        <li className="nav-item">
          <NavLink className="nav-link" to="/signup">
            Teacher-signup
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/login">
            Login
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/contactus">
            Contact Us
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/aboutus">
            About Us
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/gallery">
            Gallery
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/addstudent">
            AddStudent
          </NavLink>
        </li>
        {/* <li className="nav-item">
          <NavLink className="nav-link" to="/liststudent">
            ListStudent
          </NavLink>
        </li> */}
       </ul>
      
      <form class="d-flex">
        <input
          class="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button class="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
    </div>
  </div>
</nav>;
</div>



  );
};
export default Header;








// <nav className="navbar navbar-expand-lg navbar-light bg-danger">
//         <div className="container-fluid">
//           <a className="navbar-brand" href="#">
//             Sec App
//           </a>
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarNavDropdown"
//             aria-controls="navbarNavDropdown"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarNavDropdown">
//             <ul className="navbar-nav">
//               <li className="nav-item">
//                 <NavLink
//                   className="nav-link active"
//                   aria-current="page"
//                   to="/home"
//                 >
//                   Home
//                 </NavLink>
//               </li>
//               <li className="nav-item">
//                 <NavLink className="nav-link" to="/faculty">
//                   Faculty
//                 </NavLink>
//               </li>
//               <li className="nav-item">
//                 <NavLink className="nav-link" to="/signup">
//                   Signup
//                 </NavLink>
//               </li>
//               <li className="nav-item">
//                 <NavLink className="nav-link" to="/login">
//                   Login
//                 </NavLink>
//               </li>
//               <li className="nav-item">
//                 <NavLink className="nav-link" to="/student">
//                   Student
//                 </NavLink>
//               </li>
//               <li className="nav-item">
//                 <NavLink className="nav-link" to="/contactus">
//                   Contact Us
//                 </NavLink>
//               </li>
//               <li className="nav-item">
//                 <NavLink className="nav-link" to="/aboutus">
//                   About Us
//                 </NavLink>
//               </li>
//               <li className="nav-item">
//                 <NavLink className="nav-link" to="/gallery">
//                   Gallery
//                 </NavLink>
//               </li>
//               <li className="nav-item">
//                 <NavLink className="nav-link" to="/addstudent">
//                   AddStudent
//                 </NavLink>
//               </li>
//               <li className="nav-item">
//                 <NavLink className="nav-link" to="/liststudent">
//                   ListStudent
//                 </NavLink>
//               </li>

//               {/* <li className="nav-item dropdown">
//           <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//             Dropdown link
//           </a>
//           <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
//             <li><a className="dropdown-item" href="#">About</a></li>
//             <li><a className="dropdown-item" href="#">Faculty</a></li>
//             <li><a className="dropdown-item" href="#">Something else here</a></li>
//           </ul>
//         </li> */}
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </div>