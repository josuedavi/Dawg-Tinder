
import React, {useEffect, useState} from 'react';
import TinderCard from 'react-tinder-card';
import axios from "axios";
import '../assets/TinderCards.css';
import { createClient } from 'pexels';
import { Card } from 'react-bootstrap';



const options = {
  method: 'GET',
  url: 'https://dog.ceo/api/breeds/image/random/3'
  
};
let path = '';



//import response from 'response';

function TinderCards() {
    
    const [people, setPeople] = useState([]);  
    const [obj, setObj] = useState([]);
  
    useEffect(() => {
        data();
      

    }, []);

    const data = async () => {

        try{
            const res = await axios.get('https://dog.ceo/api/breeds/image/random/50');
           // setPeople(res.data.message);
            //console.log(res.request);
            

            let tmpArray = []
            for (var i = 0; i < res.data.message.length; i++) {
                tmpArray.push(res.data.message[i])
             
            }
            console.log(res);
           
         
   setPeople(tmpArray);
           
          //  console.log(tmpArray);
          
        }catch(err) {
            console.log(err.message);
        }


    
    }

 
        
     
      
    
   
   
    const swiped = (people) => {
        try{
             console.log(people.toString().match("/breeds/(.*)/")[1]); 
        }catch(e) {
            console.log(e);
        }
       
       // setLastDirection(direction);
    }
    const outOfFrame = (people) => {
       // console.log(""+path[1].match("/breeds/(.*)/")[1] + "left the screen");
        try{
            console.log(people.toString().match("/breeds/(.*)/")[1] + "left the screen"); 
            
       }catch(e) {
           console.log(e);
       }
      
    }
    return (
       
            <div className="tinderCards">
      <div className="tinderCards__cardContainer">
        {people.map((person, i) => (
                        
                <TinderCard
                    className="swipe"
                    key={i}
                    preventSwipe={["up", "down"]}
                    onSwipe={() => swiped( people[i])}
                    onCardLeftScreen={() => outOfFrame(people[i])}
                >
                    <div style={{ backgroundImage: 'url(' + people[i] + ')' }} className='card'>
                    <h3>{person.name}</h3>
                    </div>
                </TinderCard>

                ))}
      </div>

         
        </div>
       
                   
    );
}


export default TinderCards;