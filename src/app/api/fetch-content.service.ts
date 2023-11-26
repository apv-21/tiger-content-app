import { ApolloClient, InMemoryCache, gql, useQuery } from '@apollo/client';
import { IMAGE_FRAGMENT, CATEGORY_FRAGMENT, EXPERT_FRAGMEBNT } from './fragments';

const client = new ApolloClient({
  uri: 'https://api.tigerhall.net/v2/',
  cache: new InMemoryCache(),
});


export const fetchContent = async (input : string = "") => {

  try{
    const response = await client.query({ query: gql`
    query GetContentCards($input: String!){
      contentCards(filter: {limit: 20, keywords: $input, types: [PODCAST]}){
        edges{
          ... on Podcast {
            name
            image {
              ...ImageFragment
            }
            categories { 
              ...CategoryFragment
            }
            experts {
              ...ExpertFragment
            }
          }
        }
      }
    }
    ${IMAGE_FRAGMENT}
    ${CATEGORY_FRAGMENT}
    ${EXPERT_FRAGMEBNT}
  `, variables: {input} })
  
    const responseObj = response?.data
    if(!response?.errors){
      return {...responseObj, message: "Success"}
    }
    return {...responseObj, message: "Failure"}
    
  }
  catch(err){
    console.log(err)
    return {message: 'Failure'}
  }

}
 
