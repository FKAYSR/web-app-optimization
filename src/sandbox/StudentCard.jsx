
export default function StudentCard({ student }) {
    return (
      <article>
        <h2>{student.name}</h2>
        <p>{student.mail}</p>
        <p>{student.education}</p>
      </article>
    );
}