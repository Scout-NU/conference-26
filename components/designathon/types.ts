export type DesignathonEvent = {
  time: string;
  title: string;
  people?: string;
  description: string;
  location?: string;
};

export type Judge = {
  name: string;
  title: string;
  image?: string;
};

export type Criteria = {
  title: string;
  description: string;
  icon: string;
};

export type Prize = {
  title: string;
  image: string;
  whiteBackground?: boolean;
};
