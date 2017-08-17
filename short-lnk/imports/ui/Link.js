import React from 'react';

import LinksList from './LinksList';
import PrivateHeader from './PrivateHeader';
import AddLink from './AddLink';
import LinksListFilters from './LinksListFilters'

//Stateless functional component
export default () => {
  return(
    <div>
      <PrivateHeader header="Your Links"/>
      <LinksListFilters/>
      <LinksList/>
      <AddLink/>
    </div>
  )
}


//Es6 React Component
// export default class Link extends React.Component {

//     render() {
//       return (
//         <div>
//           <PrivateHeader header='Links Page'/>
//           <LinksList/>
//           <AddLink/>
//         </div>

//     );
//   }
// }
