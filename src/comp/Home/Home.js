import { useEffect, useState } from "react";
import ExerciseList from "./ExerList"
import "./ExerList.css"


Date.prototype.getWeek = function () {
  var date = new Date(this.getTime());
  date.setHours(0, 0, 0, 0);
  // Thursday in current week decides the year.
  date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
  // January 4 is always in week 1.
  var week1 = new Date(date.getFullYear(), 0, 4);
  // Adjust to Thursday in week 1 and count number of weeks from date to week1.
  return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000
    - 3 + (week1.getDay() + 6) % 7) / 7);
}



var date = new Date;
let week = date.getWeek();
let day = Date().toLocaleString().split(" ") [0];


const Home = () => {

  const [exercises, setExercises] = useState(null)
  const [isPending, setIsPending] = useState(true);
  const [error, setError] =  useState(null);


  useEffect(() => {
    fetch("http://localhost:8000/exercises")
      .then(res => {
        if(!res.ok) {
          throw Error("Could not fetch data for that resource")
        }
        return res.json();
      })
      .then(data => {
        setExercises(data);
        setIsPending(false);
        setError(null);
      })
      .catch(err => {
        setIsPending(false);
        setError(err.message);
      })
  }, [])

  return (
    <div className="home">
      { error && <div>error</div>}
      { isPending && <div>Loading...</div>}
      {exercises && <ExerciseList exercises={exercises} title={"All exercises for  "  + day + "day"} day={day} />}
    </div>
  );
}

export default Home;