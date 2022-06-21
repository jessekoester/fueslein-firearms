import React, { Fragment, useState, useCallback } from 'react'
import { useQueryParam, StringParam } from 'use-query-params'
import { Layout } from '../../components/layout'

import { Head } from '../../components/head'
import { HeaderBanner } from '../../components/header/header-banner'
import { useGallery } from '../../hooks/gallery'
import Gallery from 'react-photo-gallery'
import Carousel, { Modal, ModalGateway } from 'react-images'

export default function View () {
  const [gallery] = useQueryParam('gallery', StringParam)

  const [currentImage, setCurrentImage] = useState(0)
  const [viewerIsOpen, setViewerIsOpen] = useState(false)

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index)
    setViewerIsOpen(true)
  }, [])

  const closeLightbox = () => {
    setCurrentImage(0)
    setViewerIsOpen(false)
  }

  const data = useGallery()

  const directories = data.allDirectory.edges
  const images = data.allFile.edges

  const mapImages = () => {
    const dirs = directories.map(dir => {
      return {
        name: dir.node.name,
        id: dir.node.id,
        images: images.filter(
          (image) =>
            image.node.relativeDirectory === dir.node.name
        )
      }
    }).filter(node => node.name === gallery)

    return dirs.map(image => {
      return image
    })
  }

  const photos = mapImages()[0]?.images.map(image => {
    return {
      src: `/content/gallery/${image.node.relativeDirectory}/${image.node.name}.${image.node.extension}`,
      width: 3,
      height: 4
    }
  })

  return (
    <Fragment>
      <Head pageTitle="Project Gallery" />
      <Layout>
        <HeaderBanner
          bannerText={gallery}
          bannerPhoto={'services.png'}
        />
        <section id="services" className="section-1 odd offers">
          <div className="container">
            <div className="row">
              <Gallery photos={photos} onClick={openLightbox} />
              <ModalGateway>
                {viewerIsOpen
                  ? (
                  <Modal onClose={closeLightbox}>
                    <Carousel
                      currentIndex={currentImage}
                      views={photos.map(x => ({
                        ...x,
                        srcset: x.srcSet,
                        caption: x.title
                      }))}
                    />
                  </Modal>
                    )
                  : null}
              </ModalGateway>
            </div>
          </div>
        </section>
      </Layout>
    </Fragment>
  )
}
