import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Topic = () => {
  //員工總數
  const [employeeid, setemployeeid] = useState(0);
  //總評價
  const [reply, setreply] = useState(0);
  //完成件數
  const [ornumber, setornumber] = useState(0);

  useEffect(() => {
    axios.get('http://localhost:4107/total/as')
      .then((res) => {
        setemployeeid(res.data[0].count)
        setreply(res.data[1].count)
        setornumber(res.data[2].count)
      })
      .catch((err) => {
        console.error('no', err);
      });
  }, []);


  return (

    <div className="Topic-team">
      <div className="dr">
        <div className="row">
          <div className="col-md-4 col-lg-2"> <b>{ornumber}
          </b><p>完成案件<br/>Customers</p></div>
          <div className="col-md-2 col-lg-2"><h1>|</h1></div>
          <div className="col-md-4 col-lg-2"><b>{employeeid}</b><p>團隊成員<br/>Team Members</p></div>
          <div className="col-md-2 col-lg-2"><h1>|</h1></div>
          <div className="col col-lg-2"><b>{reply}</b><p>評價<br />Assess</p></div>
          <div className="col-2"></div>
        </div>
      </div>

      <div className="reserve container">
        <p>立即了解預約</p>
        心動不如馬上行動，趕快讓浣熊管家陪伴您有個乾淨的家 !
        <br />
        <br />
        <br />
        <a href="/book"><button className="inp">立即預約</button></a>
      </div>
    </div>
  );
};

export default Topic;