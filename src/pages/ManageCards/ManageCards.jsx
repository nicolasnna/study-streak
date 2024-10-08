import FlashCard from "@components/FlashCard/FlashCard"
import Header from "@components/Header"
import { Box, Typography } from "@mui/material"
import { useSelector } from "react-redux"
import CardForm from "./components/CardForm"
import JsonManager from "./components/JsonManager"

const ManageCards = () => {
  const cards = useSelector((state) => state.card)

  return (
    <Box>
      <Header
        Title={"Gestiona tus Tarjetas de Estudio"}
        SubTitle="Organiza, personaliza y mantén tu contenido actualizado."
      />
      <Box className="manage-cards__container-manager">
        <CardForm />
        <JsonManager />
      </Box>
      <Box className="manage-cards__list">
        <Typography className="manage-cards__list__text--title" variant="h2">
          Tarjetas creadas
        </Typography>
        <Box className="manage-cards__list__content">
          {cards.length === 0 && (
            <Typography variant="body1">
              Añade tarjetas para poder visualizarlas aquí.
            </Typography>
          )}
          {cards.map((c) => (
            <Box key={c.id} className="manage-cards__flashcard">
              <FlashCard cardContent={c} manageMode={true} />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  )
}

export default ManageCards
