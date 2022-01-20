import { Link, useNavigate } from 'react-router-dom';

// Please note:
// <Link to="/products/p1" ... could also be written as
// <Link to="p1" ... with React Router v6

const Products = () => {
  // const navigate = useNavigate();
  //  navigate('/welcome', {replace: true});  // would be done with useEffect in real project
  // navigate(-1); // go back 1 prev page
  // navigate(-2); // go back 2 prev page
  // navigate(1); // go forward 1 page

  return (
    <section>
      <h1>The Products Page</h1>
      <ul>
        <li>
          <Link to="/products/p1">A Book</Link>
        </li>
        <li>
          <Link to="/products/p2">A Carpet</Link>
        </li>
        <li>
          <Link to="/products/p3">An Online Course</Link>
        </li>
      </ul>
    </section>
  );
};

export default Products;
