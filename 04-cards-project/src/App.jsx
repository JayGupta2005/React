import React from 'react'
import "./App.css"
import {Bookmark, Car} from 'lucide-react'
import Card from './components/Card.jsx'
const App = () => {
  const peopleData = [
  {
    title: "Ram Dulari",
    date: "March 12, 2024",
    description: "A hardworking individual who loves gardening and helping others in the community."
  },
  {
    title: "Radhika Moti",
    date: "April 5, 2024",
    description: "Passionate about art and design, always exploring new creative ideas."
  },
  {
    title: "RamaNath",
    date: "May 18, 2024",
    description: "A tech enthusiast who enjoys coding and building innovative projects."
  },
  {
    title: "Suresh Kumar",
    date: "June 10, 2024",
    description: "Loves traveling and discovering new cultures and traditions."
  },
  {
    title: "Anjali Sharma",
    date: "July 2, 2024",
    description: "Dedicated student with a strong interest in science and research."
  },
  {
    title: "Vikram Singh",
    date: "August 14, 2024",
    description: "Fitness lover who motivates others to stay healthy and active."
  },
  {
    title: "Neha Gupta",
    date: "September 1, 2024",
    description: "Enjoys reading books and writing blogs about life experiences."
  },
  {
    title: "Amit Verma",
    date: "October 22, 2024",
    description: "Entrepreneurial mindset with a passion for startups and business growth."
  },
  {
    title: "Pooja Yadav",
    date: "November 9, 2024",
    description: "Music lover who spends time learning instruments and singing."
  },
  {
    title: "Rahul Mehta",
    date: "December 15, 2024",
    description: "Sports enthusiast who enjoys playing cricket and watching matches."
  }
];
  return (
    <div className='parent'>
      <div className="card">
        { peopleData.map(function(elem, idx){
          return <div key={idx}>
            <Card title = {elem.title} date={elem.date} description={elem.description}/>
          </div>
        }) }
      </div>
      
    </div>
  )
}

export default App
