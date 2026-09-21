import React from 'react'
import ICard from './ICard'
import fox from '../images/fox.png'

function ICardGallery(){

    const student={
        image:(fox),
        roll:"3497",
        name:"Rahul",
        branch:"CSE",

    }
    return (
        <div style={{
      display: 'flex',
      justifyContent: 'space-evenly',
      alignItems: 'flex-start',
      gap: '20px',
      padding: '20px'
    }}>
            {/* <ICard roll="234" name="Sonam" branch="CSE" college="ABES" image={fox}/>
            <ICard roll="235" name="Sona" branch="CSE" college="ABES" /> */}

            <ICard data={student}/>
        </div>
    )
}

export default ICardGallery