import  './Nav.css'

import logo from "../assets/logo.png"

function Nav() {
  return (
    <>
    <div className='nav-containers'>

      <a href=""><img className='logo' src={logo} alt="" srcset="" /></a>
    
        
        <ul className='nav-contanier'>

            <li>
              <a>الرئيسيه</a>
            </li>
            <li><a>المعسكرات والبرامج</a>
            </li>
            <li>حول الاكاديميه</li>
            <li>الاكاديميات التابعه</li>
            <li>مركز الاختبارات</li>



        </ul>
        <ul className="nav-left">
          <li>تسجيل الدخول</li>
          <li>English</li>
        </ul>

        <div className="txt"><p>اكاديمية طويق</p></div>

    </div>
    </>
  )
}

export default Nav
