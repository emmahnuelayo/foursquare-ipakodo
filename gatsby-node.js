const path = require(`path`);
// Create blog pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const articlePostTemplate = path.resolve(`src/templates/articleBlog.js`);
  const bulletinPostTemplate = path.resolve(`src/templates/bulletinBlog.js`);

  const result = await graphql(`
    query {
      allStrapiArticle {
        edges {
          node {
            strapiId
            slug
          }
        }
      }
      allStrapiBulletin {
        edges {
          node {
            strapiId
            slug
          }
        }
      }
    }
  `);

  //create articles pages
  result.data.allStrapiArticle.edges.forEach((edge) => {
    createPage({
      path: `/article/${edge.node.slug}`,
      component: articlePostTemplate,
      context: {
        slug: edge.node.slug,
      },
    });
  });

  //create bulletin pages
  result.data.allStrapiBulletin.edges.forEach((edge) => {
    createPage({
      path: `/bulletin/${edge.node.slug}`,
      component: bulletinPostTemplate,
      context: {
        slug: edge.node.slug,
      },
    });
  });
};

module.exports.onCreateNode = async ({ node, actions, createNodeId }) => {
  const crypto = require(`crypto`);

  if (node.internal.type === 'StrapiArticle') {
    const newNode = {
      id: createNodeId(`StrapiArticleContent-${node.id}`),
      parent: node.id,
      children: [],
      internal: {
        content: node.content || ' ',
        type: 'StrapiArticleContent',
        mediaType: 'text/markdown',
        contentDigest: crypto
          .createHash('md5')
          .update(node.content || ' ')
          .digest('hex'),
      },
    };
    actions.createNode(newNode);
    actions.createParentChildLink({
      parent: node,
      child: newNode,
    });
  }
  if (node.internal.type === 'StrapiBulletin') {
    const newNode = {
      id: createNodeId(`StrapiBulletinContent-${node.id}`),
      parent: node.id,
      children: [],
      internal: {
        content: node.content || ' ',
        type: 'StrapiBulletinContent',
        mediaType: 'text/markdown',
        contentDigest: crypto
          .createHash('md5')
          .update(node.content || ' ')
          .digest('hex'),
      },
    };
    actions.createNode(newNode);
    actions.createParentChildLink({
      parent: node,
      child: newNode,
    });
  }
};
