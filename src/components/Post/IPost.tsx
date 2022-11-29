import { IGatsbyImageData } from "gatsby-plugin-image"

export default interface IPost {
  authorImage: string,
  title: string,
  postAuthor: string,
  date: string,
  html: string,
  image: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData
    }
  }
}