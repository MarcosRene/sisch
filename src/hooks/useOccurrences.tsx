import { useState, useEffect } from 'react';

import { database } from '../services/firebase';

import { Occurrences, OccurrencesData } from '../types';

export function useOccurrences() {
  const [occurrences, setOccurrences] = useState<Occurrences[]>([]);

  useEffect(() => {
    function getOccurrences() {
      const occurrencesRef = database.ref('occurrences');

      occurrencesRef.once('value', (occurrences) => {
        const databaseOccurrence = occurrences.val();

        const firebaseOccurrences: OccurrencesData = databaseOccurrence ?? {};

        const parsedOccurrences = Object.entries(firebaseOccurrences).map(
          ([key, value]) => {
            return {
              id: key,
              occurrence: value.occurrence,
              user: value.user,
            };
          }
        );

        setOccurrences(parsedOccurrences);
      });

      return () => {
        occurrencesRef.off('value');
      };
    }

    getOccurrences();
  }, []);

  return { occurrences };
}
