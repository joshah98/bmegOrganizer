import React from 'react'
import * as AiIcons from "react-icons/ai"
import { RiVirusLine } from "react-icons/ri"
import { BiCodeCurly } from "react-icons/bi"
import * as GiIcons from "react-icons/gi"

export const sidebarData=[
    {
        title: 'General',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        className: 'nav-text'
    },
    {
        title: 'Informatics',
        path: '/bioinformatics',
        icon: <BiCodeCurly />,
        className: 'nav-text'
    },
    {
        title: 'Mechanics',
        path: '/biomechanics',
        icon: <GiIcons.GiRobotGrab />,
        className: 'nav-text'
    },
    {
        title: 'Sys + sig',
        path: '/sysandsig',
        icon: <GiIcons.GiElectricalResistance />,
        className: 'nav-text'
    },
    {
        title: 'Cellular',
        path: '/cellular',
        icon: <RiVirusLine />,
        className: 'nav-text'
    }
]