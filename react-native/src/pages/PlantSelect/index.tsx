import React, { useEffect, useState } from 'react'

import { Container, Content, ContentPlant, SubTitle, Title } from './styles'
import Header from './../../components/Header/index'
import EnviromentButton from '../../components/EnviromentButton'
import { ActivityIndicator, FlatList, View } from 'react-native'
import api from './../../services/api'
import { PlantCardPrimary } from './../../components/PlantCardPrimary'
import { Load } from '../../components/Load'
import { useNavigation } from '@react-navigation/native'
import { PlantProps } from '../../libs/storate'

export type EnvironmentsProps = {
  key: string
  title: string
}

export function PlantSelect() {
  const navigation = useNavigation()
  const [environments, setEnvironments] = useState<EnvironmentsProps[]>([])
  const [plants, setPlants] = useState<PlantProps[]>([])
  const [filteredPlants, setfilteredPlants] = useState<PlantProps[]>([])
  const [enviromentsSelected, setEnviromentsSelected] = useState('all')
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [loadingMore, setLoadingMore] = useState(false)
  const [loadedAll, setLoadedAll] = useState(false)

  useEffect(() => {
    async function fetchEnviroment() {
      const { data } = await api.get(
        'plants_environments?_sort=title&_order=asc'
      )
      setEnvironments([{ key: 'all', title: 'Todos' }, ...data])
    }
    fetchEnviroment()
  }, [])

  async function fetchPlants() {
    const { data } = await api.get(
      `plants?_sort=name&_order=asc&_page=${page}&_limit=8`
    )
    if (!data) return setLoading(true)

    if (page > 1) {
      setPlants((oldValue) => [...oldValue, ...data])
      setfilteredPlants((oldValue) => [...oldValue, ...data])
    } else {
      setPlants(data)
      setfilteredPlants(data)
    }

    setLoading(false)
    setLoadingMore(false)
  }
  useEffect(() => {
    fetchPlants()
  }, [])

  function handleEnviromentsSelected(item: string) {
    setEnviromentsSelected(item)

    if (item === 'all') {
      return setfilteredPlants(plants)
    }

    const filtered = plants.filter((plant) => plant.environments.includes(item))
    setfilteredPlants(filtered)
  }

  function handleFetchMore(distance: number) {
    if (distance < 1) {
      return
    }
    setLoadingMore(true)
    setPage((oldValue) => oldValue + 1)
    fetchPlants()
  }

  function handlePlantSelect(plant: PlantProps) {
    navigation.navigate('PlantSave', { plant })
  }
  if (loading) {
    return <Load />
  }

  return (
    <Container>
      <Content>
        <Header />
        <Title>Em qual ambiente </Title>

        <SubTitle>voê quer colocar sua planta?</SubTitle>
      </Content>

      <View>
        <FlatList
          contentContainerStyle={{
            height: 40,
            justifyContent: 'center',
            paddingBottom: 5,
            marginHorizontal: 32,
            marginLeft: 20,
            marginVertical: 20
          }}
          showsHorizontalScrollIndicator={false}
          horizontal
          keyExtractor={(item) => item.key}
          data={environments}
          renderItem={({ item }) => (
            <EnviromentButton
              key={item.key}
              title={item.title}
              active={item.key === enviromentsSelected}
              onPress={() => handleEnviromentsSelected(item.key)}
            />
          )}
        />
      </View>

      <ContentPlant>
        <FlatList
          showsVerticalScrollIndicator={false}
          numColumns={2}
          data={filteredPlants}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <PlantCardPrimary
              key={item.id}
              data={item}
              onPress={() => handlePlantSelect(item)}
            />
          )}
          onEndReachedThreshold={0.1}
          onEndReached={({ distanceFromEnd }) =>
            handleFetchMore(distanceFromEnd)
          }
          ListFooterComponent={
            loadingMore ? (
              <ActivityIndicator color="green" size="large" />
            ) : (
              <></>
            )
          }
        />
      </ContentPlant>
    </Container>
  )
}
