import { MainPage } from "../MainPage"
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

describe('Snapshot testing', () => {
    test('Snapshot testing of MainPage', () => {
        const { container } = renderComponent();

        expect(container).toMatchSnapshot()
    })
})

const renderComponent = () => {
    return render(
        <MainPage />
    )
}