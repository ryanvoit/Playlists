import { screen } from '@testing-library/react'
import { UserInfoPage } from '../UserInfoPage'
import Router from 'react-router-dom'
import { USERS } from '../../../data'
import { renderWithRouter } from '../../../tests/tests'
import '@testing-library/jest-dom'

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useParams: jest.fn(),
}))

describe('Тест компонента UserInfoPage', () => {
    afterEach(() => {
        jest.clearAllMocks()
    })

    it('Должен отобразить соответствующий текст при несуществующем UserId', () => {
        jest.spyOn(Router, 'useParams').mockReturnValue({ userId: '145' })
        renderWithRouter(<UserInfoPage />)

        expect(screen.getByText('Пользователя с таким userId нет')).toBeInTheDocument()
    })

    it('Должен отобразить данные о User при передаче существующего userId', () => {
        const user = USERS[0]

        jest.spyOn(Router, 'useParams').mockReturnValue({ userId: '0' })
        renderWithRouter(<UserInfoPage />)

        expect(screen.getByText(user.email)).toBeInTheDocument()
        expect(screen.getByText(user.fullName)).toBeInTheDocument()

        expect(screen.getByRole('link').textContent).toBe(user.playlist?.name)
        expect(screen.getByRole('link').getAttribute('href')).toBe(
            `/playlists/${user.playlist?.id}`
        )
    })
})