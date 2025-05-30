import styled from 'styled-components';

const Wrapper = styled.article`
  border-radius: var(--radii);
  background-color: var(--colors-ui-base);
  box-shadow: var(--shadow);
  cursor: pointer;
  overflow: hidden;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const CardImage = styled.img`
  width: 100%;
  height: 160px;
  object-fit: cover;
  object-position: center;
  aspect-ratio: 4/3;
`;

const CardBody = styled.div`
  padding: 1.5rem;
  flex-grow: 1;
`;

const CardTitle = styled.h3`
  margin: 0 0 1rem 0;
  font-size: var(--fs-md);
`;

const CardList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const CardListItem = styled.li`
  font-size: var(--fs-sm);
  line-height: 1.5;
  margin-bottom: 0.5rem;

  & > b {
    font-weight: var(--fw-bold);
  }
`;

export const Card = ({img, name, info=[], onClick}) => {
    return(
        <Wrapper onClick={onClick}>
            <CardImage src={img} alt={name}/>
            <CardBody>
                <CardTitle>{name}</CardTitle>
                <CardList>
                    {info.map(el => 
                        (
                            <CardListItem key={el.title}>
                                <b>{el.title}:</b> {el.description}
                            </CardListItem>
                        )
                    )}
                </CardList>
            </CardBody>
        </Wrapper>
    );
};