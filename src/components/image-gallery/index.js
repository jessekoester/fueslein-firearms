import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { useGallery } from '../../hooks/gallery'

export const ImageGallery = () => {
  const data = useGallery()

  const directories = data.allDirectory.edges
  const images = data.allFile.edges

  const mapImages = () => {
    return directories.map(dir => {
      return {
        name: dir.node.name,
        id: dir.node.id,
        images: images.filter(
          (image) =>
            image.node.relativeDirectory === dir.node.name
        )
      }
    }).filter(node => node.name !== 'gallery')
  }
  return mapImages().map((item) => {
    return (
      <div className="col-md-4" key={item.id}>
        <Card
          className="col-md-12"
          style={{ padding: 0, margin: 16 }}
          key={item.id}
        >
          {
            <div className="fill">
              <Card.Img
                variant="top"
                fluid={true}
                className="card-image-transform"
                src={`/content/gallery/${item.images[0]?.node?.relativeDirectory}/${item.images[0]?.node?.name}.${item.images[0]?.node?.extension}`}
              />
            </div>
          }
          <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Button
              variant="primary"
              href={`/gallery/view?gallery=${item.images[0]?.node?.relativeDirectory}`}
            >
              View Gallery
            </Button>
          </Card.Body>
        </Card>
      </div>
    )
  })
}
