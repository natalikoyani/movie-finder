import { Link } from 'react-router-dom';
import { NotFound } from './NotFoundPage.styled';

export default function NotFoundPage() {
  return (
    <NotFound>
      Sorry, this page doesn`t exist! Please click <Link to="/">here</Link> to
      return to Homepage
    </NotFound>
  );
}
