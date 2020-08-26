import React from 'react';
import icon from "../assets/prayericonash.png";

type Props = {
    enabled: boolean,
    onClick: () => void,
    size: string
}


const PrayerOrb = ({ enabled, onClick, size } : Props) => (
    <div
         style={{
             backgroundImage: 'linear-gradient(-45deg, rgb(1 1 2), rgb(144 116 195))',
             boxShadow: !enabled ? 'inset 0 0 25px black' : 'inset 0 0 25px white',
             borderRadius: '50%',
             height: size,
             width: size,
             overflow: 'hidden',
             display: 'grid',
             placeItems: 'center'
         }}

         onClick={onClick}
    >
        <div
            style={{
                backgroundImage: `url(${icon})`,
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                width: '80%',
                height: '80%',
                opacity: !enabled ? '80%' : '100%'
            }}
        />
    </div>
)

export { PrayerOrb }
