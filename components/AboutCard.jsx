import React from 'react'
import * as ReactIcons from 'react-icons/io'

const AboutCard = ({ icon, title, subtitle }) => {
    const Icon = ReactIcons[icon]
    return (
        <div className="max-w-xs h-96 p-10 mt-5 flex flex-col justify-between bg-orange-500 text-white rounded-xl">
            <Icon className="text-9xl self-center" />
            <h1 className="text-2xl font-bold">{title}</h1>
            <p>{subtitle}</p>
        </div>
    )
}

export default AboutCard
