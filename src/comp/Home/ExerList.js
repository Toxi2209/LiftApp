const ExerciseList = ({ exercises, title, day }) => {
  return (
    <div className="exercise-list">
      <h2>{title}</h2>

      {exercises.filter(exercise => exercise.day === day)
        .map(exercise => (
          <div className="exercise-preview" key={exercise.id} >
            <h2>{exercise.title}</h2>
            <p> set  {exercise.set}</p>
            <p> {exercise.value} Kg</p>
          
        </div>
      ))}
    </div>

  );
}

export default ExerciseList;