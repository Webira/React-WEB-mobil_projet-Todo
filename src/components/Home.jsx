import { useStore } from '@nanostores/react'
//import { Link } from 'react-router-dom'
import { HomeStore } from '../stores/Home'
import {
  BottomNav,
  BottomNavIcon,
  ButtonIcon,
  ButtonLabel,
  Card,
  CardContainer,
  CardLabel,
  CardUserContainer,
  CardUserIcon,
  CardUserLabel,
  CardUserLabelContainer,
  CardUserLabelUsername,
  GreenButton,
  MainContainer,
  MainTitle,
} from '../style/Home'
import { ButtonContainer } from '../style/Registration'

/**
 * Composant affichant l'écran d'accueil
 */
export default function Home() {
  // On récupére l'état contenue dans le login store: >-- const stateH = useStore(HomeStore)
  // Récupération des todos depuis le store de la page d'accueil
  const { todos } = useStore(HomeStore)

  return (
    <MainContainer>
      {/* Titre de la page d'accueil */}
      <MainTitle>Mes Todos</MainTitle>

      {/* Container pour les cartes */}
      <CardContainer>
        {/* Affiche tout les todos */}
        {todos.map(todo => (
          // Affiche une carte d'une chose à faire
          <Card key={todo.id}>
            {/* Container pour la vignette de l'utilisateur  */}
            <CardUserContainer>
              <CardUserIcon className="fa-solid fa-user"></CardUserIcon>
              <CardUserLabelContainer>
                <CardUserLabel>Par</CardUserLabel>
                <CardUserLabelUsername>{todo.username}</CardUserLabelUsername>
              </CardUserLabelContainer>
            </CardUserContainer>

            {/* Label de la chose à faire */}
            <CardLabel>{todo.title}</CardLabel>
          </Card>
        ))}
      </CardContainer>

      {/* Affiche le container pour un bouton */}
      <ButtonContainer>
        <GreenButton to="/nouvelleListe">
          <ButtonIcon className="fa-solid fa-circle-plus"></ButtonIcon>
          <ButtonLabel>Nouvelle liste</ButtonLabel>
        </GreenButton>
      </ButtonContainer>

      {/* Affiche la barre de navigation du bas */}
      <BottomNav>
        <BottomNavIcon className="fa-solid fa-bars"></BottomNavIcon>
        <BottomNavIcon className="fa-solid fa-user"></BottomNavIcon>
      </BottomNav>
    </MainContainer>
  )
}
