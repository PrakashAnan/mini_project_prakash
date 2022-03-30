import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="mt-1">
      
<nav class="navbar navbar-expand-lg navbar-light bg-danger">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
      Navbar
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
          <NavLink className="nav-link" to="/faculty">
            Faculty
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/signup">
            Signup
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/login">
            Login
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/student">
            Student
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
        <li className="nav-item">
          <NavLink className="nav-link" to="/liststudent">
            ListStudent
          </NavLink>
        </li>
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Dropdown
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li>
              <a class="dropdown-item" href="#">
                Action
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Another action
              </a>
            </li>
            <li>
              <hr class="dropdown-divider" />
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Something else here
              </a>
            </li>
          </ul>
        </li>
        <li class="nav-item">
          <a
            class="nav-link disabled"
            href="#"
            tabindex="-1"
            aria-disabled="true"
          >
            Disabled
          </a>
        </li>
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


<div class="accordion" id="accordionExample">
<div class="accordion-item">
  <h2 class="accordion-header" id="headingOne">
    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      Signup
    </button>
  </h2>
  <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
    <div class="accordion-body">
      
    </div>
  </div>
</div>
<div class="accordion-item">
  <h2 class="accordion-header" id="headingTwo">
    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      Accordion Item #2
    </button>
  </h2>
  <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
    <div class="accordion-body">
      <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
    </div>
  </div>
</div>
<div class="accordion-item">
  <h2 class="accordion-header" id="headingThree">
    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      Accordion Item #3
    </button>
  </h2>
  <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
    <div class="accordion-body">
      <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
    </div>
  </div>
</div>
</div>
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