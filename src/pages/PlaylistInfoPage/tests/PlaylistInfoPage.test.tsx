import { screen } from '@testing-library/react'
import { PlaylistInfoPage } from '../PlaylistInfoPage'
import Router from 'react-router-dom'
import { PLAYLISTS } from '../../../data'
import { renderWithRouter } from '../../../tests/tests'
import '@testing-library/jest-dom'

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: jest.fn(),
}))

describe('Тест компонента PlaylistInfoPage', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('Должен отобразить соответствующий текст при несуществующем playlistId', () => {
    jest.spyOn(Router, 'useParams').mockReturnValue({ playlistId: '19005' })
    renderWithRouter(<PlaylistInfoPage />)

    expect(screen.getByText('Плэйлиста с таким Id нет')).toBeInTheDocument()
  })

  it('Должен отобразить данные о playlist при передаче существующего playlistId', () => {
    const playlist = PLAYLISTS[0]

    jest.spyOn(Router, 'useParams').mockReturnValue({ playlistId: '0' })
    const { container } = renderWithRouter(<PlaylistInfoPage />)

    expect(screen.getByText(`Жанр: ${playlist.genre}`)).toBeInTheDocument()
    expect(screen.getByText(`Название: ${playlist.name}`)).toBeInTheDocument()

    expect(container.getElementsByClassName('song').length).toBe(
      playlist.songs.length
  )})
})
