import { gql } from "@apollo/client";

export const IMAGE_FRAGMENT = gql`
  fragment ImageFragment on Image {
    uri
  }
`;

export const CATEGORY_FRAGMENT = gql`
  fragment CategoryFragment on Category {
    name
  }
`;

export const EXPERT_FRAGMEBNT =  gql`
  fragment ExpertFragment on Expert {
    firstName,
    lastName,
    title,
    company
  }
`