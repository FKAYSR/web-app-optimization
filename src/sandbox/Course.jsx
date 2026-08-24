
const course = {
    title: "React",
    teacher: "RACE",
    duration: "1h 30min",
    isActive: false
}

export default function Course() {
    return (
      <article>
        <h2>{course.title}</h2>
        <p>{course.teacher}</p>
        <p>{course.duration}</p>
        <p>{course.isActive ? "Igang" : "Ikke igang"}</p>
      </article>
    );
}