import React from 'react'
import styled from 'styled-components'
import './CardListItem.css'

const CardItemBtn = styled.button`
    width: 50%;
    padding: 10px 0;
    background-color: #cfcfcf;
`

export default function CardListItem({ imageList }) {
    return (
        <ul className="card-list">
            {imageList.map((item) => {
                return (
                    <li  className="card-list-item" key={ item.id }>
                        <section>
                            <img src= { item.download_url } alt={`영화포스터${ item.id }`}/>
                            <div className="card-list-text">
                                <h3>{ item.author }</h3>
                                <ul>
                                    <li>
                                        <span>개요</span>
                                        <span>판타지</span>
                                    </li>
                                    <li>
                                        <span>평점</span>
                                        <span>9.05</span>
                                    </li>
                                    <li>
                                        <span>개봉</span>
                                        <time>2021.03.27</time>
                                    </li>
                                    <li>
                                        <span>출연</span>
                                        <span>주인공, 주인공, 주인공, 주인공, 주인공, 주인공</span>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <CardItemBtn type="button">예매하기</CardItemBtn>
                                <CardItemBtn type="button">예고편</CardItemBtn>
                            </div>
                        </section>
                    </li>
                )

            })}
        </ul>
    )
}
