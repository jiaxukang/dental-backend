import type { Schema, Attribute } from '@strapi/strapi';

export interface OrderedItemOrderedItem extends Schema.Component {
  collectionName: 'components_ordered_item_ordered_items';
  info: {
    displayName: 'OrderedItem';
    description: '';
  };
  attributes: {
    quantity: Attribute.Integer;
    amount: Attribute.Decimal;
    product: Attribute.Relation<
      'ordered-item.ordered-item',
      'oneToOne',
      'api::product.product'
    >;
    size: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'ordered-item.ordered-item': OrderedItemOrderedItem;
    }
  }
}
