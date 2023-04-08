import React from 'react'
import { Link } from 'react-router-dom';
import Logo from '../assest/images/logo.svg';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faStore } from '@fortawesome/free-solid-svg-icons';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { faHand } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Navbar = () => {
  return (
    <header>
        <nav className='navbar container'>
            <div className='navbar__links'>
                <span>
                    <Link to='/'> 
                        <img src={Logo} />
                    </Link>
                </span>

                <span>
                    <Link to='/nu'>
                        NỮ
                        <div>
                            <ul className='classify'>
                                <li>Sản phẩm mới</li>
                                <li>Giá tốt</li>
                                <li>BST Gia đình</li>
                            </ul>
                            <ul className='categaries'>
                                <li className='item'>
                                    <p>Áo</p>
                                    <ul className='item__list'>
                                        <li>Áo phông</li>
                                        <li>Áo polo</li>
                                        <li>Áo ba lỗ</li>
                                        <li>Áo kiểu</li>
                                        <li>Áo sơ mi</li>
                                        <li>Áo phông dài tay</li>
                                        <li>Áo len</li>
                                        <li>Áo nỉ</li>
                                        <li>Áo nỉ có lông</li>
                                    </ul>
                                </li>
                                <li className='item'>
                                    <p>Quần</p>
                                    <ul className='item__list'>
                                        <li>Quần shorts</li>
                                        <li>Quần jeans</li>
                                        <li>Quần vải</li>
                                        <li>Quần nỉ</li>
                                        <li>Quàn khaki</li>
                                    </ul>
                                </li>
                                <li className='item'>
                                    <p>Váy</p>
                                    <ul className='item__list'>
                                        <li>Váy liên thân</li>
                                        <li>Chân váy</li>
                                    </ul>
                                </li>
                                <li className='item'>
                                    <p>Đồ mặc ngoài</p>
                                    <ul className='item__list'>
                                        <li>Chống nắng</li>
                                        <li>Áo khoác ngắn</li>
                                        <li>Áo khoác gió</li>
                                        <li>Áo khoác chăn bông</li>
                                        <li>Áo khoác lông vũ</li>
                                    </ul>
                                </li>
                                <li className='item'>
                                    <p>Đồ mặc nhà</p>
                                    <ul className='item__list'>
                                        <li>Bộ mặc nhà</li>
                                        <li>Quần mặc nhà</li>
                                        <li>Áo mặc nhà</li>
                                    </ul>
                                </li>
                                <li className='item'>
                                    <p>Đồ mặc trong</p>
                                    <ul className='item__list'>
                                        <li>Đồ lót</li>
                                        <li>Giữ nhiệt</li>
                                        <li>Áo mặc trong</li>
                                    </ul>
                                </li>
                                <li className='item'>
                                    <p>Phụ kiện</p>
                                    <ul className='item__list'>
                                        <li>Phụ kiện</li>
                                        <li>Đồ dùng cá nhân</li>
                                    </ul>
                                </li>
                            
                            </ul>
                        </div>
                    </Link>
                    
                </span>

                <span>
                    <Link to='/nam'>
                        NAM
                        <div>
                            <ul className='classify'>
                                <li>Sản phẩm mới</li>
                                <li>Giá tốt</li>
                                <li>BST Gia đình</li>
                            </ul>
                            <ul className='categaries'>
                                <li className='item'>
                                    <p>Áo</p>
                                    <ul className='item__list'>
                                        <li>Áo phông</li>
                                        <li>Áo polo</li>
                                        <li>Áo sơ mi</li>
                                        <li>Áo ba lỗ</li>
                                        <li>Áo len</li>
                                        <li>Áo nỉ</li>
                                        <li>Áo nỉ có mũ</li>
                                        <li>Áo dài tay</li>
                                    </ul>
                                </li>
                                <li className='item'>
                                    <p>Quần</p>
                                    <ul className='item__list'>
                                        <li>Quần shorts</li>
                                        <li>Quần jeans</li>
                                        <li>Quần vải</li>
                                        <li>Quần nỉ</li>
                                        <li>Quàn khaki</li>
                                    </ul>
                                </li>
                                <li className='item'>
                                    <p>Đồ mặc ngoài</p>
                                    <ul className='item__list'>
                                        <li>Chống nắng</li>
                                        <li>Áo khoác ngắn</li>
                                        <li>Áo khoác gió</li>
                                        <li>Áo khoác chăn bông</li>
                                        <li>Áo khoác lông vũ</li>
                                    </ul>
                                </li>
                                <li className='item'>
                                    <p>Đồ mặc nhà</p>
                                    <ul className='item__list'>
                                        <li>Bộ mặc nhà</li>
                                        <li>Quần mặc nhà</li>
                                        <li>Áo mặc nhà</li>
                                    </ul>
                                </li>
                                <li className='item'>
                                    <p>Đồ mặc trong</p>
                                    <ul className='item__list'>
                                        <li>Đồ lót nam</li>
                                        <li>Giữ nhiệt</li>
                                        <li>Áo mặc trong</li>
                                    </ul>
                                </li>
                                <li className='item'>
                                    <p>Phụ kiện</p>
                                    <ul className='item__list'>
                                        <li>Phụ kiện</li>
                                        <li>Đồ dùng cá nhân</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </Link>
                    
                </span>

                <span>
                    <Link to='/treem'>
                        TRẺ EM
                        <div>
                            <ul className='classify'>
                                <li>Sản phẩm mới</li>
                                <li>Giá tốt</li>
                                <li>BST Gia đình</li>
                            </ul>
                            <ul className='categaries'>
                                <li className='item'>
                                    <p>Áo</p>
                                    <ul className='item__list'>
                                        <li>Áo phông</li>
                                        <li>Áo polo</li>
                                        <li>Áo ba lỗ</li>
                                        <li>Áo kiểu</li>
                                        <li>Áo sơ mi</li>
                                        <li>Áo phông dài tay</li>
                                        <li>Áo len</li>
                                        <li>Áo nỉ</li>
                                        <li>Áo nỉ có lông</li>
                                    </ul>
                                </li>
                                <li className='item'>
                                    <p>Quần</p>
                                    <ul className='item__list'>
                                        <li>Quần shorts</li>
                                        <li>Quần jeans</li>
                                        <li>Quần vải</li>
                                        <li>Quần nỉ</li>
                                        <li>Quàn khaki</li>
                                    </ul>
                                </li>
                                <li className='item'>
                                    <p>Váy</p>
                                    <ul className='item__list'>
                                        <li>Váy liên thân</li>
                                        <li>Chân váy</li>
                                    </ul>
                                </li>
                                <li className='item'>
                                    <p>Đồ mặc ngoài</p>
                                    <ul className='item__list'>
                                        <li>Chống nắng</li>
                                        <li>Áo khoác ngắn</li>
                                        <li>Áo khoác gió</li>
                                        <li>Áo khoác chăn bông</li>
                                        <li>Áo khoác lông vũ</li>
                                    </ul>
                                </li>
                                <li className='item'>
                                    <p>Đồ mặc nhà</p>
                                    <ul className='item__list'>
                                        <li>Bộ mặc nhà</li>
                                        <li>Quần mặc nhà</li>
                                        <li>Áo mặc nhà</li>
                                    </ul>
                                </li>
                                <li className='item'>
                                    <p>Đồ mặc trong</p>
                                    <ul className='item__list'>
                                        <li>Đồ lót</li>
                                        <li>Giữ nhiệt</li>
                                        <li>Áo mặc trong</li>
                                    </ul>
                                </li>
                                <li className='item'>
                                    <p>Phụ kiện</p>
                                    <ul className='item__list'>
                                        <li>Phụ kiện</li>
                                        <li>Đồ dùng cá nhân</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </Link> 
                </span>

                <span>
                    <Link to='/giatot'>GIÁ TỐT</Link>
                </span>

                <span>
                    <Link to='/moi'>MỚI</Link>
                </span>

                <span>
                    <Link to='/canifaz'>CANIFA Z</Link>
                </span>
            </div>
            <div className='navbar__search'>
                <input type="text" placeholder='Bạn cần tìm gì...'/>
            </div>
            <div className='navbar__group-icon'>
                <div>
                    <FontAwesomeIcon icon={faStore} />
                </div>
                <div>
                    <FontAwesomeIcon icon={faHeart} />
                </div>
                <div>
                    <FontAwesomeIcon icon={faUserCircle} />
                </div>
                <div>
                    <FontAwesomeIcon icon={faBagShopping} />
                </div>
                <div>
                <FontAwesomeIcon icon={faHand} />
                </div>
            </div>
        </nav>
    </header>
  )
}


