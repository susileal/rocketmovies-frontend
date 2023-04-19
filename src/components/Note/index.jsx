import { Container } from "./styles";
import { Link } from 'react-router-dom';


import { Tag } from "../Tag"
import { ButtonStar } from "../ButtonStar";


export function Note({ data, ...rest }) {
  return (
    <Container {...rest}>

      <Link to="/details/:id/">
      <h1> {data.title} </h1>
      </Link>


      <ButtonStar rating={data.rating}/>

      <p> {data.text} </p>
      <p> {data.description} </p>

      {
        data.tags &&
        <footer>
          {
            data.tags.map(tag => <Tag key={tag.id} title={tag.name} />)
          }
        </footer>
      }
    </Container>
  );
}