 import './Layout.css';

 import { GlobalStyles } from '@monorepo/theme';
 import { React } from '@monorepo/ui-components';
 import { graphql,useStaticQuery } from 'gatsby';
 import PropTypes from 'prop-types';

 import { Footer, Header } from '../';

 const Layout = ({ children }) => {
   const data = useStaticQuery(graphql`
     query SiteTitleQuery {
       site {
         siteMetadata {
           title
         }
       }
     }
   `);

   return (
     <>
       <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
       <GlobalStyles />
       <main>{children}</main>
       <Footer></Footer>
     </>
   );
 };

 Layout.propTypes = {
   children: PropTypes.node.isRequired,
 };

 export default Layout;
