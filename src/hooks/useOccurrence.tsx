import { useState, useEffect } from 'react';

import { database } from '../services/firebase';

import { Occurrences } from '../types';

export function useOccurrence(occurrenceId: string) {
  const [occurrence, setOccurrence] = useState<Occurrences>();

  useEffect(() => {
    function getOccurrenceDetails() {
      const occurrencesRef = database.ref(`occurrences/${occurrenceId}`);

      occurrencesRef.once('value', (occurrence) => {
        if (occurrence.exists()) {
          const databaseOccurrence = occurrence.val();

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
