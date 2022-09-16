export interface EventEntity {
  id?: string;
  title?: string;
  date?: Date;
  proposals?: Array<ProposalEntity>;
}

export interface ProposalEntity {
  id?: string;
  title?: string;
  description?: string;
  votes: string[];
}
