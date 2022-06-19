import { useStaticQuery, graphql } from 'gatsby'

export const useGallery = () => {
  const data = useStaticQuery(graphql`
    {
      allDirectory {
        edges {
          node {
            name
            dir
            relativeDirectory
            id
          }
        }
      }
      allFile {
        edges {
          node {
            name
            dir
            relativeDirectory
            extension
          }
        }
      }
    }
  `)

  return data
}
