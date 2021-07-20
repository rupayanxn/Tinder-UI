import React, {useState} from 'react'
import TinderCard from 'react-tinder-card';
import "./TinderCards.css";

function TinderCards() {
    const [people, setProple] = useState([
        {
            name: "Elon Musk",
            url: 'https://www.incimages.com/uploaded_files/image/1920x1080/getty_1130598318_411195.jpg'
            
        },
        {
            name: "Jeff Bezos",
            //url: "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTY2NzA3ODE3OTgwMzcyMjYw/jeff-bezos-andrew-harrer_bloomberg-via-getty-images.jpg"
            url : "https://content.fortune.com/wp-content/uploads/2020/02/GettyImages-1078542150.jpg?resize=1000,666"
        }
    ])

    const swiped = (direction,nameTodelete) => {
        console.log("removing:"+nameTodelete);
        //setLastDirection(direction);
    };

    const outOfFrame = (name) => {
        console.log(name+" left the screen");
    };




    return (
        <div className="tinderCards">
            <div className="tinderCard_cardContainer">
            {people.map((person) => (
                <TinderCard
                className="swipe"
                keys={person.name}
                preventSwipe={["up","down"]}
                onSwipe = {(dir) => swiped(dir,person.name)}
                onCardLeftScreen={() => outOfFrame(person.name)}
                >
                    <div 
                        style={{ backgroundImage: `url(${person.url})`}}

                        className="card"
                    >
                        <h3>{person.name}</h3>
                    </div>

                </TinderCard>
            ))}
            </div>

            
        </div>
    )
}

export default TinderCards
 