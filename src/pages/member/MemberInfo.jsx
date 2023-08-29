import React from 'react';
import "./member.css"
const Memberinfo = () => {
    return (
        <div>
            <div className='position'>
                首頁
                /
                會員管理
                /
                會員資料
            </div>

            <div className='Container'>
                <h3 className='orderh3'>會員資料</h3>
                <div>
                    <table className='tablecontainer '>

                        <thead>
                            <tr className='memberth'>
                                <th>編號</th>
                                <th>姓名</th>
                                <th>電話</th>
                                <th>Email</th>
                            </tr>
                        </thead>

                        <tbody className='memtbody'>
                            <tr>

                                <td> A01</td>
                                <td>邱小如</td>
                                <td>0923456780</td>
                                <td>1233@gmail.com</td>

                            </tr>
                            <tr>
                                <td>A02</td>
                                <td>邱小如</td>
                                <td>0923456780</td>
                                <td>1233@gmail.com</td>
                            </tr>
                            <tr>
                                <td>A03</td>
                                <td>邱小如</td>
                                <td>0923456780</td>
                                <td>1233@gmail.com</td>
                            </tr>
                            <tr>
                                <td>A04</td>
                                <td>邱小如</td>
                                <td>0923456780</td>
                                <td>1233@gmail.com</td>
                            </tr>
                        </tbody>
                    </table>

                </div>
                <div className='btncontain memberbtn' >
                    <button >上一頁</button>
                    <button >下一頁</button>
                </div>
            </div>
        </div >


    )
}

export default Memberinfo;