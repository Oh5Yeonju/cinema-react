import React from 'react'
import './Header.css'

export default function Header(props) {
    return (
        <header>
            <h1>상영 영화 목록</h1>
            <ul>
                <li onClick={props.changeCateBtn}>
                    <button>현재상영중</button>
                </li>
                <li onClick={props.changeCateBtn}>
                    <button>상영예정작</button>
                </li>
                <li onClick={props.changeCateBtn}>
                    <button>카테고리</button>
                </li>
            </ul>
        </header>
    )
}
