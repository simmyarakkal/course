import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function Course() {
    const arr=[
        {
        id:1,Title:"MSC",Img:"https://th.bing.com/th/id/OIP.b_etQTsPE6hoSqg6pD0lawHaE8?w=260&h=180&c=7&r=0&o=7&cb=ucfimg2&pid=1.7&rm=3&ucfimg=1",text:"Coursera's reputation for high-quality content, paired with its flexible structure, made it possible for me to dive into data analytics while managing family, health, and everyday life."
    },
        {
        id:2,Title:"MCA",Img:"https://tse3.mm.bing.net/th/id/OIP.6pyhEYHoEzhJnrulQmhpuwHaHa?cb=ucfimg2&pid=ImgDet&ucfimg=1&w=203&h=203&c=7&o=7&rm=3",text:"Coursera's reputation for high-quality content, paired with its flexible structure, made it possible for me to dive into data analytics while managing family, health, and everyday life."
    },
        {
        id:1,Title:"MBA",Img:"https://media.istockphoto.com/id/1414994965/vector/online-courses-symbols-chart-background.jpg?s=1024x1024&w=is&k=20&c=EEhbDqvupIPFMqD6FIK8jP9P8VQp9BsvBKwUHgjxXa0=",text:"Coursera's reputation for high-quality content, paired with its flexible structure, made it possible for me to dive into data analytics while managing family, health, and everyday life."
    },
    {
        id:1,Title:"MBA",Img:"https://img.freepik.com/premium-vector/online-courses-little-people-laptop_81534-1208.jpg",text:"Coursera's reputation for high-quality content, paired with its flexible structure, made it possible for me to dive into data analytics while managing family, health, and everyday life."
    }
]
  return (
    <div>
        <h3 className='text-center bg-dark text-light'> Courses </h3>
        <div className='row m-5' >
        {
            arr.map((i,index)=>
            ( <div className='col-3 ' id={i.id}>
<Card style={{ width: '100%' }} className='shadow' >
      <Card.Img variant="top" style={{width:"100%",height:200}} src={i.Img} />
      <Card.Body>
        <Card.Title>{i.Title} </Card.Title>
        <Card.Text>
         {i.text} 
        </Card.Text>
        <Button variant="primary">More</Button>
      </Card.Body>
    </Card>
    </div>
            ))
        }
    
    </div>
    </div>
  )
}

export default Course