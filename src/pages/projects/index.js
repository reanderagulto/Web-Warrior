import { graphql, Link } from 'gatsby';
import React from 'react'
import Layout from '../../components/Layout'
import { portfolio, project } from '../../styles/projects.module.css';

export default function Projects({ data }) {

  const projects = data.projects.nodes
  const contact = data.contact.siteMetadata.contact

  return (
    <Layout>
      <div className={portfolio}>
          <h2>Portfolio</h2>
          <h3>Projects & website I've created</h3>
          <div className={project}>
            {projects.map(project => (
              <Link to={"/projects/" + project.frontmatter.slug} key={project.id}>
                <div>
                  <h3>{project.frontmatter.title}</h3>
                  <p>{project.frontmatter.stack}</p>
                </div>
              </Link>
            ))}
          </div>
          <p>Like what you see? Email me at <a href="mailto: {contact}">{contact}</a> for a quote!</p>
      </div>
    </Layout>
  )
}

// Export Page Query
export const query = graphql`
query Projects {
  projects: allMarkdownRemark(sort: {frontmatter: {date: ASC}}) {
    nodes {
      frontmatter {
        title
        stack
        slug
      }
      id
    }
  }
  contact: site{
    siteMetadata{
      contact
    }
  }
}`;
