import React from 'react'
import ICard from './ICard'
import fox from '../images/fox.png'

function ICardGallery(){

    const student=[{
        image:(fox),
        roll:"3497",
        name:"Riya",
        branch:"CSE",

    },
    {
        image:(fox),
        roll:"3487",
        name:"Rita",
        branch:"CSE-AIML",

    },
    {
        image:(fox),
        roll:"3496",
        name:"Rose",
        branch:"CS",

    }
]
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

            {/*<ICard data={student}/>*/}
            {
                student.map((ele)=>(
                    <ICard data={ele} />

                ))
            }
    </div>
    )
}

export default ICardGallery