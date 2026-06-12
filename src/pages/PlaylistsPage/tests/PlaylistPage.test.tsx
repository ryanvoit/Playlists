import { screen, fireEvent } from '@testing-library/react'
import Router from 'react-router-dom'
import { renderWithRouter } from '../../../tests/tests'
import '@testing-library/jest-dom'
import { PlaylistsPage } from '../PlaylistsPage'

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useSearchParams: jest.fn(),
}))

describe('Тест компонента PlaylistPage', () => {
    afterEach(() => {
        jest.clearAllMocks()
    })

    it('Должен вызвать setSearchParam с теми данными, которые вводятся в input', async () => {
        const set = jest.fn()

        jest
            .spyOn(Router, 'useSearchParams')
            .mockReturnValue([new URLSearchParams(), set])

        renderWithRouter(<PlaylistsPage />)

        fireEvent.input(screen.getByTestId('Playlist'), {
            target: { value: 'me' },
        })

        expect(set).toHaveBeenCalledWith({ 
            searchGenre: '',
            searchName: 'me'
        })

        fireEvent.input(screen.getByTestId('Genre'), {
            target: { value: 'me' },
        })

        expect(set).toHaveBeenCalledWith({ 
            searchGenre: 'me',
            searchName: ''
        })
    })

})