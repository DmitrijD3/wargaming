import styled, { css } from 'styled-components';
import { colors, fonts, sizes } from '../../theme/variables';

const CommonStyle = css`
  margin: ${props => props.hasSpacings ? `${sizes.spacing18} 0` : `0 0 ${sizes.spacing5}`} ;
`;

const ArticleContainer = styled.div`
  max-width: 840px;
  margin: 0 auto;
  font-size: ${fonts.small};
  line-height: 150%;
  color: ${colors.grey600};
`;

const StyledTitle = styled.h1`
  font-weight: 500;
  font-size: ${fonts.large}; 
  line-height: 150%;
  margin: 0 0 20px;
`;

const StyledParagraph = styled.p`
  ${CommonStyle}
  ${props => props.dark && `
    color: ${colors.dark100};
  `}
`;

const StyledList = styled.ul`
  ${CommonStyle}
  padding: 0 0 0 24px;
`;

const BoldText = styled.span`
  font-weight: 500;
`;

const ArticleContent = styled.div`
  column-count: 2;
  column-gap: 58px;
  column-rule: 1px solid ${colors.grey700};

  @media (max-width: ${sizes.pageBrake}) {
    column-count: 1;
  }
`;

export const Article = () => (
  <ArticleContainer>
    <StyledTitle>Почему не рассматриваются заявки с жалобами на нарушение Правил игры?</StyledTitle>
    <ArticleContent>
      <StyledParagraph>После введения функционала «Пожаловаться» не рассматриваются заявки, созданные в Центр поддержки пользователей о нарушении Правил игры по следующим пунктам:</StyledParagraph>
      <StyledParagraph dark><BoldText>1.</BoldText> «Оскорбления и провокации»</StyledParagraph>
      <StyledParagraph>В данный пункт входит:</StyledParagraph>
      <StyledList>
        <li>использование ненормативной лексики и оскорбление собеседников, применение унизительных кличек и прозвищ по расовому, национальному, религиозному либо половому признаку, а также провоцирование собеседника к их использованию;</li>
        <li>клевета, размещение заведомо ложной информации об Игре, Администрации, Модераторах или Пользователях;</li>
        <li>угрозы реальной расправы в отношенииили представителей Администрации Проекта. Все виды соглашения.</li>
      </StyledList>
      <StyledParagraph><BoldText>2.</BoldText> «Неинформативные сообщения»</StyledParagraph>
      <StyledParagraph>В данный пункт входит:</StyledParagraph>
      <StyledList>
        <li>размещение информации (сообщения, фразы, символов и пр.), направленной на отвлечение Пользователей от темы беседы (флуд);</li>
        <li>все виды рекламных сообщений, в частности ссылки на интернет-ресурсы.</li>
      </StyledList>
      <StyledParagraph hasSpacings>Также не рассматриваются следующие заявки, созданные в Центр поддержки пользователей о нарушении Правил игры:</StyledParagraph>
      <StyledParagraph><BoldText>3.</BoldText> «Раскрытие позиций союзников»</StyledParagraph>
      <StyledParagraph><BoldText>4.</BoldText> «Выталкивание союзника»</StyledParagraph>
      <StyledParagraph><BoldText>5.</BoldText> «Неспортивное поведение»</StyledParagraph>
      <StyledParagraph><BoldText>6.</BoldText> «Повреждение союзников»</StyledParagraph>
    </ArticleContent>
    
  </ArticleContainer>
);
