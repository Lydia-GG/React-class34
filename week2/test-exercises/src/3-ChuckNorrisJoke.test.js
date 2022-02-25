import { render, screen, waitFor } from '@testing-library/react';
import fetchMock from 'jest-fetch-mock';
import ChuckNorrisJoke from './3-ChuckNorrisJoke';

/**
 * ChuckNorrisJoke is a component that fetches a joke from an api and displays it on the screen.
 * It is a simple component that we can use to practice API testing! Let's look at how the user sees the component:
 *
 * - When starting, the user should see a Loading... text
 * - Once the joke has been fetched it should be shown on the screen
 * - If there is an error, an error message needs to be showen to the user
 *
 * You don't want your component to really connect to the API when unit testing so you will want to mock that.
 * To make this easier, a package called `jest-fetch-mock` can be useful, you will have to set that up yourself.
 * Have a look at: https://github.com/jefflau/jest-fetch-mock
 */

beforeEach(() => fetchMock.resetMocks());
const joke = "Chuck Norris's log statements are always at the FATAL level.";
const testSuccessfullResponse = JSON.stringify({
  type: 'success',
  value: {
    id: 538,
    joke,
    categories: ['nerdy'],
  },
});

describe('ChuckNorrisJoke', () => {
  it('should show the Loading text when the component is still loading', async () => {
    fetch.mockResponseOnce(testSuccessfullResponse);
    render(<ChuckNorrisJoke />);

    expect(screen.getByText('Loading...')).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText(joke)).toBeInTheDocument();
    });
  });

  test('Should show the joke the fetch returns', async () => {
    fetch.mockResponseOnce(testSuccessfullResponse);
    render(<ChuckNorrisJoke />);
    await waitFor(() => {
      expect(screen.getByText(joke)).toBeInTheDocument();
    });
  });

  it('should show an error message if the fetch fails', async () => {
    fetch.mockReject();

    render(<ChuckNorrisJoke />);
    await waitFor(() => {
      expect(
        screen.getByText(
          'Something went wrong with grabbing your joke. Please try again later.'
        )
      ).toBeInTheDocument();
    });
  });
});
