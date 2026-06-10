import { screen, fireEvent } from '@testing-library/react'
import { UsersPage } from '../UsersPage'
import Router from 'react-router-dom'
import { renderWithRouter } from '../../../tests/tests'
import '@testing-library/jest-dom'

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useSearchParams: jest.fn(),
}))

describe('Тест компонента UsersPage', () => {
    afterEach(() => {
        jest.clearAllMocks()
    })

    it('Должен вызвать setSearchParam с теми данными, которые вводятся в input', async () => {
        const set = jest.fn()

        jest
            .spyOn(Router, 'useSearchParams')
            .mockReturnValue([new URLSearchParams(), set])

        renderWithRouter(<UsersPage />)

        fireEvent.input(screen.getByTestId('NameInput'), {
            target: { value: 'alex' },
        })

        expect(set).toHaveBeenCalledWith({ searchName: 'alex' })
    })

})
