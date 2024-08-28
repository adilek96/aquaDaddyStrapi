import type { Schema, Attribute } from '@strapi/strapi';

export interface SaltwaterMollusca extends Schema.Component {
  collectionName: 'components_saltwater_molluscas';
  info: {
    displayName: 'Mollusca';
  };
  attributes: {};
}

export interface SaltwaterFish extends Schema.Component {
  collectionName: 'components_saltwater_fish';
  info: {
    displayName: 'Fish';
  };
  attributes: {};
}

export interface SaltwaterEchinoderm extends Schema.Component {
  collectionName: 'components_saltwater_echinoderms';
  info: {
    displayName: 'Echinoderm';
  };
  attributes: {};
}

export interface SaltwaterCrustaceans extends Schema.Component {
  collectionName: 'components_saltwater_crustaceans';
  info: {
    displayName: 'Crustaceans';
  };
  attributes: {};
}

export interface SaltwaterCorals extends Schema.Component {
  collectionName: 'components_saltwater_corals';
  info: {
    displayName: 'Corals';
  };
  attributes: {};
}

export interface FreshwaterPlants extends Schema.Component {
  collectionName: 'components_freshwater_plants';
  info: {
    displayName: 'Plants';
  };
  attributes: {};
}

export interface FreshwaterMollusca extends Schema.Component {
  collectionName: 'components_freshwater_molluscas';
  info: {
    displayName: 'Mollusca';
  };
  attributes: {};
}

export interface FreshwaterFreshwater extends Schema.Component {
  collectionName: 'components_freshwater_freshwaters';
  info: {
    displayName: 'Freshwater';
  };
  attributes: {
    Fish: Attribute.Component<'freshwater.fish'>;
    Plants: Attribute.Component<'freshwater.plants'>;
    Crustaceans: Attribute.Component<'freshwater.crustaceans'>;
    Mollusca: Attribute.Component<'freshwater.mollusca'>;
  };
}

export interface FreshwaterFish extends Schema.Component {
  collectionName: 'components_freshwater_fish';
  info: {
    displayName: 'Fish';
    description: '';
  };
  attributes: {
    freshwater_fish: Attribute.Relation<
      'freshwater.fish',
      'oneToOne',
      'api::freshwater-fish.freshwater-fish'
    >;
  };
}

export interface FreshwaterCrustaceans extends Schema.Component {
  collectionName: 'components_freshwater_crustaceans';
  info: {
    displayName: 'Crustaceans';
  };
  attributes: {};
}

export interface FishSaltwater extends Schema.Component {
  collectionName: 'components_fish_saltwaters';
  info: {
    displayName: 'Saltwater';
    description: '';
  };
  attributes: {
    Fish: Attribute.Component<'saltwater.fish'>;
    Corals: Attribute.Component<'saltwater.corals'>;
    Crustaceans: Attribute.Component<'saltwater.crustaceans'>;
    Mollusca: Attribute.Component<'saltwater.mollusca'>;
    Echinoderm: Attribute.Component<'saltwater.echinoderm'>;
  };
}

export interface FishFreshwater extends Schema.Component {
  collectionName: 'components_fish_freshwater_s';
  info: {
    displayName: 'Freshwater ';
    description: '';
  };
  attributes: {};
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'saltwater.mollusca': SaltwaterMollusca;
      'saltwater.fish': SaltwaterFish;
      'saltwater.echinoderm': SaltwaterEchinoderm;
      'saltwater.crustaceans': SaltwaterCrustaceans;
      'saltwater.corals': SaltwaterCorals;
      'freshwater.plants': FreshwaterPlants;
      'freshwater.mollusca': FreshwaterMollusca;
      'freshwater.freshwater': FreshwaterFreshwater;
      'freshwater.fish': FreshwaterFish;
      'freshwater.crustaceans': FreshwaterCrustaceans;
      'fish.saltwater': FishSaltwater;
      'fish.freshwater': FishFreshwater;
    }
  }
}
