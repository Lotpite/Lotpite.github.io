import React from 'react';
import logo from '../img/photo.jpg';
import './sidebar-logo.css';

const SidebarLogo = ({data}) => {
    const {alt, width, height} = data;
    return (
        <img src={logo}
        alt={alt}
        width={width}
        height={height}
        className="my-photo"></img>
    )
}

export default SidebarLogo;