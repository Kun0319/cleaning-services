import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Memberscore from './Memberscore';


const Memmodal = () => {

    const [modal, setmodal] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:4107/total/modal')
            .then((res) => {
                setmodal(res.data);
            })
            .catch((err) => {
                console.error('no', err);
            });
    }, []);
    


    return (
        <div>
        {modal.map((mod, index) => (
          <div key={index}>
            <Memberscore
              name={mod.employeename}
              img={mod.photo}
              reply={mod.reply}
              username={mod.orname}
              Level={mod.total_ratings}
              efficiency={mod.efficiency}
              clean={mod.clean}
              careful={mod.careful}
              manner={mod.manner}
              ornumber={mod.ornumber}
              index={index}
            />
          </div>
        ))}
      </div>
    );
};

export default Memmodal;