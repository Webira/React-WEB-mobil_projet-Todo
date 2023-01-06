//-- import { Link } from 'react-router-dom'
import { useStore } from '@nanostores/react'
import { Link, Navigate } from 'react-router-dom'
import { LoginStore, registerOnFirebase, setEmail, setPassword,
} from '../stores/Login'

import {
  ButtonContainer,
  CenteredContainer,
  InputContainer,
  InputIcon,
  SendButton,
  TextContainer,
  TextInput,
  Title,
} from '../style/Registration'

/**
 * Composant affichant et traitant la page d'inscription
 */
export default function Registration() {
  // Récupération de l'état du store de connexion qui est aussi utilisé
  // pour l'inscription
  const state = useStore(LoginStore)

  // Si je suis connécté, si un utilisateur est présent dans mon état
  // alors dans ce as je redirige l'utilisateur sur la page d'accueil
  if (state.user) {
    return <Navigate to="/" />
  }


  return (
    <CenteredContainer>
      {/* Titre de la page */}
      <Title>Inscription</Title>

      {/* Le container d'un input */}
      <InputContainer>
       {/*--<TextInput type="text" placeholder="Email ..."></TextInput> */}
       <TextInput
          type="text"
          placeholder="Email ..."
          value={state.email}
          onChange={e => setEmail(e.currentTarget.value)}
        ></TextInput>

        <InputIcon className="fa-solid fa-circle-check" />
      </InputContainer>

      {/* Le second container pour le mot de passe */}
      <InputContainer>
        {/*-- <TextInput type="password" placeholder="Mot de passe ..."></TextInput> */}
        <TextInput
          type="password"
          placeholder="Mot de passe ..."
          value={state.password}
          onChange={e => setPassword(e.currentTarget.value)}
        ></TextInput>

        <InputIcon className="fa-solid fa-circle-check" />
      </InputContainer>

      {/* Container pour le bouton d'envoi */}
      <ButtonContainer>
        <SendButton onClick={registerOnFirebase}>Envoyer</SendButton>
      </ButtonContainer>

      {/* Contient le texte */}
      <TextContainer>
        Vous avez dèja un compte ?
        <br />
        {/* --<Link to="/connexion">Connéctez-vous</Link> */}
        <Link to="/">Connéctez-vous</Link>

      </TextContainer>
    </CenteredContainer>
  )
}
