import { spinnerContainer } from './_model';

export function showSpinner() {
    spinnerContainer.classList.remove('d-none');
}

export function hideSpinner() {
    spinnerContainer.classList.add('d-none');
}
