import {
  Container,
  Plants,
  PlantsTitleText,
  SpotLight,
  SpotLightImage,
  SpotLightText
} from './styles'
import Header from '../../components/Header'
import waterdrop from '../../assets/waterdrop.png'
import React, { useEffect, useState } from 'react'
import { Alert, FlatList } from 'react-native'
import {
  loadPlant,
  PlantProps,
  removePlant,
  StoragePlantProps
} from './../../libs/storate'
import { formatDistance } from 'date-fns'
import { id, pt } from 'date-fns/locale'
import { PlantCardSecondary } from '../../components/PlantCardSecondary'
import { Load } from '../../components/Load'
import AsyncStorage from '@react-native-async-storage/async-storage'
function MyPlants() {
  const [myPlants, setMyPlants] = useState<PlantProps[]>([])
  const [loading, setLoading] = useState(true)
  const [nextWaterd, setNextWaterd] = useState<string>()

  useEffect(() => {
    async function loadStorageData() {
      const plantsStorage = await loadPlant()
      const nextTime = formatDistance(
        new Date(plantsStorage[0].dateTimeNotification).getTime(),
        new Date().getTime(),
        { locale: pt }
      )

      setNextWaterd(
        `Não esqueça de regar a ${plantsStorage[0].name} à ${nextTime} horas).`
      )
      setMyPlants(plantsStorage)
      setLoading(false)
    }

    loadStorageData()
  }, [])

  function handleRemove(plant: PlantProps) {
    Alert.alert('Remover', `Deseja removar a ${plant.name}?`, [
      {
        text: 'Não',
        style: 'cancel'
      },
      {
        text: ' Sim',
        onPress: async () => {
          try {
            await removePlant(plant.id)
            setMyPlants((oldData) =>
              oldData.filter((item) => item.id !== plant.id)
            )
          } catch (error) {
            Alert.alert('Não foi possivel Remover')
          }
        }
      }
    ])
  }

  if (loading) {
    return <Load />
  }
  return (
    <Container>
      <Header />

      <SpotLight>
        <SpotLightImage source={waterdrop} />

        <SpotLightText>{nextWaterd}</SpotLightText>
      </SpotLight>

      <Plants>
        <PlantsTitleText>Próximas regadas</PlantsTitleText>

        <FlatList
          data={myPlants}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <PlantCardSecondary
              data={item}
              handleRemove={() => handleRemove(item)}
            />
          )}
        />
      </Plants>
    </Container>
  )
}

export default MyPlants
