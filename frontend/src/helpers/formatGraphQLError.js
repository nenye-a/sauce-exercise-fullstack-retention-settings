let graphqlHeader = 'GraphQL error: ';

export default function formatGraphQLEror(message) {
  // TODO: Apply more sophisticated graphql error formatting.
  return message.replace(graphqlHeader, '');
}
