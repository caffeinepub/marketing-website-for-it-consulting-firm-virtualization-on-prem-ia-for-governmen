import { useMutation } from '@tanstack/react-query';
import { useActor } from './useActor';

interface ContactInquiryData {
  name: string;
  organization: string;
  email: string;
  message: string;
}

export function useSubmitContactInquiry() {
  const { actor } = useActor();

  return useMutation({
    mutationFn: async (data: ContactInquiryData) => {
      if (!actor) throw new Error('Actor not available');
      return actor.submitContactInquiry(
        data.name,
        data.organization,
        data.email,
        data.message
      );
    },
  });
}
