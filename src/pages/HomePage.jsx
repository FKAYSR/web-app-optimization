import Teacher from "../sandbox/Teacher";
import Welcome from "../sandbox/Welcome";
import Greeting from "../sandbox/Greeting";
import Button from "../sandbox/Button";
import Course from "../sandbox/Course";
import StudentCard from "../sandbox/StudentCard";
import CourseCard from "../sandbox/CourseCard";
import NameChanger from "../sandbox/NameChanger";

const name = "Anna";
const education = "Multimedia Design";
const mail = "anna@example.com";

const student = {
  name,
  education,
  mail
};

export default function HomePage() {
  return (
    <>
      <header>
        <h1>Home</h1>
      </header>
      <main>
        <Teacher />
        <p>Welcome to the home page...</p>
        <Welcome />
        <Greeting name="Kejser" />
        <Greeting name="Kejser" />
        <Greeting name="Kejser" />
        <Button />
        <Course />
        <StudentCard student={student} />
        <CourseCard title="Figma" teacher="MNOR" duration="30min" />
        <NameChanger />
      </main>
    </>
  );
}
