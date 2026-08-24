export default function CourseCard({ title, teacher, duration }) {
  return (
    <article>
      <h2>{title}</h2>
      <p>{teacher}</p>
      <p>{duration}</p>
    </article>
  );
}