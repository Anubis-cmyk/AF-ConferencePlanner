import CreateWorkShop from "../createWorkShop";
import {getByTestId, render} from '@testing-library/react'
import '@testing-library/jest-dom';

let container = null;

describe('Testing Create WorkSHop that contain a form ', () => {
    beforeEach (() => {
        container = render(<CreateWorkShop/>).container;
    })
    it('Should render form tag', () => {
        expect(getByTestId(container, 'form-tag')).toBeTruthy();
    })
});