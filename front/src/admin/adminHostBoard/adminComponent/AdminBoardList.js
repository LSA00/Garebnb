import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'
import SelectOneFile from '../../../commons/Files/SelectOneFile'
const AdminBoardList = (board) => {

    //상위 컴포넌트에서 받아온 데이터를 표시 

    const state = (BOARD_CONFIRM) => {
        switch (BOARD_CONFIRM) {
            case 0:
                return ('등록 요청')
                break;

            case 1:
                return ('등록 완료')
                break;

            case 2:
                return ('등록 거절')
                break;

            case 3:
                return ('수정 요청')
                break;

            case 4:
                return ('삭제 완료')
                break;

            case 5:
                return ('수정 취소')
                break;
        }
    }

    return (

        <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                {board[0] !== undefined && board.map((list) => {

                    console.log(list.URL)
                    return (
                        <div className="col" key={list.BOARD_NO}>
                            <div className="card shadow-sm">
                                
                                    <img
                                        className="d-block w-100"
                                        src={list.URL}
                                        alt=""
                                    />

                                <div className="card-body">
                                    <h4 className="card-text">
                                        {list.BOARD_TITLE}
                                    </h4>
                                    <figure class="text-end">
                                        <p>
                                            {state(list.BOARD_CONFIRM)}
                                        </p>
                                        <p>
                                            {list.BOARD_HOST_ID}
                                        </p>
                                    </figure>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="btn-group">
                                            <Link to='Detail' state={list}>
                                                <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                                            </Link>
                                        </div>
                                        <small className="text-muted">{list.BOARD_SCORE}</small>
                                    </div>
                                </div>
                            </div>
                        </div>

                    )
                })}

                {/* example */}

            </div>
        </div>

    )
}

export default AdminBoardList