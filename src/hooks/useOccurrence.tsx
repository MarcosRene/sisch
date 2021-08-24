import { useState, useEffect } from 'react';

import { database } from '../services/firebase';

import { Occurrences } from '../types';

type Occurrence = Omit<Occurrences, 'id'>;

export function useOccurrence(occurrenceId: string) {
  const [occurrence, setOccurrence] = useState<Occurrence>();

  useEffect(() => {
    function getOccurrenceDetails() {
      const occurrencesRef = database.ref(`occurrences/${occurrenceId}`);

      occurrencesRef.once('value', (occurrence) => {
        if (occurrence.exists()) {
          const databaseOccurrence = occurrence.val();

          console.log(`databaseOccurrence`, databaseOccurrence);

          setOccurrence(databaseOccurrence);
        }
      });

      return () => {
        occurrencesRef.off('value');
      };
    }

    getOccurrenceDetails();
  }, [occurrenceId]);

  return { occurrence };
}
