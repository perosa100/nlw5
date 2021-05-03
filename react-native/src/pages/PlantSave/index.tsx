import React, { useState } from 'react'

import {
  Container,
  ControllerMenu,
  DataTimeButton,
  DataTimeButtonText,
  ImageWaterdrop,
  PlantInfo,
  TextAlertLabel,
  TextPlant,
  TextPlantAbout,
  TextTip,
  TipContainer
} from './styles'
import { SvgFromUri } from 'react-native-svg'
import { format, isBefore } from 'date-fns'

import waterdrop from '../../assets/waterdrop.png'
import Button from '../../components/Button'
import { useRoute } from '@react-navigation/core'

import DateTimePicker, { Event } from '@react-native-community/datetimepicker'
import { Alert, Platform, ScrollView, StyleSheet } from 'react-native'
import { PlantProps, savePlant } from '../../libs/storate'
import { useNavigation } from '@react-navigation/native'

interface Params {
  plant: PlantProps
}

function PlantSave() {
  const route = useRoute()
  const navigation = useNavigation()

  const { plant } = route.params as Params

  const [selectedDateTime, setSelectedDateTime] = useState(new Date())
  const [showDatePicker, setShowDatePicker] = useState(Platform.OS === 'ios')

  function handleChangeTime(event: Event, dateTime: Date | undefined) {
    if (Platform.OS === 'android') {
      setShowDatePicker((oldState) => !oldState)
    }
    //isbefore pega selecionada e fericia se não é menor
    if (dateTime && isBefore(dateTime, new Date())) {
      setSelectedDateTime(new Date())
      return Alert.alert('Escolha uma data no futuro!!!')
    }

    if (dateTime) {
      setSelectedDateTime(dateTime)
    }
  }
  async function handleSave() {
    try {
      await savePlant({
        ...plant,
        dateTimeNotification: selectedDateTime
      })

      navigation.navigate('Confirmation', {
        title: 'Tudo certo',
        subtitle:
          'Fique tranquilo que sempre vamos lembrar você de cuidar da suas plantinhas com muito cuidado',
        buttonTittle: 'Muito Obrigado :D',
        icon: 'hug',
        nextScreen: 'MyPlants'
      })
    } catch (error) {
      return Alert.alert(error)
    }
  }
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.container}
    >
      <Container>
        <PlantInfo>
          <SvgFromUri uri={plant.photo} height={150} width={150} />

          <TextPlant> {plant.name}</TextPlant>
          <TextPlantAbout>{plant.about}</TextPlantAbout>
        </PlantInfo>

        <ControllerMenu>
          <TipContainer>
            <ImageWaterdrop source={waterdrop} />
            <TextTip>{plant.water_tips}</TextTip>
          </TipContainer>
          <TextAlertLabel>
            Escolha o melhor horário para ser lembrando
          </TextAlertLabel>

          {showDatePicker && (
            <DateTimePicker
              value={selectedDateTime}
              mode="time"
              display="spinner"
              onChange={handleChangeTime}
            />
          )}

          {Platform.OS === 'android' && (
            <DataTimeButton onPress={() => setShowDatePicker(!showDatePicker)}>
              <DataTimeButtonText>
                {`Mudar ${format(selectedDateTime, 'HH:mm')}`}
              </DataTimeButtonText>
            </DataTimeButton>
          )}
          <Button title="Cadastrar Planta" onPress={handleSave} />
        </ControllerMenu>
      </Container>
    </ScrollView>
  )
}

export default PlantSave

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#F0F0F0'
  }
})
