import React from 'react';
import AppListing from '../components/app-listing';
import JumpToApps from '../components/jump-to-apps';
import Header from '../components/header';
import { Helmet } from 'react-helmet';
import Clipboard from 'clipboard';

export default class IndexPage extends React.Component {
  componentDidMount() {
    const clipboard = new Clipboard('.copyToClipboard');

    clipboard.on('success', function() {
      // TODO: Show a success message
    });
  }

  render() {
    const { data: { site, apps: { edges: appEdges }, appIcons: { edges: iconEdges }} } = this.props;
    const apps = appEdges.map(({ node: app }) => {
      const { identifier } = app.info;
      const iconEdge = iconEdges.find(({ node }) => {
        return node.id.indexOf(identifier) > 0;
      });

      const iconResolutions = iconEdge ? iconEdge.node.resolutions : '';

      return {
        app,
        iconResolutions
      }
    });

    const { siteMetadata: { title, description, url, tagLine }} = site;
    const fullTitle = `${title} - ${tagLine}`;

    return (
      <div>
        <Helmet>
          <title>{fullTitle}</title>
          <meta name='description' content={description} />

          <meta property='og:title' content={fullTitle} />
          <meta property='og:description' content={description} />
          <meta property='og:image' content={`${url}/meta-image.jpg`} />
          <meta property='og:url' content={url} />
          <meta name='twitter:card' content='summary_large_image' />
          <meta name='twitter:site' content='@pietropizzi' />

          <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
          <link rel='icon' type='image/png' sizes='96x96' href='/favicon-96x96.png' />
          <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
        </Helmet>
        <Header metaData={site.siteMetadata} />
        <JumpToApps apps={apps} />
        {
          apps.map(({ app, iconResolutions }) =>
            <AppListing key={app.info.identifier} app={app} iconResolutions={iconResolutions} />
          )
        }
      </div>
    )
  }
}
