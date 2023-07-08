import { CurriculumType } from '../types/CurriculumType';

type CurriculumProps = {
  candidateInfo: CurriculumType | null;
};

function Curriculum({ candidateInfo }: CurriculumProps) {
  return (
    <>
      {candidateInfo && (
        <>
          <h1>{candidateInfo.name}</h1>
          <h2>{candidateInfo.email}</h2>
          <h3>Escolaridade: {candidateInfo.schooling}</h3>
          <p>{candidateInfo.resume}</p>
        </>
      )}
    </>
  );
}

export default Curriculum;
