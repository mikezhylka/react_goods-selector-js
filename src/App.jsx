import 'bulma/css/bulma.css';
import cn from 'classnames';
import { useState } from 'react';
import './App.scss';

export const goods = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

export const App = () => {
  const [selectedGood, setGood] = useState('Jam');

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {selectedGood === ''
          ? 'No goods selected'
          : `${selectedGood} is selected`}

        {selectedGood !== '' && (
          <button
            onClick={() => {
              setGood('');
            }}
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr
              className={cn({
                'has-background-success-light': selectedGood === good,
              })}
              data-cy="Good"
              key={goods.indexOf(good)}
            >
              <td>
                <button
                  data-cy={selectedGood === good ? 'RemoveButton' : 'AddButton'}
                  type="button"
                  className={
                    selectedGood === good ? 'button is-info' : 'button'
                  }
                  onClick={() => {
                    setGood(good);

                    if (selectedGood === good) {
                      setGood('');
                    }
                  }}
                >
                  {selectedGood === good ? '-' : '+'}
                </button>
              </td>
              <td className="is-vcentered">{good}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};
