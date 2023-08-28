import React from 'react'
import SidebarAdmin from "../components/dashboard/SidebarAdmin"
import Narbar from '../components/narbar'
import { Outlet } from 'react-router-dom'

export default function Dashboard() {
    return (
        <div className='container'>
            <Narbar />
            <div className='row'>
                <div className='col-12 col-lg-3'>
                    <SidebarAdmin />
                </div>
                <div className='col-12 col-lg-9'>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}