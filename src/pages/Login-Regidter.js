import React from "react";
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
class LoginRegister extends React.Component{
    
    handleShowSignIn = (e) => {
        let signIn = document.getElementById('signin');
        let signUp = document.getElementById('signup');
        let signUpTitle = document.getElementById('signup-title')
        signIn.style.display = "block"
        signUp.style.display = "none"
        signUp.style.color = "red"
        e.currentTarget.classList.add('active')
        signUpTitle.classList.remove('active')
    }
    handleShowSignUp = (e) => {
        let signIn = document.getElementById('signin');
        let signUp = document.getElementById('signup');
        let signInTitle = document.getElementById('signin-title')
        signIn.style.display = "none"
        signUp.style.display = "block"
        signIn.style.color = "red"
        e.currentTarget.classList.add('active')
        signInTitle.classList.remove('active')
    }

    handleShowForm = () => {
        let formShow = document.getElementById('userShow');
        formShow.style.display = formShow.style.display === "none" ? "block" : "none"
    }

    handleHideForm = () => {
        let formShow = document.getElementById('userShow');
        formShow.style.display = formShow.style.display === "block" ? "none" : "block"
    }
    
    handlerClick = (e) => {
        let x = document.getElementsByClassName('nav__item');
        for (let i = 0; i < x.length; i++) {
          x[i].classList.remove('active');
        }
        if(e.target.offsetParent.children[0].className !== 'nav__item logo')
            { 
                e.currentTarget.classList.add('active')
            }
        };
    render(){
        return(
            <div className='user' id='user' >
                                <div className='toggle item-icon' onClick={(e) => this.handleShowForm(e)}>
                                    <FontAwesomeIcon icon={faUserCircle} />    
                                </div>
                                <div className='userShow' id='userShow'>
                                <div className="form" id="form">
                <div className="form-title">
                    <h3 className="signin col-6 active" id="signin-title" onClick={(e) => this.handleShowSignIn(e)}>Đăng nhập</h3>
                    <h3 className="signup col-6" id="signup-title" onClick={(e) => this.handleShowSignUp(e)}>Khách hàng mới</h3>
                </div>
                <div  className="content">
                    <div>
                        <div id="signin" className="form-content">
                            <p>Cảm ơn bạn đã quay lại</p>
                            <input type="text" placeholder="Vui lòng nhập số điện thoại"/>
                            <button>Tiếp tục</button>
                            <p>Bằng việc chọn tiếp tục, bạn đã đồng ý với <span>Điều khoản & Điều kiện</span> cùng <span>Chính sách bảo mật và chia sẻ thông tin</span> của CANIFA</p>
                        </div>
                        <div id="signup" className="form-content">
                            <p>Đăng ký để Canifa có cơ hội phụ vụ bạn tốt hơn</p>
                            <input type="text" placeholder="Vui lòng nhập số điện thoại"/>
                            <button>Tiếp tục</button>
                            <p>Bằng việc chọn tiếp tục, bạn đã đồng ý với <span>Điều khoản & Điều kiện</span> cùng <span>Chính sách bảo mật và chia sẻ thông tin</span> của CANIFA</p>
                        </div>
                        <button className="hide-form" onClick={() => this.handleHideForm()}>x</button>
                    </div>
                </div>
            </div>
                                </div>
                        </div>
            
        )
    }
}

export default LoginRegister