import { Container } from "./styles";

import { AiOutlineStar, AiTwotoneStar} from 'react-icons/ai';

export function ButtonStar({rating, ...rest}) {

  let stars = [];

  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<AiTwotoneStar key={i} />);
    } else {
      stars.push(<AiOutlineStar key={i} />);
    }
  }

  return (
    <Container 
      type="button"
      {...rest}
    >
        {stars}
    
    </Container>
  );
}