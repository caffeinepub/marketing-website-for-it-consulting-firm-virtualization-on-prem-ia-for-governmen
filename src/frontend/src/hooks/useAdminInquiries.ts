import { useQuery } from '@tanstack/react-query';
import { useActor } from './useActor';
import type { ContactInquiry } from '../backend';

export function useGetAllContactInquiries() {
  const { actor, isFetching: actorFetching } = useActor();

  return useQuery<ContactInquiry[]>({
    queryKey: ['contactInquiries'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllContactInquiries();
    },
    enabled: !!actor && !actorFetching,
  });
}

export function useGetContactInquiry(id: bigint) {
  const { actor, isFetching: actorFetching } = useActor();

  return useQuery<ContactInquiry>({
    queryKey: ['contactInquiry', id.toString()],
    queryFn: async () => {
      if (!actor) throw new Error('Actor not available');
      return actor.getContactInquiry(id);
    },
    enabled: !!actor && !actorFetching && !!id,
  });
}
