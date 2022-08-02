import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
//import {useLocation} from 'react-router-dom';
//import QueryString from 'qs';
// import Table from 'react-bootstrap/Table';
// import Alert from 'react-bootstrap/Alert';
import './detail.css';


const DetailQna = () => {
    const {QNA_IDX} = useParams();

    const [detail, setDetail] = useState([]);
    useEffect(() => {
    axios({ //통신으로 정보 받아오기
            method : 'post' ,
            url : '/GareBnB/mypage/memDetailQna.do' ,
            contentType:"application/json;charset=UTF-8",
            params : {
                QNA_IDX : QNA_IDX
            }
        }).then(Response => {
            console.log(Response.data);
            setDetail(Response.data);
            //응답이 들어왔을 때 SetQnaList 함수를 사용해서 
            //response의 data를 detail의 정보로 변경
        });
      },[]);


      const navigate = useNavigate();
       
        


  return (
    <div className='container'>
      <div className='top'>
          <h5>상세보기</h5>
        <hr/>

        <div className='title'>
          <h2>{detail.QNA_TITLE}</h2>
        </div>

        <div className='row'>
          <div className='col-lg-10'>{detail.QNA_ID}</div>
          <div className='col-lg-2'>{detail.QNA_DATE}</div>
        </div>
      </div>

      <hr/>
      <div class="con mt-3">
        <label className="content mt-2 pl-4" >
          {detail.QNA_CONTENT}
        </label>
      </div>

      <hr/>

      <p>문의답변</p>
      <div class="com mt-1">
        <label className="comment mt-2" >
          {detail.QNA_COMMENT}
        </label>
      </div>
      
      {/* 
                  상태 : {detail.QNA_STATE}<br/>
                  번호 : {detail.QNA_IDX}<br/> */}
      <br/>

      <div className='col-lg-12 text-lg-center'>
        <button type="button" class="btn btn-success"  
        onClick={(e)=>{ e.preventDefault(); navigate(-1); }}>확인</button>
      </div> 
          
    </div>          
  );
};

export default DetailQna;