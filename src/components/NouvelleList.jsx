import { useStore } from '@nanostores/react'
import { useNavigate } from 'react-router-dom'
import { LoginStore } from '../stores/Login'
import { NewListStore, setNewListTitle } from '../stores/NouvelleList'
import {
  BottomNav,
  BottomNavIcon,
  ButtonContainer,
  ButtonIcon,
  ButtonLabel,
  CardUserContainer,
  CardUserIcon,
  CardUserLabel,
  CardUserLabelContainer,
  CardUserLabelUsername,
  GreenButton,
  MainContainer,
} from '../style/Home'
import {
  CardContainer,
  CenteredContainer,
  Header,
  HeaderBackContainer,
  HeaderTitle,
} from '../style/NouvelleList'
import { InputContainer, TextInput } from '../style/Registration'
import { addTodoList } from '../stores/Home'

/**
 * Écran contenant la page de nouvelle liste
 */
export default function NewList() {
  
  // On récupére l'utilisateur connécté
  const user = useStore(LoginStore).user
  // On récupére le newListTitle contenue dans le store
  // du composant NewList
  const { newListTitle } = useStore(NewListStore)
  // On utilise la fonction navigate de react router
  const navigate = useNavigate()

  return (
    <MainContainer>
      <Header>
        <HeaderBackContainer to="/">
          <i className="fa-solid fa-circle-chevron-left"></i>
        </HeaderBackContainer>
        <HeaderTitle>Nouvelle liste</HeaderTitle>
      </Header>

      <CardContainer>
        <CardUserContainer>
          <CardUserIcon className="fa-solid fa-user"></CardUserIcon>
          <CardUserLabelContainer>
            <CardUserLabel>Par</CardUserLabel>
            <CardUserLabelUsername>{user.email}</CardUserLabelUsername>
          </CardUserLabelContainer>
        </CardUserContainer>
      </CardContainer>

      <CenteredContainer>
        <InputContainer>
          <TextInput
            type="text"
            placeholder="Nom de la liste ..."
            value={newListTitle}
            onChange={e => setNewListTitle(e.currentTarget.value)}
          />
        </InputContainer>

        <ButtonContainer>
          <GreenButton
            onClick={e => {
              e.preventDefault()
              addTodoList(newListTitle, user)
              navigate('/')
            }}
          >
            <ButtonIcon className="fa-solid fa-paper-plane"></ButtonIcon>
            <ButtonLabel>Créer</ButtonLabel>
          </GreenButton>
        </ButtonContainer>
      </CenteredContainer>

      {/* Affiche la barre de navigation du bas */}
      <BottomNav>
        <BottomNavIcon className="fa-solid fa-bars"></BottomNavIcon>
        <BottomNavIcon className="fa-solid fa-user"></BottomNavIcon>
      </BottomNav>
    </MainContainer>
  )
}