import { useParams } from 'react-router-dom';

export default function SectionPage() {
  const { id } = useParams();

  return (
    <div>
      <h1>صفحه بخش شماره {id}</h1>
    </div>
  );
}
